import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../../lib/i18n-config';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const language = 'en';

export const metadata: Metadata = {
  title: 'Jurmala Attractions – Things to Do & Places to Visit | Jurmola',
  description: 'Complete guide to Jurmala attractions: beaches, Kemeri National Park, Jomas Street, Dzintari Concert Hall, museums and family fun. All the best things to do in Jurmala (Jurmola) in one guide.',
  keywords: 'jurmala attractions, jurmala things to do, jurmola attractions, jurmala beaches, kemeri national park, jomas street, dzintari concert hall, jurmala museums, jurmala sightseeing, what to do in jurmala',
  openGraph: {
    title: 'Jurmala Attractions – Things to Do & Places to Visit',
    description: 'Blue Flag beaches, Kemeri National Park, Jomas Street, Dzintari Concert Hall, museums and family fun. Complete guide to the best places in Jurmala.',
    url: 'https://jurmola.com/en/jurmola/attractions',
    siteName: 'Jurmola Telegraphs',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Jurmala Attractions and Things to Do' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/en/jurmola/attractions',
    languages: {
      'x-default': 'https://jurmola.com/jurmola/attractions',
      'en': 'https://jurmola.com/en/jurmola/attractions',
      'ru': 'https://jurmola.com/jurmola/attractions',
      'lv': 'https://jurmola.com/lv/jurmola/attractions',
    }
  }
};

const beaches = [
  {
    name: 'Majori Beach',
    description: 'The most popular and lively beach in Jurmala. A wide stretch of white sand with excellent infrastructure including lifeguards, changing cabins, playgrounds, and beach cafes. Stunning views over the Gulf of Riga.',
    location: 'Majori, central Jurmala',
    info: 'EU Blue Flag. Free access. Lifeguards on duty during summer season (June–August).',
    color: 'border-blue-400',
  },
  {
    name: 'Bulduri Beach',
    description: 'A quieter alternative to Majori. A calm and well-maintained beach, popular with families and locals. Shallow water and a gentle entry make it safe for swimming with children.',
    location: 'Bulduri, western Jurmala',
    info: 'EU Blue Flag. Free access. Less crowded even during peak season.',
    color: 'border-cyan-400',
  },
  {
    name: 'Dzintari Beach',
    description: 'Located next to the legendary Dzintari Concert Hall. A beautiful beach with good facilities, surrounded by pine trees. Popular with active visitors — beach events are frequently held here.',
    location: 'Dzintari, near the concert hall',
    info: 'Free access. Close to Dzintari Forest Park — ideal for combining beach and nature.',
    color: 'border-sky-400',
  },
  {
    name: 'Jaunkemeri Beach',
    description: 'A wild and untouched beach on the outskirts of Jurmala, near Kemeri National Park. Minimal infrastructure but maximum closeness to nature. Perfect for those seeking solitude and natural beauty.',
    location: 'Jaunkemeri, western edge of Jurmala',
    info: 'Free access. Wild beach with no facilities. Adjacent to Kemeri National Park.',
    color: 'border-teal-400',
  },
];

const natureParks = [
  {
    name: 'Kemeri National Park (Kemeru Nacionalais parks)',
    description: 'One of Latvia\'s premier natural sites, established in 1997. Covering 381 km2, the park\'s highlight is the Great Kemeri Bog with wooden boardwalks (1.4 km short loop or 3.4 km long loop) and an observation tower. Rich wildlife includes wild horses, deer, black storks, and dozens of bird species.',
    location: 'Western Jurmala, Kemeri district',
    info: 'Free entry. Parking: first hour \u20AC3, then \u20AC7 per 24 hours. Open year-round. Boardwalks are stroller-accessible.',
    color: 'border-green-500',
  },
  {
    name: 'Ragakapa Nature Park (Ragakapas dabas parks)',
    description: 'A sand dune nature reserve in the Lielupe district with unique pine forests over 150 years old. Scenic nature trails wind through dunes and forest. One of the best examples of Baltic Sea coastal landscapes.',
    location: 'Lielupe, eastern Jurmala',
    info: 'Free entry. Nature trails accessible year-round. Reachable from Lielupe train station.',
    color: 'border-emerald-500',
  },
  {
    name: 'Dzintari Forest Park (Dzintaru mezaparks)',
    description: 'A modern adventure park set in the pine forests of Dzintari. Rope courses at various difficulty levels, an observation tower with panoramic views, cycling and walking paths. An ideal spot for active recreation for the whole family.',
    location: 'Dzintari',
    info: 'Adventure park: ~\u20AC10\u201320 depending on course. Observation tower: free. Open spring through autumn.',
    color: 'border-lime-500',
  },
  {
    name: 'Lielupe River',
    description: 'A scenic river bordering Jurmala to the south. Offers boat trips, kayaking, and fishing. The riverbanks are a great spot for picnics and wildlife watching.',
    location: 'Southern border of Jurmala',
    info: 'Boat rentals available during summer season. Fishing with a license.',
    color: 'border-green-400',
  },
];

