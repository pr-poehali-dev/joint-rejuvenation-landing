
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Фоновая графика */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-brand-gradient-soft rounded-bl-[100px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-tr-[50px]"></div>
        
        {/* Декоративные элементы */}
        <div className="absolute top-20 left-20 w-8 h-8 rounded-full bg-primary/20 animate-float"></div>
        <div className="absolute bottom-40 right-32 w-12 h-12 rounded-full bg-secondary/20 animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-40 right-40 w-6 h-6 rounded-full bg-accent/10 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Текстовый блок */}
          <motion.div 
            className="md:w-3/5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold tracking-tight mb-6">
              <span className="text-gradient">Природное омоложение</span> 
              <br className="hidden md:block" />
              суставов, позвоночника и ЦНС
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Адаптивно функциональная гимнастика на запатентованном тренажёре 
              <span className="text-primary font-semibold"> «Ось Жизни»</span> — ваш короткий путь к омоложению 
              <span className="italic"> без уколов, операций и мучений</span>.
            </h2>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full text-primary-dark font-medium text-sm">
                <Icon name="Clock" className="h-4 w-4" />
                <span>Результат с первого занятия</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/10 px-3 py-1.5 rounded-full text-secondary-dark font-medium text-sm">
                <Icon name="ShieldCheck" className="h-4 w-4" />
                <span>Научно доказанная методика</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/10 px-3 py-1.5 rounded-full text-accent-dark font-medium text-sm">
                <Icon name="Activity" className="h-4 w-4" />
                <span>100% натуральный способ</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-brand-gradient hover:shadow-glow btn-glow py-6 px-8 text-white text-lg font-montserrat font-semibold rounded-xl">
                Записаться на занятие
                <Icon name="ArrowUpRight" className="h-4 w-4 ml-2" />
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-primary bg-white/80 text-primary hover:bg-primary/5 py-6 px-8 text-lg font-montserrat font-medium rounded-xl"
              >
                <Icon name="PlayCircle" className="h-5 w-5 mr-2" />
                Смотреть видео
              </Button>
            </div>
          </motion.div>
          
          {/* Изображение */}
          <motion.div 
            className="md:w-2/5 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full blur-3xl opacity-30 transform scale-75"></div>
            <div className="relative highlight-box rounded-full p-1.5">
              <div className="rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://cdn.poehali.dev/files/1d3ca896-e7c9-415d-bde3-8fc9aa5aab2e.jpeg"
                  alt="Вячеслав Ан - автор методики"
                  className="rounded-full object-cover w-[320px] h-[320px] md:w-[380px] md:h-[380px]"
                />
                
                {/* Полупрозрачная подпись */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                  <p className="text-center font-medium text-gray-800">
                    <span className="text-primary">Вячеслав Ан</span> — автор методики
                  </p>
                </div>
              </div>
            </div>
            
            {/* Плавающие индикаторы */}
            <div className="absolute top-10 right-10 bg-white p-2 rounded-lg shadow-md animate-float" style={{animationDelay: '0.7s'}}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">Безопасно</span>
              </div>
            </div>
            
            <div className="absolute -bottom-2 -left-4 bg-white p-2 rounded-lg shadow-md animate-float" style={{animationDelay: '1.2s'}}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-sm font-medium">Эффективно</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Дополнительные преимущества внизу */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white shadow-soft rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center text-white">
                <Icon name="Sparkles" className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">Омоложение</h3>
                <p className="text-gray-600">Активирует внутренние ресурсы организма</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-soft rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center text-white">
                <Icon name="Dumbbell" className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">Восстановление</h3>
                <p className="text-gray-600">Устраняет боли и восстанавливает гибкость</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-soft rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center text-white">
                <Icon name="Zap" className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">Энергия</h3>
                <p className="text-gray-600">Возвращает бодрость и жизненные силы</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
