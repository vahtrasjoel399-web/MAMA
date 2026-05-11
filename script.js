/* ═══════════════════════════════════════════════
   JULIAKLEIN OÜ – Main Script
   Language: ET (default) | EN | RU
   ═══════════════════════════════════════════════ */

'use strict';

/* ── 1. Translations ── */
const i18n = {
  et: {
    'nav.home':    'Avaleht',
    'nav.menu':    'Menüü',
    'nav.reviews': 'Arvustused',
    'nav.contact': 'Kontakt',

    'hero.badge':    'Eesti käsitöö küpsetised',
    'hero.title1':   'Värske pagariäri',
    'hero.title2':   'ja tortid iga päev',
    'hero.subtitle': 'Kõik valmistatakse armastusega — küpsetistest tortideni, soojadest roogadest cateringuni',
    'hero.cta':    'Vaata menüüd',
    'hero.cta2':   'Tellige kohe',
    'hero.scroll': 'Keri alla',

    'about.label': 'Meie lugu',
    'about.badge': 'Käsitöö',
    'about.title': 'Kvaliteet, mida tunneb iga hammustus',
    'about.p1': 'JuliaKlein OÜ on Eesti käsitöö pagariäri ja kondiitritoodangu ettevõte. Küpsetame iga päev värsket ja armastusega valminud toodangut — alates traditsioonilistest küpsetistest kuni eksklusiivsete tortideni.',
    'about.p2': 'Pakume teenuseid nii eraklientidele kui ettevõtetele: individuaalsed tortid, igapäevased küpsetised, soojad road ning täielik catering-teenus.',
    'about.f1h': 'Värske iga päev',  'about.f1t': 'Küpsetame igal hommikul',
    'about.f2h': 'Käsitöö tortid',   'about.f2t': 'Igale tähtpäevale',
    'about.f3h': 'Catering',          'about.f3t': 'Üritustele ja kontoritele',
    'about.f4h': 'Kohaletoimetamine', 'about.f4t': 'Teie ukse taha',

    'menu.label': 'Meie tooted',
    'menu.title': 'Menüü',
    'menu.desc':  'Valige oma lemmikud meie värskete toodete hulgast',

    'cat.cakes':    'Tortid & Magustoidud',
    'cat.pastries': 'Küpsetised & Suupisted',
    'cat.hot':      'Soojad road & Catering',
    'cat.catering': 'Vaagnad (1kg)',
    'prod.from':    'alates',

    'rev.label': 'Tagasiside',
    'rev.title': 'Klientide arvustused',
    'rev.desc':  'Mida meie kliendid ütlevad',
    'rev.form.title':   'Jäta oma arvustus',
    'rev.form.name':    'Teie nimi *',
    'rev.form.rating':  'Hinnang *',
    'rev.form.comment': 'Teie arvamus *',
    'rev.form.ph':      'Kirjutage oma kogemusest…',
    'rev.form.note':    '* Kohustuslikud väljad',
    'rev.form.btn':     'Saada arvustus',

    'cta.title': 'Tellige oma toit lihtsalt',
    'cta.text':  'Võtke meiega ühendust ja me valmistame teile täiusliku eine või tordi',
    'cta.btn':   'Võtke ühendust',

    'con.label': 'Kontakt',
    'con.title': 'Võtke meiega ühendust',
    'con.desc':  'Valige teile sobiv viis meiega ühenduse võtmiseks',
    'con.ig': 'Jälgige meid Instagramis',
    'con.em': 'julia.klein@mail.ee',
    'con.ph': '+372 503 2485',

    'footer.tagline': 'Maitsev toit, tehtud armastusega',
    'footer.rights':  'Kõik õigused kaitstud',
    'toast.success':  '✓ Arvustus edukalt saadetud! Aitäh!',
    'toast.error':    '✗ Palun täitke kõik väljad ja valige hinnang',
  },

  en: {
    'nav.home':    'Home',
    'nav.menu':    'Menu',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',

    'hero.badge':    'Estonian artisan bakery',
    'hero.title1':   'Fresh bakery and',
    'hero.title2':   'cakes made daily',
    'hero.subtitle': 'Everything made with love — from pastries to cakes, hot meals to catering',
    'hero.cta':    'View Menu',
    'hero.cta2':   'Order Now',
    'hero.scroll': 'Scroll down',

    'about.label': 'Our story',
    'about.badge': 'Handmade',
    'about.title': 'Quality you can taste in every bite',
    'about.p1': 'JuliaKlein OÜ is an Estonian artisan bakery and confectionery company. We bake fresh products every day with love — from traditional pastries to exclusive custom cakes.',
    'about.p2': 'We serve both private clients and businesses: custom cakes, daily pastries, hot meals, and a full catering service.',
    'about.f1h': 'Fresh daily',       'about.f1t': 'Baked every morning',
    'about.f2h': 'Artisan cakes',     'about.f2t': 'For every occasion',
    'about.f3h': 'Catering',          'about.f3t': 'Events and offices',
    'about.f4h': 'Delivery',          'about.f4t': 'Right to your door',

    'menu.label': 'Our products',
    'menu.title': 'Menu',
    'menu.desc':  'Choose your favorites from our fresh selection',

    'cat.cakes':    'Cakes & Desserts',
    'cat.pastries': 'Pastries & Snacks',
    'cat.hot':      'Hot Dishes & Catering',
    'cat.catering': 'Platters (per kg)',
    'prod.from':    'from',

    'rev.label': 'Feedback',
    'rev.title': 'Customer Reviews',
    'rev.desc':  'What our clients say',
    'rev.form.title':   'Leave a review',
    'rev.form.name':    'Your name *',
    'rev.form.rating':  'Rating *',
    'rev.form.comment': 'Your review *',
    'rev.form.ph':      'Share your experience…',
    'rev.form.note':    '* Required fields',
    'rev.form.btn':     'Submit review',

    'cta.title': 'Order your food easily',
    'cta.text':  'Contact us and we will prepare the perfect meal or cake for you',
    'cta.btn':   'Contact Us',

    'con.label': 'Contact',
    'con.title': 'Get in touch',
    'con.desc':  'Choose your preferred way to contact us',
    'con.ig': 'Follow us on Instagram',
    'con.em': 'julia.klein@mail.ee',
    'con.ph': '+372 503 2485',

    'footer.tagline': 'Delicious food, made with love',
    'footer.rights':  'All rights reserved',
    'toast.success':  '✓ Review submitted successfully! Thank you!',
    'toast.error':    '✗ Please fill in all fields and select a rating',
  },

  ru: {
    'nav.home':    'Главная',
    'nav.menu':    'Меню',
    'nav.reviews': 'Отзывы',
    'nav.contact': 'Контакт',

    'hero.badge':    'Эстонская кустарная пекарня',
    'hero.title1':   'Свежая выпечка и',
    'hero.title2':   'торты каждый день',
    'hero.subtitle': 'Всё сделано с любовью — от выпечки до тортов, горячих блюд до кейтеринга',
    'hero.cta':    'Посмотреть меню',
    'hero.cta2':   'Заказать сейчас',
    'hero.scroll': 'Прокрутите вниз',

    'about.label': 'Наша история',
    'about.badge': 'Ручная работа',
    'about.title': 'Качество, которое чувствуется в каждом кусочке',
    'about.p1': 'JuliaKlein OÜ — эстонская компания по производству кустарной выпечки и кондитерских изделий. Мы ежедневно готовим свежую продукцию с любовью — от традиционной выпечки до эксклюзивных тортов.',
    'about.p2': 'Мы обслуживаем как частных клиентов, так и предприятия: индивидуальные торты, ежедневная выпечка, горячие блюда и полный кейтеринг.',
    'about.f1h': 'Свежее каждый день',   'about.f1t': 'Печём каждое утро',
    'about.f2h': 'Авторские торты',       'about.f2t': 'Для каждого праздника',
    'about.f3h': 'Кейтеринг',            'about.f3t': 'Для мероприятий и офисов',
    'about.f4h': 'Доставка',             'about.f4t': 'Прямо к вашей двери',

    'menu.label': 'Наши продукты',
    'menu.title': 'Меню',
    'menu.desc':  'Выберите любимое из нашего свежего ассортимента',

    'cat.cakes':    'Торты & Десерты',
    'cat.pastries': 'Выпечка & Закуски',
    'cat.hot':      'Горячие блюда & Кейтеринг',
    'cat.catering': 'Подносы (за кг)',
    'prod.from':    'от',

    'rev.label': 'Обратная связь',
    'rev.title': 'Отзывы клиентов',
    'rev.desc':  'Что говорят наши клиенты',
    'rev.form.title':   'Оставить отзыв',
    'rev.form.name':    'Ваше имя *',
    'rev.form.rating':  'Оценка *',
    'rev.form.comment': 'Ваш отзыв *',
    'rev.form.ph':      'Поделитесь своим опытом…',
    'rev.form.note':    '* Обязательные поля',
    'rev.form.btn':     'Отправить отзыв',

    'cta.title': 'Заказывайте еду легко',
    'cta.text':  'Свяжитесь с нами, и мы приготовим для вас идеальное блюдо или торт',
    'cta.btn':   'Связаться с нами',

    'con.label': 'Контакт',
    'con.title': 'Свяжитесь с нами',
    'con.desc':  'Выберите удобный способ связи',
    'con.ig': 'Следите за нами в Instagram',
    'con.em': 'julia.klein@mail.ee',
    'con.ph': '+372 503 2485',

    'footer.tagline': 'Вкусная еда, сделанная с любовью',
    'footer.rights':  'Все права защищены',
    'toast.success':  '✓ Отзыв успешно отправлен! Спасибо!',
    'toast.error':    '✗ Пожалуйста, заполните все поля и выберите оценку',
  }
};

