import Layout from '@/components/Layout';
import { BookOpen, Music } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Data from original Home.tsx
const featuredBooks = [
  { title: 'Avadhoota Leela', category: 'Spiritual Teaching', languages: 'Telugu, Hindi', pdfLink: '/avadhuthaleelau.pdf', audioLink: '/AvadutaBodhamrutam_1.mp3' },
  { title: 'MAHATVA LEELA - English', category: 'Spiritual Teaching', languages: 'English', pdfLink: null, audioLink: null },
  { title: 'Avadhoota Leela (Tamil)', category: 'Spiritual Teaching', languages: 'Tamil', pdfLink: null, audioLink: null },
  { title: 'Bhagawan Sri Venkaiah Swamy', category: 'Biography', languages: 'English', pdfLink: null, audioLink: null },
  { title: 'Sri Swami Samadhi', category: 'Devotional', languages: 'Hindi', pdfLink: null, audioLink: null },
  { title: 'Guru Stuthi', category: 'Devotional', languages: 'Sanskrit', pdfLink: null, audioLink: null },
];

export default function BooksPage() {
  const { t } = useLanguage();
  return (
    <Layout>
      {/* Books & Downloads Section */}
      <section id="books" className="smst-section bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="smst-section-title">{t('books_title')}</h2>
          <p className="smst-section-subtitle">{t('books_subtitle')}</p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="smst-stats-box">
              <div className="smst-stats-number">74+</div>
              <div className="smst-stats-label">{t('books_stat_total')}</div>
            </div>
            <div className="smst-stats-box">
              <div className="smst-stats-number">6+</div>
              <div className="smst-stats-label">{t('books_stat_languages')}</div>
            </div>
            <div className="smst-stats-box">
              <div className="smst-stats-number">8</div>
              <div className="smst-stats-label">{t('books_stat_categories')}</div>
            </div>
            <div className="smst-stats-box">
              <div className="smst-stats-number">2</div>
              <div className="smst-stats-label">{t('books_stat_formats')}</div>
            </div>
          </div>

          {/* Books List */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-orange-600 mb-6">{t('books_featured_title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredBooks.map((book, idx) => (
                <div key={idx} className="smst-card">
                  <h4 className="font-bold text-lg mb-2 text-orange-600">{book.title}</h4>
                  <p className="text-sm text-gray-600 mb-2"><span className="font-semibold">{t('books_category_label')}</span> {book.category}</p>
                  <p className="text-sm text-gray-600 mb-4"><span className="font-semibold">{t('books_languages_label')}</span> {book.languages}</p>
                  <div className="flex gap-2">
                    <a 
                      href={book.pdfLink || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex-1 p-2 rounded transition-colors text-sm font-semibold ${
                        book.pdfLink 
                          ? 'bg-orange-500 text-white hover:bg-orange-600 cursor-pointer' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      onClick={(e) => !book.pdfLink && e.preventDefault()}
                    >
                      {t('books_download_pdf')}
                    </a>
                    <a 
                      href={book.audioLink || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex-1 p-2 rounded transition-colors text-sm font-semibold ${
                        book.audioLink 
                          ? 'bg-green-500 text-white hover:bg-green-600 cursor-pointer' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      onClick={(e) => !book.audioLink && e.preventDefault()}
                    >
                      {t('books_listen_audio')}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 mb-4">Looking for More Materials?</p>
            <p className="text-gray-600 mb-6">Our complete collection is available at Sai Master Seva Trust, Colagamudi. Visit us or contact us for more information.</p>
            <button className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition-colors">
              📥 Download Complete Catalog
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
