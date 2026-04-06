import { Build as BuildHeaderSection } from "./header.js";
import { Build as BuildHeroSection } from "./hero.js";
import { Build as BuildDailySpecialSection } from "./dailySpecial.js";
import { Build as BuildAboutUsSection } from "./aboutUs.js";
import { Build as BuildContactUsSection } from "./contactUs.js";
import { Build as BuildFooterSection } from "./footer.js";

export function Init() {
    BuildHeaderSection();
    BuildHeroSection();
    BuildDailySpecialSection();
    BuildAboutUsSection();
    BuildContactUsSection();
    BuildFooterSection();
}
