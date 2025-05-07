
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { motion } from 'framer-motion';

const AuthorInfo = () => {
  const achievements = [
    {
      text: "Мастер-тренер с 30-летним опытом в оздоровительных практиках",
      icon: "Award"
    },
    {
      text: "Профессиональный спортсмен с высшим тренерским образованием",
      icon: "GraduationCap"
    },
    {
      text: "Более 1500 клиентов с успешными результатами",
      icon: "Users"
    },
    {
      text: "Трижды чемпион страны, МС по гребле, чемпион по паурлифтингу, 1 дан кекусинкай карате",
      icon: "Trophy"
    },
    {
      text: "3 года успешной работы в Санкт-Петербурге с методикой АФГ",
      icon: "MapPin"
    },
    {
      text: "Клиенты сэкономили более 16 млн ₽ на медицине благодаря АФГ",
      icon: "PiggyBank"
    },
    {
      text: "У 98% клиентов нормализуется гормональный уровень",
      icon: "ActivitySquare"
    },
    {
      text: "У 200+ клиентов излечены: остеопороз, сколиоз и боли в опорно-двигательном аппарате",
      icon: "HeartPulse"
    }
  ];

  const howItWorks = [
    {
      title: "Индивидуальная программа",
      text: "Упражнения подбираются под ваши цели и состояние здоровья",
      icon: "PersonStanding"
    },
    {
      title: "Тренировки под контролем",
      text: "Только сертифицированные специалисты проводят занятия",
      icon: "Eye"
    },
    {
      title: "Мгновенная биологическая обратная связь",
      text: "Результат можно измерить анализами и специальными тестами",
      icon: "ActivitySquare"
    },
    {
      title: "Комплексный эффект",
      text: "Укрепляются кости, связки, суставы, улучшается работа иммунной, эндокринной и нервной систем",
      icon: "Workflow"
    }
  ];

  return (
    <section className="py-20 bg-brand-gradient-soft" id="author">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-white/80 backdrop-blur-sm text-primary-dark font-medium text-sm px-4 py-1.5 rounded-full mb-4 shadow-sm">
            Создатель методики
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Эксперт</span> с 30-летним опытом
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Вячеслав Ан соединил древние восточные практики с современными научными исследованиями,
            создав революционный метод естественного оздоровления
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Биография и достижения */}
          <motion.div 
            className="order-2 lg:order-1 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="bg-white shadow-lg border-none overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
                  <div className="h-20 w-20 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-soft">
                    <img 
                      src="https://cdn.poehali.dev/files/1d3ca896-e7c9-415d-bde3-8fc9aa5aab2e.jpeg" 
                      alt="Вячеслав Ан" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-gradient mb-1">
                      Вячеслав Ан
                    </h3>
                    <p className="text-gray-600">
                      Автор АФГ и тренажера «Ось Жизни» <br />
                      Специалист по физической реабилитации
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      className="group"
                    >
                      <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary-dark shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Icon name={achievement.icon} className="h-5 w-5" />
                        </div>
                        <p className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors">{achievement.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-dashed border-gray-200">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-gray-700 flex items-start text-sm">
                      <Icon name="Quote" className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="italic">
                        "Моя цель — помочь людям восстановить природную силу и молодость их тела, 
                        активируя скрытые резервы организма. Я верю, что потенциал исцеления 
                        заложен в каждом из нас от природы."
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Как это работает */}
            <Card className="bg-white shadow-lg border-none overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-brand-gradient p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/10 blur-xl"></div>
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <Icon name="Cog" className="h-5 w-5 mr-2" />
                    КАК ЭТО РАБОТАЕТ
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-4">
                    {howItWorks.map((step, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                        className="group"
                      >
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-md">
                            <div className="flex items-center justify-center w-full h-full rounded-full bg-white/20">
                              <span className="font-bold text-lg">{index + 1}</span>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 flex items-center">
                              <Icon name={step.icon} className="h-4 w-4 mr-2 text-primary-dark" />
                              {step.title}
                            </h4>
                            <p className="text-gray-600 mt-1">{step.text}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Фотография */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative highlight-box rounded-xl max-w-md">
              <div className="rounded-xl overflow-hidden shadow-xl bg-white p-2.5 relative z-10">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/1d3ca896-e7c9-415d-bde3-8fc9aa5aab2e.jpeg" 
                    alt="Вячеслав Ан - автор методики" 
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                
                {/* Плашки с информацией */}
                <div className="absolute top-8 -right-5 bg-white rounded-full p-2 shadow-md rotate-3 animate-float">
                  <div className="flex items-center gap-2">
                    <Icon name="Trophy" className="h-4 w-4 text-amber-500" />
                    <span className="text-sm font-medium whitespace-nowrap">30 лет опыта</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-2 shadow-md -rotate-3 animate-float" style={{animationDelay: '0.5s'}}>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium whitespace-nowrap">1500+ клиентов</span>
                  </div>
                </div>
                
                {/* Подпись снизу */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-brand-gradient text-white py-3 px-4 rounded-md text-center shadow-md">
                  <h3 className="font-bold text-lg">Вячеслав Ан</h3>
                  <p className="text-white/90 text-sm">Автор методики АФГ и тренажера «Ось Жизни»</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthorInfo;
