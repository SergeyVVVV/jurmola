'use client';

import { useEffect } from 'react';

/**
 * Sets <html lang> on the client for /en and /lv sections.
 * The root layout renders lang="ru" statically so every page can be prerendered;
 * reading headers() there would force the whole site into dynamic rendering.
 */
export default function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
