'use client';

import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { articles } from '../data/articles';
import { getArticleImageUrl, onArticleImageError } from '../lib/article-image';

const translations = {
  pageTitle: {
    en: "Business in Jurmala",
    lv: "Bizness Jūrmalā",
    ru: "Бизнес в Юрмале"
  },
  pageDescription: {
    en: "Economic satire from the Baltic business hub. Market analysis, startup stories, and suspiciously successful potato ventures.",
    lv: "Ekonomiskā satīra no Baltijas biznesa centra. Tirgus analīze, jaunuzņēmumu stāsti un aizdomīgi veiksmīgi kartupeļu uzņēmumi.",
    ru: "Экономическая сатира из балтийского бизнес-хаба. Анализ рынка, истории стартапов и подозрительно успешные картофельные предприятия."
  },
  all: { en: "All", lv: "Visi", ru: "Все" },
  news: { en: "News", lv: "Ziņas", ru: "Новости" },
  interviews: { en: "Interviews", lv: "Intervijas", ru: "Интервью" },
  analysis: { en: "Analysis", lv: "Analīze", ru: "Аналитика" },
  backToHome: { en: "← Back to Home", lv: "← Atpakaļ uz sākumu", ru: "← Назад на главную" },
  noContent: { en: "No content yet in this category.", lv: "Šajā kategorijā vēl nav satura.", ru: "Контента в этой категории пока нет." }
};

export default function BusinessPage() {
  const { language, setLanguage } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'news' | 'interview' | 'analysis'>('all');

  const businessArticles = articles.filter(a => a.categories.includes('business'));
  const filteredArticles = filter === 'all' ? businessArticles : businessArticles.filter(a => a.type === filter);

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b-4 border-black bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <a href="/" className="text-sm hover:underline">{translations.backToHome[language]}</a>
            <div className="flex gap-2">
              <button onClick={() => setLanguage('en')} className={`px-3 py-1 text-sm ${language === 'en' ? 'font-bold underline' : ''}`}>EN</button>
              <button onClick={() => setLanguage('lv')} className={`px-3 py-1 text-sm ${language === 'lv' ? 'font-bold underline' : ''}`}>LV</button>
              <button onClick={() => setLanguage('ru')} className={`px-3 py-1 text-sm ${language === 'ru' ? 'font-bold underline' : ''}`}>RU</button>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            {translations.pageTitle[language]}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">{translations.pageDescription[language]}</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-4 mb-8 border-b-2 border-gray-200 pb-2">
          <button onClick={() => setFilter('all')} className={`px-4 py-2 text-lg font-semibold ${filter === 'all' ? 'border-b-4 border-black -mb-2' : 'text-gray-500'}`}>{translations.all[language]}</button>
          <button onClick={() => setFilter('news')} className={`px-4 py-2 text-lg font-semibold ${filter === 'news' ? 'border-b-4 border-black -mb-2' : 'text-gray-500'}`}>{translations.news[language]}</button>
          <button onClick={() => setFilter('interview')} className={`px-4 py-2 text-lg font-semibold ${filter === 'interview' ? 'border-b-4 border-black -mb-2' : 'text-gray-500'}`}>{translations.interviews[language]}</button>
          <button onClick={() => setFilter('analysis')} className={`px-4 py-2 text-lg font-semibold ${filter === 'analysis' ? 'border-b-4 border-black -mb-2' : 'text-gray-500'}`}>{translations.analysis[language]}</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article key={article.id} className="border-2 border-black p-6 hover:shadow-lg transition">
              <a href={`/news/${article.slug}`} className="block mb-4">
                <img src={getArticleImageUrl(article)} alt={article.title[language]} className="w-full h-48 object-cover hover:opacity-90 transition-opacity" onError={onArticleImageError} />
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span className="font-semibold uppercase">{article.category[language]}</span>
                <span>•</span><time>{article.date}</time><span>•</span><span>{article.readTime}</span>
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
          <div className="text-center py-12"><p className="text-2xl text-gray-500">{translations.noContent[language]}</p></div>
        )}
      </main>

      <footer className="border-t-4 border-black mt-16 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">© 2026 Jurmola Telegraphs. {language === 'en' ? 'All rights reserved' : language === 'lv' ? 'Visas tiesības aizsargātas' : 'Все права защищены'}.</p>
        </div>
      </footer>
    </div>
  );
}

