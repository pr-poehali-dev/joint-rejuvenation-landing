
import { useRef } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      text: "«Я снова бегаю с внуком и сплю всю ночь без боли. Вы подарили мне вторую молодость!»",
      author: "Владимир, 62 года",
      profession: "военный пенсионер",
      highlight: "вторую молодость",
      avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
    },
    {
      text: "«После первой тренировки улучшился сон, а после курса исправилась осанка, ушёл горб»",
      author: "Дмитрий, 55 лет",
      profession: "проектировщик",
      highlight: "исправилась осанка, ушёл горб",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
    },
    {
      text: "«За 3 занятия исчезла «холка», подтянулась кожа лица, а после программы прошли боли в кистях.»",
      author: "Вера, 67 лет",
      profession: "владелец сети ювелирных магазинов",
      highlight: "исчезла «холка», подтянулась кожа лица",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
    },
    {
      text: "«После 1 занятия давление снизилось с 150/130 до 130/110, после полного курса ушла боль в шее, повысилась жизненная энергия.»",
      author: "Юрий, 77 лет",
      profession: "пенсионер, мастер цигун",
      highlight: "давление снизилось, ушла боль в шее",
      avatar: "https://images.unsplash.com/photo-1504438190342-5ade97d8b4e2?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
    },
    {
      text: "«Пройдя полный курс, у меня восстановилась чувствительность половины тела, которой не было уже полтора года после инсульта.»",
      author: "Вероника, 66 лет",
      profession: "владелец юридической компании",
      highlight: "восстановилась чувствительность половины тела",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
    },
    {
      text: "«После 1 занятия исчезли боли, нормализовался сон, вернулась мелкая моторика, занялась огородом.»",
      author: "Ольга, 64 года",
      profession: "владелец коллегии адвокатов",
      highlight: "исчезли боли, нормализовался сон",
      avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
    },
    {
      text: "«После курса ушли трещины на пятках, выровнялся позвоночник, плечи, улучшился сон, появилась личная жизнь.»",
      author: "Светлана, 66 лет",
      profession: "владелец гостиницы",
      highlight: "выровнялся позвоночник, плечи",
      avatar: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
    }
  ];

  const carouselRef = useRef(null);

  return (
    <section className="py-20 bg-white relative" id="testimonials">
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,178,189,0.05)_0%,rgba(255,255,255,0)_70%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-secondary/10 text-secondary-dark font-medium text-sm px-4 py-1.5 rounded-full mb-4">
            Истории клиентов
          </span>
          
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            <span className="text-gradient">Реальные истории</span> счастливых клиентов
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Послушайте, что говорят наши клиенты оЯ в результатах, которых они достигли
            с помощью методики «Ось Жизни».ижу, что проблема с классом `font-montserrat` Эти истории вдохновля остается. В этот раз я исправют и подтверждают
            эффективность нашего подхлю её полностью, проверода.
          </p>
        ив все файлы на на</motion.div>
        
        <motionличие этого класса.