const cultureMuseums = [
  {
    name: 'Dzintari Concert Hall (Dzintaru koncertzale)',
    description: 'A legendary open-air concert venue and symbol of Jurmala. Originally built in the early 20th century and renovated in 2006. Summer brings concerts by world-class performers, festivals, and cultural events. Unique acoustics and the atmosphere of an evening concert among the pines.',
    location: 'Dzintari, Turaidas iela 1',
    info: 'Summer season: June\u2013September. Tickets: from \u20AC15 depending on event. Schedule at dzintarukoncertzale.lv.',
    color: 'border-purple-500',
  },
  {
    name: 'Jurmala Open Air Museum (Jurmalas brivdabas muzejs)',
    description: 'A 19th-century fisherman\'s farmstead recreating the life and traditions of Latvian coastal fishermen. Authentic buildings, fishing tools, and household items. Living history of Jurmala\'s seaside settlements before the resort era.',
    location: 'Bulduri, Tiklu iela 1',
    info: 'Open: Wed\u2013Sun, 10:00\u201318:00 (summer), 10:00\u201316:00 (winter). Admission: ~\u20AC2\u20133.',
    color: 'border-violet-500',
  },
  {
    name: 'Aspazija House (Aspazijas maja)',
    description: 'A memorial museum dedicated to the great Latvian poet Aspazija (Elza Pliekshane) in an elegant Art Nouveau villa. The exhibition tells the story of the poet\'s life and work, and that of her husband, the poet Rainis. The building itself is a beautiful example of early 20th-century architecture.',
    location: 'Dubulti, Z. Meierovica prospekts 18/20',
    info: 'Open: Wed\u2013Sun, 10:00\u201317:00. Admission: ~\u20AC2. Guided tours by appointment.',
    color: 'border-pink-500',
  },
  {
    name: 'Jurmala City Museum (Jurmalas pilsetas muzejs)',
    description: 'A local history museum telling the story of Jurmala from fishing villages to modern resort. Exhibitions on the development of resort culture, architecture, notable residents, and regional nature.',
    location: 'Majori, Tirgoniu iela 29',
    info: 'Open: Wed\u2013Sun, 10:00\u201317:00. Admission: ~\u20AC2\u20133. Temporary exhibitions change regularly.',
    color: 'border-indigo-500',
  },
  {
    name: 'Dubulti Lutheran Church',
    description: 'A beautiful historic church in the Dubulti district, built in the late 19th century. Distinguished by its unique architecture with Neo-Gothic elements. An active church open to visitors.',
    location: 'Dubulti',
    info: 'Free entry. Sunday services.',
    color: 'border-purple-400',
  },
];

const landmarks = [
  {
    name: 'Jomas Street (Jomas iela)',
    description: 'The main pedestrian street of Jurmala and its unofficial heart. Stretching 1.1 km from Majori station to Dzintari, it is lined with restaurants, cafes, souvenir shops, street musicians, and artists. In summer, life buzzes here well into the evening.',
    location: 'Majori \u2013 Dzintari, central Jurmala',
    info: 'Pedestrian zone. Open 24/7. Best time for a stroll: a summer evening.',
    color: 'border-amber-500',
  },
  {
    name: 'Wooden Architecture of Jurmala',
    description: 'Over 400 historic wooden villas from the 19th\u201320th centuries in Art Nouveau, National Romantic, and Neo-Gothic styles. Unique carvings, turrets, and verandas \u2014 each house is one of a kind. An architectural legacy from the era when Jurmala was a fashionable resort of the Russian Empire.',
    location: 'Throughout the city, especially Majori, Dzintari, Bulduri, Dubulti',
    info: 'Free to explore. A wooden architecture map is available at the tourist center.',
    color: 'border-orange-500',
  },
  {
    name: 'Jurmala Globe (Jurmalas globuss)',
    description: 'An iconic metal globe sculpture \u2014 one of the most recognizable symbols and popular photo spots in Jurmala. A favorite meeting point and the starting point for walks along Jomas Street.',
    location: 'Majori, near Jomas Street',
    info: '24/7 access. Free. Popular photo location.',
    color: 'border-yellow-500',
  },
  {
    name: 'Kemeri Water Tower (Kemeru udenstornis)',
    description: 'A historic water tower and landmark of the Kemeri district. Nearby are the famous sulfur springs that once made Kemeri a popular balneological resort.',
    location: 'Kemeri',
    info: 'External viewing. Sulfur springs are freely accessible.',
    color: 'border-amber-400',
  },
];

