import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../lib/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const language = 'lv';

export const metadata: Metadata = {
  title: 'Jūrmala – Pilns ceļvedis pa Baltijas kūrorta galvaspilsētu 2026 | Jurmola',
  description: 'Pilns ceļvedis par Jūrmalu: laikapstākļi, kā nokļūt, apskates vietas, labākie restorāni un viesnīcas. Jūrmala – lielākā kūrorta pilsēta Latvijā pie Baltijas jūras.',
  keywords: 'jūrmala, jurmala, jurmola, jūrmala ceļvedis, jūrmala latvija, jūrmala pludmale, jūrmala apskates vietas, jūrmala restorāni, jūrmala viesnīcas',
  openGraph: {
    title: 'Jūrmala – Pilns ceļvedis pa Baltijas kūrorta galvaspilsētu',
    description: 'Viss par Jūrmalu: laikapstākļi pa mēnešiem, kā nokļūt no Rīgas, apskates vietas, labākie restorāni un viesnīcas.',
    url: 'https://jurmola.com/lv/jurmola',
    siteName: 'Jurmola Telegraphs',
    locale: 'lv_LV',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Jūrmala – Baltijas kūrorta galvaspilsēta' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/lv/jurmola',
    languages: {
      'x-default': 'https://jurmola.com/jurmola',
      'en': 'https://jurmola.com/en/jurmola',
      'ru': 'https://jurmola.com/jurmola',
      'lv': 'https://jurmola.com/lv/jurmola',
    }
  }
};

const guidePages = [
  { href: 'jurmola/weather', title: 'Laikapstākļi Jūrmalā', description: 'Prognoze pa mēnešiem, jūras temperatūra, labākais laiks apmeklējumam un ko ņemt līdzi.', icon: '🌤️', color: 'from-sky-50 to-blue-50', border: 'border-sky-300' },
  { href: 'jurmola/how-to-get-there', title: 'Kā nokļūt', description: 'Vilciens no Rīgas par €1.50, taksometrs no lidostas, autobusi, auto un iebraukšanas atļauja.', icon: '🚂', color: 'from-green-50 to-emerald-50', border: 'border-green-300' },
  { href: 'jurmola/attractions', title: 'Apskates vietas', description: 'Pludmales, Ķemeru Nacionālais parks, Jomas iela, Dzintari un citas vietas.', icon: '🏛️', color: 'from-purple-50 to-violet-50', border: 'border-purple-300' },
  { href: 'jurmola/restaurants', title: 'Restorāni, bāri un kafejnīcas', description: 'No izsmalcinātiem restorāniem līdz mājīgām kafejnīcām: labākās ēdināšanas vietas Jūrmalā.', icon: '🍽️', color: 'from-orange-50 to-amber-50', border: 'border-orange-300' },
  { href: 'jurmola/where-to-stay', title: 'Kur palikt', description: 'SPA viesnīcas, butika viesnīcas un budžeta naktsmītnes: labākās izmitināšanas iespējas.', icon: '🏨', color: 'from-rose-50 to-pink-50', border: 'border-rose-300' },
];

export default function JurmolaGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />

      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Ceļvedis 2026</p>
          <h1 className="text-5xl font-bold mb-6 leading-tight">Jūrmala – Pilns ceļvedis pa Baltijas kūrorta galvaspilsētu</h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Viss, kas jāzina par <strong>Jūrmalu</strong> – Latvijas lielāko kūrorta pilsētu.
            33 km balto smilšu pludmaļu, priežu meži, vēsturiskas villas un dzīvīga kultūras dzīve.
          </p>
          <p className="text-lg text-gray-500">Plānojat braucienu uz Jūrmalu? Sāciet šeit.</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Par Jūrmalu</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              <strong>Jūrmala</strong> (arī pazīstama kā <strong>Jurmala</strong> vai <strong>Jurmola</strong>) ir Latvijas un visas Baltijas lielākā kūrorta pilsēta,
              kas atrodas Rīgas jūras līča krastā, tikai 25 km no galvaspilsētas Rīgas.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Pilsētas nosaukums cēlies no latviešu vārda «jūra». Jūrmala stiepjas 32 kilometrus gar piekrasti,
              apvienojot 15 rajonus: Lielupi, Buldurus, Dzintarus, Majorus, Dubultus, Mellužus un citus. Katram rajonam ir savs unikāls raksturs.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Pilsēta ir slavena ar 33 km garām ES Zilā karoga smilšu pludmalēm, unikālu koka arhitektūru no 19.–20. gadsimta,
              dziedinošo priežu mežu gaisu un bagātu kultūras dzīvi. Katru gadu Jūrmalu apmeklē vairāk nekā 2 miljoni tūristu.
            </p>
          </div>
        </section>

        <section className="mb-12 p-6 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Jūrmala skaitļos</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { value: '50 000', label: 'iedzīvotāju' },
              { value: '33 km', label: 'pludmaļu' },
              { value: '25 km', label: 'no Rīgas' },
              { value: '15', label: 'rajonu' },
              { value: '50%', label: 'mežs' },
              { value: '30 min', label: 'ar vilcienu' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-2">
                <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Ceļveža sadaļas</h2>
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
          <h2 className="text-3xl font-bold mb-6">Kāpēc apmeklēt Jūrmalu</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Pasaules klases pludmales</h3>
              <p className="text-gray-700">33 km balto smilšu ar ES Zilo karogu. Lēzena ieiešana ūdenī, tīrs Rīgas jūras līča ūdens un labiekārtotās pludmales.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Daba un veselība</h3>
              <p className="text-gray-700">Puse pilsētas ir klāta ar priežu mežiem. Dziedinošais jūras gaiss, sajaukts ar priežu aromātu, un Ķemeru minerālūdens avoti.</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Arhitektūra un vēsture</h3>
              <p className="text-gray-700">Unikālas koka villas no 19.–20. gs. jūgendstilā, nacionālā romantisma un neogotikas stilā. Vairāk nekā 400 arhitektūras pieminekļi.</p>
            </div>
            <div className="p-6 bg-amber-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Kultūra un izklaide</h3>
              <p className="text-gray-700">Dzintaru koncertzāle, vairāk nekā 20 festivāli gadā, dzīvīgā Jomas iela ar restorāniem un ielu mūziķiem.</p>
            </div>
          </div>
        </section>

        <section className="mb-12 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-l-4 border-orange-400">
          <h2 className="text-2xl font-bold mb-4">Jūrmala vai Jurmola?</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-3">
            Pareizais pilsētas nosaukums ir <strong>Jūrmala</strong>.
            Variants <strong>«Jurmola»</strong> ir alternatīvs rakstījums, ko bieži lieto krievvalodīgie tūristi.
            Abi varianti ved uz mūsu ceļvedi, lai jūs varētu atrast nepieciešamo informāciju neatkarīgi no meklēšanas veida.
          </p>
          <p className="text-sm text-gray-500">Citi rakstījumi: Jurmala, Jūrmala, Юрмала, Юрмола, Jurmola</p>
        </section>

        <section className="text-center py-8 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white">
          <h2 className="text-2xl font-bold mb-3">Gatavi braucienam uz Jūrmalu?</h2>
          <p className="text-blue-100 mb-6">Sāciet plānošanu, izvēloties ceļveža sadaļu augstāk</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={localizedHref('jurmola/how-to-get-there', language)} className="px-6 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition">Kā nokļūt</Link>
            <Link href={localizedHref('jurmola/where-to-stay', language)} className="px-6 py-2 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition border border-white/30">Kur palikt</Link>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
