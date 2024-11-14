import { I18nextProvider, I18nextProviderProps } from 'react-i18next';
import { i18n } from './i18n/i18n';

export const TranslationProvider = ({...props}: Omit<I18nextProviderProps, 'i18n'>) => {
    return <I18nextProvider i18n={i18n} {...props} />;
};