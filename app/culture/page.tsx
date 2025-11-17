'use client';

import { useState } from 'react';
import { useLanguage, Language } from '../hooks/useLanguage';
import { articles, Article } from '../data/articles';

const translations = {
  pageTitle: {
    en: "Culture in Jurmala",
    lv: "Kultūra Jūrmalā",
    ru: "Культура в Юрмале"
  },
  pageDescription: {
    en: "Cultural satire from the heart of the Baltics. Art, music, literature, and the occasional inexplicable monument.",
    lv: "Kultūras satīra no Baltijas sirds. Māksla, mūzika, literatūra un dažreiz neskaidrs piemineklis.",
    ru: "Культурная сатира из сердца Балтики. Искусство, музыка, литература и случайные необъяснимые памятники."
  },
  all: { en: "All", lv: "Visi", ru: "Все" },
  news: { en: "News", lv: "Ziņas", ru: "Новости" },
  interviews: { en: "Interviews", lv: "Intervijas", ru: "Интервью" },
  analysis: { en: "Analysis", lv: "Analīze", ru: "Аналитика" },
  backToHome: { en: "← Back to Home", lv: "← Atpakaļ uz sākumu", ru: "← Назад на главную" },
  noContent: {
    en: "No content yet in this category.",
    lv: "Šajā kategorijā vēl nav satura.",
    ru: "Контента в этой категории пока нет."
  }
};

export default function CulturePage() {
  const { language, setLanguage } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'news' | 'interview' | 'analysis'>('all');

  const cultureArticles = articles.filter(a => a.categories.includes('culture'));
  const filteredArticles = filter === 'all' 
    ? cultureArticles 
    : cultureArticles.filter(a => a.type === filter);

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b-4 border-black bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <a href="/" className="text-sm hover:underline">
              {translations.backToHome[language]}
            </a>
            <div className="flex gap-2">
              <button onClick={() => setLanguage('en')} className={`px-3 py-1 text-sm ${language === 'en' ? 'font-bold underline' : ''}`}>EN</button>
              <button onClick={() => setLanguage('lv')} className={`px-3 py-1 text-sm ${language === 'lv' ? 'font-bold underline' : ''}`}>LV</button>
              <button onClick={() => setLanguage('ru')} className={`px-3 py-1 text-sm ${language === 'ru' ? 'font-bold underline' : ''}`}>RU</button>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            🎭 {translations.pageTitle[language]}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">{translations.pageDescription[language]}</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-4 mb-8 border-b-2 border-gray-200 pb-2">
          <button onClick={() => setFilter('all')} className={`px-4 py-2 text-lg font-semibold ${filter === 'all' ? 'border-b-4 border-black -mb-2' : 'text-gray-500'}`}>{translations.all[language]}</button>
          <button onClick={() => setFilter('news')} className={`px-4 py-2 text-lg font-semibold ${filter === 'news' ? 'border-b-4 border-black -mb-2' : 'text-gray-500'}`}>📰 {translations.news[language]}</button>
          <button onClick={() => setFilter('interview')} className={`px-4 py-2 text-lg font-semibold ${filter === 'interview' ? 'border-b-4 border-black -mb-2' : 'text-gray-500'}`}>🎤 {translations.interviews[language]}</button>
          <button onClick={() => setFilter('analysis')} className={`px-4 py-2 text-lg font-semibold ${filter === 'analysis' ? 'border-b-4 border-black -mb-2' : 'text-gray-500'}`}>📊 {translations.analysis[language]}</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article key={article.id} className="border-2 border-black p-6 hover:shadow-lg transition">
              <img src={article.imageUrl} alt={article.title[language]} className="w-full h-48 object-cover mb-4" />
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span className="font-semibold uppercase">{article.category[language]}</span>
                <span>•</span>
                <time>{article.date}</time>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <a href={`/news/${article.slug}`}>
                <h3 className="text-xl font-bold mt-2 mb-3 leading-tight hover:underline cursor-pointer" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                  {article.title[language]}
                </h3>
              </a>
              <p className="text-gray-700 leading-relaxed">{article.excerpt[language]}</p>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-500">{translations.noContent[language]}</p>
          </div>
        )}
      </main>

      <footer className="border-t-4 border-black mt-16 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">
            © 2025 Jurmola Telegraphs. {language === 'en' ? 'All rights reserved' : language === 'lv' ? 'Visas tiesības aizsargātas' : 'Все права защищены'}.
          </p>
        </div>
      </footer>
    </div>
  );
}