const familyFun = [
  {
    name: 'Livu Akvaparks',
    description: 'One of the largest water parks in the Baltics, open year-round. Water slides, wave pool, children\'s zone, spa, and saunas. Great entertainment for the whole family in any weather.',
    location: 'Lielupe, Viestura iela 24',
    info: 'Open year-round. Tickets: from ~\u20AC15 (children) to ~\u20AC25 (adults) for 3 hours. Details at akvaparks.lv.',
    color: 'border-rose-500',
  },
  {
    name: 'Dzintari Adventure Park',
    description: 'Rope courses among the pines at various difficulty levels \u2014 from children\'s routes to extreme courses for adults. Trampolines, bike rental, and picnic areas are also available.',
    location: 'Dzintari, within Dzintari Forest Park',
    info: 'Open: May\u2013October. Children\'s courses: from ~\u20AC8. Adult courses: from ~\u20AC15.',
    color: 'border-red-400',
  },
];

const guideLinks = [
  { href: 'jurmola', title: 'Jurmala \u2013 Main Guide', description: 'Return to the full Jurmala city guide.', icon: '🏠', color: 'from-blue-50 to-cyan-50', border: 'border-blue-300' },
  { href: 'jurmola/weather', title: 'Weather in Jurmala', description: 'Monthly forecast, sea temperature, and what to pack.', icon: '🌤️', color: 'from-sky-50 to-blue-50', border: 'border-sky-300' },
  { href: 'jurmola/how-to-get-there', title: 'How to Get There', description: 'Train, taxi, bus, and driving from Riga.', icon: '🚂', color: 'from-green-50 to-emerald-50', border: 'border-green-300' },
  { href: 'jurmola/restaurants', title: 'Restaurants & Cafes', description: 'The best places to eat in Jurmala.', icon: '🍽️', color: 'from-orange-50 to-amber-50', border: 'border-orange-300' },
  { href: 'jurmola/where-to-stay', title: 'Where to Stay', description: 'Spa hotels, boutique guesthouses, and budget options.', icon: '🏨', color: 'from-rose-50 to-pink-50', border: 'border-rose-300' },
];

