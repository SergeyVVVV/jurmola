import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../../lib/i18n-config';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const language = 'lv';

export const metadata: Metadata = {
  title: 'Jūrmalas apskates vietas – Ko apskatīt un kur aiziet | Jurmola',
  description: 'Labākās Jūrmalas apskates vietas: pludmales, Ķemeru Nacionālais parks, Jomas iela, Dzintaru koncertzāle. Pilns ceļvedis ar adresēm un ieejas maksu.',
  keywords: 'jūrmala apskates vietas, jūrmala ko apskatīt, jurmola, jūrmala pludmales, ķemeru nacionālais parks, jomas iela, dzintaru koncertzāle',
  openGraph: { title: 'Jūrmalas apskates vietas – Ko apskatīt', url: 'https://jurmola.com/lv/jurmola/attractions', siteName: 'Jurmola Telegraphs', locale: 'lv_LV', type: 'website' },
  alternates: { canonical: 'https://jurmola.com/lv/jurmola/attractions', languages: { 'x-default': 'https://jurmola.com/jurmola/attractions', en: 'https://jurmola.com/en/jurmola/attractions', ru: 'https://jurmola.com/jurmola/attractions', lv: 'https://jurmola.com/lv/jurmola/attractions' } },
};

const attractions = [
  { name: 'Jomas iela', type: 'Iela', location: 'Majori', desc: 'Galvenā gājēju iela Jūrmalā, 1,1 km gara. Restorāni, veikali, ielu mūziķi un kafejnīcas. Jūrmalas sirds.' },
  { name: 'Dzintaru koncertzāle', type: 'Kultūra', location: 'Dzintari', desc: 'Ikoniska brīvdabas koncertvieta. Vasaras koncerti, festivāli un pasākumi. Uzcelta 1936. gadā.' },
  { name: 'Majoru pludmale', type: 'Pludmale', location: 'Majori', desc: 'Populārākā Jūrmalas pludmale ar ES Zilo karogu. Labiekārtota ar tualetēm, ģērbtuvēm un glābējiem vasarā.' },
  { name: 'Bulduru pludmale', type: 'Pludmale', location: 'Bulduri', desc: 'Klusāka pludmale, ideāla ģimenēm. Smalkas smiltis un lēzena ieiešana ūdenī.' },
  { name: 'Dzintaru pludmale', type: 'Pludmale', location: 'Dzintari', desc: 'Netālu no koncertzāles. Populāra jauniešu vidū, ar pludmales bāriem vasarā.' },
  { name: 'Ķemeru Nacionālais parks', type: 'Daba', location: 'Ķemeri', desc: 'Dibināts 1997. gadā, 381 km². Lielais Ķemeru tīrelis ar pastaigu taku (1,4 km īsā / 3,4 km garā loka). Skatu tornis. Ieeja bezmaksas, stāvvieta €3/st + €7/24h.' },
  { name: 'Ragakāpas dabas parks', type: 'Daba', location: 'Lielupe', desc: 'Smilšu kāpu dabas rezervāts ar 150+ gadus vecām priedēm. Dabas takas un skatu platformas.' },
  { name: 'Jūrmalas brīvdabas muzejs', type: 'Muzejs', location: 'Buļļuciems', desc: 'Zvejnieku saimniecība no 19. gadsimta. Tradicionālās dzīves eksponāti un vēsturiskas ēkas.' },
  { name: 'Aspazijas māja', type: 'Muzejs', location: 'Dubulti', desc: 'Dzejnieces Aspazijas piemiņas muzejs. Jūgendstila villa ar oriģinālu interjeru un izstādēm.' },
  { name: 'Jūrmalas pilsētas muzejs', type: 'Muzejs', location: 'Dubulti', desc: 'Vietējā vēsture no kurorta pirmsākumiem līdz mūsdienām. Tirgoņu iela 29.' },
  { name: 'Koka arhitektūra', type: 'Arhitektūra', location: 'Visa pilsēta', desc: 'Vairāk nekā 400 vēsturiskas koka villas jūgendstilā, nacionālā romantisma un neogotikas stilā.' },
  { name: 'Dzintaru mežaparks', type: 'Parks', location: 'Dzintari', desc: 'Piedzīvojumu parks ar virves trasēm, skatu tornis, velo un pastaigu celiņi. Ideāls ģimenēm.' },
  { name: 'Līvu Akvaparks', type: 'Izklaide', location: 'Jūrmala', desc: 'Viens no lielākajiem akvaparkiemBaltijā. Atvērts visu gadu ar ūdens atrakcijām visiem vecumiem.' },
  { name: 'Jūrmalas globuss', type: 'Piemineklis', location: 'Majori', desc: 'Ikoniska metāla globusa skulptūra. Populāra foto vieta pie pludmales.' },
  { name: 'Dubultu luterāņu baznīca', type: 'Arhitektūra', location: 'Dubulti', desc: 'Skaista vēsturiska baznīca neogotikas stilā. Viena no vecākajām ēkām Jūrmalā.' },
];

export default function AttractionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />
      <section className="bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-sm text-gray-500 mb-4"><Link href={localizedHref('jurmola', language)} className="hover:text-blue-600">Jūrmalas ceļvedis</Link> &rarr; Apskates vietas</div>
          <h1 className="text-4xl font-bold mb-4">Jūrmalas apskates vietas</h1>
          <p className="text-xl text-gray-700">Ko apskatīt un kur aiziet Jūrmalā – pludmales, parki, muzeji, arhitektūra un izklaide.</p>
        </div>
      </section>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid gap-4">
          {attractions.map((a) => (
            <div key={a.name} className="p-5 bg-white rounded-xl border border-gray-200 hover:shadow-md transition">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{a.name}</h3>
                  <div className="flex gap-2 mt-1 mb-2">
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">{a.type}</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{a.location}</span>
                  </div>
                  <p className="text-gray-600">{a.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <section className="mt-12 p-6 bg-gray-50 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Vairāk Jūrmalas ceļvedī</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <Link href={localizedHref('jurmola/weather', language)} className="p-3 bg-white rounded-lg border hover:shadow transition flex items-center gap-2"><span>🌤️</span> <span>Laikapstākļi</span></Link>
            <Link href={localizedHref('jurmola/how-to-get-there', language)} className="p-3 bg-white rounded-lg border hover:shadow transition flex items-center gap-2"><span>🚂</span> <span>Kā nokļūt</span></Link>
            <Link href={localizedHref('jurmola/restaurants', language)} className="p-3 bg-white rounded-lg border hover:shadow transition flex items-center gap-2"><span>🍽️</span> <span>Restorāni</span></Link>
            <Link href={localizedHref('jurmola/where-to-stay', language)} className="p-3 bg-white rounded-lg border hover:shadow transition flex items-center gap-2"><span>🏨</span> <span>Kur palikt</span></Link>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </div>
  );
}
