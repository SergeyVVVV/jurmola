'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useLanguage } from '../../../hooks/useLanguage';
import { articles } from '../../../data/articles';
import { getArticleImageUrl, onArticleImageError } from '../../../lib/article-image';

const translations = {
  pageTitle: {
    politics: { en: "Politics News", lv: "Politikas ziņas", ru: "Политические новости" },
    culture: { en: "Culture News", lv: "Kultūras ziņas", ru: "Культурные новости" },
    business: { en: "Business News", lv: "Biznesa ziņas", ru: "Бизнес новости" },
    opinion: { en: "Opinion Articles", lv: "Viedokļu raksti", ru: "Статьи мнений" }
  },
  pageDescription: {
    politics: { en: "Latest political news from Jurmala", lv: "Jaunākās politikas ziņas no Jūrmalas", ru: "Последние политические новости из Юрмалы" },
    culture: { en: "Cultural news and satire", lv: "Kultūras ziņas un satīra", ru: "Культурные новости и сатира" },
    business: { en: "Business and economic news", lv: "Biznesa un ekonomikas ziņas", ru: "Бизнес и экономические новости" },
    opinion: { en: "Opinion pieces and analysis", lv: "Viedokļu raksti un analīze", ru: "Мнения и анализ" }
  },
  backToHome: { en: "← Back to Home", lv: "← Atpakaļ uz sākumu", ru: "← Назад на главную" },
  noContent: { en: "No articles in this category yet.", lv: "Šajā kategorijā vēl nav rakstu.", ru: "В этой категории пока нет статей." }
};

export default function NewsCategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const { language, setLanguage } = useLanguage();

  // Filter news articles by category
  const categoryArticles = articles.filter(a => 
    a.categories.includes(category) && a.type === 'news'
  );

  const categoryKey = category as 'politics' | 'culture' | 'business' | 'opinion';

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
            {translations.pageTitle[categoryKey][language]}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            {translations.pageDescription[categoryKey][language]}
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryArticles.map((article) => (
            <article key={article.id} className="border-2 border-black p-6 hover:shadow-lg transition">
              <img
                src={getArticleImageUrl(article)}
                alt={article.title[language]}
                className="w-full h-48 object-cover mb-4"
                onError={onArticleImageError}
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

        {categoryArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-500">
              {translations.noContent[language]}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black mt-16 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">
            © 2026 Jurmola Telegraphs. {language === 'en' ? 'All rights reserved' : language === 'lv' ? 'Visas tiesības aizsargātas' : 'Все права защищены'}.
          </p>
        </div>
      </footer>
    </div>
  );
}