/* ── 2. Product Data ── */
const PRODUCTS = {
  cakes: [
    {
      names: { et: 'Napoleon',                      en: 'Napoleon',                         ru: 'Наполеон' },
      descs: { et: 'Klassikaline kihtpõhiline kreemjas Napoleon tort',
               en: 'Classic layered Napoleon cake with cream',
               ru: 'Классический слоёный торт Наполеон с кремом' },
      price: '€17',
      img:   'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
      emoji: '🎂',
    },
    {
      names: { et: 'Mooniseemnekook võikreemiga',   en: 'Poppy Seed Cake with Butter Cream', ru: 'Маковый торт с масляным кремом' },
      descs: { et: 'Mahlane mooniseemnekook rikkaliku võikreemiga',
               en: 'Moist poppy seed cake with rich butter cream',
               ru: 'Сочный маковый торт с насыщенным масляным кремом' },
      price: '€25',
      img:   'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80',
      emoji: '🌸',
    },
    {
      names: { et: 'Biskviitkook kreemiga',         en: 'Sponge Cake with Cream',            ru: 'Бисквит со сливками' },
      descs: { et: 'Õhuline biskviitkook vahustatud kreemiga',
               en: 'Light and airy sponge cake with whipped cream',
               ru: 'Лёгкий воздушный бисквит со взбитыми сливками' },
      price: '€20',
      img:   'https://images.unsplash.com/photo-1488477304112-4944851de03d?w=400&q=80',
      emoji: '🍰',
    },
    {
      names: { et: 'Vanillijuustukook',             en: 'Vanilla Cheesecake',                ru: 'Ванильный чизкейк' },
      descs: { et: 'Kreemjas vanillijuustukook küpsisepõhjal',
               en: 'Creamy vanilla cheesecake on a biscuit base',
               ru: 'Кремовый ванильный чизкейк на печенье' },
      price: '€18',
      img:   'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80',
      emoji: '🍰',
    },
    {
      names: { et: 'Šokolaadijuustukook',           en: 'Chocolate Cheesecake',              ru: 'Шоколадный чизкейк' },
      descs: { et: 'Rikkalik šokolaadijuustukook tumeda glasuuriga',
               en: 'Rich chocolate cheesecake with dark glaze',
               ru: 'Насыщенный шоколадный чизкейк с тёмной глазурью' },
      price: '€20',
      img:   'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80',
      emoji: '🍫',
    },
    {
      names: { et: 'Tiramisu',                      en: 'Tiramisu',                          ru: 'Тирамису' },
      descs: { et: 'Klassikaline Itaalia tiramisu mascarpone kreemiga',
               en: 'Classic Italian tiramisu with mascarpone cream',
               ru: 'Классическое итальянское тирамису с кремом маскарпоне' },
      price: '€20',
      img:   'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80',
      emoji: '☕',
    },
    {
      names: { et: 'Punane velvet (klassik)',        en: 'Red Velvet (classic)',              ru: 'Красный бархат (классика)' },
      descs: { et: 'Klassikaline punase velvet kook toorjuustukreemiga',
               en: 'Classic red velvet cake with cream cheese frosting',
               ru: 'Классический красный бархат с кремом-чиз' },
      price: '€20',
      img:   'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
      emoji: '❤️',
      tag:   '⭐ Bestseller',
    },
    {
      names: { et: 'Punane velvet kirssidega',      en: 'Red Velvet with Cherries',          ru: 'Красный бархат с вишней' },
      descs: { et: 'Punane velvet kook kirsi täidise ja kreemiga',
               en: 'Red velvet cake with cherry filling and cream',
               ru: 'Красный бархат с вишнёвой начинкой и кремом' },
      price: '€22',
      img:   'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
      emoji: '🍒',
    },
    {
      names: { et: 'Punane velvet vaarikutega',     en: 'Red Velvet with Raspberries',       ru: 'Красный бархат с малиной' },
      descs: { et: 'Punane velvet kook värskete vaarikute ja kreemiga',
               en: 'Red velvet cake with fresh raspberries and cream',
               ru: 'Красный бархат со свежей малиной и кремом' },
      price: '€25',
      img:   'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
      emoji: '🍓',
    },
    {
      names: { et: 'Spinatikook',                   en: 'Spinach Cake',                      ru: 'Шпинатный торт' },
      descs: { et: 'Ebatavaline rohelise spinatiga kook kreemjase täidisega',
               en: 'Unique green spinach cake with a creamy filling',
               ru: 'Необычный зелёный шпинатный торт с кремовой начинкой' },
      price: '€25',
      img:   'https://images.unsplash.com/photo-1488477304112-4944851de03d?w=400&q=80',
      emoji: '🌿',
    },
    {
      names: { et: 'Meesetort',                     en: 'Honey Cake',                        ru: 'Медовик' },
      descs: { et: 'Traditsiooniline meesetort hapukoore kreemiga',
               en: 'Traditional honey cake with sour cream layers',
               ru: 'Традиционный медовик со сметанными коржами' },
      price: '€18',
      img:   'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80',
      emoji: '🍯',
    },
    {
      names: { et: 'Beserulett ploomidega',         en: 'Meringue Roll with Prunes',         ru: 'Безе-рулет с черносливом' },
      descs: { et: 'Õhuline beseerulett ploomide ja kreemiga',
               en: 'Light meringue roll with prunes and cream',
               ru: 'Лёгкий безе-рулет с черносливом и кремом' },
      price: '€20',
      img:   'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=400&q=80',
      emoji: '🌀',
    },
    {
      names: { et: 'Žokond mandlikook',             en: 'Joconde Almond Cake',               ru: 'Жоконд миндальный торт' },
      descs: { et: 'Prantsuse Joconde mandlibiskviitkook',
               en: 'French Joconde almond sponge cake',
               ru: 'Французский миндальный бисквит Жоконд' },
      price: '€25',
      img:   'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80',
      emoji: '🌰',
    },
    {
      names: { et: 'Martsipankringel',              en: 'Marzipan Kringel',                  ru: 'Марципановый крендель' },
      descs: { et: 'Traditsiooniline eesti kringel martsipani täidisega',
               en: 'Traditional Estonian kringel with marzipan filling',
               ru: 'Традиционный эстонский крендель с марципановой начинкой' },
      price: '€15',
      img:   'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&q=80',
      emoji: '🥐',
    },
    {
      names: { et: 'Meesetort pähklitega',          en: 'Honey Cake with Walnuts',           ru: 'Медовик с грецкими орехами' },
      descs: { et: 'Meesetort krõbedate kreeka pähklitega',
               en: 'Honey cake with crunchy walnuts',
               ru: 'Медовик с хрустящими грецкими орехами' },
      price: '€22',
      img:   'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80',
      emoji: '🍯',
    },
    {
      names: { et: 'Šokolaadikook',                 en: 'Chocolate Cake',                    ru: 'Шоколадный торт' },
      descs: { et: 'Rikkalik šokolaadikook ganache glasuuriga',
               en: 'Rich chocolate cake with ganache glaze',
               ru: 'Насыщенный шоколадный торт с ганашем' },
      price: '€25',
      img:   'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80',
      emoji: '🍫',
    },
    {
      names: { et: 'Šokolaad-apelsinikook',         en: 'Chocolate Orange Cake',             ru: 'Шоколадно-апельсиновый торт' },
      descs: { et: 'Tumeda šokolaadi ja värske apelsiniga kook',
               en: 'Dark chocolate cake with fresh orange zest',
               ru: 'Торт из тёмного шоколада со свежей апельсиновой цедрой' },
      price: '€30',
      img:   'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80',
      emoji: '🍊',
    },
    {
      names: { et: 'Hollandia kook (1kg)',           en: 'Hollandia Cake (1kg)',              ru: 'Торт Голландия (1кг)' },
      descs: { et: 'Hollandia kook kreemjase täidisega, 1 kilogramm',
               en: 'Hollandia cake with creamy filling, 1 kilogram',
               ru: 'Торт Голландия с кремовой начинкой, 1 килограмм' },
      price: '€25',
      img:   'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
      emoji: '🎂',
    },
  ],

  pastries: [
    {
      names: { et: 'Spinatipirukas',                en: 'Spinach Pie',                       ru: 'Пирог со шпинатом' },
      descs: { et: 'Värske spinati ja juustuga pirukas',
               en: 'Fresh spinach and cheese pie',
               ru: 'Пирог со свежим шпинатом и сыром' },
      price: '€2.50',
      img:   'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80',
      emoji: '🥧',
    },
    {
      names: { et: 'Focaccia',                      en: 'Focaccia',                          ru: 'Фокачча' },
      descs: { et: 'Itaalia focaccia oliiviõli ja maitseürtidega',
               en: 'Italian focaccia with olive oil and herbs',
               ru: 'Итальянская фокачча с оливковым маслом и травами' },
      price: '€7',
      img:   'https://images.unsplash.com/photo-1585478259715-1c195ae2a061?w=400&q=80',
      emoji: '🍞',
    },
    {
      names: { et: 'Hatšapuri (väike)',             en: 'Khachapuri (small)',                ru: 'Хачапури (маленький)' },
      descs: { et: 'Grusia juustupätsike — väike formaat',
               en: 'Georgian cheese bread — small size',
               ru: 'Грузинский хачапури с сыром — маленький' },
      price: '€10',
      img:   'https://images.unsplash.com/photo-1568051243858-533a607809a5?w=400&q=80',
      emoji: '🫓',
      tag:   '🌟 Populaarne',
    },
    {
      names: { et: 'Hatšapuri (suur)',              en: 'Khachapuri (large)',                ru: 'Хачапури (большой)' },
      descs: { et: 'Grusia juustupätsike — suur formaat',
               en: 'Georgian cheese bread — large size',
               ru: 'Грузинский хачапури с сыром — большой' },
      price: '€15',
      img:   'https://images.unsplash.com/photo-1568051243858-533a607809a5?w=400&q=80',
      emoji: '🫓',
    },
    {
      names: { et: 'Köögivilja hatšapuri',          en: 'Vegetable Khachapuri',              ru: 'Хачапури с овощами' },
      descs: { et: 'Grusia juustupätsike grillitud köögiviljadega',
               en: 'Georgian cheese bread with grilled vegetables',
               ru: 'Грузинский хачапури с запечёнными овощами' },
      price: '€18',
      img:   'https://images.unsplash.com/photo-1568051243858-533a607809a5?w=400&q=80',
      emoji: '🥦',
    },
    {
      names: { et: 'Mini burger vorstiga',          en: 'Mini Burger with Sausage',          ru: 'Мини-бургер с сосиской' },
      descs: { et: 'Väike pehme burger mahlase vorstiga',
               en: 'Small soft bun burger with juicy sausage',
               ru: 'Мягкий мини-бургер с сочной сосиской' },
      price: '€2',
      img:   'https://images.unsplash.com/photo-1568051243858-533a607809a5?w=400&q=80',
      emoji: '🍔',
    },
    {
      names: { et: 'Mini pitsa',                    en: 'Mini Pizza',                        ru: 'Мини-пицца' },
      descs: { et: 'Väike pitsa klassikaliste täidistega',
               en: 'Small pizza with classic toppings',
               ru: 'Мини-пицца с классической начинкой' },
      price: '€0.80',
      img:   'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=400&q=80',
      emoji: '🍕',
    },
    {
      names: { et: 'Lõhegrissini',                  en: 'Salmon Grissini',                   ru: 'Гриссини с лососем' },
      descs: { et: 'Krõbedad grissini kreemjuustu ja suitsulõhega',
               en: 'Crispy grissini with cream cheese and smoked salmon',
               ru: 'Хрустящие гриссини с творожным сыром и лососем' },
      price: '€1.50',
      img:   'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80',
      emoji: '🐟',
    },
    {
      names: { et: 'Kanaburger',                    en: 'Chicken Burger',                    ru: 'Куриный бургер' },
      descs: { et: 'Mahlane kanaburger värskete köögiviljadega',
               en: 'Juicy chicken burger with fresh vegetables',
               ru: 'Сочный куриный бургер со свежими овощами' },
      price: '€2.50',
      img:   'https://images.unsplash.com/photo-1568051243858-533a607809a5?w=400&q=80',
      emoji: '🍗',
    },
    {
      names: { et: 'Lavash',                        en: 'Lavash',                            ru: 'Лаваш' },
      descs: { et: 'Traditsiooniline käsitöö lavash leib',
               en: 'Traditional handmade lavash flatbread',
               ru: 'Традиционный тонкий лаваш ручной работы' },
      price: '€0.80',
      img:   'https://images.unsplash.com/photo-1585478259715-1c195ae2a061?w=400&q=80',
      emoji: '🫓',
    },
  ],

  hot: [
    {
      names: { et: 'Seesami kana (1kg)',             en: 'Sesame Chicken (1kg)',              ru: 'Курица в кунжуте (1кг)' },
      descs: { et: 'Mahlane kana seesami kastmes, 1 kilogramm',
               en: 'Juicy chicken in sesame sauce, 1 kilogram',
               ru: 'Сочная курица в кунжутном соусе, 1 килограмм' },
      price: '€20',
      img:   'https://images.unsplash.com/photo-1604908177453-7462950a6a3b?w=400&q=80',
      emoji: '🍗',
      tag:   '🔥 Populaarne',
    },
    {
      names: { et: 'Searoog (1kg)',                  en: 'Pork Dish (1kg)',                   ru: 'Свинина (1кг)' },
      descs: { et: 'Maitsestatud searoog, 1 kilogramm',
               en: 'Seasoned pork dish, 1 kilogram',
               ru: 'Приправленная свинина, 1 килограмм' },
      price: '€18',
      img:   'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80',
      emoji: '🥩',
    },
    {
      names: { et: 'Kanarull',                       en: 'Chicken Roll',                      ru: 'Куриный рулет' },
      descs: { et: 'Mahlane kanarull maitseürtidega',
               en: 'Juicy chicken roll with herbs',
               ru: 'Сочный куриный рулет с зеленью' },
      price: '€25',
      img:   'https://images.unsplash.com/photo-1604908177453-7462950a6a3b?w=400&q=80',
      emoji: '🌯',
    },
  ],

  catering: [
    {
      names: { et: 'Puuviljade vaagen',              en: 'Fruit Platter',                     ru: 'Фруктовая тарелка' },
      descs: { et: 'Värskete hooajaliste puuviljade vaagen (1kg)',
               en: 'Fresh seasonal fruit platter (per kg)',
               ru: 'Поднос со свежими сезонными фруктами (за кг)' },
      price: '€30–32',
      img:   'https://images.unsplash.com/photo-1488477304112-4944851de03d?w=400&q=80',
      emoji: '🍓',
      tag:   '🌟 Populaarne',
    },
    {
      names: { et: 'Juustuvaagen',                   en: 'Cheese Platter',                    ru: 'Сырная тарелка' },
      descs: { et: 'Valik erinevaid juuste ja lisanditega (1kg)',
               en: 'Selection of cheeses with accompaniments (per kg)',
               ru: 'Ассорти из разных сыров с гарниром (за кг)' },
      price: '€27',
      img:   'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80',
      emoji: '🧀',
    },
    {
      names: { et: 'Lihavaagen',                     en: 'Meat Platter',                      ru: 'Мясная тарелка' },
      descs: { et: 'Valik külmlihavalmistisi ja lisanditega (1kg)',
               en: 'Selection of cold meats with accompaniments (per kg)',
               ru: 'Ассорти из мясной нарезки с гарниром (за кг)' },
      price: '€30',
      img:   'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=80',
      emoji: '🥩',
    },
    {
      names: { et: 'Kalavaagen',                     en: 'Fish Platter',                      ru: 'Рыбная тарелка' },
      descs: { et: 'Valik kala- ja mereandide vaagnal (1kg)',
               en: 'Selection of fish and seafood on a platter (per kg)',
               ru: 'Ассорти из рыбы и морепродуктов (за кг)' },
      price: '€32',
      img:   'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80',
      emoji: '🐟',
    },
    {
      names: { et: 'Suupistete vaagen',              en: 'Snack Platter',                     ru: 'Закусочная тарелка' },
      descs: { et: 'Mitmekesine suupistete vaagen üritustele (1kg)',
               en: 'Varied snack platter for events (per kg)',
               ru: 'Разнообразный закусочный поднос для мероприятий (за кг)' },
      price: '€25',
      img:   'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80',
      emoji: '🍿',
    },
    {
      names: { et: 'Räime leivakeesed',              en: 'Herring Bread Snacks',              ru: 'Хлебцы с сельдью' },
      descs: { et: 'Traditsiooniline räime ja leivakesed (1kg)',
               en: 'Traditional herring and bread snacks (per kg)',
               ru: 'Традиционные хлебцы с сельдью (за кг)' },
      price: '€16',
      img:   'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80',
      emoji: '🐠',
    },
    {
      names: { et: 'Mini võileivad suitsukala',      en: 'Mini Sandwiches with Smoked Fish',  ru: 'Мини-бутерброды с копчёной рыбой' },
      descs: { et: 'Elegantsed mini võileivad suitsukala ja kreemjuustuga (1kg)',
               en: 'Elegant mini sandwiches with smoked fish and cream cheese (per kg)',
               ru: 'Изящные мини-бутерброды с копчёной рыбой и творожным сыром (за кг)' },
      price: '€25',
      img:   'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80',
      emoji: '🥪',
    },
  ],
};

