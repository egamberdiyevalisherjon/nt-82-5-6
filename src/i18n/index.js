import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from './locales/uz.json'
import en from './locales/en.json'

i18n.use(initReactI18next).init({
  fallbackLng: "uz",
  lng: "uz",
  resources: {
    en,
    uz,
  },
});

export default i18n;
