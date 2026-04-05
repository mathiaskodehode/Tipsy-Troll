import { CreateElement } from "./domManipulator.js";

export function Build() {
    const section = CreateElement("section", {
        class: "hero",
    });
    CreateElement("h1", {
        parent: section,
        innerText: "HERO TITLE",
    });
}