/* ── 3. Default Reviews ── */
const DEFAULT_REVIEWS = [
  {
    id: 'default-1',
    name: 'Maria K.',
    rating: 5,
    comment: {
      et: '"Suurepärased tortid! Tellisin sünnipäevatordi ja kõik olid täiesti vaimustuses. Viimistlus oli täiuslik!"',
      en: '"Amazing cakes! I ordered a birthday cake and everyone was absolutely delighted. The finishing was perfect!"',
      ru: '"Потрясающие торты! Заказала торт на день рождения, все были в полном восторге. Отделка была безупречной!"',
    },
    date: '2024-03-15',
  },
  {
    id: 'default-2',
    name: 'Aleksei V.',
    rating: 5,
    comment: {
      et: '"Parim pagariäri Eestis! Croissandid on teisest maailmast — krõbedad ja võised. Tulen iga nädal tagasi."',
      en: '"Best bakery in Estonia! The croissants are out of this world — crispy and buttery. I come back every week."',
      ru: '"Лучшая пекарня в Эстонии! Круассаны — просто сказка, хрустящие и масляные. Возвращаюсь каждую неделю."',
    },
    date: '2024-03-10',
  },
  {
    id: 'default-3',
    name: 'Tiina L.',
    rating: 4,
    comment: {
      et: '"Tellisime catering üritusele — kõik oli maitsev ja ilusti esitletud. Soovitan soojalt!"',
      en: '"We ordered catering for an event — everything was delicious and beautifully presented. Highly recommended!"',
      ru: '"Заказали кейтеринг для мероприятия — всё было вкусно и красиво подано. Очень рекомендую!"',
    },
    date: '2024-02-28',
  },
  {
    id: 'default-4',
    name: 'Erik S.',
    rating: 5,
    comment: {
      et: '"Kohupiimakoogikesed on täpselt sellised nagu vanaema tegi. Kodune ja maitsev!"',
      en: '"The quark pastries are exactly like grandma used to make. Homely and delicious!"',
      ru: '"Творожные плюшки точь-в-точь как делала бабушка. Домашние и вкусные!"',
    },
    date: '2024-02-14',
  },
];

