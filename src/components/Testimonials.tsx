
import { useRef } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      text: "«Я снова бегаю с внуком и сплю всю ночь без боли. Вы подарили мне вторую молодость!»",
      author: "Владимир, 62 года, военный пенсионер",
      highlight: "вторую молодость",
      avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
    },
    {
      text: "«После первой тренировки улучшился сон, а после курса исправилась осанка, ушёл горб»",
      author: "Дмитрий, 55 лет, проектировщик",
      highlight: "исправилась осанка, ушёл горб",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
    },
    {
      text: "«За 3 занятия исчезла «холка», подтянулась кожа лица, а после программы прошли боли в кистях.»",
      author: "Вера, 67 лет, владелец сети ювелирных магазинов",
      highlight: "исчезла «холка», подтянулась кожа лица",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
    },
    {
      text: "«После 1 занятия давление снизилось с 150/130 до 130/110, после полного курса ушла боль в шее, повысилась жизненная энергия.»",
      author: "Юрий, 77 лет, пенсионер, мастер цигун",
      highlight: "давление снизилось, ушла боль в шее",
      avatar: "https://images.unsplash.com/photo-1504438190342-5ade97d8b4e2?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
    },
    {
      text: "«Пройдя полный курс, у меня восстановилась чувствительность половины тела, которой не было уже полтора года после инсульта.»",
      author: "Вероника, 66 лет, владелец юридической компании",
      highlight: "восстановилась чувствительность половины тела",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
    },
    {
      text: "«После 1 занятия исчезли боли, нормализовался сон, вернулась мелкая моторика, занялась огородом.»",
      author: "Ольга, 64 года, владелец коллегии адвокатов",
      highlight: "исчезли боли, нормализовался сон",
      avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
    },
    {
      text: "«После курса ушли трещины на пятках, выровнялся позвоночник, плечи, улучшился сон, появилась личная жизнь.»",
      author: "Светлана, 66 лет, владелец гостиницы",
      highlight: "выровнялся позвоночник, плечи",
      avatar: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=150&h=150&fit=crop&crop=faces&auto=format&q=80"
    }
  ];

  const carouselRef = useRef(null);

  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-DEFAULT">
            РЕАЛЬНЫЕ ИСТОРИИ
          </span>
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full" ref={carouselRef}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.author}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">{testimonial.author}</p>
                        </div>
                      </div>
                      
                      <div className="flex-grow">
                        <div className="text-gray-700 mb-2">
                          {testimonial.text.split(testimonial.highlight).map((part, i, arr) => (
                            <span key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                <span className="text-primary font-semibold">{testimonial.highlight}</span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-end mt-4">
                        <div className="flex gap-1 text-yellow-400">
                          <Icon name="Star" className="h-4 w-4 fill-current" />
                          <Icon name="Star" className="h-4 w-4 fill-current" />
                          <Icon name="Star" className="h-4 w-4 fill-current" />
                          <Icon name="Star" className="h-4 w-4 fill-current" />
                          <Icon name="Star" className="h-4 w-4 fill-current" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="relative inset-auto transform-none" />
              <CarouselNext className="relative inset-auto transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
