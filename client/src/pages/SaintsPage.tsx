import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

// Enhanced saints data with images
const saintsData = [
  {
    name_en: 'Akkalkota Swami',
    name_te: 'అక్కల్‌కోట స్వామి',
    desc_en: 'A holy saint of the Dattatreya tradition known for his ascetic power and guidance.',
    desc_te: 'దత్తాత్రేయ సంప్రదాయానికి చెందిన ఒక పవిత్ర సన్యాసి, తన తపస్సు శక్తి మరియు మార్గదర్శకత్వానికి ప్రసిద్ధి చెందారు.',
    image: '/saints_images/akkalkota_swami.jpg'
  },
  {
    name_en: 'Sripada Sri Vallabha Swami',
    name_te: 'శ్రీపాద శ్రీ వల్లభ స్వామి',
    desc_en: 'The divine incarnation regarded as the first avatar of Lord Dattatreya.',
    desc_te: 'దత్తాత్రేయ ప్రభువు యొక్క మొదటి అవతారంగా పరిగణించబడే దైవిక అవతారం.',
    image: '/saints_images/sripada_vallabha.jpg'
  },
  {
    name_en: 'Narasimha Saraswathi Swami',
    name_te: 'నరసింహ సరస్వతి స్వామి',
    desc_en: 'A revered master known for spiritual wisdom and divine grace.',
    desc_te: 'ఆధ్యాత్మిక జ్ఞానం మరియు దైవిక అనుగ్రహానికి ప్రసిద్ధి చెందిన గౌరవనీయ గురువు.',
    image: '/saints_images/narasimha_saraswathi.jpg'
  },
  {
    name_en: 'Lord Dattatreya',
    name_te: 'దత్తాత్రేయ ప్రభువు',
    desc_en: 'The divine trinity incarnation, revered as the supreme guru in the Dattatreya tradition.',
    desc_te: 'దత్తాత్రేయ సంప్రదాయంలో సర్వోచ్చ గురువుగా గౌరవించబడిన దైవిక త్రిమూర్తి అవతారం.',
    image: '/saints_images/dattatreya.jpg'
  },
  {
    name_en: 'Sant Eknath',
    name_te: 'సంత ఏకనాథ',
    desc_en: 'A famous yogi and renounced saint of Maharashtra, known for his spiritual wisdom.',
    desc_te: 'మహారాష్ట్ర యొక్క ప్రసిద్ధ యోగి మరియు సంన్యాసి, తన ఆధ్యాత్మిక జ్ఞానానికి ప్రసిద్ధి చెందారు.',
    image: '/saints_images/eknath.jpg'
  },
  {
    name_en: 'Shirdi Sai Baba',
    name_te: 'శిర్డీ సాయిబాబా',
    desc_en: 'One of the foremost saints of modern India, revered as the Fifth Avatar of Lord Dattatreya.',
    desc_te: 'ఆధునిక భారతదేశం యొక్క ప్రముఖ సన్యాసులలో ఒకరు, దత్తాత్రేయ ప్రభువు యొక్క ఐదవ అవతారంగా గౌరవించబడారు.',
    image: '/saints_images/sai_baba.jpg'
  },
  {
    name_en: 'Tajuddin Baba of Nagpur',
    name_te: 'నాగపూర్ తాజుద్దీన్ బాబా',
    desc_en: 'A Sufi saint known for his love and compassion towards all beings.',
    desc_te: 'తన ప్రేమ మరియు కరుణకు ప్రసిద్ధి చెందిన సూఫీ సన్యాసి.',
    image: '/saints_images/vasudevanand_saraswati.jpg'
  },
  {
    name_en: 'Gajanan Maharaj of Shegaon',
    name_te: 'శేగాం గజానన్ మహారాజ్',
    desc_en: 'A great saint known for his miraculous spiritual guidance and divine grace.',
    desc_te: 'తన అద్భుతమైన ఆధ్యాత్మిక మార్గదర్శకత్వానికి ప్రసిద్ధి చెందిన గొప్ప సన్యాసి.',
    image: '/saints_images/narasimha_saraswathi.jpg'
  },
  {
    name_en: 'Narayana Maharaj of Kedgaon',
    name_te: 'కేడ్‌గాం నారాయణ మహారాజ్',
    desc_en: 'A spiritual master revered for his teachings and divine wisdom in the Dattatreya tradition.',
    desc_te: 'దత్తాత్రేయ సంప్రదాయంలో తన బోధనలు మరియు దైవిక జ్ఞానానికి గౌరవించబడిన ఆధ్యాత్మిక గురువు.',
    image: '/saints_images/vasudevanand_saraswati.jpg'
  },
  {
    name_en: 'Dhuniwala Dada',
    name_te: 'ధూనివాల దాదా',
    desc_en: 'A saint known for his ascetic life, wisdom and divine grace.',
    desc_te: 'తన తపస్సు జీవితం, జ్ఞానం మరియు దైవిక అనుగ్రహానికి ప్రసిద్ధి చెందిన సన్యాసి.',
    image: '/saints_images/akkalkota_swami.jpg'
  },
  {
    name_en: 'Manikya Prabhu',
    name_te: 'మణిక్య ప్రభువు',
    desc_en: 'A great master known for his divine teachings and spiritual grace.',
    desc_te: 'తన దైవిక బోధనలు మరియు ఆధ్యాత్మిక అనుగ్రహానికి ప్రసిద్ధి చెందిన గొప్ప గురువు.',
    image: '/saints_images/sripada_vallabha.jpg'
  },
  {
    name_en: 'Ramakrishna Paramahamsa',
    name_te: 'రామకృష్ణ పరమహంస',
    desc_en: 'A great saint of Bengal known for his spiritual realization and universal teachings.',
    desc_te: 'తన ఆధ్యాత్మిక సాక్షాత్కారానికి ప్రసిద్ధి చెందిన బెంగాల్ గొప్ప సన్యాసి.',
    image: '/saints_images/sai_baba.jpg'
  }
];