/* ── 4. State ── */
let currentLang  = localStorage.getItem('jk-lang') || 'et';
let currentCat   = 'cakes';
let selectedRating = 0;
let toastTimeout;

/* ── 5. Helpers ── */
const t = (key) => (i18n[currentLang] || i18n.et)[key] || key;

const stars = (n) => '★'.repeat(n) + '☆'.repeat(5 - n);

const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleDateString(
    currentLang === 'ru' ? 'ru-RU' : currentLang === 'en' ? 'en-GB' : 'et-EE',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );
};

const initials = (name) => name.trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();

/* ── 6. Language System ── */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('jk-lang', lang);
  document.documentElement.lang = lang;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (el.tagName === 'INPUT' && el.type === 'text') {
      el.placeholder = val;
    } else if (el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });

  // Update textarea placeholder separately
  const rComment = document.getElementById('rComment');
  if (rComment) rComment.placeholder = t('rev.form.ph');

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Re-render dynamic content
  renderProducts();
  renderReviews();
}

/* ── 7. Navbar ── */
function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const overlay   = document.getElementById('mobileOverlay');

  // Scroll state
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  const closeMenu = () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    overlay.classList.remove('visible');
    overlay.style.display = '';
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    hamburger.classList.add('open');
    navLinks.classList.add('open');
    overlay.style.display = 'block';
    requestAnimationFrame(() => overlay.classList.add('visible'));
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  hamburger.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) closeMenu();
    else openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });
}

