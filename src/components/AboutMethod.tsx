
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const AboutMethod = () => {
  const gymInfo = [
    {
      text: "Адаптивная гимнастика на тренажёре «Ось Жизни» — революционный способ укрепления костей и суставов.",
      icon: "Dumbbell"
    },
    {
      text: "Запуск естественного омоложения: за 45 минут, 1 раз в неделю, под контролем специалиста.",
      icon: "Clock"
    },
    {
      text: "Результаты с первого занятия: улучшение осанки, исчезновение болей, повышение плотности костей.",
      icon: "ArrowUpRight"
    },
    {
      text: "Безопасно для любого возраста и уровня подготовки — научно доказано, подтверждено исследованиями Harvard, Emory, 100+ публикаций.",
      icon: "ShieldCheck"
    },
    {
      text: "Без лекарств, операций и побочных эффектов — только ваши внутренние ресурсы!",
      icon: "Leaf"
    }
  ];

  const benefits = [
    {
      text: "Перезагрузка нервной системы — расслабление и прилив сил",
      icon: "Sparkles",
      color: "text-primary"
    },
    {
      text: "Иммунитет усиливается на уровне ДНК",
      icon: "Shield",
      color: "text-primary-dark"
    },
    {
      text: "Гормональный фон возвращается к молодым показателям",
      icon: "Smile",
      color: "text-secondary-light"
    },
    {
      text: "Регенерация костей и соединительной ткани",
      icon: "Bones",
      color: "text-secondary"
    },
    {
      text: "Коллаген восстанавливает суставы и гибкость",
      icon: "ActivitySquare",
      color: "text-secondary-dark"
    },
    {
      text: "Лимфатическая система очищается",
      icon: "Droplets",
      color: "text-accent-light"
    },
    {
      text: "Гормоны радости мгновенно поднимают настроение",
      icon: "Heart",
      color: "text-accent"
    },
    {
      text: "Мощный прилив энергии уже во время тренировки!",
      icon: "Zap",
      color: "text-accent-dark"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-brand-gradient-soft" id="benefits">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-white text-primary-dark font-medium text-sm px-4 py-1.5 rounded-full mb-4 shadow-soft">
            Инновационный подход
          </span>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-8">
            Что такое <span className="text-gradient">«Ось Жизни»</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Что такое гимнастика */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="bg-white shadow-lg border-none overflow-hidden h-full">
              <CardContent className="p-0">
                <div className="bg-brand-gradient p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10 blur-2xl"></div>
                  <div className="absolute bottom-0 left-10 w-16 h-16 rounded-full bg-white/10 blur-xl"></div>
                  
                  <h3 className="text-xl font-montserrat font-bold text-white flex items-center">
                    <Icon name="Info" className="h-5 w-5 mr-2" />
                    ГИМНАСТИКА и ТРЕНАЖЕР «ОСЬ ЖИЗНИ»
                  </h3>
                </div>
                
                <div className="p-6">
                  <motion.ul 
                    className="space-y-5"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {gymInfo.map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start gap-4 group"
                        variants={item}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center text-white shadow-sm group-hover:shadow-md transition-shadow">
                          <Icon name={item.icon} className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-gray-700 group-hover:text-gray-900 transition-colors">{item.text}</p>
                          <div className="w-0 group-hover:w-full h-0.5 bg-primary/20 transition-all duration-300 mt-1 rounded-full"></div>
                        </div>
                      </motion.li>
                    ))}
                  </motion.ul>
                  
                  <div className="mt-6 pt-6 border-t border-dashed border-gray-200">
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-gray-700 flex items-start">
                        <Icon name="LightbulbIcon" className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                        <span>Метод <strong>адаптируется</strong> к каждому человеку индивидуально, учитывая возраст, физическую подготовку и имеющиеся проблемы со здоровьем.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Что дают занятия */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Card className="bg-white shadow-lg border-none overflow-hidden h-full">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-secondary to-primary p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/10 blur-2xl"></div>
                  <div className="absolute bottom-0 left-10 w-16 h-16 rounded-full bg-white/10 blur-xl"></div>
                  
                  <h3 className="text-xl font-montserrat font-bold text-white flex items-center">
                    <Icon name="Gift" className="h-5 w-5 mr-2" />
                    ЧТО ДАЮТ ЗАНЯТИЯ
                  </h3>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        className="group"
                      >
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                          <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                            <Icon name={benefit.icon} className={`h-4 w-4 ${benefit.color}`} />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-700 text-sm font-medium">{benefit.text}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
                    <div className="bg-secondary/5 rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="bg-secondary/15 p-1.5 rounded-full mr-3 flex-shrink-0 mt-1">
                          <Icon name="Timer" className="h-5 w-5 text-secondary-dark" />
                        </div>
                        <p className="text-gray-700">
                          <strong className="text-secondary-dark">Быстрые результаты:</strong> Большинство клиентов отмечают улучшения уже после <span className="underline decoration-secondary-light decoration-wavy underline-offset-2">первого занятия</span>, а полный курс дает длительный эффект омоложения.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMethod;