export default function SaintsPage() {
  const { language, t } = useLanguage();

  const getSaintName = (saint: typeof saintsData[0]) => language === 'en' ? saint.name_en : saint.name_te;
  const getSaintDesc = (saint: typeof saintsData[0]) => language === 'en' ? saint.desc_en : saint.desc_te;

  return (
    <Layout>
      {/* Saints & Living Section */}
      <section id="saints" className="smst-section bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="smst-section-title">{t('saints_title')}</h2>
          <p className="smst-section-subtitle italic">
            {t('saints_subtitle_quote')}
          </p>

          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            {t('saints_description')}
          </p>

          {/* Saints Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="smst-stats-box">
              <div className="smst-stats-number">64+</div>
              <div className="smst-stats-label">{t('saints_stat_total')}</div>
            </div>
            <div className="smst-stats-box">
              <div className="smst-stats-label">{t('saints_stat_traditions')}</div>
              <p className="text-gray-700 font-semibold">Multiple</p>
            </div>
            <div className="smst-stats-box">
              <div className="smst-stats-label">{t('saints_stat_eras')}</div>
              <p className="text-gray-700 font-semibold">Ancient to Modern</p>
            </div>
            <div className="smst-stats-box">
              <div className="smst-stats-label">{t('saints_stat_regions')}</div>
              <p className="text-gray-700 font-semibold">India & Beyond</p>
            </div>
          </div>

          {/* Saints & Masters with Images */}
          <h3 className="text-2xl font-bold text-orange-600 mb-8">{t('saints_masters_title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {saintsData.map((saint, idx) => (
              <div key={idx} className="smst-card overflow-hidden hover:shadow-lg transition-shadow">
                <div className="w-full h-48 overflow-hidden bg-gray-200">
                  <img 
                    src={saint.image} 
                    alt={getSaintName(saint)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="smst-card-title mt-4">{getSaintName(saint)}</h4>
                <p className="smst-card-text text-sm">{getSaintDesc(saint)}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-lg font-bold text-orange-600 mb-4">🔵 {t('saints_more_saints_title')}</p>
            <p className="text-gray-700">
              {t('saints_more_saints_text')}
            </p>
          </div>

          {/* Saint Categories */}
          <h3 className="text-2xl font-bold text-orange-600 mt-12 mb-8">{t('saints_categories_title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="smst-card text-center">
              <h4 className="font-bold text-lg mb-2">{t('saints_category_ancient')}</h4>
              <p className="text-gray-600 text-sm">{t('saints_category_ancient_desc')}</p>
            </div>
            <div className="smst-card text-center">
              <h4 className="font-bold text-lg mb-2">{t('saints_category_medieval')}</h4>
              <p className="text-gray-600 text-sm">{t('saints_category_medieval_desc')}</p>
            </div>
            <div className="smst-card text-center">
              <h4 className="font-bold text-lg mb-2">{t('saints_category_modern')}</h4>
              <p className="text-gray-600 text-sm">{t('saints_category_modern_desc')}</p>
            </div>
            <div className="smst-card text-center">
              <h4 className="font-bold text-lg mb-2">{t('saints_category_global')}</h4>
              <p className="text-gray-600 text-sm">{t('saints_category_global_desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
