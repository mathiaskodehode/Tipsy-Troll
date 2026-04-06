import { CreateElement } from "./domManipulator.js";

class navbarOption {
    constructor(text, href) {
        this.text = text;
        this.href = href;
    }
}
const navbarOptions = [
    new navbarOption("Topp", "#hero"),
    new navbarOption("Dagens", "#dailySpecial"),
    new navbarOption("Om oss", "#aboutUs"),
    new navbarOption("Send en beskjed", "#contactUs"),
];

export function Build() {
    const header = CreateElement("header");
    const nav = CreateElement("nav", {
        parent: header,
    });
    navbarOptions.forEach(no => {
        CreateElement("a", {
            parent: nav,
            innerText: no.text,
            href: no.href,
        });
    });
}
