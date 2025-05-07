
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

// Типизация данных отзывов
interface Testimonial {
  text: string;
  author: string;
  profession: string;
  highlight: string;
  avatar: string;
}

// Заголовок секции отзывов
const TestimonialsHeader = () => (
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
    
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      <span className="text-gradient">Реальные истории</span> счастливых клиентов
    </h2>
    
    <p className="text-gray-600 max-w-2xl mx-auto">
      Послушайте, что говорят наши клиенты о результатах, которых они достигли
      с помощью методики «Ось Жизни». Эти истории вдохновляют и подтверждают
      эффективность нашего подхода.
    </p>
  </motion.div>
);

// Карточка с отзывом
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="h-full border-none bg-white shadow-soft hover:shadow-md transition-all duration-300 overflow-hidden group">
    <CardContent className="p-0">
      <TestimonialHeader testimonial={testimonial} />
      <TestimonialContent testimonial={testimonial} />
    </CardContent>
  </Card>
);

// Шапка карточки с отзывом
const TestimonialHeader = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-brand-gradient p-4 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/10 blur-xl"></div>
    <div className="relative z-10 flex items-center gap-3">
      <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/40">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.author}
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="text-white">
        <h3 className="font-medium">{testimonial.author}</h3>
        <p className="text-xs text-white/80">{testimonial.profession}</p>
      </div>
    </div>
  </div>
);

// Содержимое карточки с отзывом
const TestimonialContent = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="p-6">
    <div className="mb-4">
      <div className="text-gray-700 leading-relaxed relative">
        <Icon name="Quote" className="absolute -top-2 -left-1 h-6 w-6 text-primary-light/20" />
        <div className="relative z-10 pl-4">
          {testimonial.text.split(testimonial.highlight).map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className="font-medium text-primary">{testimonial.highlight}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
    
    <TestimonialFooter />
  </div>
);

// Подвал карточки с отзывом
const TestimonialFooter = () => (
  <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
    <div className="flex gap-1 text-yellow-400">
      {[1, 2, 3, 4, 5].map((star) => (
        <Icon key={star} name="Star" className="h-4 w-4 fill-current" />
      ))}
    </div>
    
    <span className="text-xs text-gray-500 font-medium">Подтвержденный результат</span>
  </div>
);

// Кнопки навигации карусели
const CarouselNavigation = ({ carouselRef }: { carouselRef: React.RefObject<any> }) => (
  <div className="flex justify-center mt-8 gap-4">
    <Button 
      variant="outline" 
      size="icon" 
      className="rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary"
      onClick={() => carouselRef.current?.scrollPrev()}
    >
      <Icon name="ChevronLeft" className="h-5 w-5" />
    </Button>
    <Button 
      variant="outline" 
      size="icon"
      className="rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary"
      onClick={() => carouselRef.current?.scrollNext()}
    >
      <Icon name="ChevronRight" className="h-5 w-5" />
    </Button>
  </div>
);

// Карточка-призыв после отзывов
const TestimonialsCTA = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5, duration: 0.6 }}
    className="mt-16 max-w-3xl mx-auto"
  >
    <Card className="border-none shadow-md bg-white overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
              <Icon name="Users" className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">Присоединяйтесь к нашим клиентам</h3>
              <p className="text-gray-600">И ощутите результат уже с первого занятия</p>
            </div>
          </div>
          
          <Button className="bg-brand-gradient hover:shadow-glow text-white">
            Читать больше историй
            <Icon name="ChevronRight" className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

// Основной компонент с отзывами
const Testimonials = () => {
  const carouselRef = useRef(null);

  // Данные отзывов
  const testimonials: Testimonial[] = [
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

  return (
    <section className="py-20 bg-white relative" id="testimonials">
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,178,189,0.05)_0%,rgba(255,255,255,0)_70%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <TestimonialsHeader />
        
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Carousel 
            className="w-full" 
            ref={carouselRef}
            opts={{
              align: "start",
              loop: true
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselNavigation carouselRef={carouselRef} />
          </Carousel>
        </motion.div>
        
        <TestimonialsCTA />
      </div>
    </section>
  );
};

export default Testimonials;
