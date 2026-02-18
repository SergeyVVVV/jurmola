import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../lib/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const language = 'ru';

export const metadata: Metadata = {
  title: 'Как добраться до Юрмалы – Поезд, такси, автобус, машина | Jurmola',
  description: 'Как добраться до Юрмалы из Риги и аэропорта: поезд Vivi за €1.50, такси, автобус, автомобиль. Пропуск въезда в Юрмалу €5/день. Расписание, цены, советы 2026.',
  keywords: 'как добраться до юрмалы, юрмала поезд, юрмала из риги, юрмала такси, юрмала автобус, юрмала пропуск въезд, юрмала транспорт, jurmala transport, jurmola, юрмола как добраться',
  openGraph: {
    title: 'Как добраться до Юрмалы – Поезд, такси, автобус, машина',
    description: 'Полный гид по транспорту в Юрмалу: поезд из Риги за 30 минут, такси из аэропорта, пропуск въезда на авто. Цены, расписание, лайфхаки.',
    url: 'https://jurmola.com/jurmola/how-to-get-there',
    siteName: 'Jurmola Telegraphs',
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Как добраться до Юрмалы – транспортный гид' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/jurmola/how-to-get-there',
    languages: {
      'x-default': 'https://jurmola.com/jurmola/how-to-get-there',
      'en': 'https://jurmola.com/en/jurmola/how-to-get-there',
      'ru': 'https://jurmola.com/jurmola/how-to-get-there',
      'lv': 'https://jurmola.com/lv/jurmola/how-to-get-there',
    }
  }
};

