
import Icon from '@/components/ui/icon';

const ForWhom = () => {
  const categories = [
    {
      title: "Военным",
      description: "мобилизация скрытых ресурсов организма при реабилитации",
      icon: "Shield"
    },
    {
      title: "Спортсменам",
      description: "быстрое восстановление после травм, ушибов, растяжений",
      icon: "Trophy"
    },
    {
      title: "Водителям",
      description: "исправление тазовой деформации и шейно-воротниковой зоны",
      icon: "Car"
    },
    {
      title: "Офисным работникам",
      description: "при нервных истощениях, стрессах и депрессиях",
      icon: "Briefcase"
    },
    {
      title: "Людям с избыточным весом",
      description: "нормализация гормонального фона и метаболизма",
      icon: "Activity"
    },
    {
      title: "При посттравматических синдромах",
      description: "способствует ускорению регенеративных процессов",
      icon: "Scissors"
    },
    {
      title: "Детям и подросткам",
      description: "исправление осанки и нарушений опорно-двигательного аппарата",
      icon: "Users"
    },
    {
      title: "Пожилым людям",
      description: "для сохранения подвижности и возвращения активности суставам",
      icon: "Heart"
    },
    {
      title: "Людям с болями",
      description: "в спине, суставах, шее, коленях, локтях, кистях",
      icon: "ThumbsDown"
    }
  ];

  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-DEFAULT">
            КОМУ И КОГДА НУЖНО?
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-purple-DEFAULT flex items-center justify-center text-white">
                <Icon name={category.icon} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
