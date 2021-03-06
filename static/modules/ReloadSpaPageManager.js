"use strict";

import UserAvatarLoader from "./UserAvatarLoader";
import getLiaderBoard from "./LiderBoardLoader";

/**
 * класс для выполнения реинициализаций при открытии страниц приложения
 */
export default class ReloadSpaPageManager {
    /**
     * конструктор для инициализации логина пользователя и словаря с DOM объектами
     * @param login - логин пользователя
     * @param elementsBase - словарь с DOM объектами
     */
    constructor(login, elementsBase) {
        this.login = login;
        this.elementsBase = elementsBase;
    }

    /**
     * метод для реинициализации записей, аватарки, списка лидеров
     */
    reloadSpa() {
        const login = this.login;
        localStorage.setItem("loginValue", login);
        const loginUserStr = "User: " + login;
        this.elementsBase.getElement("mainMenuLoginLabel").innerHTML = loginUserStr;
        this.elementsBase.getElement("myPageLoginLabel").innerHTML = loginUserStr;
        this.elementsBase.getElement("lidersPageLoginLabel").innerHTML = loginUserStr;

        const userAvatarLoader = new UserAvatarLoader(this.elementsBase, login);
        userAvatarLoader.loadAvatar();

        const liaderBoard = getLiaderBoard();
        liaderBoard.initLiderBoard(this.elementsBase);
        liaderBoard.initLiderBoardParams();
        liaderBoard.loadLiders();
    }
}
