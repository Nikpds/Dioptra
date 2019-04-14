import React, { useState } from 'react';
import LocalizedStrings from 'react-localization';
import { LocaleProvider } from 'antd';
import el_GR from 'antd/lib/locale-provider/el_GR';
import en_GB from 'antd/lib/locale-provider/en_GB';
import moment from 'moment';

import en from './en';
import gr from './gr';
import 'moment/locale/fr';
moment.locale('fr');
export const LocalizationContext = React.createContext({
    changeLocalization: () => { },
    lang: ''
});
export const strings = new LocalizedStrings({
    en: en,
    gr: gr
});
const LocalizationProvider = props => {
    const [lang, setLang] = useState('gr');
    strings.setLanguage(lang);
    const changeLocalization = lang => {
        strings.setLanguage(lang);
        setLang(lang);
    }
    const antdlang = lang === 'gr' ? el_GR : en_GB
    return (
        <LocalizationContext.Provider value={{ changeLocalization, lang }}>
            <LocaleProvider locale={antdlang}>
                {props.children}
            </LocaleProvider>
        </LocalizationContext.Provider>
    );
};

export default LocalizationProvider;