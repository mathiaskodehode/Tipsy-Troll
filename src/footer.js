import { CreateElement } from "./domManipulator.js";

export function Build() {
    const footer = CreateElement("footer");
    CreateElement("h2", {
        parent: footer,
        innerText: "FOOTER",
    });
}
