import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../lib/i18n-config';
import Header from '../components/Header';
import Footer from '../components/Footer';

const language = 'ru';

export const metadata: Metadata = {
  title: 'Юрмала (Jurmala) – Полный путеводитель по курортной столице Балтии 2026 | Jurmola',
  description: 'Полный гид по Юрмале: погода, как добраться, достопримечательности, лучшие рестораны и отели. Юрмала (Jurmala, Jūrmala) – крупнейший курорт Латвии на берегу Балтийского моря.',
  keywords: 'юрмала, юрмола, jurmala, jurmola, jūrmala, путеводитель юрмала, юрмала латвия, юрмала отдых, юрмала пляж, юрмала достопримечательности, юрмала рестораны, юрмала отели',
  openGraph: {
    title: 'Юрмала – Полный путеводитель по курортной столице Балтии',
    description: 'Все о Юрмале: погода по месяцам, как добраться из Риги, достопримечательности, лучшие рестораны и отели. Планируйте идеальный отдых в Юрмале.',
    url: 'https://jurmola.com/jurmola',
    siteName: 'Jurmola Telegraphs',
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Юрмала – курортная столица Балтии' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/jurmola',
    languages: {
      'x-default': 'https://jurmola.com/jurmola',
      'en': 'https://jurmola.com/en/jurmola',
      'ru': 'https://jurmola.com/jurmola',
      'lv': 'https://jurmola.com/lv/jurmola',
    }
  }
};

const guidePages = [
  { href: 'jurmola/weather', title: 'Погода в Юрмале', description: 'Прогноз по месяцам, температура воды, лучшее время для поездки и что брать с собой.', icon: '🌤️', color: 'from-sky-50 to-blue-50', border: 'border-sky-300' },
  { href: 'jurmola/how-to-get-there', title: 'Как добраться', description: 'Поезд из Риги за €1.50, такси из аэропорта, автобусы, автомобиль и пропуск в город.', icon: '🚂', color: 'from-green-50 to-emerald-50', border: 'border-green-300' },
  { href: 'jurmola/attractions', title: 'Достопримечательности', description: 'Пляжи, Кемерский национальный парк, улица Йомас, Дзинтари и другие места.', icon: '🏛️', color: 'from-purple-50 to-violet-50', border: 'border-purple-300' },
  { href: 'jurmola/restaurants', title: 'Рестораны, бары и кафе', description: 'От изысканных ресторанов до уютных кафе: лучшие места для еды в Юрмале.', icon: '🍽️', color: 'from-orange-50 to-amber-50', border: 'border-orange-300' },
  { href: 'jurmola/where-to-stay', title: 'Где остановиться', description: 'Спа-отели, бутик-гостиницы и бюджетное жилье: лучшие варианты размещения.', icon: '🏨', color: 'from-rose-50 to-pink-50', border: 'border-rose-300' },
];

export default function JurmolaGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />

      <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm font-medium text-blue-600 mb-3 tracking-wide uppercase">Путеводитель 2026</p>
          <h1 className="text-5xl font-bold mb-6 leading-tight">Юрмала – Полный гид по курортной столице Балтии</h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Всё, что нужно знать о <strong>Юрмале</strong> (Jūrmala) – крупнейшем курортном городе Латвии.
            33 км белоснежных пляжей, сосновые леса, исторические виллы и яркая культурная жизнь.
          </p>
          <p className="text-lg text-gray-500">Планируете поездку в Юрмалу? Начните здесь.</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">О Юрмале</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              <strong>Юрмала</strong> (латыш. <em>Jūrmala</em>, также часто пишут <strong>Юрмола</strong> / <strong>Jurmola</strong> / <strong>Jurmala</strong>) –
              крупнейший курортный город Латвии и всей Прибалтики, расположенный на берегу Рижского залива Балтийского моря, всего в 25 км от столицы Риги.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Название города происходит от латышского слова «jūra» — море. Юрмала протянулась на 32 километра вдоль побережья,
              объединяя 15 районов: Лиелупе, Булдури, Дзинтари, Майори, Дубулти, Меллужи и другие. Каждый район обладает своим неповторимым характером.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Город знаменит 33-километровыми песчаными пляжами с Голубым флагом ЕС, уникальной деревянной архитектурой XIX–XX веков,
              целебным сосновым воздухом и богатой культурной жизнью. Ежегодно Юрмалу посещают более 2 миллионов туристов.
            </p>
          </div>
        </section>

        <section className="mb-12 p-6 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Юрмала в цифрах</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { value: '50 000', label: 'жителей' },
              { value: '33 км', label: 'пляжей' },
              { value: '25 км', label: 'от Риги' },
              { value: '15', label: 'районов' },
              { value: '50%', label: 'лес' },
              { value: '30 мин', label: 'поездом' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-2">
                <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Разделы путеводителя</h2>
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
          <h2 className="text-3xl font-bold mb-6">Почему стоит посетить Юрмалу</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Пляжи мирового класса</h3>
              <p className="text-gray-700">33 км белого песка с Голубым флагом ЕС. Пологий вход в воду, чистая вода Рижского залива и оборудованные пляжи.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Природа и здоровье</h3>
              <p className="text-gray-700">Половина города покрыта сосновыми лесами. Целебный морской воздух, смешанный с ароматом хвои, и минеральные источники Кемери.</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Архитектура и история</h3>
              <p className="text-gray-700">Уникальные деревянные виллы XIX–XX веков в стиле модерн, национальной романтики и неоготики. Более 400 памятников архитектуры.</p>
            </div>
            <div className="p-6 bg-amber-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Культура и развлечения</h3>
              <p className="text-gray-700">Концертный зал «Дзинтари», более 20 фестивалей в год, оживленная улица Йомас с ресторанами и уличными музыкантами.</p>
            </div>
          </div>
        </section>

        <section className="mb-12 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-l-4 border-orange-400">
          <h2 className="text-2xl font-bold mb-4">Юрмала или Юрмола? Jurmala или Jurmola?</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-3">
            Правильное написание города — <strong>Юрмала</strong> (латыш. <strong>Jūrmala</strong>).
            Вариант <strong>«Юрмола»</strong> (Jurmola) — это разговорная форма, часто используемая русскоязычными туристами.
            Оба варианта написания ведут на наш путеводитель, чтобы вы могли найти нужную информацию, как бы вы ни искали.
          </p>
          <p className="text-sm text-gray-500">Другие варианты написания: Jurmala, Jūrmala, Юрмала, Юрмола, Jurmola</p>
        </section>

        <section className="text-center py-8 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white">
          <h2 className="text-2xl font-bold mb-3">Готовы к поездке в Юрмалу?</h2>
          <p className="text-blue-100 mb-6">Начните планирование с выбора раздела путеводителя выше</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={localizedHref('jurmola/how-to-get-there', language)} className="px-6 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition">Как добраться</Link>
            <Link href={localizedHref('jurmola/where-to-stay', language)} className="px-6 py-2 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition border border-white/30">Где остановиться</Link>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
