import Cookie from 'js-cookie'
import { HTTP, UI_ELEMENTS } from "./constants";
import { getPersonalInfo, updateName, getMessageHistory, openWebsocket, sendMessage, sendEmail } from './main';

document.addEventListener('DOMContentLoaded', async () => {
    localStorage.setItem('numberUploadedMessages', 0);

    const token = Cookie.get('token');

    if (token) {
        const response = await getMessageHistory(token);
        const data = await response.json();
        try {
            localStorage.setItem('messages', JSON.stringify(data));
        } catch (error) {
            console.log(error);
        }

        uploadMessageHistory();
        openWebsocket();
    } else {
        UI_ELEMENTS.MODAL_WINDOW.AUTHORIZATION.classList.add('open');
        UI_ELEMENTS.BACKGROUND_MODAL_WINDOW.style.display = 'block';
    }
})

UI_ELEMENTS.MESSAGE_LIST.addEventListener('scroll', (event) => {
    const containerHeight = event.currentTarget.clientHeight;
    const scrollHeight = event.currentTarget.scrollHeight;
    const scrollTop = event.currentTarget.scrollTop;

    const isTopOfScroll = containerHeight + Math.abs(scrollTop) + 1 >= scrollHeight;
    if (isTopOfScroll) {
        uploadMessageHistory();
    }
})

UI_ELEMENTS.BUTTON.SETTINGS.addEventListener('click', async () => {
    UI_ELEMENTS.MODAL_WINDOW.SETTINGS.classList.add('open');
    UI_ELEMENTS.BACKGROUND_MODAL_WINDOW.style.display = 'block';

    UI_ELEMENTS.FORM.SETTINGS.firstElementChild.value = localStorage.getItem('name');
})

UI_ELEMENTS.FORM.INPUT_MESSAGE.addEventListener('submit', (event) => {
    event.preventDefault();

    const message = event.target.firstElementChild.value;
    event.target.firstElementChild.value = '';
    
    if (!message) {
        alert('Нелья отправить пустое сообщение!');
        return;
    }

    sendMessage(message);
})


UI_ELEMENTS.FORM.SETTINGS.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = event.target.firstElementChild.value;

    const response = await updateName(name);
    if (response.status === HTTP.STATUS.BAD_REQUEST) {
        alert('Имя слишком короткое! Минимум два символа!');
        return;
    }
    // const data = await response.json();
    // console.log(data);
    localStorage.setItem('name', name);
    alert('Имя успешно изменино!');
})

UI_ELEMENTS.FORM.AUTHORIZATION.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = event.target.firstElementChild.value;
    
    const response = await sendEmail(email);

    if (response.status === HTTP.STATUS.BAD_REQUEST) {
        alert('Введен некорректный адрес эл. почты!');
        return;
    }

    alert('На почту отправлен код подтверждения!');

    UI_ELEMENTS.MODAL_WINDOW.AUTHORIZATION.classList.remove('open');
    UI_ELEMENTS.MODAL_WINDOW.ACCEPT.classList.add('open');
})

UI_ELEMENTS.FORM.ACCEPT.addEventListener('submit', async (event) => {
    event.preventDefault();
    const token = event.target.firstElementChild.value;

    const response = await getMessageHistory(token);
    if (response.status === HTTP.STATUS.UNAUTHORIZED) {
        alert('Неверный код подтверждения!');
        return;
    }

    const data = await response.json();
    try {
        localStorage.setItem('messages', JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
    
    Cookie.set('token', token);
    
    const personalInfoResponse = await getPersonalInfo();
    const personalInfo = await personalInfoResponse.json();
    
    localStorage.setItem('email', personalInfo.email);
    localStorage.setItem('name', personalInfo.name);
    
    uploadMessageHistory();
    openWebsocket();

    UI_ELEMENTS.MODAL_WINDOW.ACCEPT.classList.remove('open');
    UI_ELEMENTS.BACKGROUND_MODAL_WINDOW.style.display = 'none';
    event.target.firstElementChild.value = '';
})

export function addMessageToUI(name, message, date, isPersonalMessage, isSendingLive) {
    const hoursNow = date.getHours();
    const minutesNow = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(); //
    
    const messageType = isPersonalMessage ? 'dialog__personal_message' : 'dialog__someone_message';

    let li = document.createElement('li');
    li.append(UI_ELEMENTS.TEMPLATE.content.cloneNode(true));
    li.firstElementChild.textContent = `${name}: ${message}`;
    li.lastElementChild.textContent = `${hoursNow}:${minutesNow}`;
    li.classList.add('dialog__message', 'dialog__message-box', messageType);

    if (isSendingLive) {
        UI_ELEMENTS.MESSAGE_LIST.prepend(li);
    } else {
        UI_ELEMENTS.MESSAGE_LIST.append(li);
    }
}

async function uploadMessageHistory() {
    const firstIndex = localStorage.getItem('numberUploadedMessages');
    //  
    localStorage.setItem('numberUploadedMessages', Number(localStorage.getItem('numberUploadedMessages')) + 19);
    const lastIndex = localStorage.getItem('numberUploadedMessages');

    try {
        const data = JSON.parse(localStorage.getItem('messages'));

        data.messages.forEach((item, index) => {
            let isValidIndex = (index >= firstIndex) && (index < lastIndex);
    
            if (isValidIndex) {
                const dateNow = new Date(item.createdAt);
                const email = localStorage.getItem('email');
                if (item.user.email === email) {
                    addMessageToUI(item.user.name, item.text, dateNow, true, false);
                } else {
                    addMessageToUI(item.user.name, item.text, dateNow, false, false);
                }
            } else {
                return;
            }
        })
    } catch(error) {
        console.log(error);
    }
}

UI_ELEMENTS.BUTTON.ACCEPT_CLOSE.addEventListener('click', () => {
    UI_ELEMENTS.MODAL_WINDOW.ACCEPT.classList.remove('open');
    UI_ELEMENTS.MODAL_WINDOW.AUTHORIZATION.classList.add('open');
})

UI_ELEMENTS.BUTTON.SETTINGS_CLOSE.addEventListener('click', () => {
    UI_ELEMENTS.MODAL_WINDOW.SETTINGS.classList.remove('open');
    UI_ELEMENTS.BACKGROUND_MODAL_WINDOW.style.display = 'none';
})

UI_ELEMENTS.BUTTON.AUTHORIZATION_TOKEN_BTN.addEventListener('click', () => {
    UI_ELEMENTS.MODAL_WINDOW.AUTHORIZATION.classList.remove('open');
    UI_ELEMENTS.MODAL_WINDOW.ACCEPT.classList.add('open');
})

const exitHandler = () => {
    Cookie.remove('token');
    localStorage.clear();

    localStorage.setItem('numberUploadedMessages', 0);
    
    clearMessageHistory();

    UI_ELEMENTS.MODAL_WINDOW.AUTHORIZATION.classList.add('open');
    UI_ELEMENTS.BACKGROUND_MODAL_WINDOW.style.display = 'block';
}

UI_ELEMENTS.BUTTON.EXIT.addEventListener('click', exitHandler);

const clearMessageHistory = () => {
    const messages = document.querySelectorAll('.dialog__message');

    if (messages) {
        messages.forEach(item => item.remove());
    }
}