import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18n } from 'libs/localization/src/lib/i18n/i18n';
import { translationComponent } from './translationComponent'

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      {translationComponent()}
    </I18nextProvider>
  );
}