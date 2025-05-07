
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Problems = () => {
  const problems = [
    {
      text: "Постоянная усталость и сонливость",
      icon: "Battery",
      color: "text-primary"
    },
    {
      text: "Боли в суставах, спине, шее",
      icon: "Bones",
      color: "text-primary-dark"
    },
    {
      text: "Потеря гибкости и мелкой моторики",
      icon: "HandMetal",
      color: "text-secondary"
    },
    {
      text: "Ломота в костях и остеопороз",
      icon: "Skull",
      color: "text-secondary-dark"
    },
    {
      text: "Стресс, раздражительность, апатия",
      icon: "Frown",
      color: "text-accent"
    },
    {
      text: "Сколиоз, искривления позвоночного столба",
      icon: "ActivitySquare",
      color: "text-accent-dark"
    }
  ];

  const triedMethods = [
    {
      text: "Массажи, йога, медитации — без результата",
      icon: "MessageSquareX"
    },
    {
      text: "Операции, уколы, гормоны — дорого и опасно",
      icon: "Syringe"
    },
    {
      text: "Блокады, таблетки, приборы — временно снимают симптомы",
      icon: "PillsMultiple"
    },
    {
      text: "БАДы, иголки, колдуны – боль возвращается",
      icon: "Sparkles"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-white relative" id="problems">
      {/* Декоративный фон */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-3 text-center relative inline-block">
            <span className="text-gradient">Узнаете себя?</span>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-gradient rounded-full transform translate-y-2"></div>
          </h2>
          
          <p className="text-lg text-gray-600 text-center mb-12 mt-8">
            Если вы столкнулись с этими проблемами, то вы не одиноки.
            Миллионы людей ежедневно страдают от подобных симптомов,
            считая их неизбежными спутниками возраста.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Симптомы */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="relative">
                <h3 className="text-xl font-montserrat font-semibold mb-4 text-primary-dark flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                    <Icon name="Activity" className="h-4 w-4 text-primary" />
                  </span>
                  Симптомы, которые мешают жить
                </h3>
                
                <Card className="bg-white shadow-soft border-none overflow-hidden">
                  <CardContent className="p-6">
                    <motion.ul className="space-y-5" variants={container}>
                      {problems.map((problem, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start gap-4 group"
                          variants={item}
                        >
                          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0">
                            <Icon name={problem.icon} className={`h-5 w-5 ${problem.color}`} />
                          </div>
                          <div>
                            <p className="text-gray-700 font-medium">{problem.text}</p>
                            <div className="w-0 group-hover:w-full h-0.5 bg-primary/20 transition-all duration-300 mt-1 rounded-full"></div>
                          </div>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
            
            {/* Что пробовали */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <h3 className="text-xl font-montserrat font-semibold mb-4 text-secondary-dark flex items-center">
                  <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-2">
                    <Icon name="History" className="h-4 w-4 text-secondary" />
                  </span>
                  Что вы уже пробовали
                </h3>
                
                <Card className="bg-white shadow-soft border-none overflow-hidden">
                  <CardContent className="p-6">
                    <motion.ul className="space-y-5" variants={container}>
                      {triedMethods.map((method, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start gap-4 group"
                          variants={item}
                        >
                          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-secondary/10 transition-colors shrink-0">
                            <Icon name={method.icon} className="h-5 w-5 text-secondary" />
                          </div>
                          <div>
                            <p className="text-gray-700 font-medium">{method.text}</p>
                            <div className="w-0 group-hover:w-full h-0.5 bg-secondary/20 transition-all duration-300 mt-1 rounded-full"></div>
                          </div>
                        </motion.li>
                      ))}
                    </motion.ul>
                    
                    <div className="mt-6 border-t border-dashed border-gray-200 pt-6">
                      <div className="flex items-start gap-3">
                        <Icon name="AlertCircle" className="h-6 w-6 text-accent shrink-0 mt-1" />
                        <p className="text-gray-600">
                          <span className="font-semibold text-accent">Внимание:</span> Большинство этих решений дают только 
                          временное облегчение, не решая основную проблему, и часто имеют побочные эффекты
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="bg-brand-gradient p-6 group hover-scale">
              <h3 className="font-bold text-xl text-white mb-3 flex items-center">
                <Icon name="Lightbulb" className="h-6 w-6 mr-2" />
                Есть выход!
              </h3>
              <p className="text-white/90 font-medium">
                Мы знаем, как вновь сделать вас молодыми, энергичными и активными, за одну программу, 
                опираясь лишь на <strong className="text-white">научные открытия скрытых ресурсов вашего тела</strong>, о которых знала лишь элита!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problems;
