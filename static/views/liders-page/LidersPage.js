"use strict";

import template from "./liders-page.pug";
import getLiaderBoard from "./../../modules/LiderBoardLoader";

export default class LidersPage {
    constructor() {
        LidersPage.render();
    }

    static render() {
        document.querySelector(".center-box").innerHTML += template();
    }

    static addEventsToElements(router) {
        document.querySelector(".liders-page__main-menu-button").addEventListener("click", () => {
            router.moveToPage("/main-menu");
        });

        document.querySelector(".liders-page__previous-list-button").addEventListener("click", () => {
            const liaderBoard = getLiaderBoard();
            liaderBoard.moveLeft();
            liaderBoard.loadLiders();
        });

        document.querySelector(".liders-page__next-list-button").addEventListener("click", () => {
            const liaderBoard = getLiaderBoard();
            liaderBoard.moveRight();
            liaderBoard.loadLiders();
        });
    }
}
