import type { Metadata } from 'next';

// Simplified article data for metadata generation
const articles = [
  {
    id: 1,
    slug: "jurmola-man-11-years-wedding-excuse",
    title: "Jurmola Man Spends 11 Years Constructing Elaborate Excuse For Why He Can't Attend Cousin's Wedding",
    description: "Local resident Jānis Bērziņš has reportedly been working on a multi-layered alibi involving a fictional dental emergency, a made-up business trip to Estonia, and a fabricated fear of the number 7 since receiving the wedding invitation in 2014.",
  },
  {
    id: 2,
    slug: "riga-monument-mystery-just-some-guy",
    title: "Riga Monument Confirmed to Be 'Just Some Guy' No One Can Remember Placing There",
    description: "After 47 years of standing in Vermanes Garden, historians have concluded the bronze statue is neither a war hero, poet, nor politician. City records show no documentation of its installation.",
  },
  {
    id: 3,
    slug: "latvian-potato-achieves-sentience",
    title: "Local Potato Achieves Sentience, Immediately Files Complaint About Latvian Cuisine Stereotypes",
    description: "A Baldone-grown potato reportedly gained consciousness yesterday and has retained legal counsel to address 'centuries of reductive typecasting.' The tuber released a statement saying it's 'more than just a food item.'",
  },
  {
    id: 4,
    slug: "baltic-sea-actually-large-puddle",
    title: "Area Man Realizes Baltic Sea He's Been Swimming In For 40 Years Is Actually Very Large Puddle",
    description: "Valdis Liepa, 58, learned yesterday that the Baltic Sea is technically a 'brackish sea' with significantly less salt than real oceans. 'I feel betrayed,' said Liepa.",
  },
  {
    id: 5,
    slug: "daugava-river-only-tuesdays-thursdays",
    title: "Daugava River Announces It Will Now Only Flow On Tuesdays And Thursdays Due To Budget Cuts",
    description: "Following a comprehensive recalibration of operational costs, the Daugava River has declared a reduced flow schedule. 'We've been flowing continuously for 11,000 years,' stated a river spokesperson.",
  },
  {
    id: 6,
    slug: "latvian-language-87-percent-silence",
    title: "Linguists Discover Latvian Language Actually 87% Uncomfortable Silence",
    description: "A comprehensive linguistic study reveals that 87% of Latvian communication consists of meaningful silences, averted eye contact, and subtle head movements.",
  },
  {
    id: 7,
    slug: "jurmola-man-life-savings-perfectly-round-stone",
    title: "Local Man Spends Entire Life Savings On Single Perfectly Round Stone From Jurmola Beach",
    description: "Artūrs Kalns, 52, has liquidated his retirement portfolio to acquire what he calls 'perfection rendered in physical form.' The pebble, valued at €0.03 by geologists, has been placed in a museum-grade display case.",
  },
  {
    id: 8,
    slug: "latvia-moving-east-geographic-adjustment",
    title: "Scientists Confirm Latvia Slightly More East Than Previously Thought; Country To Adjust Accordingly",
    description: "Following GPS recalibration, Latvia has been found 3.7 meters further east than recorded. Government officials announce plans to physically relocate the entire country. Estimated cost: €47 billion.",
  },
  {
    id: 9,
    slug: "london-banker-jurmola-compacting-beach-sand",
    title: "Famous London Investment Banker Visits Jurmola, Proposes Compacting Beach Sand For 'Strategic Purposes'",
    description: "Alexander Vladimirov, former Swiss national hockey player turned Russian triathlon representative, made a 'friendly visit' to Jurmola this week. After praising local saunas, spirits, and inflatable pool toys, Vladimirov unveiled a detailed proposal to compress beach sand.",
  },
];

type Props = {
  params: { slug: string }
  children: React.ReactNode
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const slug = params.slug;
  
  // Find article by slug or ID (for backwards compatibility)
  const article = articles.find(a => 
    a.slug === slug || (!isNaN(Number(slug)) && a.id === Number(slug))
  );

  if (!article) {
    return {
      title: 'Article Not Found | Jurmola Telegraphs',
      description: 'The requested article could not be found.',
    };
  }

  const baseUrl = 'https://jurmola.vercel.app';
  const articleUrl = `${baseUrl}/news/${article.slug}`;
  const imageUrl = `${baseUrl}/og-image.png`; // You can customize per article later

  return {
    title: `${article.title} | Jurmola Telegraphs`,
    description: article.description,
    keywords: ['Latvia', 'Jurmala', 'satire', 'news', 'Baltic', 'humor', 'Riga'],
    authors: [{ name: 'Jurmola Telegraphs' }],
    openGraph: {
      title: article.title,
      description: article.description,
      url: articleUrl,
      siteName: 'Jurmola Telegraphs',
      locale: 'en_US',
      type: 'article',
      publishedTime: new Date().toISOString(),
      authors: ['Jurmola Telegraphs'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [imageUrl],
      creator: '@JurmolaTelegraphs',
    },
    alternates: {
      canonical: articleUrl,
    },
  };
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

