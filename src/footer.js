import { CreateElement } from "./domManipulator.js";

export function Build() {
    const footer = CreateElement("footer");
    // [social media links]
    CreateElement("p", {
        parent: footer,
        innerText: "© 4000 f.Kr. – 2026 Tipsy Troll Tavern. All Rights Reserved."
    })
}
