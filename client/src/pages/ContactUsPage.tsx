import Layout from '@/components/Layout';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactUsPage() {
  const { t } = useLanguage();
  return (
    <Layout>
      <section id="contact" className="smst-section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="smst-section-title">{t('contact_title')}</h2>
          <p className="smst-section-subtitle">{t('contact_subtitle')}</p>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="smst-card text-center p-6">
              <Mail className="w-10 h-10 mx-auto mb-4 text-orange-600" />
              <h4 className="font-bold text-lg mb-2">{t('contact_email_title')}</h4>
              <p className="text-gray-600">info@saimastersevatrust.org</p>
            </div>
            <div className="smst-card text-center p-6">
              <Phone className="w-10 h-10 mx-auto mb-4 text-orange-600" />
              <h4 className="font-bold text-lg mb-2">{t('contact_call_title')}</h4>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
            <div className="smst-card text-center p-6">
              <MapPin className="w-10 h-10 mx-auto mb-4 text-orange-600" />
              <h4 className="font-bold text-lg mb-2">{t('contact_visit_title')}</h4>
              <p className="text-gray-600">{t('contact_visit_address')}</p>
            </div>
          </div>

          {/* <div className="mt-12 p-8 bg-orange-50 rounded-lg shadow-inner">
            <h3 className="text-2xl font-bold text-orange-600 mb-4 text-center">{t('contact_form_title')}</h3>
            <form className="space-y-4 max-w-xl mx-auto">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('contact_form_name')}</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('contact_form_email')}</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('contact_form_message')}</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-orange-600 text-white px-8 py-3 rounded font-bold hover:bg-orange-700 transition-colors">
                  {t('contact_form_submit')}
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </section>
    </Layout>
  );
}
