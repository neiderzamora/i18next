'use client';

import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='flex gap-x-2'>
      <button className='bg-purple-500 p-1' onClick={() => changeLanguage('en')}>English</button>
      <button className='bg-purple-700 p-1' onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
};

export default LanguageSwitcher;