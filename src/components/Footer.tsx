
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8" id="contacts">
      {/* Верхняя часть футера */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Информация о компании */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/10 p-2 backdrop-blur-sm">
                <img 
                  src="https://cdn.poehali.dev/files/ff492d36-8393-4378-93bd-fe0921ee0c56.JPG" 
                  alt="Логотип Ось Жизни" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gradient-accent">Ось Жизни</h3>
                <p className="text-gray-400 text-sm">Природное омоложение</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">
              Адаптивно функциональная гимнастика на запатентованном тренажере «Ось Жизни» —
              ваш короткий путь к омоложению, источнику энергии и здоровью.
            </p>
            
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-primary/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-primary/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-primary/80 hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Telegram" className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-primary/80 hover:text-white transition-colors"
                aria-label="Youtube"
              >
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Контакты */}
          <div>
            <h3 className="font-semibold text-lg mb-6 relative inline-block">
              Контактная информация
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gradient rounded-full"></span>
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-primary-light shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon name="MapPin" className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Адрес</h4>
                  <p className="text-gray-300">Санкт-Петербург, ул. Примерная, д. 123</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-primary-light shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Phone" className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Телефон</h4>
                  <a href="tel:+79012345678" className="text-gray-300 hover:text-primary-light transition-colors">
                    +7 (901) 234-56-78
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-primary-light shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Mail" className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <a href="mailto:info@oszhizni.ru" className="text-gray-300 hover:text-primary-light transition-colors">
                    info@oszhizni.ru
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-primary-light shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon name="Clock" className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Часы работы</h4>
                  <p className="text-gray-300">Пн-Пт: 9:00-20:00, Сб: 10:00-18:00</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Навигация */}
          <div className="md:pl-6">
            <h3 className="font-semibold text-lg mb-6 relative inline-block">
              Навигация по сайту
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gradient rounded-full"></span>
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-primary-light transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-light/50 group-hover:bg-primary-light transition-colors"></span>
                      Главная
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-gray-300 hover:text-primary-light transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-light/50 group-hover:bg-primary-light transition-colors"></span>
                      О методе
                    </a>
                  </li>
                  <li>
                    <a href="#benefits" className="text-gray-300 hover:text-primary-light transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-light/50 group-hover:bg-primary-light transition-colors"></span>
                      Преимущества
                    </a>
                  </li>
                  <li>
                    <a href="#device" className="text-gray-300 hover:text-primary-light transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-light/50 group-hover:bg-primary-light transition-colors"></span>
                      Тренажёр
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <ul className="space-y-3">
                  <li>
                    <a href="#testimonials" className="text-gray-300 hover:text-primary-light transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-light/50 group-hover:bg-primary-light transition-colors"></span>
                      Отзывы
                    </a>
                  </li>
                  <li>
                    <a href="#contacts" className="text-gray-300 hover:text-primary-light transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-light/50 group-hover:bg-primary-light transition-colors"></span>
                      Контакты
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-primary-light transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-light/50 group-hover:bg-primary-light transition-colors"></span>
                      Франшиза
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-primary-light transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-light/50 group-hover:bg-primary-light transition-colors"></span>
                      Блог
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="bg-brand-gradient hover:shadow-glow btn-glow w-full text-white">
                Записаться на занятие
                <Icon name="CalendarCheck" className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Карта */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg h-64 md:h-80">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6036253003165!2d30.31410337668909!3d59.93878686211313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0J3QtdCy0YHQutC40Lkg0L_RgC4sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCz!5e0!3m2!1sru!2sru!4v1714492271213!5m2!1sru!2sru" 
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Расположение центра Ось Жизни на карте"
          ></iframe>
        </div>
        
        {/* Подвал */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} «Ось Жизни». Все права защищены.
          </p>
          
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-primary-light transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-primary-light transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
