import { Metadata } from 'next';
import Link from 'next/link';
import { localizedHref } from '../../lib/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const language = 'ru';

export const metadata: Metadata = {
  title: 'Погода в Юрмале по месяцам – Когда лучше ехать | Jurmola',
  description: 'Погода в Юрмале (Jurmala) по месяцам: температура воздуха и воды, осадки, солнечные часы. Лучшее время для поездки в Юрмалу – май–сентябрь. Купальный сезон: июль–август.',
  keywords: 'юрмала погода, юрмола погода, jurmala weather, jurmola weather, погода в юрмале по месяцам, юрмала температура воды, юрмала климат, юрмала когда ехать, юрмала купальный сезон',
  openGraph: {
    title: 'Погода в Юрмале по месяцам – Климат, температура воды и лучшее время для поездки',
    description: 'Полная информация о погоде в Юрмале: температура воздуха и воды по месяцам, осадки, солнечные дни. Планируйте поездку с нашим климатическим гидом.',
    url: 'https://jurmola.com/jurmola/weather',
    siteName: 'Jurmola Telegraphs',
    locale: 'ru_RU',
    type: 'article',
    images: [{ url: 'https://jurmola.com/images/grey-day-creature.jpg', width: 1200, height: 630, alt: 'Погода в Юрмале – климат и температура воды' }]
  },
  alternates: {
    canonical: 'https://jurmola.com/jurmola/weather',
    languages: {
      'x-default': 'https://jurmola.com/jurmola/weather',
      'en': 'https://jurmola.com/en/jurmola/weather',
      'ru': 'https://jurmola.com/jurmola/weather',
      'lv': 'https://jurmola.com/lv/jurmola/weather',
    }
  }
};

const monthlyData = [
  {
    month: 'Январь',
    highC: -1,
    lowC: -6,
    rainfallMm: 40,
    sunnyDays: 2,
    waterC: 2,
    description: 'Самый холодный месяц. Короткие дни (около 7 часов света), частые снегопады и пронизывающий ветер с моря. Город укутан снегом, но по-своему красив.',
  },
  {
    month: 'Февраль',
    highC: 0,
    lowC: -6,
    rainfallMm: 30,
    sunnyDays: 3,
    waterC: 1,
    description: 'Всё ещё зима, но дни становятся заметно длиннее. Температура колеблется около нуля, возможны оттепели. Снежный покров обычно сохраняется.',
  },
  {
    month: 'Март',
    highC: 3,
    lowC: -3,
    rainfallMm: 35,
    sunnyDays: 4,
    waterC: 1,
    description: 'Начало весны. Снег постепенно тает, но ночью ещё морозно. Самый сухой период года. Природа только начинает пробуждаться.',
  },
  {
    month: 'Апрель',
    highC: 10,
    lowC: 2,
    rainfallMm: 33,
    sunnyDays: 6,
    waterC: 4,
    description: 'Весна набирает силу. Температура поднимается, сосновые леса наполняются ароматом. Мало осадков, но по вечерам ещё прохладно.',
  },
  {
    month: 'Май',
    highC: 16,
    lowC: 7,
    rainfallMm: 40,
    sunnyDays: 9,
    waterC: 10,
    description: 'Прекрасное время для посещения. Длинные дни (до 17 часов света), зелень, цветение. Пляжи пустынны, но прогулки у моря великолепны.',
  },
  {
    month: 'Июнь',
    highC: 20,
    lowC: 11,
    rainfallMm: 55,
    sunnyDays: 10,
    waterC: 15,
    description: 'Начало лета и белых ночей. Самый солнечный месяц с почти 10 часами солнца в день. Вода ещё прохладная, но загорать уже можно.',
  },
  {
    month: 'Июль',
    highC: 22,
    lowC: 14,
    rainfallMm: 75,
    sunnyDays: 10,
    waterC: 19,
    description: 'Пик сезона. Самый тёплый месяц с комфортной температурой воды. Пляжи полны отдыхающих, работают все рестораны и развлечения.',
  },
  {
    month: 'Август',
    highC: 21,
    lowC: 14,
    rainfallMm: 75,
    sunnyDays: 9,
    waterC: 20,
    description: 'Самая тёплая вода в море. Отличный месяц для пляжного отдыха, хотя к концу августа вечера становятся прохладнее. Возможны короткие дожди.',
  },
  {
    month: 'Сентябрь',
    highC: 17,
    lowC: 10,
    rainfallMm: 65,
    sunnyDays: 6,
    waterC: 16,
    description: 'Бархатный сезон. Ещё тепло днём, но вечера прохладные. Меньше туристов, красивые осенние краски. Купание возможно в начале месяца.',
  },
  {
    month: 'Октябрь',
    highC: 10,
    lowC: 5,
    rainfallMm: 80,
    sunnyDays: 4,
    waterC: 12,
    description: 'Золотая осень. Самый дождливый месяц. Сосновые леса и парки окрашиваются в яркие цвета. Идеально для спа-отдыха и прогулок в тёплой одежде.',
  },
  {
    month: 'Ноябрь',
    highC: 4,
    lowC: 0,
    rainfallMm: 55,
    sunnyDays: 2,
    waterC: 7,
    description: 'Поздняя осень с короткими днями и высокой влажностью. Первый снег может выпасть в конце месяца. Море штормит, ветра усиливаются.',
  },
  {
    month: 'Декабрь',
    highC: 1,
    lowC: -3,
    rainfallMm: 45,
    sunnyDays: 1,
    waterC: 4,
    description: 'Самый тёмный месяц: менее 7 часов светового дня и менее часа солнца. Снегопады, новогодняя атмосфера. Спа-отели предлагают зимние программы.',
  },
];

