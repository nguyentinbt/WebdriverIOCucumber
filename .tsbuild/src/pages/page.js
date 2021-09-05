"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Page {
    open(path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`);
    }
}
exports.default = Page;