export default function AttractionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />

      <section className="bg-gradient-to-br from-purple-50 via-violet-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href={localizedHref('jurmola', language)} className="hover:text-blue-600 transition">&larr; Jurmala City Guide</Link>
          </nav>
          <p className="text-sm font-medium text-purple-600 mb-3 tracking-wide uppercase">City Guide 2026</p>
          <h1 className="text-5xl font-bold mb-6 leading-tight">Jurmala Attractions &amp; Things to Do</h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            What to see and where to go in <strong>Jurmala</strong> (Jurmola / J&#363;rmala) &mdash; from pristine white-sand beaches
            and the bog trails of Kemeri to the bustling Jomas Street and the legendary Dzintari Concert Hall.
          </p>
          <p className="text-lg text-gray-500">15 best places you should visit</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Beaches */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🏖️</span>
            <div>
              <h2 className="text-3xl font-bold">Beaches</h2>
              <p className="text-gray-600">33 km of white sand with EU Blue Flag status &mdash; free access to all beaches</p>
            </div>
          </div>
          <div className="grid gap-5">
            {beaches.map((beach) => (
              <div key={beach.name} className={`p-6 bg-white rounded-lg border-l-4 ${beach.color} shadow-sm hover:shadow-md transition-shadow`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{beach.name}</h3>
                <p className="text-gray-700 mb-3">{beach.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">📍 {beach.location}</span>
                </div>
                <p className="text-sm text-blue-700 bg-blue-50 rounded-md px-3 py-2 mt-3">{beach.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nature & Parks */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🌿</span>
            <div>
              <h2 className="text-3xl font-bold">Nature &amp; Parks</h2>
              <p className="text-gray-600">National parks, nature reserves, forests, and river</p>
            </div>
          </div>
          <div className="grid gap-5">
            {natureParks.map((park) => (
              <div key={park.name} className={`p-6 bg-white rounded-lg border-l-4 ${park.color} shadow-sm hover:shadow-md transition-shadow`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{park.name}</h3>
                <p className="text-gray-700 mb-3">{park.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">📍 {park.location}</span>
                </div>
                <p className="text-sm text-green-700 bg-green-50 rounded-md px-3 py-2 mt-3">{park.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Culture & Museums */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🏛️</span>
            <div>
              <h2 className="text-3xl font-bold">Culture &amp; Museums</h2>
              <p className="text-gray-600">Concert halls, museums, and historic buildings</p>
            </div>
          </div>
          <div className="grid gap-5">
            {cultureMuseums.map((item) => (
              <div key={item.name} className={`p-6 bg-white rounded-lg border-l-4 ${item.color} shadow-sm hover:shadow-md transition-shadow`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">📍 {item.location}</span>
                </div>
                <p className="text-sm text-purple-700 bg-purple-50 rounded-md px-3 py-2 mt-3">{item.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Landmarks */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🗺️</span>
            <div>
              <h2 className="text-3xl font-bold">Landmarks &amp; Points of Interest</h2>
              <p className="text-gray-600">Iconic streets, architecture, and notable sites</p>
            </div>
          </div>
          <div className="grid gap-5">
            {landmarks.map((item) => (
              <div key={item.name} className={`p-6 bg-white rounded-lg border-l-4 ${item.color} shadow-sm hover:shadow-md transition-shadow`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">📍 {item.location}</span>
                </div>
                <p className="text-sm text-amber-700 bg-amber-50 rounded-md px-3 py-2 mt-3">{item.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Family Fun */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🎢</span>
            <div>
              <h2 className="text-3xl font-bold">Family Fun</h2>
              <p className="text-gray-600">Water parks, adventure courses, and active recreation</p>
            </div>
          </div>
          <div className="grid gap-5">
            {familyFun.map((item) => (
              <div key={item.name} className={`p-6 bg-white rounded-lg border-l-4 ${item.color} shadow-sm hover:shadow-md transition-shadow`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-700 mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">📍 {item.location}</span>
                </div>
                <p className="text-sm text-rose-700 bg-rose-50 rounded-md px-3 py-2 mt-3">{item.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Tips */}
        <section className="mb-12 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-l-4 border-orange-400">
          <h2 className="text-2xl font-bold mb-4">Practical Tips</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2"><span className="font-bold text-orange-500">1.</span> Most natural attractions are free &mdash; you only need to pay for parking at Kemeri.</li>
            <li className="flex gap-2"><span className="font-bold text-orange-500">2.</span> The easiest way to travel between districts is by commuter train &mdash; stations are in every district.</li>
            <li className="flex gap-2"><span className="font-bold text-orange-500">3.</span> Summer (June&ndash;August) is peak season: everything is open but crowded. May and September are a great compromise.</li>
            <li className="flex gap-2"><span className="font-bold text-orange-500">4.</span> For the Kemeri Bog, bring comfortable shoes and insect repellent (especially in summer).</li>
            <li className="flex gap-2"><span className="font-bold text-orange-500">5.</span> Wooden architecture is best explored on foot or by bicycle &mdash; bike rental is available in Majori.</li>
          </ul>
        </section>

        {/* Other Guide Sections */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">More Guide Sections</h2>
          <div className="grid gap-4">
            {guideLinks.map((page) => (
              <Link key={page.href} href={localizedHref(page.href, language)} className={`block p-5 bg-gradient-to-r ${page.color} rounded-xl border ${page.border} hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5`}>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{page.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{page.title}</h3>
                    <p className="text-sm text-gray-600">{page.description}</p>
                  </div>
                  <span className="ml-auto text-gray-400 text-xl">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8 px-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white">
          <h2 className="text-2xl font-bold mb-3">Planning Your Trip to Jurmala?</h2>
          <p className="text-purple-100 mb-6">Find out how to get there and where to stay</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={localizedHref('jurmola/how-to-get-there', language)} className="px-6 py-2 bg-white text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition">How to Get There</Link>
            <Link href={localizedHref('jurmola/where-to-stay', language)} className="px-6 py-2 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition border border-white/30">Where to Stay</Link>
          </div>
        </section>

      </main>

      <Footer language={language} />
    </div>
  );
}
