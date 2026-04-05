import { CreateElement } from "./domManipulator.js";

export function Build() {
    const section = CreateElement("section", {
        class: "contactInformation",
    });
    CreateElement("h2", {
        parent: section,
        innerText: "CONTACT INFORMATION",
    });
}
