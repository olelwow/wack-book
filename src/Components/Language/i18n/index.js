import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInSwedish from "../swe/translation.json";
import translationsInEnglish from "../en/translation.json";

// Översättningen
const resources = {
    sv: {
        translation: translationsInSwedish
    },
    en: {
        translation: translationsInEnglish
    },
};

i18n
.use(initReactI18next) // passes i18n down to react-i1
.init({
    resources,
    lng: "sv", //standard språket.
    debug: true,
    fallbackLng: "en", //Används om standard språket inte fungerar.
    interpolation: {
        escapeValue: false 
    },
    ns: "translation",
    defaultNS: "translation"
});