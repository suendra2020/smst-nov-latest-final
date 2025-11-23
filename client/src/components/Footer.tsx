import { useLanguage } from '@/contexts/LanguageContext';
import AudioPlayer from './AudioPlayer';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="smst-footer">
      <div className="container mx-auto px-4">
        {/* Audio Player Section - Added as per user request */}
       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="smst-footer-title">{t('footer_about_title')}</h3>
            <p className="text-gray-400 text-sm">
              {t('footer_about_desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="smst-footer-title">{t('footer_quick_links_title')}</h3>
            <ul className="space-y-2">
              <li><a href="/" className="smst-footer-link">{t('footer_home')}</a></li>
              <li><a href="/about" className="smst-footer-link">{t('footer_about')}</a></li>
              <li><a href="/books" className="smst-footer-link">{t('footer_books')}</a></li>
              <li><a href="/satsang" className="smst-footer-link">{t('footer_satsang')}</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="smst-footer-title">{t('footer_resources_title')}</h3>
            <ul className="space-y-2">
              <li><a href="/saints" className="smst-footer-link">{t('footer_saints')}</a></li>
              <li><a href="/contact" className="smst-footer-link">{t('footer_contact')}</a></li>
              <li><a href="#" className="smst-footer-link">{t('footer_privacy')}</a></li>
              <li><a href="#" className="smst-footer-link">{t('footer_terms')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="smst-footer-title">{t('footer_contact_title')}</h3>
            <p className="text-gray-400 text-sm mb-2">
              <strong>{t('footer_address_label')}</strong><br />
              {t('footer_address')}
            </p>
            <p className="text-gray-400 text-sm">
              <strong>{t('footer_email_label')}</strong><br />
              <a href="mailto:info@saimasterseva.org" className="smst-footer-link">{t('footer_email')}</a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-1">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('footer_copyright')}
            </p>
                  <div className="flex justify-center audioplayer">
          <AudioPlayer />
        </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">{t('footer_facebook')}</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">{t('footer_twitter')}</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.593 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">{t('footer_instagram')}</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.278.278 2.579.07 7.052.012 8.331 0 8.756 0 12s.012 3.669.07 4.948c.208 4.474 2.626 6.875 7.052 7.083 1.279.058 1.704.07 4.948.07s3.669-.012 4.948-.07c4.426-.208 6.844-2.609 7.052-7.083.058-1.279.07-1.704.07-4.948s-.012-3.669-.07-4.948c-.208-4.474-2.626-6.875-7.052-7.083C15.669.012 15.244 0 12 0z"/><circle cx="12" cy="12" r="3.6"/><circle cx="18.406" cy="5.594" r=".6"/></svg>
              </a>
            </div>
       
          </div>
        </div>
      </div>
    </footer>
  );
}