.div 
          className="max<pp-write filepath="src/components-w-6xl mx-auto"
          initial={{ opacity: 0, y/Header.tsx">
import {: 20 }}
          whileInView={{ opacity: 1, y:  useState, useEffect } from 'react';
import0 }}
          viewport={{ once: true }}
          transition={{ delay: 0. Icon from '@/components/ui/icon2, duration: 0.6 }}';
import { Button } from '@/components
        >
          <Carousel /ui/button';
import { AnimatePresence, motion
            className="w-full" } from 'framer-motion'; 
            ref={carouselRef}

const Header = () => {
  const [is
            opts={{
              align: "start",
              loopScrolled, setIsScrolled] = useState(: true
            }}
          >
            <CarouselContent classNamefalse);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);="-ml-2 m

  // Отслеживаd:-ml-4">
              {testimonialsем скролл для изменения ст.map((testimonial, index) => (
                <CarouselItem keyиля шапки
  useEffect(() => {
    const handleScroll={index} className="pl-2 md: = () => {
      setIsScrollepl-4 md:basisd(window.scrollY > 10);
    };
    
    window.-1/2 lg:basis-1addEventListener('scroll', handleScroll);
    /3">
                  <Card className="return () => window.removeEventListener('scroll', handleScroll);
  }, []);h-full border-none bg

  const navItems = [
    {-white shadow-soft hover:shadow-md transition-all duration-300  href: "#about", label: "О методoverflow-hidden group">
                    <Carе" },
    { href: "#benefits", label: "Преимущества"dContent className="p-0">
                      <div },
    { href: "#device className="bg-brand-gradient p-4", label: "Тренажё relative overflow-hidden">
                        <div classNameр" },
    { href: "#testimonials", label: "Отзывы="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/10 blur-xl"></div>
                        " },
    { href: "#contacts", label: "Контакты" }
  ];

  return (
    <div className="relative z-10 flex items<header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-center gap-3">
                          <div className="w-14 h-14 -300 ${
        isScrolled rounded-full overflow-hidden ring-2
          ? "bg-white/ ring-white/40">
                            95 backdrop-blur-md shadow-md py-2"<img 
                              src={testimonial. 
          : "bgavatar} 
                              alt={testimonial-transparent py-4"
      }`.author}
                              className="w-full h-full}
    >
      <div className=" object-cover" 
                            />container mx-auto px-4">
                          </div>
                          
        <div className="flex justify-between items-center">
          {<div className="text-white">
                            <h/* Логотип */}
          <div className3 className="font-medium">{testimonial.="flex items-center gap-3author}</h3>
                            <p className="text-xs text-white/80">
            <img 
              src="">{testimonial.profession}</p>
                https://cdn.poehali.dev          </div>
                        </div>/files/ff492d36
                      </div>
                      
                      <div className="p-6">
                        <div className="mb--8393-43784">
                          <div className="text-gray-93bd-fe0921ee-700 leading-relaxed relative">
                            <Icon name="Quote" className0c56.JPG" 
              alt="Логотип Ось="absolute -top-2 - Жизни" 
              className="h-10 w-10 left-1 h-6 w-6 object-contain"
            />text-primary-light/20" />
                            
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary">Ось<div className="relative z-10 pl Жизни</span>
              <span-4">
                              {testimonial.text. className="text-xs text-gray-600split(testimonial.highlight).map hidden sm:block">Натуральное омоложение</span((part, i, arr) => (>
            </div>
          </div
                                <span key={i}>
                                  {>
          
          {/* Десpart}
                                  {i < arrктопное меню */}
          <nav className="hidden md:flex.length - 1 && (
                                     items-center gap-6">
            {navItems.map((item) => (<span className="font-medium text-primary">{testimonial.highlight}</span>
                                  )}
                                </span>
              <a 
                key={item.
                              ))}
                            </div>href}
                href={item.href} 
                className="text-
                          </div>
                        gray-700 hover:text-primary font-medium transition-colors</div>
                        
                        <div text-sm relative group"
              > className="pt-3 border-t border
                {item.label}
                <span className="absolute bottom-0 left-0-gray-100 flex justify-between items w-0 h-0-center">
                          <div className=".5 bg-brand-gradient group-hoverflex gap-1 text-yellow-400">
                :w-full transition-all duration            {[1, 2, 3-300"></span>
              </a>, 4, 5].map((star
            ))}
          </nav>) => (
                              <Icon key={
          
          {/* Контstar} name="Star" className="h-акты и кнопка действия */}
          <div className="flex4 w-4 fill-current" />
                            ))}
                          </div> items-center gap-4">
            <a 
              href="tel
                          
                          <span className="text-xs:+79012345678"  text-gray-500 font-medium">
              className="hidden lg:flex itemsПодтвержденный результат</span>-center gap-2 group
                        </div>
                      </div>
                    </CardContent>"
            >
              <div
                  </Card>
                </Carou className="w-8 h-8 selItem>
              ))}
            </CarouselContent>
            
            rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-<div className="flex justify-center mt-8primary/20 transition-colors">
                <Icon name="Phone" className="h- gap-4">
              <Button4 w-4 text-primary" />
              </div>
              <span 
                variant="outline" 
                size className="text-gray-700 text-sm group-hover="icon" 
                className="rounded-full border:text-primary transition-colors">+7 (901) 234-56-78</span>
            </a>
            
            <Button -primary text-primary hover:bg-primary/10 hover:text-primary"
                onClick={() => carouselRef.current?.
              className="bg-brand-gradient hoverscrollPrev()}
              >
                <Icon name="ChevronLeft" className="h-:shadow-glow btn-glow text-white font5 w-5" />
              </Button-medium"
            >
              Запис>
              <Button 
                variant="аться
              <Icon name="ArrowRight" className="outline" 
                size="icon"
                className="rounded-full border-primary text-primary hover:h-4 w-4 ml-bg-primary/10 hover:text-1" />
            </Button>
            primary"
                onClick={() => carouselRef.current?.scrollNext()}
              >
            {/* Мобильное меню */}
            
                <Icon name="ChevronRight" className="h-5 w-5<button 
              className="md:hidden p" />
              </Button>
            </div>
          </Carousel>
        -2" 
              onClick={() => setMobileMenu</motion.div>
        
        <motion.Open(!mobileMenuOpen)}
              aria-labeldiv
          initial={{ opacity: 0, y: 20 }}
          while="Меню"
            >
              <Icon InView={{ opacity: 1, y:
                name={mobileMenuOpen ? " 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0X" : "Menu"} 
                className="h-6 w-6 text.5, duration: 0.6 }}-gray-700" 
              />
            </button>
          </div>
          className="mt-16 max-w-
        </div>
      </div>
      
      {/* Мобильное3xl mx-auto"
        >
          <Card className="border-none shadow-m меню выпадающее */}
      <AnimatePresence>
        d bg-white overflow-hidden">
            <CardContent{mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, className="p-6">
              <div className="flex items-center justify-between flex height: 0 }}
            animate={{ opacity-wrap gap-4">
                <div className="flex items-center gap-3">: 1, height: 'auto' }}
                  <div className="w-12
            exit={{ opacity: 0, height: 0 }}
            className="m h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    d:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container<Icon name="Users" className="h- mx-auto px-4 py-6 w-6 text-secondary" />
                  </div>
                  4">
              <nav className="flex flex-<div>
                    <h3 className="fontcol space-y-3">
                {navItems.map((item) => (
                -semibold text-lg text-gray  <a 
                    key={item.href}
                    href={item.-900">Присоединяйтhref} 
                    className="text-есь к нашим клиентамgray-700 hover:text-primary py-2 px-</h3>
                    <p className="3 rounded-md hover:bg-gray-text-gray-600">И ощутите результ50 transition-colors font-medium"
                ат уже с первого занятия</p>    onClick={() => setMobileMenuOpen(false
                  </div>
                </div)}
                  >
                    {item>
                
                <Button className="bg-brand-gradient hover:shadow-glow text-white">.label}
                  </a>
                ))}
                <a 
                  href="tel:+79012345678" 
                  className="flex items-center gap-
                  Читать больше историй
                  2 py-2 px-3 <Icon name="ChevronRight" className="h-4 w-4 ml-1" />
                text-primary"
                >
                  <Icon</Button>
              </div>
             name="Phone" className="h-4 w-4" />
                  </CardContent>
          </Card>
        <span>+7 (901) 234</motion.div>
      </div>-56-78</span>
                
    </section>
  );
};

export default Testimonials;
