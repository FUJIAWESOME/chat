import { UI_ELEMENTS } from "./constants";
import Cookie from "js-cookie";

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

// вывести в отдельные функции обработчики событий !!!
// название ключей в константы +
// выделять в переменные +
// выносить повторяющийся код в функции +
// JSON в try/catch +
// вычисления в if плохо +