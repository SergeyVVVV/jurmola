'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

type Language = 'en' | 'lv' | 'ru';

interface ArticleContent {
  id: number;
  title: { en: string; lv: string; ru: string };
  excerpt: { en: string; lv: string; ru: string };
  fullContent: { en: string; lv: string; ru: string };
  date: string;
  category: { en: string; lv: string; ru: string };
  readTime: string;
  imageUrl: string;
  author: { en: string; lv: string; ru: string };
}

const articles: ArticleContent[] = [
  {
    id: 1,
    title: {
      en: "German Tourist Mistakes Latvian Funeral for Beach Party, Joins Mourners in Swimsuit",
      lv: "Vācu tūrists sajauktu latviešu bēres ar pludmales ballīti, pievienojas sērotājiem peldkostīmā",
      ru: "Немецкий турист принял латвийские похороны за пляжную вечеринку, присоединился к скорбящим в купальнике"
    },
    excerpt: {
      en: "A 34-year-old Munich resident followed a crowd of people dressed in black to what he believed was an 'authentic Baltic beach gathering.' Witnesses report he brought a speaker and started playing techno before realizing his mistake 20 minutes in.",
      lv: "34 gadus vecs Minhenes iedzīvotājs sekoja pūlim cilvēku melnos tērpos uz to, ko viņš uzskatīja par 'autentisku Baltijas pludmales sapulci.' Liecinieki ziņo, ka viņš atnesa skaļruni un sāka spēlēt tehno, pirms 20 minūtēs saprata savu kļūdu.",
      ru: "34-летний житель Мюнхена последовал за толпой людей в черном на то, что он считал 'аутентичной балтийской пляжной тусовкой'. Свидетели сообщают, что он принес колонку и начал играть техно, прежде чем понял свою ошибку через 20 минут."
    },
    fullContent: {
      en: `JŪRMALA — In what local authorities are calling "the most German thing we've ever witnessed," a Munich tourist transformed a somber funeral service into an impromptu rave after mistaking mourners for beachgoers.

Klaus Müller, 34, was visiting Latvia for the first time when he noticed a large group of people dressed in black walking toward the beach on Tuesday afternoon. According to his testimony, he assumed this was a "cool Baltic tradition" he'd read about on Reddit.

"I thought it was one of those Nordic melancholic beach parties," Müller explained from police custody, still wearing his neon green mankini. "Everyone was so serious and dignified. I thought, 'Wow, Latvians really commit to the aesthetic.'"

Witnesses report that Müller not only joined the procession but actively tried to "liven things up" by distributing glow sticks he'd brought from a Berlin club. He allegedly approached the casket, which he believed to be a "very realistic cooler for beer," and attempted to open it before being physically restrained by six family members.

"He kept shouting 'Where's the DJ?!' and asking if anyone had seen the bathroom," said mourner Ilze Kalniņa, 56. "When we carried the casket, he started doing a shuffling dance move behind us. My grandmother was in that casket."

The situation reached its peak when Müller, convinced he'd found the perfect "chill zone," attempted to set up a beach umbrella directly on top of the grave as it was being filled. Cemetery workers initially thought he was family having an emotional breakdown.

"I've been a gravedigger for 30 years," said Valdis Bērziņš, 61. "I've seen people faint, scream, even try to jump in the grave. But I've never seen someone rate the 'vibe' 4 out of 5 stars on Google Maps while we're lowering a casket."

The misunderstanding was finally cleared up when Father Andrejs spoke in broken German, at which point Müller reportedly turned "whiter than the Baltic Sea in winter" and immediately offered to pay for therapy for all attendees.

Local tourism board is considering adding warning signs to funeral processions, though they admit they "never thought this would be necessary."

Müller has been banned from all Latvian beaches, cemeteries, and anywhere people wear black clothing as a group. He returns to Germany tomorrow, where he plans to "maybe never leave Munich again" and has already booked an appointment with his therapist.

The deceased's family has declined to press charges, noting that "Grandmother always wanted more people at her funeral, though this probably isn't what she meant."`,
      lv: "Pilns teksts latviski...",
      ru: "Полный текст на русском..."
    },
    date: "Nov 15, 2025",
    category: { en: "Cringe", lv: "Krindžs", ru: "Кринж" },
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop",
    author: { en: "By Marina Ozola", lv: "Rakstījusi Marina Ozola", ru: "Автор: Марина Озола" }
  },
  // Для остальных статей пока будет placeholder
  {
    id: 2,
    title: {
      en: "Local Man's Entire Personality Based on Once Visiting Riga in 2003",
      lv: "Vietējā vīrieša visa personība balstīta uz to, ka viņš reiz 2003. gadā apmeklēja Rīgu",
      ru: "Вся личность местного мужчины основана на том, что он однажды посетил Ригу в 2003 году"
    },
    excerpt: {
      en: "Area resident Andris Bērziņš, 47, hasn't stopped talking about his 3-day trip to Latvia's capital 22 years ago.",
      lv: "Apgabala iedzīvotājs Andris Bērziņš, 47, nav pārstājis runāt par savu 3 dienu ceļojumu uz Latvijas galvaspilsētu pirms 22 gadiem.",
      ru: "47-летний житель района Андрис Берзиньш не перестает говорить о своей 3-дневной поездке в столицу Латвии 22 года назад."
    },
    fullContent: {
      en: "Full article coming soon...",
      lv: "Pilns raksts drīzumā...",
      ru: "Полная статья скоро..."
    },
    date: "Nov 15, 2025",
    category: { en: "Dark Humor", lv: "Tumšais humors", ru: "Черный юмор" },
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=800&h=600&fit=crop",
    author: { en: "By Jānis Liepa", lv: "Rakstījis Jānis Liepa", ru: "Автор: Янис Лиепа" }
  }
];

