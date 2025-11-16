'use client';

import { useState, useEffect } from 'react';

export type Language = 'en' | 'lv' | 'ru';

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('jurmola-language') as Language;
    if (savedLanguage && ['en', 'lv', 'ru'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
    setIsLoaded(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('jurmola-language', lang);
  };

  return { language, setLanguage, isLoaded };
}

