import React from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

export const translationComponent = () => {
  const [ t ] = useTranslation();

  return (
      <Text>{t('PROVE_IDENTITY.TITLE')}</Text>
  );
}
