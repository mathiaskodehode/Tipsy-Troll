import { CreateElement } from "./domManipulator.js";

export function Build() {
    const header = CreateElement("header");
    const nav = CreateElement("nav", {
        parent: header,
    });
    for (let i = 0; i < 4; i++) {
        CreateElement("a", {
            parent: nav,
            innerText: i.toString(),
            href: "",
        });
    }
}