const translations = {
  backToHome: { en: "← Back to Home", lv: "← Atpakaļ uz sākumlapu", ru: "← Назад на главную" },
  siteTitle: { en: "Jurmola", lv: "Jurmola", ru: "Юрмола" },
  share: { en: "Share this story", lv: "Dalīties ar šo stāstu", ru: "Поделиться этой историей" }
};

export default function ArticlePage() {
  const params = useParams();
  const articleId = parseInt(params.id as string);
  const [language, setLanguage] = useState<Language>('en');

  const article = articles.find(a => a.id === articleId);

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

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <a href="/" className="text-gray-600 hover:text-black">{translations.backToHome[language]}</a>
          <div className="flex gap-3">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 ${language === 'en' ? 'font-bold underline' : 'text-gray-600'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('lv')}
              className={`px-2 py-1 ${language === 'lv' ? 'font-bold underline' : 'text-gray-600'}`}
            >
              LV
            </button>
            <button
              onClick={() => setLanguage('ru')}
              className={`px-2 py-1 ${language === 'ru' ? 'font-bold underline' : 'text-gray-600'}`}
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
            <h1 className="text-5xl font-bold text-center" style={{ fontFamily: 'Playfair Display, Merriweather, Georgia, serif', letterSpacing: '-0.02em' }}>
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
        <h1 className="text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, Merriweather, Georgia, serif' }}>
          {article.title[language]}
        </h1>

        {/* Author */}
        <div className="text-gray-600 mb-8 text-lg italic">
          {article.author[language]}
        </div>

        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title[language]}
            className="w-full h-auto"
          />
        </div>

        {/* Excerpt */}
        <div className="text-xl leading-relaxed mb-8 font-semibold text-gray-800 border-l-4 border-black pl-6">
          {article.excerpt[language]}
        </div>

        {/* Full Content */}
        <div className="prose prose-lg max-w-none">
          {article.fullContent[language].split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-lg leading-relaxed text-gray-800">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200">
          <p className="text-sm text-gray-600 mb-4">{translations.share[language]}</p>
          <div className="flex gap-4">
            <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-semibold text-sm">
              Twitter
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-semibold text-sm">
              Facebook
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-semibold text-sm">
              Copy Link
            </button>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t-2 border-black mt-20 py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <a href="/">
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, Merriweather, Georgia, serif' }}>
              {translations.siteTitle[language]}
            </h3>
          </a>
          <p className="text-gray-500 mt-4 text-sm">© 2025 Jurmola News. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

