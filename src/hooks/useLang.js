import { useTranslation } from 'react-i18next';

export const useLang = () => {

    const [ t, i18n ] = useTranslation(['global']);
    const lang = i18n.language;

    const handleLangToggle = (selectedLang) => {
        i18n.changeLanguage(selectedLang);
        // if( document.querySelector('#navbar').classList.contains('navbar-mobile') ){
        //     document.querySelector('.bi').click();
        // }
    }

    return [ t, handleLangToggle, lang ];
}
