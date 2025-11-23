import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

// Data from original Home.tsx
const discourses = [
  { no: 1, title: 'Likes and Dislikes', topic: 'Spiritual Practice', format: 'Audio' },
  { no: 2, title: 'How to Serve SadGuru', topic: 'Guru Seva', format: 'Audio' },
  { no: 3, title: 'Eradicating Deep Routed Samskaras', topic: 'Inner Transformation', format: 'Audio' },
  { no: 4, title: 'Mama Maaya Duratyaya', topic: 'Spiritual Teaching', format: 'Audio' },
  { no: 5, title: 'Work is Worship', topic: 'Spiritual Practice', format: 'Audio' },
  { no: 6, title: 'True Meaning of Resorting to Sadguru', topic: 'Guru Seva', format: 'Audio' },
  { no: 7, title: 'Sri Guru Smarana', topic: 'Devotion', format: 'Audio' },
  { no: 8, title: 'Readiness to Serve Sadguru', topic: 'Guru Seva', format: 'Audio' },
];

export default function SatsangPage() {
  const { t } = useLanguage();
  return (
    <Layout>
      {/* Satsang Section */}
      <section id="satsang" className="smst-section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="smst-section-title">{t('satsang_title')}</h2>
          <p className="smst-section-subtitle">{t('satsang_subtitle')}</p>

          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            {t('satsang_description')}
          </p>

          {/* Satsang Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="smst-stats-box">
              <div className="smst-stats-number">33+</div>
              <div className="smst-stats-label">{t('satsang_stat_total')}</div>
            </div>
            <div className="smst-stats-box">
              <div className="smst-stats-label">{t('satsang_stat_format')}</div>
              <p className="text-gray-700 font-semibold">Audio (MP3)</p>
            </div>
            <div className="smst-stats-box">
              <div className="smst-stats-label">{t('satsang_stat_duration')}</div>
              <p className="text-gray-700 font-semibold">Varies</p>
            </div>
            <div className="smst-stats-box">
              <div className="smst-stats-label">{t('satsang_stat_language')}</div>
              <p className="text-gray-700 font-semibold">Telugu</p>
            </div>
          </div>

          {/* Discourse Table */}
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <h3 className="text-2xl font-bold text-orange-600 mb-6">{t('satsang_collection_title')}</h3>
            <table className="smst-table">
              <thead>
                <tr>
                  <th>{t('satsang_table_no')}</th>
                  <th>{t('satsang_table_title')}</th>
                  <th>{t('satsang_table_topic')}</th>
                  <th>{t('satsang_table_format')}</th>
                </tr>
              </thead>
              <tbody>
                {discourses.map((discourse) => (
                  <tr key={discourse.no}>
                    <td>{discourse.no}</td>
                    <td className="font-semibold">{discourse.title}</td>
                    <td><span className="smst-badge smst-badge-blue">{discourse.topic}</span></td>
                    <td><span className="smst-badge smst-badge-green">🎵 {discourse.format}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 font-semibold">33+ Audio Discourses Available</p>
            <p className="text-gray-600">Free Access to All • Regular Updates</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
