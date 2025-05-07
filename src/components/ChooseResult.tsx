
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ChooseResult = () => {
  const results = [
    "Быстрое избавление от болей в спине, шее, суставах и конечностях",
    "Красивая осанка и здоровый мышечный тонус",
    "Свобода движений, сила и гибкость",
    "Восстановление работы опорно-двигательного аппарата, уменьшение воспаления",
    "Улучшение координации, равновесия, кровообращения и обмена веществ",
    "Повышение энергии, отличное самочувствие и качество жизни",
    "Меньше потребности в обезболивающих, быстрая реабилитация",
    "Для детей: развитие речи, внимания, мелкой моторики и коррекция осанки"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-turquoise-light/10 to-purple-light/10">
      <div className="container mx-auto px-4">
        <Card className="bg-white shadow-lg border-none overflow-hidden">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-DEFAULT">
                ВЫБЕРИТЕ СВОЙ РЕЗУЛЬТАТ
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {results.map((result, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                  <Icon name="CheckCircle" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">{result}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-amber-50 p-4 rounded-lg inline-block mb-6">
                <p className="text-amber-800 font-medium">Запись за 3 недели, бронируйте сейчас!</p>
              </div>
              <div>
                <Button className="bg-gradient-to-r from-primary to-purple-DEFAULT hover:from-primary/90 hover:to-purple-DEFAULT/90 text-white h-14 px-10 text-lg shadow-md">
                  Записаться на первое занятие
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ChooseResult;
