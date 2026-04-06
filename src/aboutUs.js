import { CreateElement } from "./domManipulator.js";
import { GetMain } from "./domManipulator.js";

export function Build() {
    const section = CreateElement("section", {
        parent: GetMain(),
        id: "aboutUs",
    });
    CreateElement("h2", {
        parent: section,
        innerText: "Velkommen til oss",
    });
    CreateElement("p", {
        parent: section,
        innerText: "Tipsy Troll Tavern hat stått her siden 4000 f.kr. Vi er den eldste tavernen i verden.",
    });
    CreateElement("p", {
        parent: section,
        innerText: "Her serveres den beste drikken og potions i heile kongeriket. Gjestane våre kjem for drikken, men blir for stemningen.",
    });
    CreateElement("p", {
        parent: section,
        innerText: "Hør kva ein av dei faste kundane har å sei om oss",
    });
    CreateElement("p", {
        parent: section,
        innerText: "\"Glurp glorb... gib flop, gllu blorp!\" \n-Glurpsglorben",
    });
}
