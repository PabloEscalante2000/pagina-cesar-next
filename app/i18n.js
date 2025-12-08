// app/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) // Pasa la instancia de i18n a react-i18next.
  .use(HttpApi) // Carga traducciones desde una API/servidor.
  .init({
    lng: 'es', // Idioma inicial.
    fallbackLng: 'es', // Idioma de respaldo si una traducción no se encuentra.
    ns: ['translation'], // Namespaces a cargar.
    defaultNS: 'translation',
    backend: {
      // Ruta a tus archivos de traducción en la carpeta `public`.
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false, // React ya se encarga de sanitizar la salida.
    },
    react: {
      // Desactiva Suspense si no lo estás usando para la carga de traducciones.
      // Es más simple para empezar.
      useSuspense: false,
    },
  });

export default i18n;
