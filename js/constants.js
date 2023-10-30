export const UI_ELEMENTS = {
    FORM: {
        AUTHORIZATION: document.querySelector('.authorization__form'),
        SETTINGS: document.querySelector('.settings__form'),
        ACCEPT: document.querySelector('.accept__form'),
        INPUT_MESSAGE: document.querySelector('.dialog__bottom'),
    },
    MODAL_WINDOW: {
        AUTHORIZATION: document.querySelector('.authorization'),
        SETTINGS: document.querySelector('.settings'),
        ACCEPT: document.querySelector('.accept'),
    },
    BUTTON: {
        AUTHORIZATION_TOKEN_BTN: document.querySelector('.authorization__token-btn'),
        ACCEPT_CLOSE: document.querySelector('.accept__close'),
        SETTINGS_CLOSE: document.querySelector('.settings__close'),
        SETTINGS: document.querySelector('.dialog__btn-settings'),
        EXIT: document.querySelector('.dialog__btn-exit'),
    },
    BACKGROUND_MODAL_WINDOW: document.querySelector('.background-modal_window'),
    TEMPLATE: document.getElementById('message_submit'),
    MESSAGE_LIST: document.querySelector('.dialog__message-list')
}

export const URL = {
    API: {
        MESSAGES: 'https://edu.strada.one/api/messages',
        USER: 'https://edu.strada.one/api/user',
        USER_ME: 'https://edu.strada.one/api/user/me',
    },
    WEB_SOCKET: 'ws://edu.strada.one/websockets?',
}

export const HTTP = {
    STATUS: {
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
    },
}

export const WS_READY_STATE = {
    OPEN: 1,
    CLOSED: 3,
}