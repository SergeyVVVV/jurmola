import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../lib/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const language = 'en';

export const metadata: Metadata = {
  title: 'Jurmala (Jūrmala) – Complete City Guide to Latvia\'s Baltic Resort 2026 | Jurmola',
  description: 'Complete guide to Jurmala, Latvia: weather, how to get there, attractions, best restaurants and hotels. Jurmala (Jūrmala) – the largest resort city on the Baltic Sea coast.',
  keywords: 'jurmala, jurmola, jūrmala, jurmala guide, jurmala latvia, jurmala beach, jurmala attractions, jurmala restaurants, jurmala hotels, jurmala travel',
  openGraph: {
    title: 'Jurmala – Complete City Guide to Latvia\'s Baltic Resort',
    description: 'Everything about Jurmala: monthly weather, how to get from Riga, attractions, best restaurants and hotels. Plan your perfect trip to Jurmala.',
    url: 'https://jurmola.com/en/jurmola',
    siteName: 'Jurmola Telegraphs',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Jurmala – Baltic\'s premier resort city' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/en/jurmola',
    languages: {
      'x-default': 'https://jurmola.com/jurmola',
      'en': 'https://jurmola.com/en/jurmola',
      'ru': 'https://jurmola.com/jurmola',
      'lv': 'https://jurmola.com/lv/jurmola',
    }
  }
};

const guidePages = [
  { href: 'jurmola/weather', title: 'Weather in Jurmala', description: 'Monthly forecast, sea temperature, best time to visit, and what to pack.', icon: '🌤️', color: 'from-sky-50 to-blue-50', border: 'border-sky-300' },
  { href: 'jurmola/how-to-get-there', title: 'How to Get There', description: 'Train from Riga for €1.50, taxi from airport, buses, driving, and city entry pass.', icon: '🚂', color: 'from-green-50 to-emerald-50', border: 'border-green-300' },
  { href: 'jurmola/attractions', title: 'Attractions & Things to Do', description: 'Beaches, Kemeri National Park, Jomas Street, Dzintari, and more.', icon: '🏛️', color: 'from-purple-50 to-violet-50', border: 'border-purple-300' },
  { href: 'jurmola/restaurants', title: 'Restaurants, Bars & Cafes', description: 'From fine dining to cozy cafes: the best places to eat in Jurmala.', icon: '🍽️', color: 'from-orange-50 to-amber-50', border: 'border-orange-300' },
  { href: 'jurmola/where-to-stay', title: 'Where to Stay', description: 'Spa hotels, boutique guesthouses, and budget accommodation options.', icon: '🏨', color: 'from-rose-50 to-pink-50', border: 'border-rose-300' },
];

export default function JurmolaGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />

      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">City Guide 2026</p>
          <h1 className="text-5xl font-bold mb-6 leading-tight">Jurmala – Complete Guide to the Baltic&apos;s Premier Resort</h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Everything you need to know about <strong>Jurmala</strong> (Jūrmala) – Latvia&apos;s largest resort city.
            33 km of white sandy beaches, pine forests, historic villas, and vibrant cultural life.
          </p>
          <p className="text-lg text-gray-500">Planning a trip to Jurmala? Start here.</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">About Jurmala</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              <strong>Jurmala</strong> (Latvian: <em>Jūrmala</em>, also spelled <strong>Jurmola</strong>) is Latvia&apos;s and the Baltic&apos;s largest resort city,
              located on the shore of the Gulf of Riga, just 25 km from the capital city of Riga.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              The city&apos;s name derives from the Latvian word &quot;jūra&quot; meaning &quot;sea.&quot; Jurmala stretches 32 kilometers along the coastline,
              uniting 15 distinct districts: Lielupe, Bulduri, Dzintari, Majori, Dubulti, Melluzi, and more. Each district has its own unique character.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              The city is famous for its 33 km of EU Blue Flag sandy beaches, unique wooden architecture from the 19th–20th centuries,
              healing pine forest air, and rich cultural scene. Over 2 million tourists visit Jurmala annually.
            </p>
          </div>
        </section>

        <section className="mb-12 p-6 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Jurmala at a Glance</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { value: '50,000', label: 'residents' },
              { value: '33 km', label: 'of beaches' },
              { value: '25 km', label: 'from Riga' },
              { value: '15', label: 'districts' },
              { value: '50%', label: 'forest' },
              { value: '30 min', label: 'by train' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-2">
                <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Guide Sections</h2>
          <div className="grid gap-4">
            {guidePages.map((page) => (
              <Link key={page.href} href={localizedHref(page.href, language)} className={`block p-6 bg-gradient-to-r ${page.color} rounded-xl border ${page.border} hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5`}>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{page.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{page.title}</h3>
                    <p className="text-gray-600">{page.description}</p>
                  </div>
                  <span className="ml-auto text-gray-400 text-2xl self-center">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Visit Jurmala</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">World-Class Beaches</h3>
              <p className="text-gray-700">33 km of white sand awarded the EU Blue Flag. Gentle water entry, clean Gulf of Riga waters, and well-equipped beaches.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Nature & Wellness</h3>
              <p className="text-gray-700">Half the city is covered in pine forests. Healing sea air mixed with pine fragrance, and the mineral springs of Kemeri.</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Architecture & History</h3>
              <p className="text-gray-700">Unique wooden villas from the 19th–20th century in Art Nouveau, National Romantic, and Neo-Gothic styles. Over 400 architectural monuments.</p>
            </div>
            <div className="p-6 bg-amber-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Culture & Entertainment</h3>
              <p className="text-gray-700">Dzintari Concert Hall, over 20 festivals annually, lively Jomas Street with restaurants and street musicians.</p>
            </div>
          </div>
        </section>

        <section className="mb-12 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-l-4 border-orange-400">
          <h2 className="text-2xl font-bold mb-4">Jurmala or Jurmola?</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-3">
            The correct spelling of the city is <strong>Jurmala</strong> (Latvian: <strong>Jūrmala</strong>).
            The variant <strong>&quot;Jurmola&quot;</strong> is a common alternate spelling.
            Both spellings lead to our guide so you can find the information you need, however you search.
          </p>
          <p className="text-sm text-gray-500">Other spellings: Jurmala, Jūrmala, Юрмала, Юрмола, Jurmola</p>
        </section>

        <section className="text-center py-8 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white">
          <h2 className="text-2xl font-bold mb-3">Ready for Your Trip to Jurmala?</h2>
          <p className="text-blue-100 mb-6">Start planning by choosing a guide section above</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={localizedHref('jurmola/how-to-get-there', language)} className="px-6 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition">How to Get There</Link>
            <Link href={localizedHref('jurmola/where-to-stay', language)} className="px-6 py-2 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition border border-white/30">Where to Stay</Link>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
