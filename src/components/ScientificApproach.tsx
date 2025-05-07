
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ScientificApproach = () => {
  const approaches = [
    {
      id: 1,
      title: "Пьезоэлектрический эффект в костях",
      subtitle: "Открытие 1957 г., Ивао Ясуда",
      description: "Кости генерируют электрический сигнал при механическом давлении, стимулируя естественную регенерацию тканей на клеточном уровне.",
      icon: "Zap",
      color: "from-primary to-primary-dark"
    },
    {
      id: 2,
      title: "Закон Вольфа",
      subtitle: "Фундаментальное открытие в медицине",
      description: "Кости укрепляются при механической нагрузке, превышающей в 15 раз вес тела. Активируется рост костной ткани и выделение гормонов, регулирующих метаболизм организма, иммунитет и развитие мозга.",
      icon: "Scale",
      color: "from-secondary to-secondary-dark"
    },
    {
      id: 3,
      title: "Практическое применение с 1997 г.",
      subtitle: "Ведущие научные центры США",
      description: "Институты Harvard, Emory и другие создали фитнес-программы и тренажеры, основанные на научных открытиях, доказав эффективность метода для укрепления костной ткани и омоложения всего организма.",
      icon: "GraduationCap",
      color: "from-accent to-accent-dark"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-brand-gradient-soft relative">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
            <p className="text-primary-dark font-medium text-sm">Доказанная эффективность</p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8">
            <span className="text-gradient">Научный подход</span> к вашему здоровью
          </h2>
          
          <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg">
            Наша методика основана на серьезных научных открытиях и подтверждена исследованиями 
            ведущих мировых институтов. Мы активируем естественные механизмы восстановления вашего тела.
          </p>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {approaches.map((approach) => (
              <motion.div key={approach.id} variants={item}>
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full border-none overflow-hidden group card-highlight">
                  <CardContent className="p-0">
                    {/* Верхняя часть карточки с градиентом */}
                    <div className={`bg-gradient-to-r ${approach.color} p-6 relative overflow-hidden`}>
                      <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/10 blur-xl"></div>
                      
                      <div className="relative z-10 flex justify-between items-start">
                        <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                          <Icon name={approach.icon} className="h-7 w-7" />
                        </div>
                        
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-primary-dark font-bold text-sm">
                          {approach.id}
                        </div>
                      </div>
                      
                      <h3 className="mt-4 text-xl font-bold text-white relative z-10">
                        {approach.title}
                      </h3>
                      
                      <p className="text-white/80 text-sm mt-1 font-medium relative z-10">
                        {approach.subtitle}
                      </p>
                    </div>
                    
                    {/* Основной контент */}
                    <div className="p-6">
                      <p className="text-gray-600">
                        {approach.description}
                      </p>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center text-sm text-primary-dark">
                          <Icon name="FileText" className="h-4 w-4 mr-2" />
                          <span className="font-medium">Научные публикации</span>
                          <span className="ml-auto text-xs bg-primary/10 px-2 py-0.5 rounded-full">100+</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <p className="font-medium text-red-600">Ограниченное предложение</p>
              </div>
              
              <h3 className="font-montserrat font-bold text-xl md:text-2xl mb-4 text-gray-800">
                Запишитесь на первое занятие уже сегодня!
              </h3>
              
              <p className="text-gray-600 mb-6">
                График тренировок расписан на 3 недели вперед, но мы оставили несколько слотов для новых клиентов.
                Не упустите возможность испытать метод на себе уже в ближайшие дни!
              </p>
              
              <Button className="bg-brand-gradient btn-glow hover:shadow-glow py-6 px-8 text-white font-montserrat font-semibold text-lg rounded-xl">
                Забронировать место
                <Icon name="CalendarCheck" className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScientificApproach;
