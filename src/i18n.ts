import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend) // Load translations from backend (local JSON files)
    .use(LanguageDetector) // Detect user language (from localStorage, navigator, etc.)
    .use(initReactI18next) // Bind i18next to React
    .init({
        fallbackLng: 'kh', // Default language if none is detected
        debug: false, // Set to true for debugging
        defaultNS: 'translation', // Default namespace
        ns: ['translation'], // Define namespaces
        interpolation: {
            escapeValue: false, // React already escapes content
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
        },
        detection: {
            order: ['localStorage', 'cookie', 'navigator'], // Detection order
            caches: ['localStorage', 'cookie'], // Cache detected language
        },
    });

export default i18n;
