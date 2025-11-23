import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeaderProps {
  // Removed activeSection and onNavigate as they are no longer needed for section scrolling
}

interface NavItem {
  path?: string;
  label: string;
  submenus?: { path: string; label: string }[];
}

export default function Header({}: HeaderProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();

  const navItems: NavItem[] = [
    { path: '/', label: t('nav_home') },
    { path: '/about', label: t('nav_about') },
    { path: '/books', label: t('nav_books') },
    { path: '/satsang', label: t('nav_satsang') },
    {
      path: '/saints',
      label: t('nav_saints'),
      submenus: [
        { path: '/saints/list', label: t('nav_books') },
        { path: '/saints/gallery', label: t('nav_satsang') },
      ],
    },
    { path: '/contact', label: t('nav_contact') },
    // { path: '/donate', label: 'Donate' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar - Orange */}
      <div className="smst-header-top">
        <p className='font-bold'>🕉️ సత్యం | ధర్మం | సంపన్నత్వం | సాధారణత్వం | సద్గురుసేవ 🕉️</p>
      </div>

      {/* Main Header - White Background */}
      <div className="bg-white shadow-md bg-image">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center gap-3">
              <div className="smst-logo"><img src="./logo-smst.png" alt="" /></div>
              <div>
                <h1 className="text-1xl font-bold text-gray-800 font-serif">Sai Master Seva Trust</h1>
                <p className="text-1xl text-orange-600 text-sm slogan">Golagamudi, Andhra Pradesh</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2 navigation-tab">
              {navItems.map((item, idx) => (
                <div key={idx} className="relative group">
                  {item.path ? (
                    <Link
                      href={item.path}
                      onClick={handleNavClick}
                      className={`text-sm font-semibold px-3 py-1 rounded-full transition-all duration-300 relative group flex items-center gap-1 ${
                        location === item.path
                          ? 'text-orange-600 bg-orange-100'
                          : 'text-gray-700 hover:text-orange-600'
                      }`}
                    >
                      {item.label}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ${
                        location === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </Link>
                  ) : (
                    <button className={`text-sm font-semibold px-3 py-1 rounded-full transition-all duration-300 flex items-center gap-1 text-gray-700 hover:text-orange-600`}>
                      {item.label}
                      {item.submenus && <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />}
                    </button>
                  )}

                  {/* Submenu */}
                  {item.submenus && (
                    <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      {item.submenus.map((submenu, subIdx) => (
                        <Link
                          key={subIdx}
                          href={submenu.path}
                          className={`block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-all ${
                            subIdx === 0 ? 'rounded-t-lg' : ''
                          } ${subIdx === item.submenus!.length - 1 ? 'rounded-b-lg' : ''}`}
                        >
                          {submenu.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Language Selector & Donate Button */}
            <div className="hidden md:flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300"
                >
                  <Globe size={18} />
                  <span className="text-sm font-semibold">{language.toUpperCase()}</span>
                </button>
                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg z-50 animate-in fade-in slide-in-from-top-2">
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm font-semibold rounded-t-lg transition-all ${
                        language === 'en'
                          ? 'bg-orange-100 text-orange-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('te');
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm font-semibold rounded-b-lg transition-all ${
                        language === 'te'
                          ? 'bg-orange-100 text-orange-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      తెలుగు
                    </button>
                  </div>
                )}
              </div>
              <Link
                href="/donate"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform"
              >
                ❤️ Donate Now
              </Link>
            </div>

            {/* Language Selector Mobile */}
            <div className="md:hidden flex items-center gap-2">
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold hover:bg-gray-200 transition-all"
                >
                  <Globe size={16} />
                  {language.toUpperCase()}
                </button>
                {langMenuOpen && (
                  <div className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg z-50 animate-in fade-in slide-in-from-top-2">
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1 text-xs font-semibold rounded-t-lg transition-all ${
                        language === 'en'
                          ? 'bg-orange-100 text-orange-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('te');
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1 text-xs font-semibold rounded-b-lg transition-all ${
                        language === 'te'
                          ? 'bg-orange-100 text-orange-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      తెలుగు
                    </button>
                  </div>
                )}
              </div>
              {/* Mobile Menu Toggle */}
              <button
                className="text-orange-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
              {navItems.map((item, idx) => (
                <div key={idx}>
                  {item.path ? (
                    <Link
                      href={item.path}
                      onClick={handleNavClick}
                      className={`text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 text-left block ${
                        location === item.path
                          ? 'text-orange-600 bg-orange-100'
                          : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                        className="w-full text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-300 text-left flex items-center justify-between text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            openSubmenu === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openSubmenu === item.label && item.submenus && (
                        <div className="ml-4 flex flex-col gap-1 mt-1 animate-in fade-in slide-in-from-top-2">
                          {item.submenus.map((submenu, subIdx) => (
                            <Link
                              key={subIdx}
                              href={submenu.path}
                              className="text-xs font-semibold px-3 py-1 rounded-lg text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-all"
                            >
                              {submenu.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <Link
                href="/donate"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-600 transition-all w-full mt-2 shadow-md hover:shadow-lg block text-center"
              >
                ❤️ Donate Now
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
