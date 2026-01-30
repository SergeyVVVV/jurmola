import { notFound } from 'next/navigation';
import { articles } from '../../../data/articles';
import { getArticleImageAbsoluteUrl, getArticleImageUrl } from '../../../lib/article-image';
import { localizedHref } from '../../../lib/i18n-config';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
};

const language = 'en';

const translations = {
  backToHome: "← Back to Home",
  siteTitle: "Jurmola Telegraphs",
  share: "Share this story",
  allRightsReserved: "All rights reserved"
};

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;

  const article = articles.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title[language],
    "description": article.excerpt[language],
    "image": getArticleImageAbsoluteUrl(article, "https://jurmola.com"),
    "datePublished": new Date(article.date).toISOString(),
    "dateModified": new Date(article.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": article.author[language].replace(/By |Rakstījis |Rakstījusi |Автор: /g, '')
    },
    "publisher": {
      "@type": "Organization",
      "name": "Jurmola Telegraphs",
      "url": "https://jurmola.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jurmola.com/icon.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jurmola.com/en/news/${article.slug}`
    },
    "articleSection": article.category[language],
    "inLanguage": language
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
      />
      
      <div className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <Link href={localizedHref('', language)} className="text-gray-600 hover:text-black">
            {translations.backToHome}
          </Link>
          <div className="flex gap-3">
            <Link href={`/news/${slug}`} className="px-2 py-1 cursor-pointer hover:text-black transition text-gray-600">RU</Link>
            <Link href={`/en/news/${slug}`} className="px-2 py-1 cursor-pointer hover:text-black transition font-bold underline text-gray-600">EN</Link>
            <Link href={`/lv/news/${slug}`} className="px-2 py-1 cursor-pointer hover:text-black transition text-gray-600">LV</Link>
          </div>
        </div>
      </div>

      <header className="border-b-4 border-black">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <Link href={localizedHref('', language)}>
            <h1 className="text-5xl font-bold text-center" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif', letterSpacing: '-0.01em' }}>
              {translations.siteTitle}
            </h1>
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-4 text-sm">
          <span className="bg-red-600 text-white px-3 py-1 rounded font-semibold uppercase tracking-wide">
            {article.category[language]}
          </span>
          <span className="text-gray-500">{article.date}</span>
          <span className="text-gray-500">·</span>
          <span className="text-gray-500">{article.readTime}</span>
        </div>

        <h1 className="text-2xl font-bold mb-6 leading-tight" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          {article.title[language]}
        </h1>

        <div className="text-gray-600 mb-8 text-lg italic">
          {article.author[language]}
        </div>

        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={getArticleImageUrl(article)} 
            alt={article.title[language]}
            className="w-full h-auto"
          />
        </div>

        <div className="text-xl leading-relaxed mb-8 font-semibold text-gray-800 border-l-4 border-black pl-6">
          {article.excerpt[language]}
        </div>

        <div className="prose prose-lg max-w-none">
          {article.fullContent[language].split('\n\n').map((paragraph, index) => {
            if (paragraph.includes('\n•')) {
              const lines = paragraph.split('\n');
              const beforeBullets: string[] = [];
              const bullets: string[] = [];
              let section: 'before' | 'bullets' = 'before';
              
              lines.forEach(line => {
                if (line.trim().startsWith('•')) {
                  section = 'bullets';
                  bullets.push(line.trim().substring(1).trim());
                } else if (section === 'before') {
                  beforeBullets.push(line);
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

        <div className="mt-12">
          <p className="text-sm text-gray-600 mb-4">{translations.share}</p>
          <div className="flex gap-4">
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title[language])}&url=${encodeURIComponent(`https://jurmola.com/en/news/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-semibold text-sm transition cursor-pointer"
            >
              Twitter
            </a>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://jurmola.com/en/news/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-semibold text-sm transition cursor-pointer"
            >
              Facebook
            </a>
          </div>
        </div>
      </article>

      <footer className="border-t-2 border-black mt-20 py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Link href={localizedHref('', language)}>
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              {translations.siteTitle}
            </h3>
          </Link>
          <p className="text-gray-500 mt-4 text-sm">
            © 2026 Jurmola Telegraphs. {translations.allRightsReserved}.
          </p>
        </div>
      </footer>
    </div>
  );
}
