"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureAreaPage = void 0;
const page_1 = require("./page");
class SecureAreaPage extends page_1.default {
    get welcomeTXT() {
        return $('#content > div > h4');
    }
}
exports.SecureAreaPage = SecureAreaPage;
exports.default = new SecureAreaPage();