export default function HowToGetTherePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />

      <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href={localizedHref('jurmola', language)} className="hover:text-green-600 transition">Путеводитель по Юрмале</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Как добраться</span>
          </nav>
          <p className="text-sm font-medium text-green-600 mb-3 tracking-wide uppercase">Транспорт 2026</p>
          <h1 className="text-5xl font-bold mb-6 leading-tight">Как добраться до Юрмалы</h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Поезд, такси, автобус, автомобиль – все способы доехать до <strong>Юрмалы</strong> из Риги и аэропорта.
            Цены, расписание и практические советы.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Quick Summary */}
        <section className="mb-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
          <h2 className="text-2xl font-bold mb-4">Кратко: как добраться</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-2">🚆</div>
              <div className="font-bold text-green-700">Поезд</div>
              <div className="text-sm text-gray-600">30 мин / от €1.43</div>
              <div className="text-xs text-gray-400 mt-1">Лучший вариант</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-2">🚕</div>
              <div className="font-bold text-green-700">Такси</div>
              <div className="text-sm text-gray-600">20–30 мин / €32–50</div>
              <div className="text-xs text-gray-400 mt-1">Из аэропорта</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-2">🚗</div>
              <div className="font-bold text-green-700">Машина</div>
              <div className="text-sm text-gray-600">25 мин / пропуск €5</div>
              <div className="text-xs text-gray-400 mt-1">Трасса A10/E22</div>
            </div>
          </div>
        </section>

        {/* BY TRAIN */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🚆</span>
            <h2 className="text-3xl font-bold">На поезде из Риги</h2>
            <span className="ml-auto px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Рекомендуем</span>
          </div>

          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-lg leading-relaxed text-gray-700">
              <strong>Поезд – самый удобный и дешевый способ</strong> добраться до Юрмалы. Электрички оператора <strong>Vivi</strong> (бывший Pasažieru vilciens)
              ходят от <strong>Рижского центрального вокзала</strong> (Rīgas Centrālā stacija) в направлении <strong>Тукумса</strong> (Tukums).
              Поезда отправляются с <strong>4-й платформы, пути 3–4</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-green-400">
              <h3 className="font-bold text-lg mb-3">Расписание</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Первый поезд</span><strong>5:00</strong></li>
                <li className="flex justify-between"><span>Последний поезд</span><strong>23:45</strong></li>
                <li className="flex justify-between"><span>Интервал</span><strong>каждые 30 мин</strong></li>
                <li className="flex justify-between"><span>Время в пути</span><strong>30–46 мин</strong></li>
              </ul>
            </div>
            <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-bold text-lg mb-3">Стоимость билета</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Онлайн (vivi.lv)</span><strong className="text-green-600">€1.43</strong></li>
                <li className="flex justify-between"><span>В кассе вокзала</span><strong>€1.50</strong></li>
                <li className="flex justify-between"><span>У кондуктора</span><strong className="text-red-600">до €2.00</strong></li>
              </ul>
            </div>
          </div>

          <div className="p-5 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 mb-6">
            <h3 className="font-bold text-lg mb-2">Где выходить?</h3>
            <p className="text-gray-700 mb-2">
              В Юрмале <strong>14 железнодорожных станций</strong>. Самая популярная остановка –
              <strong> Майори (Majori)</strong>, центр курортной жизни города. Рядом находятся улица Йомас, пляж и большинство ресторанов.
            </p>
            <p className="text-sm text-gray-500">
              Другие популярные станции: Дзинтари (Dzintari) – концертный зал, Булдури (Bulduri) – тихие пляжи, Кемери (Ķemeri) – национальный парк.
            </p>
          </div>

          <div className="p-5 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <h3 className="font-bold text-lg mb-2">Как купить билет</h3>
            <p className="text-gray-700">
              Самый выгодный способ – через <strong>приложение или сайт vivi.lv</strong> (скидка ~5%).
              Также можно купить в кассах на вокзале. Покупка у кондуктора в поезде обойдется дороже –
              до €2.00 за билет.
            </p>
          </div>
        </section>

        {/* FROM AIRPORT */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">✈️</span>
            <h2 className="text-3xl font-bold">Из аэропорта Риги</h2>
          </div>

          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-lg leading-relaxed text-gray-700">
              <strong>Рижский международный аэропорт (RIX)</strong> расположен примерно в <strong>20 км</strong> от Юрмалы.
              Время в пути – <strong>20–30 минут</strong> в зависимости от трафика.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-purple-400">
              <h3 className="font-bold text-lg mb-3">Такси из аэропорта</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Предзаказ онлайн</span><strong className="text-green-600">€32–44</strong></li>
                <li className="flex justify-between"><span>По счетчику</span><strong>€40–50</strong></li>
                <li className="flex justify-between"><span>Время в пути</span><strong>20–30 мин</strong></li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">Рекомендуем предзаказ трансфера – фиксированная цена, водитель с табличкой.</p>
            </div>
            <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-orange-400">
              <h3 className="font-bold text-lg mb-3">Автобус + поезд (бюджет)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Автобус 22 до Риги</span><strong>€1.81</strong></li>
                <li className="flex justify-between"><span>Поезд до Юрмалы</span><strong>€1.43–1.50</strong></li>
                <li className="flex justify-between"><span>Итого</span><strong className="text-green-600">~€3.25</strong></li>
                <li className="flex justify-between"><span>Общее время</span><strong>~1–1.5 ч</strong></li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">Автобус 22 идет до центра Риги. Оттуда пересадка на поезд в направлении Тукумса.</p>
            </div>
          </div>

          <div className="p-5 bg-green-50 rounded-lg border-l-4 border-green-400">
            <h3 className="font-bold text-lg mb-2">Совет</h3>
            <p className="text-gray-700">
              Если вы прилетаете ночью или с большим количеством багажа, <strong>предзаказанный трансфер</strong> – лучший вариант.
              Для бюджетных поездок днем маршрут «автобус 22 + поезд» обойдется всего в ~€3.25.
            </p>
          </div>
        </section>

        {/* BY CAR */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🚗</span>
            <h2 className="text-3xl font-bold">На автомобиле</h2>
          </div>

          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-lg leading-relaxed text-gray-700">
              Из Риги в Юрмалу ведет автомагистраль <strong>A10/E22</strong>. Дорога занимает около <strong>25 минут</strong>.
            </p>
          </div>

          <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-500 mb-6">
            <h3 className="font-bold text-xl mb-3 text-red-800">Пропуск въезда в Юрмалу – обязателен!</h3>
            <p className="text-gray-700 mb-4">
              С февраля 2024 года <strong>пропуск на въезд в Юрмалу обязателен круглый год</strong> (ранее требовался только летом).
              Без пропуска – <strong>штраф €50</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">Стоимость</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li className="flex justify-between"><span>Дневной пропуск</span><strong>€5.00</strong></li>
                  <li className="flex justify-between"><span>Штраф за неоплату</span><strong className="text-red-600">€50.00</strong></li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">Где купить</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>Приложение <strong>Mobilly</strong></li>
                  <li>Приложение <strong>EuroPark</strong></li>
                  <li>Автоматы при въезде в город</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Пропуск действителен на неограниченное количество въездов в день покупки. Цена указана на январь 2026 года.
            </p>
          </div>
        </section>

        {/* BY BUS */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🚌</span>
            <h2 className="text-3xl font-bold">На автобусе</h2>
          </div>
          <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-teal-400">
            <p className="text-lg leading-relaxed text-gray-700 mb-3">
              Автобусы и маршрутные такси курсируют между <strong>Рижским автовокзалом</strong> (Rīgas autoosta) и Юрмалой.
              Этот вариант менее популярен, чем поезд, из-за возможных пробок на шоссе, но может быть удобен
              для поездок в районы Юрмалы, удаленные от железной дороги.
            </p>
            <p className="text-sm text-gray-500">
              Расписание автобусов можно уточнить на сайте autoosta.lv или 1188.lv.
            </p>
          </div>
        </section>

        {/* BY BICYCLE */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🚲</span>
            <h2 className="text-3xl font-bold">На велосипеде</h2>
          </div>
          <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-lime-400">
            <p className="text-lg leading-relaxed text-gray-700 mb-3">
              Из Риги в Юрмалу существует велосипедный маршрут. Дорога займет 1.5–2 часа в зависимости от маршрута и подготовки.
              Также можно взять велосипед с собой на поезд – для этого потребуется <strong>отдельный велосипедный билет</strong>.
            </p>
            <p className="text-sm text-gray-500">
              В Юрмале отлично развита сеть велодорожек – удобно для перемещения между районами.
            </p>
          </div>
        </section>

        {/* FROM OTHER COUNTRIES */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🌍</span>
            <h2 className="text-3xl font-bold">Из других стран</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-sky-400">
              <h3 className="font-bold text-lg mb-2">Самолетом</h3>
              <p className="text-gray-700">
                Ближайший крупный аэропорт – <strong>Рига (RIX)</strong>. Прямые рейсы из Москвы, Петербурга,
                городов Европы и Ближнего Востока. Из аэропорта до Юрмалы – 20–30 минут на такси.
              </p>
            </div>
            <div className="p-5 bg-gray-50 rounded-lg border-l-4 border-indigo-400">
              <h3 className="font-bold text-lg mb-2">Паромом</h3>
              <p className="text-gray-700">
                Паромное сообщение <strong>Стокгольм–Рига</strong> (Tallink/Silja Line).
                Паромный терминал находится в Риге, откуда до Юрмалы можно добраться на поезде или такси.
              </p>
            </div>
          </div>
        </section>

        {/* Price Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Сравнение цен и времени</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                  <th className="text-left p-4 font-medium">Транспорт</th>
                  <th className="text-left p-4 font-medium">Время</th>
                  <th className="text-left p-4 font-medium">Цена</th>
                  <th className="text-left p-4 font-medium">Комфорт</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-green-50">
                  <td className="p-4 font-medium">🚆 Поезд</td>
                  <td className="p-4">30–46 мин</td>
                  <td className="p-4 font-bold text-green-600">€1.43–2.00</td>
                  <td className="p-4">Отлично</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">🚕 Такси (Рига)</td>
                  <td className="p-4">25–40 мин</td>
                  <td className="p-4">€20–35</td>
                  <td className="p-4">Отлично</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">✈️🚕 Такси (аэропорт)</td>
                  <td className="p-4">20–30 мин</td>
                  <td className="p-4">€32–50</td>
                  <td className="p-4">Отлично</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">✈️🚌🚆 Автобус + поезд</td>
                  <td className="p-4">1–1.5 ч</td>
                  <td className="p-4 font-bold text-green-600">~€3.25</td>
                  <td className="p-4">Нормально</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">🚗 Автомобиль</td>
                  <td className="p-4">25 мин</td>
                  <td className="p-4">бензин + €5 пропуск</td>
                  <td className="p-4">Отлично</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">🚌 Автобус</td>
                  <td className="p-4">40–60 мин</td>
                  <td className="p-4">~€2–3</td>
                  <td className="p-4">Нормально</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Practical Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Практические советы</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-amber-50 rounded-lg border-l-4 border-amber-400">
              <h3 className="font-bold mb-2">Билет на поезд</h3>
              <p className="text-gray-700 text-sm">
                Покупайте билет заранее через приложение Vivi – экономия ~5% и не нужно стоять в очереди.
                Билет на телефоне показываете контролеру.
              </p>
            </div>
            <div className="p-5 bg-amber-50 rounded-lg border-l-4 border-amber-400">
              <h3 className="font-bold mb-2">Пропуск на авто</h3>
              <p className="text-gray-700 text-sm">
                Установите приложение Mobilly заранее. Пропуск можно купить прямо при подъезде к городу.
                Камеры считывают номер автоматически.
              </p>
            </div>
            <div className="p-5 bg-amber-50 rounded-lg border-l-4 border-amber-400">
              <h3 className="font-bold mb-2">Из аэропорта ночью</h3>
              <p className="text-gray-700 text-sm">
                Последний автобус 22 ходит примерно до полуночи. Если прилетаете позже – только такси или предзаказанный трансфер.
              </p>
            </div>
            <div className="p-5 bg-amber-50 rounded-lg border-l-4 border-amber-400">
              <h3 className="font-bold mb-2">По Юрмале</h3>
              <p className="text-gray-700 text-sm">
                Внутри Юрмалы удобно передвигаться на велосипеде или на поезде между районами.
                Расстояние от Лиелупе до Кемери – около 30 км.
              </p>
            </div>
          </div>
        </section>

        {/* Other Guide Sections */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Другие разделы путеводителя</h2>
          <div className="grid gap-3">
            {[
              { href: 'jurmola', title: 'Путеводитель по Юрмале', description: 'Главная страница гида – всё о Юрмале в одном месте.', icon: '📖', color: 'from-blue-50 to-cyan-50', border: 'border-blue-300' },
              { href: 'jurmola/weather', title: 'Погода в Юрмале', description: 'Прогноз по месяцам, температура воды, лучшее время для поездки.', icon: '🌤️', color: 'from-sky-50 to-blue-50', border: 'border-sky-300' },
              { href: 'jurmola/attractions', title: 'Достопримечательности', description: 'Пляжи, Кемерский парк, улица Йомас, Дзинтари и другие места.', icon: '🏛️', color: 'from-purple-50 to-violet-50', border: 'border-purple-300' },
              { href: 'jurmola/restaurants', title: 'Рестораны, бары и кафе', description: 'Лучшие места для еды в Юрмале.', icon: '🍽️', color: 'from-orange-50 to-amber-50', border: 'border-orange-300' },
              { href: 'jurmola/where-to-stay', title: 'Где остановиться', description: 'Спа-отели, бутик-гостиницы и бюджетное жилье.', icon: '🏨', color: 'from-rose-50 to-pink-50', border: 'border-rose-300' },
            ].map((page) => (
              <Link key={page.href} href={localizedHref(page.href, language)} className={`block p-4 bg-gradient-to-r ${page.color} rounded-xl border ${page.border} hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5`}>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{page.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{page.title}</h3>
                    <p className="text-sm text-gray-600">{page.description}</p>
                  </div>
                  <span className="ml-auto text-gray-400 text-xl">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8 px-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white">
          <h2 className="text-2xl font-bold mb-3">Поезд – лучший способ добраться до Юрмалы</h2>
          <p className="text-green-100 mb-6">30 минут из Риги, всего от €1.43. Поезда каждые полчаса с 5:00 до 23:45</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={localizedHref('jurmola/where-to-stay', language)} className="px-6 py-2 bg-white text-green-600 font-medium rounded-lg hover:bg-green-50 transition">Где остановиться</Link>
            <Link href={localizedHref('jurmola/attractions', language)} className="px-6 py-2 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition border border-white/30">Достопримечательности</Link>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}
