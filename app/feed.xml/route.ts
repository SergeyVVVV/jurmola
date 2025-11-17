import { NextResponse } from 'next/server';

// This data should match your articles array
const articles = [
  {
    id: 9,
    title: {
      en: "Famous London Investment Banker Visits Jurmola, Proposes Compacting Beach Sand For 'Strategic Purposes'",
      lv: "Slavens Londons investīciju banķieris apmeklē Jūrmalu, ierosina sablīvēt pludmales smiltis 'stratēģiskiem mērķiem'",
      ru: "Знаменитый лондонский инвестиционный банкир посетил Юрмалу, предложил уплотнить пляжный песок для 'стратегических целей'"
    },
    excerpt: {
      en: "Alexander Vladimirov, former Swiss national hockey player turned Russian triathlon representative, made a 'friendly visit' to Jurmola this week. After praising local saunas, spirits, and inflatable pool toys, Vladimirov unveiled a detailed proposal to compress beach sand 'so knives stick better in Latvian soil.'",
      lv: "Aleksandrs Vladimirovs, bijušais Šveices hokeja izlases spēlētājs, kas pārstāv Krieviju triatlonā, šonedēļ veica 'draudzīgu vizīti' Jūrmalā. Pēc tam, kad viņš uzslavēja vietējās pirtis, spirtu un peldošās rotaļlietas, Vladimirovs atklāja detalizētu priekšlikumu saspiegt pludmales smiltis, 'lai naži labāk iestrēgst Latvijas zemē.'",
      ru: "Александр Владимиров, бывший игрок сборной Швейцарии по хоккею, теперь представляющий Россию в триатлоне, совершил 'дружественный визит' в Юрмалу на этой неделе. После похвалы местным баням, спиртным напиткам и надувным игрушкам для бассейна, Владимиров представил подробное предложение по уплотнению пляжного песка, 'чтобы ножи лучше застревали в латвийской почве.'"
    },
    date: "Nov 16, 2025",
    category: { en: "Politics", lv: "Politika", ru: "Политика" },
  },
  // Add more articles as needed - this will be automatically updated by your generation script
];

function generateRSSItem(article: typeof articles[0], language: 'en' | 'lv' | 'ru') {
  const baseUrl = 'https://jurmola.vercel.app'; // Update with your actual domain
  const title = article.title[language];
  const description = article.excerpt[language];
  const link = `${baseUrl}/article/${article.id}`;
  const guid = `${baseUrl}/article/${article.id}`;
  const pubDate = new Date(article.date).toUTCString();
  const category = article.category[language];

  return `
    <item>
      <title><![CDATA[${title}]]></title>
      <description><![CDATA[${description}]]></description>
      <link>${link}</link>
      <guid isPermaLink="true">${guid}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${category}</category>
    </item>`;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = (searchParams.get('lang') || 'en') as 'en' | 'lv' | 'ru';

  const titles = {
    en: 'Jurmola Telegraphs - The Baltic\'s Finest News Source',
    lv: 'Jurmola Telegraphs - Baltijas Labākais Ziņu Avots',
    ru: 'Jurmola Telegraphs - Лучший источник новостей Балтии'
  };

  const descriptions = {
    en: 'Satirical news about Latvia, Riga, Jurmala, and the Baltic region. Updated daily with fresh absurdist journalism.',
    lv: 'Satīriskas ziņas par Latviju, Rīgu, Jūrmalu un Baltijas reģionu. Atjaunināts katru dienu ar jauniem absurdisma žurnālisma rakstiem.',
    ru: 'Сатирические новости о Латвии, Риге, Юрмале и Балтийском регионе. Обновляется ежедневно свежей абсурдистской журналистикой.'
  };

  const baseUrl = 'https://jurmola.vercel.app';
  const feedUrl = `${baseUrl}/feed.xml?lang=${lang}`;

  const rssItems = articles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 20) // Last 20 articles
    .map(article => generateRSSItem(article, lang))
    .join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${titles[lang]}</title>
    <link>${baseUrl}</link>
    <description>${descriptions[lang]}</description>
    <language>${lang === 'lv' ? 'lv' : lang === 'ru' ? 'ru' : 'en'}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    <generator>Jurmola Telegraphs RSS Generator</generator>
    <image>
      <url>${baseUrl}/icon.svg</url>
      <title>${titles[lang]}</title>
      <link>${baseUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

