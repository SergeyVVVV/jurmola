'use client';

import { useParams } from 'next/navigation';
import { useLanguage } from '../../hooks/useLanguage';
import { articles } from '../../data/articles';
import { getArticleImageAbsoluteUrl, getArticleImageUrl, onArticleImageError } from '../../lib/article-image';

// Export articles for layout metadata
export { articles } from '../../data/articles';

const translations = {
  backToHome: { en: "← Back to Home", lv: "← Atpakaļ uz sākumlapu", ru: "← Назад на главную" },
  siteTitle: { en: "Jurmola Telegraphs", lv: "Jurmola Telegraphs", ru: "Jurmola Telegraphs" },
  share: { en: "Share this story", lv: "Dalīties ar šo stāstu", ru: "Поделиться этой историей" }
};

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const { language, setLanguage } = useLanguage();

  // Support both slug and legacy ID routing with redirect
  const article = articles.find(a => {
    if (a.slug === slug) return true;
    return false;
  });

  // If not found by slug, check if it's a legacy ID and redirect
  if (!article && !isNaN(Number(slug))) {
    const articleById = articles.find(a => a.id === Number(slug));
    if (articleById) {
      // 301 redirect to the proper slug URL
      if (typeof window !== 'undefined') {
        window.location.replace(`/news/${articleById.slug}`);
      }
      return null;
    }
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <a href="/" className="text-blue-600 hover:underline">← Back to Home</a>
        </div>
      </div>
    );
  }

  // Schema.org structured data for SEO
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title[language],
    "description": article.excerpt[language],
    "image": getArticleImageAbsoluteUrl(article, "https://jurmola.vercel.app"),
    "datePublished": new Date(article.date).toISOString(),
    "dateModified": new Date(article.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": article.author[language].replace(/By |Rakstījis |Rakstījusi |Автор: /g, '')
    },
    "publisher": {
      "@type": "Organization",
      "name": "Jurmola Telegraphs",
      "url": "https://jurmola.vercel.app"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jurmola.vercel.app/news/${article.slug}`
    },
    "articleSection": article.category[language]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
      />
      
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <a href="/" className="text-gray-600 hover:text-black">{translations.backToHome[language]}</a>
          <div className="flex gap-3">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 cursor-pointer hover:text-black transition ${language === 'en' ? 'font-bold underline' : 'text-gray-600'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('lv')}
              className={`px-2 py-1 cursor-pointer hover:text-black transition ${language === 'lv' ? 'font-bold underline' : 'text-gray-600'}`}
            >
              LV
            </button>
            <button
              onClick={() => setLanguage('ru')}
              className={`px-2 py-1 cursor-pointer hover:text-black transition ${language === 'ru' ? 'font-bold underline' : 'text-gray-600'}`}
            >
              RU
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b-4 border-black">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <a href="/">
            <h1 className="text-5xl font-bold text-center" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif', letterSpacing: '-0.01em' }}>
              {translations.siteTitle[language]}
            </h1>
          </a>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-4 text-sm">
          <span className="bg-red-600 text-white px-3 py-1 rounded font-semibold uppercase tracking-wide">
            {article.category[language]}
          </span>
          <span className="text-gray-500">{article.date}</span>
          <span className="text-gray-500">·</span>
          <span className="text-gray-500">{article.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          {article.title[language]}
        </h1>

        {/* Author */}
        <div className="text-gray-600 mb-8 text-lg italic">
          {article.author[language]}
        </div>

        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={getArticleImageUrl(article)} 
            alt={article.title[language]}
            className="w-full h-auto"
            onError={onArticleImageError}
          />
        </div>

        {/* Excerpt */}
        <div className="text-xl leading-relaxed mb-8 font-semibold text-gray-800 border-l-4 border-black pl-6">
          {article.excerpt[language]}
        </div>

        {/* Full Content */}
        <div className="prose prose-lg max-w-none">
          {article.fullContent[language].split('\n\n').map((paragraph, index) => {
            // Check if paragraph contains bullet points
            if (paragraph.includes('\n•')) {
              const lines = paragraph.split('\n');
              const beforeBullets: string[] = [];
              const bullets: string[] = [];
              const afterBullets: string[] = [];
              let section: 'before' | 'bullets' | 'after' = 'before';
              
              lines.forEach(line => {
                if (line.trim().startsWith('•')) {
                  section = 'bullets';
                  bullets.push(line.trim().substring(1).trim());
                } else if (section === 'before') {
                  beforeBullets.push(line);
                } else if (section === 'bullets' && line.trim() === '') {
                  section = 'after';
                } else if (section === 'after') {
                  afterBullets.push(line);
                }
              });
              
              return (
                <div key={index} className="mb-6">
                  {beforeBullets.length > 0 && (
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      {beforeBullets.join('\n')}
                    </p>
                  )}
                  {bullets.length > 0 && (
                    <ul className="list-disc list-outside ml-6 mb-4 space-y-2">
                      {bullets.map((bullet, i) => (
                        <li key={i} className="text-lg leading-relaxed text-gray-800">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                  {afterBullets.length > 0 && (
                    <p className="text-lg leading-relaxed text-gray-800">
                      {afterBullets.join('\n')}
                    </p>
                  )}
                </div>
              );
            }
            
            return (
              <p key={index} className="mb-6 text-lg leading-relaxed text-gray-800">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Share Section */}
        <div className="mt-12">
          <p className="text-sm text-gray-600 mb-4">{translations.share[language]}</p>
          <div className="flex gap-4">
            <button 
              onClick={() => {
                const url = window.location.href;
                const text = article.title[language];
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
              }}
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-semibold text-sm transition cursor-pointer"
            >
              Twitter
            </button>
            <button 
              onClick={() => {
                const url = window.location.href;
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
              }}
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-semibold text-sm transition cursor-pointer"
            >
              Facebook
            </button>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }}
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-semibold text-sm transition cursor-pointer"
            >
              Copy Link
            </button>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t-2 border-black mt-20 py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <a href="/">
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              {translations.siteTitle[language]}
            </h3>
          </a>
          <p className="text-gray-500 mt-4 text-sm">© 2025 Jurmola Telegraphs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

