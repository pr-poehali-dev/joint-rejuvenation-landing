
import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Отслеживаем скролл для изменения стиля шапки
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "О методе" },
    { href: "#benefits", label: "Преимущества" },
    { href: "#device", label: "Тренажёр" },
    { href: "#testimonials", label: "Отзывы" },
    { href: "#contacts", label: "Контакты" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Логотип */}
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/ff492d36-8393-4378-93bd-fe0921ee0c56.JPG" 
              alt="Логотип Ось Жизни" 
              className="h-10 w-10 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-montserrat font-bold text-lg text-primary">Ось Жизни</span>
              <span className="text-xs text-gray-600 hidden sm:block">Натуральное омоложение</span>
            </div>
          </div>
          
          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-gray-700 hover:text-primary font-medium transition-colors text-sm relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          
          {/* Контакты и кнопка действия */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+79012345678" 
              className="hidden lg:flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon name="Phone" className="h-4 w-4 text-primary" />
              </div>
              <span className="text-gray-700 text-sm group-hover:text-primary transition-colors">+7 (901) 234-56-78</span>
            </a>
            
            <Button 
              className="bg-brand-gradient hover:shadow-glow btn-glow text-white font-medium"
            >
              Записаться
              <Icon name="ArrowRight" className="h-4 w-4 ml-1" />
            </Button>
            
            {/* Мобильное меню */}
            <button 
              className="md:hidden p-2" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Меню"
            >
              <Icon 
                name={mobileMenuOpen ? "X" : "Menu"} 
                className="h-6 w-6 text-gray-700" 
              />
            </button>
          </div>
        </div>
      </div>
      
      {/* Мобильное меню выпадающее */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <a 
                    key={item.href}
                    href={item.href} 
                    className="text-gray-700 hover:text-primary py-2 px-3 rounded-md hover:bg-gray-50 transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a 
                  href="tel:+79012345678" 
                  className="flex items-center gap-2 py-2 px-3 text-primary"
                >
                  <Icon name="Phone" className="h-4 w-4" />
                  <span>+7 (901) 234-56-78</span>
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
