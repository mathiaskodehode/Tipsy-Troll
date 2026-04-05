import { CreateElement } from "./domManipulator.js";

export function Build() {
    const section = CreateElement("section", {
        class: "dailySpecial",
    });
    CreateElement("h2", {
        parent: section,
        innerText: "SPECIAL OF THE DAY",
    });
}
