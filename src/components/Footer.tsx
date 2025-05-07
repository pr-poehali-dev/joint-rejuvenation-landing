
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12" id="contacts">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/ff492d36-8393-4378-93bd-fe0921ee0c56.JPG" 
                alt="Логотип Ось Жизни" 
                className="h-10 w-10"
              />
              <span className="font-semibold text-lg">Ось Жизни</span>
            </div>
            <p className="text-gray-300 mb-4">
              Адаптивно функциональная гимнастика на запатентованном тренажере «Ось Жизни» —
              ваш короткий путь к омоложению и здоровью.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Icon name="Telegram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon name="MapPin" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Санкт-Петербург, ул. Примерная, д. 123</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Phone" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>+7 (901) 234-56-78</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Mail" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>info@oszhizni.ru</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Clock" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Пн-Пт: 9:00-20:00, Сб: 10:00-18:00</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Главная</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">О методе</a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Преимущества</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Отзывы</a>
              </li>
              <li>
                <a href="#contacts" className="text-gray-300 hover:text-white transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} «Ось Жизни». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
