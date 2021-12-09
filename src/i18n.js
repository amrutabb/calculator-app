import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
        zero : '0',
        one : '1',
        two: '2',
        three : '3',
        four : '4',
        five : '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9'
    }
  },
  ar: {
    translation: {
        zero : '٠',
        one : '١',
        two: '٢',
        three : '٣',
        four : '٤',
        five : '٥',
        six: '٦',
        seven: '٧',
        eight: '٨',
        nine: '٩'
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false
  }
});

export default i18n;