function getSeasonColor(index: number): string {
  if (index < 2 || index === 11) return 'bg-blue-50 border-blue-200'; // Winter
  if (index >= 2 && index < 5) return 'bg-green-50 border-green-200'; // Spring
  if (index >= 5 && index < 8) return 'bg-amber-50 border-amber-200'; // Summer
  return 'bg-orange-50 border-orange-200'; // Autumn
}

function getWaterColor(temp: number): string {
  if (temp <= 5) return 'text-blue-800 bg-blue-100';
  if (temp <= 12) return 'text-cyan-700 bg-cyan-100';
  if (temp <= 17) return 'text-teal-700 bg-teal-100';
  return 'text-emerald-700 bg-emerald-100';
}

export default function WeatherPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />

      <section className="bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href={localizedHref('jurmola', language)} className="hover:text-blue-600 transition">Путеводитель по Юрмале</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Погода</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Погода в Юрмале по месяцам</h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Полный климатический гид: температура воздуха и воды, осадки, солнечные дни и рекомендации для каждого сезона.
          </p>
          <p className="text-lg text-gray-500">Планируйте идеальную поездку в Юрмалу с нашим подробным прогнозом</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-12">

        {/* Climate overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Климат Юрмалы</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              <strong>Юрмала</strong> расположена на берегу Рижского залива Балтийского моря и имеет <strong>умеренно-континентальный климат</strong> (тип Dfb по классификации Кёппена) с тёплым летом и холодной зимой. Близость моря и сосновых лесов создаёт уникальный микроклимат: зимой здесь немного теплее, а летом прохладнее, чем в Риге.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Среднегодовая температура составляет <strong>+7.7 &deg;C</strong>. Годовое количество осадков &mdash; около <strong>700&ndash;760 мм</strong>. Влажность воздуха высокая круглый год (70&ndash;90%), что типично для приморского климата. Разница между самым холодным (январь, &minus;1 &deg;C) и самым тёплым (июль, +22 &deg;C) месяцами составляет около 23 градусов.
            </p>
          </div>
        </section>

        {/* Quick stats */}
        <section className="mb-12 p-6 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Юрмала: климат в цифрах</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '+22 \u00B0C', label: 'макс. в июле' },
              { value: '-6 \u00B0C', label: 'мин. в январе' },
              { value: '~750 мм', label: 'осадков в год' },
              { value: '1800+ ч', label: 'солнца в год' },
              { value: '+20 \u00B0C', label: 'вода в августе' },
              { value: '0 \u00B0C', label: 'вода в марте' },
              { value: '70-90%', label: 'влажность' },
              { value: '18 ч', label: 'день в июне' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-3">
                <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Monthly data table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Погода по месяцам: подробная таблица</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-bold">Месяц</th>
                  <th className="text-center p-3 font-bold">Макс. &deg;C</th>
                  <th className="text-center p-3 font-bold">Мин. &deg;C</th>
                  <th className="text-center p-3 font-bold">Осадки, мм</th>
                  <th className="text-center p-3 font-bold">Солн. дней</th>
                  <th className="text-center p-3 font-bold">Вода &deg;C</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((m, i) => (
                  <tr key={m.month} className={`border-b ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="p-3 font-medium">{m.month}</td>
                    <td className="text-center p-3">{m.highC > 0 ? '+' : ''}{m.highC}</td>
                    <td className="text-center p-3">{m.lowC > 0 ? '+' : ''}{m.lowC}</td>
                    <td className="text-center p-3">{m.rainfallMm}</td>
                    <td className="text-center p-3">{m.sunnyDays}</td>
                    <td className="text-center p-3">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${getWaterColor(m.waterC)}`}>
                        {m.waterC > 0 ? '+' : ''}{m.waterC}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            * Данные основаны на многолетних средних показателях. Реальная погода может отличаться от средних значений.
          </p>
        </section>

        {/* Monthly detailed cards */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Описание погоды по месяцам</h2>
          <div className="grid gap-4">
            {monthlyData.map((m, i) => (
              <div key={m.month} className={`p-5 rounded-xl border ${getSeasonColor(i)}`}>
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-32 shrink-0">
                    <h3 className="text-xl font-bold">{m.month}</h3>
                    <div className="text-sm text-gray-600 mt-1">
                      {m.highC > 0 ? '+' : ''}{m.highC} / {m.lowC > 0 ? '+' : ''}{m.lowC} &deg;C
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1">{m.description}</p>
                  <div className="flex gap-3 md:gap-4 shrink-0 text-center">
                    <div>
                      <div className="text-xs text-gray-500">Осадки</div>
                      <div className="font-bold text-sm">{m.rainfallMm} мм</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Вода</div>
                      <div className={`font-bold text-sm px-2 py-0.5 rounded ${getWaterColor(m.waterC)}`}>
                        {m.waterC > 0 ? '+' : ''}{m.waterC}&deg;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Best time to visit */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Лучшее время для поездки в Юрмалу</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200">
              <h3 className="text-xl font-bold mb-3 text-emerald-800">Пляжный отдых: июль &ndash; август</h3>
              <p className="text-gray-700 leading-relaxed">
                Идеальное время для купания. Температура воздуха +21&ndash;22 &deg;C, вода прогревается до +19&ndash;20 &deg;C.
                Все пляжи оборудованы, работают спасатели. Длинные дни (16&ndash;18 часов света).
                Единственный минус &mdash; это пик сезона, и в Юрмале может быть многолюдно.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold mb-3 text-green-800">Низкий сезон: май &ndash; июнь, сентябрь</h3>
              <p className="text-gray-700 leading-relaxed">
                Отличный выбор, если вы хотите избежать толп. В мае и июне природа в расцвете, дни очень длинные.
                Сентябрь &mdash; бархатный сезон с тёплыми днями и меньшим количеством туристов. Купание возможно в начале сентября.
              </p>
            </div>
            <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
              <h3 className="text-xl font-bold mb-3 text-amber-800">Спа и природа: октябрь &ndash; апрель</h3>
              <p className="text-gray-700 leading-relaxed">
                Межсезонье идеально для спа-отдыха: цены ниже, а спа-отели работают круглый год.
                Прогулки по зимнему пляжу и сосновым лесам, тишина и умиротворение. Минеральные источники Кемери доступны в любое время.
              </p>
            </div>
            <div className="p-6 bg-red-50 rounded-xl border border-red-200">
              <h3 className="text-xl font-bold mb-3 text-red-800">Зимняя сказка: декабрь &ndash; февраль</h3>
              <p className="text-gray-700 leading-relaxed">
                Не для пляжного отдыха, но зимняя Юрмала по-своему очаровательна. Заснеженные сосны, штормовое море,
                рождественские украшения. Спа-отели предлагают специальные зимние программы и новогодние пакеты.
              </p>
            </div>
          </div>
        </section>

        {/* Swimming season */}
        <section className="mb-12 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200">
          <h2 className="text-2xl font-bold mb-4">Купальный сезон в Юрмале</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Купальный сезон на пляжах Юрмалы длится с <strong>конца июня по конец августа</strong>, когда температура воды в Рижском заливе поднимается до комфортных +18&ndash;20 &deg;C. Пик &mdash; начало августа, когда вода может прогреться до +22&ndash;23 &deg;C.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Рижский залив мелководный, поэтому вода прогревается быстрее, чем в открытом Балтийском море. Пологий вход в воду делает пляжи Юрмалы безопасными для детей.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-sm text-gray-500">Июнь</div>
                <div className="text-xl font-bold text-cyan-600">+15 &deg;C</div>
                <div className="text-xs text-gray-500">прохладно</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-sm text-gray-500">Июль</div>
                <div className="text-xl font-bold text-teal-600">+19 &deg;C</div>
                <div className="text-xs text-gray-500">можно купаться</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-sm text-gray-500">Август</div>
                <div className="text-xl font-bold text-emerald-600">+20 &deg;C</div>
                <div className="text-xs text-gray-500">лучшее время</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-sm text-gray-500">Сентябрь</div>
                <div className="text-xl font-bold text-cyan-600">+16 &deg;C</div>
                <div className="text-xs text-gray-500">для закалённых</div>
              </div>
            </div>
          </div>
        </section>

        {/* What to pack */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Что брать с собой в Юрмалу</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
              <h3 className="text-xl font-bold mb-3">Лето (июнь &ndash; август)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Лёгкая одежда и шорты</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Купальник и полотенце для пляжа</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Солнцезащитный крем (SPF 30+)</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Лёгкая куртка или кофта для вечера</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Дождевик или зонт (дожди бывают)</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Удобная обувь для прогулок по пляжу и лесу</li>
              </ul>
            </div>
            <div className="p-6 bg-orange-50 rounded-xl border border-orange-200">
              <h3 className="text-xl font-bold mb-3">Весна и осень (март &ndash; май, сентябрь &ndash; ноябрь)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Многослойная одежда</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Непромокаемая куртка с капюшоном</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Тёплый свитер или флис</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Водонепроницаемая обувь</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Шарф и шапка (для поздней осени)</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Зонт &mdash; обязательно</li>
              </ul>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-200 md:col-span-2">
              <h3 className="text-xl font-bold mb-3">Зима (декабрь &ndash; февраль)</h3>
              <ul className="space-y-2 text-gray-700 md:columns-2">
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Тёплая зимняя куртка (пуховик)</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Термобельё</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Тёплая шапка, шарф и перчатки</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Зимняя обувь с нескользящей подошвой</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Увлажняющий крем (сухой морозный воздух)</li>
                <li className="flex items-start gap-2"><span className="shrink-0 mt-1">&#8226;</span>Тёплые носки</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tips for tourists */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Советы туристам о погоде в Юрмале</h2>
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-l-4 border-orange-400">
              <h3 className="font-bold text-lg mb-2">Балтийское солнце обманчиво</h3>
              <p className="text-gray-700">Даже при облачной погоде можно получить солнечный ожог. Всегда используйте солнцезащитный крем летом, особенно на пляже, где отражение от воды и песка усиливает УФ-излучение.</p>
            </div>
            <div className="p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-400">
              <h3 className="font-bold text-lg mb-2">Погода меняется быстро</h3>
              <p className="text-gray-700">Морской климат непредсказуем: солнечное утро может смениться дождём к обеду, а к вечеру снова выглянет солнце. Всегда имейте при себе дождевик или зонт, даже если утром ясно.</p>
            </div>
            <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-400">
              <h3 className="font-bold text-lg mb-2">Ветер с моря</h3>
              <p className="text-gray-700">На пляже часто дует ветер с Рижского залива, из-за чего ощущаемая температура может быть на 3&ndash;5 &deg;C ниже фактической. Берите с собой ветровку, даже если термометр показывает +22 &deg;C.</p>
            </div>
            <div className="p-5 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border-l-4 border-purple-400">
              <h3 className="font-bold text-lg mb-2">Белые ночи в июне</h3>
              <p className="text-gray-700">В конце июня в Юрмале наступают белые ночи &mdash; полностью темно не становится. Световой день длится около 18 часов. Если вы чувствительны к свету, возьмите маску для сна.</p>
            </div>
            <div className="p-5 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border-l-4 border-rose-400">
              <h3 className="font-bold text-lg mb-2">Зимой темно, но красиво</h3>
              <p className="text-gray-700">В декабре световой день длится всего около 7 часов, а солнце может показаться менее чем на час. Зато заснеженная Юрмала с подсвеченными соснами &mdash; незабываемое зрелище. Обязательно возьмите фонарик для вечерних прогулок.</p>
            </div>
            <div className="p-5 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border-l-4 border-teal-400">
              <h3 className="font-bold text-lg mb-2">Целебный воздух круглый год</h3>
              <p className="text-gray-700">Сочетание морского воздуха и фитонцидов сосновых лесов создаёт уникальную атмосферу, полезную для дыхательной системы. Этот эффект наиболее выражен весной и летом, когда сосны выделяют больше смол.</p>
            </div>
          </div>
        </section>

        {/* Seasons summary */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Сезоны в Юрмале: краткий обзор</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Зима (декабрь &ndash; февраль)</h3>
              <p className="text-gray-700 mb-3">Температура от &minus;6 до +1 &deg;C. Снег, короткие дни, морозный воздух. Вода у берега может замерзать.</p>
              <p className="text-sm text-gray-500">Для кого: любители зимнего спа, тишины и заснеженных пейзажей.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Весна (март &ndash; май)</h3>
              <p className="text-gray-700 mb-3">Температура от &minus;3 до +16 &deg;C. Пробуждение природы, мало осадков, растущий световой день.</p>
              <p className="text-sm text-gray-500">Для кого: ценители природы, фотографы, те, кто хочет увидеть Юрмалу без толп.</p>
            </div>
            <div className="p-6 bg-amber-50 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Лето (июнь &ndash; август)</h3>
              <p className="text-gray-700 mb-3">Температура от +11 до +22 &deg;C. Белые ночи, пляжный сезон, фестивали и насыщенная культурная жизнь.</p>
              <p className="text-sm text-gray-500">Для кого: все! Пляжный отдых, семьи с детьми, культурные туристы.</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Осень (сентябрь &ndash; ноябрь)</h3>
              <p className="text-gray-700 mb-3">Температура от 0 до +17 &deg;C. Золотая осень, грибы в лесах, штормовое море, уютные кафе.</p>
              <p className="text-sm text-gray-500">Для кого: романтики, любители спа, те, кто предпочитает тишину.</p>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="mb-12 text-center py-8 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white">
          <h2 className="text-2xl font-bold mb-3">Выбрали время для поездки?</h2>
          <p className="text-blue-100 mb-6">Продолжайте планирование с другими разделами нашего путеводителя</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={localizedHref('jurmola/how-to-get-there', language)} className="px-6 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition">Как добраться</Link>
            <Link href={localizedHref('jurmola/where-to-stay', language)} className="px-6 py-2 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition border border-white/30">Где остановиться</Link>
            <Link href={localizedHref('jurmola/attractions', language)} className="px-6 py-2 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition border border-white/30">Достопримечательности</Link>
          </div>
        </section>

        {/* Back to guide */}
        <div className="text-center">
          <Link href={localizedHref('jurmola', language)} className="text-blue-600 hover:text-blue-800 font-medium transition">
            &larr; Вернуться к путеводителю по Юрмале
          </Link>
        </div>

      </main>

      <Footer language={language} />
    </div>
  );
}
