
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="https://cdn.poehali.dev/files/ff492d36-8393-4378-93bd-fe0921ee0c56.JPG" 
            alt="Логотип Ось Жизни" 
            className="h-10 w-10"
          />
          <span className="font-semibold text-lg text-primary">Ось Жизни</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О методе</a>
          <a href="#benefits" className="text-gray-700 hover:text-primary transition-colors">Преимущества</a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
          <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <a href="tel:+79012345678" className="hidden md:flex items-center gap-2 text-gray-700">
            <Icon name="Phone" className="h-4 w-4 text-primary" />
            <span>+7 (901) 234-56-78</span>
          </a>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Записаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
