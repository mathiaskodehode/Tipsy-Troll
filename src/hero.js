import { CreateElement } from "./domManipulator.js";
import { GetMain } from "./domManipulator.js";

export function Build() {
    const section = CreateElement("section", {
        parent: GetMain(),
        id: "hero",
    });
    CreateElement("h1", {
        parent: section,
        innerText: "TIPSY TROLL TAVERN",
    });
    const textContainer = CreateElement("div", {
        parent: section,
        class: "heroTextContainer",
    });
    CreateElement("p", {
        parent: textContainer,
        innerText: "fra drinker til magiske eliksirer",
    });
}
