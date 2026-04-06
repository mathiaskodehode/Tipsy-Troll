import { CreateElement } from "./domManipulator.js";
import { GetMain } from "./domManipulator.js";

export function Build() {
    const section = CreateElement("section", {
        parent: GetMain(),
        id: "dailySpecial",
    });
    CreateElement("h2", {
        parent: section,
        innerText: "Dagens Spesial",
    });
    const contentContainer = CreateElement("div", {
        parent: section,
        class: "dailySpecialContainer",
    });
    CreateText(contentContainer);
    CreateElement("img", {
        parent: contentContainer,
        src: "./images/delight.jpg",
        alt: "magisk drikk",
    });
}

function CreateText(parent) {
    const container = CreateElement("div", {
        parent: parent,
        class: "dailySpecialTextContainer",
    });
    // drink name
    CreateElement("h3", {
        parent: container,
        innerText: "Dreamweaver’s Delight",
    });
    // description
    CreateElement("p", {
        parent: container,
        innerText: "Perfekt for dei som ønskjer å unnslippe kvardagen og la tankane flyte fritt",
    });
    // ingredients
    CreateElement("p", {
        parent: container,
        innerHTML: "<b>Ingredienser:</b> flugesopp, fermentert troll tå, sitronsaft, vodka",
    });
    // allergens
    CreateElement("p", {
        parent: container,
        innerHTML: "<b>Allergener:</b> sopp, tåfis, sitron",
    });
    // price
    CreateElement("p", {
        parent: container,
        innerHTML: "<b>Pris:</b> 1100,-",
    });
    return container;
}
