
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const ScientificApproach = () => {
  const approaches = [
    {
      id: 1,
      title: "Открытие пьезоэлектрического эффекта в костях (1957, Ивао Ясуда)",
      description: "Кости генерируют электрический сигнал при механическом давлении, стимулируя регенерацию.",
      icon: "Zap"
    },
    {
      id: 2,
      title: "Закон Вольфа",
      description: "Кости укрепляются при механической нагрузке, в 15 раз превышающей вес тела, активируется рост костной ткани, а также происходит выделение гормонов, регулирующих метаболизм организма, иммунитета и развитие мозга.",
      icon: "Scale"
    },
    {
      id: 3,
      title: "Практическое применение в США с 1997 г",
      description: "Институты Harvard, Emory и др., создали фитнес-программы и тренажеры, основанные на научных открытиях, доказав эффективность укрепления костной ткани.",
      icon: "GraduationCap"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-turquoise-light/10 to-purple-light/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-DEFAULT">
              У нас научный подход
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {approaches.map((approach) => (
              <Card key={approach.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-purple-DEFAULT text-white">
                    <Icon name={approach.icon} className="h-6 w-6" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-primary/20 text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      {approach.id}
                    </div>
                    <h3 className="font-bold text-lg text-gray-800">{approach.title}</h3>
                  </div>
                  <p className="text-gray-600 flex-grow">{approach.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-primary to-purple-DEFAULT p-6 rounded-lg shadow-lg text-center">
            <p className="text-white text-xl font-semibold">
              Запишитесь на первое занятие уже сегодня, 
              потому как тренировки расписаны на 3 недели вперед!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScientificApproach;