/* ── 8. Hero Parallax ── */
function initParallax() {
  const bg = document.getElementById('heroBg');
  if (!bg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight) {
          bg.style.transform = `translateY(${y * 0.3}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ── 9. Products ── */
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const items = PRODUCTS[currentCat] || [];
  grid.innerHTML = '';

  items.forEach((p, i) => {
    const name  = p.names[currentLang] || p.names.et;
    const desc  = p.descs[currentLang] || p.descs.et;
    const price = p.from ? `${t('prod.from')} ${p.price}` : p.price;

    const card = document.createElement('article');
    card.className = 'product-card';
    card.style.animationDelay = `${i * 0.06}s`;

    card.innerHTML = `
      <div class="product-img-wrap">
        <img
          src="${p.img}"
          alt="${name}"
          loading="lazy"
          onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'product-emoji-fallback',textContent:'${p.emoji}'}))"
        >
        ${p.tag ? `<div class="product-tag">${p.tag}</div>` : ''}
      </div>
      <div class="product-body">
        <div class="product-name">${name}</div>
        <div class="product-desc">${desc}</div>
        <div class="product-price">${price}</div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      currentCat = tab.dataset.cat;
      renderProducts();
    });
  });
}

/* ── 10. Reviews ── */
function getUserReviews() {
  try {
    return JSON.parse(localStorage.getItem('jk-reviews') || '[]');
  } catch { return []; }
}

