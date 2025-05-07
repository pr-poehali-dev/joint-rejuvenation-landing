
import Icon from '@/components/ui/icon';
import { motion } from 'framer-motion';

const ForWhom = () => {
  const categories = [
    {
      title: "Военным",
      description: "мобилизация скрытых ресурсов организма при реабилитации",
      icon: "Shield",
      color: "bg-gradient-to-br from-primary to-primary-dark"
    },
    {
      title: "Спортсменам",
      description: "быстрое восстановление после травм, ушибов, растяжений",
      icon: "Trophy",
      color: "bg-gradient-to-br from-secondary-light to-secondary"
    },
    {
      title: "Водителям",
      description: "исправление тазовой деформации и шейно-воротниковой зоны",
      icon: "Car",
      color: "bg-gradient-to-br from-accent-light to-accent"
    },
    {
      title: "Офисным работникам",
      description: "при нервных истощениях, стрессах и депрессиях",
      icon: "Briefcase",
      color: "bg-gradient-to-br from-primary-dark to-secondary-dark"
    },
    {
      title: "Людям с избыточным весом",
      description: "нормализация гормонального фона и метаболизма",
      icon: "Activity",
      color: "bg-gradient-to-br from-secondary to-primary"
    },
    {
      title: "При посттравматических синдромах",
      description: "способствует ускорению регенеративных процессов",
      icon: "HeartPulse",
      color: "bg-gradient-to-br from-accent to-secondary"
    },
    {
      title: "Детям и подросткам",
      description: "исправление осанки и нарушений опорно-двигательного аппарата",
      icon: "Users",
      color: "bg-gradient-to-br from-primary-light to-secondary-light"
    },
    {
      title: "Пожилым людям",
      description: "для сохранения подвижности и возвращения активности суставам",
      icon: "Heart",
      color: "bg-gradient-to-br from-secondary-dark to-primary-dark"
    },
    {
      title: "Людям с болями",
      description: "в спине, суставах, шее, коленях, локтях, кистях",
      icon: "ThumbsDown",
      color: "bg-gradient-to-br from-accent-dark to-accent"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-20 bg-white relative" id="about">
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,178,189,0.05)_0%,rgba(255,255,255,0)_70%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary/10 text-primary-dark font-medium text-sm px-4 py-1.5 rounded-full mb-4">
            Универсальное решение
          </span>
          
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            <span className="text-gradient">Кому и когда</span> это необходимо?
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Наша методика эффективна для людей разного возраста и с различными проблемами,
            потому что опирается на базовые механизмы работы человеческого тела.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div 
              key={index} 
              className="group"
              variants={item}
            >
              <div className="bg-white rounded-xl shadow-soft hover:shadow-md transition-all duration-300 p-5 h-full border border-gray-100 hover:border-primary-light/30">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center text-white shadow-sm group-hover:shadow-md transition-shadow`}>
                    <Icon name={category.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg text-gray-800 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      {category.description}
                    </p>
                    <div className="mt-2 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 text-secondary-dark bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="CircleCheck" className="h-5 w-5" />
            <span className="font-medium">Подходит абсолютно всем</span>
          </div>
          
          <p className="text-lg text-gray-700">
            Независимо от возраста, пола, физической подготовки или состояния здоровья — 
            наша методика адаптируется под каждого человека индивидуально, 
            обеспечивая максимальную эффективность и безопасность.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ForWhom;
