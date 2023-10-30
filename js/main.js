import Cookie from "js-cookie";
import { URL, WS_READY_STATE } from "./constants";
import { addMessageToUI } from "./view";

let socket;

export async function sendRequest(url, method, body, headers) {
    const options = {
        method: method,
        headers: headers,
    }

    try {
        const isNotEmptyBody = Object.keys(body).length;
        if (isNotEmptyBody) {
            options.body = JSON.stringify(body);
        }
    } catch (error) {
        console.log(error);
    }

    return await fetch(url, options);
}

export function updateName(name) {
    const token = Cookie.get('token');

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };

    return sendRequest(URL.API.USER, 'PATCH', {name: name}, headers);
}

export function sendEmail(email) {
    const headers = {
        'Content-Type': 'application/json'
    }

    return sendRequest(URL.API.USER, 'POST', {email: email}, headers);
}

export function getPersonalInfo() {
    const token = Cookie.get('token');

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };

    return sendRequest(URL.API.USER_ME, 'GET', {}, headers);
}

export function getMessageHistory(token) {
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };

    return sendRequest(URL.API.MESSAGES, 'GET', {}, headers);
}

export function handleRecevingMessages() {
    socket.onmessage = function(event) {
        try {
            const data = JSON.parse(event.data);
            const dateNow = new Date(data.createdAt);
        
            const email = localStorage.getItem('email');
            if (data.user.email === email) {
                addMessageToUI(data.user.name, data.text, dateNow, true, true);
            } else {
                addMessageToUI(data.user.name, data.text, dateNow, false, true);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export function openWebsocket() {
    try {
        const token = Cookie.get('token');
        const isSocketOpen = socket?.readyState === WS_READY_STATE.OPEN;
        const isSocketClose = (socket?.readyState === WS_READY_STATE.CLOSED) || !socket;

        if (isSocketOpen) {
            socket.close();
            socket = new WebSocket(URL.WEB_SOCKET + token);
            handleRecevingMessages();
        } else if (isSocketClose) {
            socket = new WebSocket(URL.WEB_SOCKET + token);
            handleRecevingMessages();
        }
    } catch (error) {
        console.log(error);
    }
}

export function sendMessage(message) {
    try {
        if (socket?.readyState === 1) {
            socket.send(JSON.stringify({
                text: `${message}`,
            }));
        }
    } catch (error) {
        console.log(error);
    }
}