function saveUserReview(review) {
  const reviews = getUserReviews();
  reviews.unshift(review);
  try { localStorage.setItem('jk-reviews', JSON.stringify(reviews)); } catch { /* quota */ }
}

function renderReviews() {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;

  const userReviews = getUserReviews();
  const allReviews  = [...userReviews, ...DEFAULT_REVIEWS];

  grid.innerHTML = '';

  allReviews.forEach((r, i) => {
    const comment = typeof r.comment === 'object'
      ? (r.comment[currentLang] || r.comment.et)
      : r.comment;

    const card = document.createElement('div');
    card.className = 'review-card' + (r.isNew ? ' new-review' : '');
    card.style.animationDelay = r.isNew ? '0s' : `${i * 0.07}s`;

    card.innerHTML = `
      <div class="review-header">
        <div class="review-avatar">${initials(r.name)}</div>
        <div class="review-meta">
          <div class="review-name">${escapeHtml(r.name)}</div>
          <div class="review-date">${formatDate(r.date)}</div>
        </div>
        <div class="review-stars" aria-label="Rating: ${r.rating} out of 5">${stars(r.rating)}</div>
      </div>
      <div class="review-comment">${escapeHtml(comment)}</div>
    `;
    grid.appendChild(card);
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── 11. Star Rating Input ── */
function initStarInput() {
  const stars  = document.querySelectorAll('.star-btn');
  const hidden = document.getElementById('rRating');
  if (!stars.length) return;

  const highlight = (n) => {
    stars.forEach((s, i) => {
      s.classList.toggle('active', i < n);
    });
  };

  stars.forEach(star => {
    star.addEventListener('mouseenter', () => highlight(+star.dataset.v));
    star.addEventListener('mouseleave', () => highlight(selectedRating));
    star.addEventListener('click', () => {
      selectedRating = +star.dataset.v;
      hidden.value   = selectedRating;
      highlight(selectedRating);
    });
    star.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectedRating = +star.dataset.v;
        hidden.value   = selectedRating;
        highlight(selectedRating);
      }
    });
  });
}

