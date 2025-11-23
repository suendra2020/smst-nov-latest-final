import Layout from '@/components/Layout';
import { Home as HomeIcon, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutUsPage() {
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  return (
    <Layout>
      {/* Welcome Section (About Us) */}
      <section id="about" className="smst-section bg-white bg-image">
        <div className="container mx-auto px-4">
          <div
            ref={titleRef}
            className={`transition-all duration-700 ${titleVisible ? 'animate-fade-in-down' : 'opacity-0'}`}
          >
            <h2 className="smst-section-title">{t('about_title')}</h2>
          </div>
          
          <div
            ref={contentRef}
            className={`max-w-4xl mx-auto mb-12 transition-all duration-700 ${contentVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <p className="text-gray-700 mb-6 leading-relaxed">
              {t('about_p1')}
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              {t('about_p2')}
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              {t('about_p3')}
            </p>

            <div className="smst-disclaimer">
              <p className="smst-disclaimer-title">{t('about_disclaimer_title')}</p>
              <p className="smst-disclaimer-text">
                {t('about_disclaimer_text')}
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div
            ref={valuesRef}
            className={`transition-all duration-700 ${valuesVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <h3 className="smst-section-title text-3xl mb-12">{t('about_values_title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger">
            <div className="smst-card">
              <div className="smst-card-icon">✨</div>
              <h4 className="smst-card-title">{t('about_value1_title')}</h4>
              <p className="smst-card-text">{t('about_value1_desc')}</p>
            </div>
            <div className="smst-card">
              <div className="smst-card-icon">🙏</div>
              <h4 className="smst-card-title">{t('about_value2_title')}</h4>
              <p className="smst-card-text">{t('about_value2_desc')}</p>
            </div>
            <div className="smst-card">
              <div className="smst-card-icon">🛡️</div>
              <h4 className="smst-card-title">{t('about_value3_title')}</h4>
              <p className="smst-card-text">{t('about_value3_desc')}</p>
            </div>
          </div>
          </div>

          {/* Offerings Stats */}
          <h3 className="smst-section-title text-3xl mt-16 mb-12">Our Offerings</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-stagger">
            <div className="smst-stats-box">
              <HomeIcon className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <div className="smst-stats-number">74+</div>
              <div className="smst-stats-label">Books & Discourses</div>
            </div>
            <div className="smst-stats-box">
              <HomeIcon className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <div className="smst-stats-number">33+</div>
              <div className="smst-stats-label">Satsang Discourses</div>
            </div>
            <div className="smst-stats-box">
              <Users className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <div className="smst-stats-number">44+</div>
              <div className="smst-stats-label">Saints & Masters</div>
            </div>
            <div className="smst-stats-box">
              <HomeIcon className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <div className="smst-stats-number">Free</div>
              <div className="smst-stats-label">Accommodation</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
