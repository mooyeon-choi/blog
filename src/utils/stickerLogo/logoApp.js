import { Sticker } from "./sticker.js";

export class LogoApp {
    constructor(selector) {
        if (typeof selector === 'string') {
            this.elements = document.querySelectorAll(selector);
            this.elements.forEach((element) => {
                new Sticker(element);
            })
        }
    }
}