/* ── 12. Review Form ── */
function initReviewForm() {
  const form = document.getElementById('reviewForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameEl    = document.getElementById('rName');
    const commentEl = document.getElementById('rComment');
    const name    = nameEl.value.trim();
    const comment = commentEl.value.trim();

    nameEl.classList.remove('error');
    commentEl.classList.remove('error');

    let valid = true;
    if (!name)           { nameEl.classList.add('error');    valid = false; }
    if (!comment)        { commentEl.classList.add('error'); valid = false; }
    if (!selectedRating) { valid = false; }

    if (!valid) {
      showToast(t('toast.error'), 'error');
      return;
    }

    const review = {
      id:      `user-${Date.now()}`,
      name,
      rating:  selectedRating,
      comment, // plain string (not multilingual)
      date:    new Date().toISOString().split('T')[0],
      isNew:   true,
    };

    saveUserReview(review);
    renderReviews();
    showToast(t('toast.success'), 'success');

    form.reset();
    selectedRating = 0;
    document.getElementById('rRating').value = 0;
    document.querySelectorAll('.star-btn').forEach(s => s.classList.remove('active'));

    // Scroll to first review
    document.getElementById('reviewsGrid')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

/* ── 13. Toast ── */
function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  clearTimeout(toastTimeout);
  toast.textContent = msg;
  toast.className   = `toast ${type} show`;

  toastTimeout = setTimeout(() => toast.classList.remove('show'), 4000);
}

/* ── 14. Scroll Reveal (Intersection Observer) ── */
function initReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach(el => el.classList.add('visible'));
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    .forEach(el => obs.observe(el));
}

/* ── 15. Smooth Scroll for anchor links ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = document.getElementById('navbar')?.offsetHeight || 72;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ── 16. Language Buttons ── */
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

/* ── 17. Active Nav Highlight ── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active-link'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active-link');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => obs.observe(s));
}

/* ── 18. Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initParallax();
  initLangSwitcher();
  initTabs();
  initStarInput();
  initReviewForm();
  initReveal();
  initSmoothScroll();
  initActiveNav();

  // Apply saved or default language
  applyLang(currentLang);
});
