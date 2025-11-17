'use client';

import { useState } from 'react';
import { useLanguage, Language } from '../hooks/useLanguage';

interface Article {
  id: number;
  slug: string;
  title: { en: string; lv: string; ru: string };
  excerpt: { en: string; lv: string; ru: string };
  date: string;
  category: { en: string; lv: string; ru: string };
  categories: string[]; // New: multiple categories
  type: 'news' | 'interview' | 'analysis'; // Content type
  readTime: string;
  imageEmoji: string;
}

// Import from main articles data (will be shared later)
const articles: Article[] = [
  {
    id: 9,
    slug: "london-banker-jurmola-compacting-beach-sand",
    title: {
      en: "Famous London Investment Banker Visits Jurmola, Proposes Compacting Beach Sand For 'Strategic Purposes'",
      lv: "Slavens Londons investīciju banķieris apmeklē Jūrmalu, ierosina sablīvēt pludmales smiltis 'stratēģiskiem mērķiem'",
      ru: "Знаменитый лондонский инвестиционный банкир посетил Юрмалу, предложил уплотнить пляжный песок для 'стратегических целей'"
    },
    excerpt: {
      en: "Alexander Vladimirov, former Swiss national hockey player turned Russian triathlon representative, made a 'friendly visit' to Jurmola this week.",
      lv: "Aleksandrs Vladimirovs, bijušais Šveices hokeja izlases spēlētājs, kas pārstāv Krieviju triatlonā, šonedēļ veica 'draudzīgu vizīti' Jūrmalā.",
      ru: "Александр Владимиров, бывший игрок сборной Швейцарии по хоккею, совершил 'дружественный визит' в Юрмалу."
    },
    date: "Nov 16, 2025",
    category: { en: "Politics", lv: "Politika", ru: "Политика" },
    categories: ["politics"],
    type: "news",
    readTime: "7 min read",
    imageEmoji: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&h=600&fit=crop"
  },
  // More articles will be filtered here
];

const translations = {
  pageTitle: {
    en: "Politics in Jurmala",
    lv: "Politika Jūrmalā",
    ru: "Политика в Юрмале"
  },
  pageDescription: {
    en: "Your source for political satire from Jurmala and beyond. Breaking political news, interviews, and in-depth analysis.",
    lv: "Jūsu avots politiskajai satīrai no Jūrmalas un tālāk. Jaunākie politiskie ziņojumi, intervijas un padziļināta analīze.",
    ru: "Ваш источник политической сатиры из Юрмалы и не только. Последние политические новости, интервью и глубокий анализ."
  },
  all: { en: "All", lv: "Visi", ru: "Все" },
  news: { en: "News", lv: "Ziņas", ru: "Новости" },
  interviews: { en: "Interviews", lv: "Intervijas", ru: "Интервью" },
  analysis: { en: "Analysis", lv: "Analīze", ru: "Аналитика" },
  backToHome: { en: "← Back to Home", lv: "← Atpakaļ uz sākumu", ru: "← Назад на главную" }
};

export default function PoliticsPage() {
  const { language, setLanguage } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'news' | 'interview' | 'analysis'>('all');

  // Filter articles by politics category
  const politicsArticles = articles.filter(a => a.categories.includes('politics'));

  // Apply type filter
  const filteredArticles = filter === 'all' 
    ? politicsArticles 
    : politicsArticles.filter(a => a.type === filter);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-4 border-black bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <a href="/" className="text-sm hover:underline">
              {translations.backToHome[language]}
            </a>
            <div className="flex gap-2">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm ${language === 'en' ? 'font-bold underline' : ''}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('lv')}
                className={`px-3 py-1 text-sm ${language === 'lv' ? 'font-bold underline' : ''}`}
              >
                LV
              </button>
              <button 
                onClick={() => setLanguage('ru')}
                className={`px-3 py-1 text-sm ${language === 'ru' ? 'font-bold underline' : ''}`}
              >
                RU
              </button>
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            🎯 {translations.pageTitle[language]}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            {translations.pageDescription[language]}
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Filter Tabs */}
        <div className="flex gap-4 mb-8 border-b-2 border-gray-200 pb-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-lg font-semibold transition ${
              filter === 'all' 
                ? 'border-b-4 border-black -mb-2' 
                : 'text-gray-500 hover:text-black'
            }`}
          >
            {translations.all[language]}
          </button>
          <button
            onClick={() => setFilter('news')}
            className={`px-4 py-2 text-lg font-semibold transition ${
              filter === 'news' 
                ? 'border-b-4 border-black -mb-2' 
                : 'text-gray-500 hover:text-black'
            }`}
          >
            📰 {translations.news[language]}
          </button>
          <button
            onClick={() => setFilter('interview')}
            className={`px-4 py-2 text-lg font-semibold transition ${
              filter === 'interview' 
                ? 'border-b-4 border-black -mb-2' 
                : 'text-gray-500 hover:text-black'
            }`}
          >
            🎤 {translations.interviews[language]}
          </button>
          <button
            onClick={() => setFilter('analysis')}
            className={`px-4 py-2 text-lg font-semibold transition ${
              filter === 'analysis' 
                ? 'border-b-4 border-black -mb-2' 
                : 'text-gray-500 hover:text-black'
            }`}
          >
            📊 {translations.analysis[language]}
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article key={article.id} className="border-2 border-black p-6 hover:shadow-lg transition">
              <img
                src={article.imageEmoji}
                alt={article.title[language]}
                className="w-full h-48 object-cover mb-4"
              />
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
              <p className="text-gray-700 leading-relaxed">
                {article.excerpt[language]}
              </p>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-500">
              {language === 'en' ? 'No content yet in this category.' : 
               language === 'lv' ? 'Šajā kategorijā vēl nav satura.' : 
               'Контента в этой категории пока нет.'}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
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

