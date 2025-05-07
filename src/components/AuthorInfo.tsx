
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AuthorInfo = () => {
  const achievements = [
    "Мастер-тренер с 30-летним опытом в оздоровительных практиках",
    "Профессиональный спортсмен с высшим тренерским образованием",
    "Более 1500 клиентов",
    "Трижды чемпион страны, МС по гребле, чемпион по паурлифтингу, 1 дан кекусинкай карате",
    "3 года в СПб с АФГ",
    "Клиенты сэкономили более 16 млн ₽ на медицине благодаря АФГ",
    "У 98% клиентов нормализуется гормональный уровень",
    "У 200 прошли: остеопороз, сколиозов и боли в ОДА"
  ];

  const howItWorks = [
    "Индивидуальная программа — упражнения подбираются под ваши цели и состояние.",
    "Тренировки под контролем — только сертифицированные специалисты.",
    "Мгновенная биологическая обратная связь — результат можно измерить анализами.",
    "Комплексный эффект — укрепляются кости, связки, суставы, улучшается работа иммунной, эндокринной и нервной систем."
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-turquoise-light/10 to-purple-light/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-DEFAULT">
                Вячеслав Ан
              </h3>
              <p className="text-center text-gray-500 mb-6">
                Автор АФГ и тренажера «Ось Жизни» <br />
                Специалист по физической реабилитации
              </p>
              
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="CheckSquare" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card className="shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-primary to-purple-DEFAULT p-4">
                  <h3 className="text-xl font-bold text-white">КАК ЭТО РАБОТАЕТ?</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {howItWorks.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-purple-DEFAULT text-white flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-DEFAULT rounded-lg blur opacity-30"></div>
              <div className="relative bg-white rounded-lg p-2">
                <img 
                  src="https://cdn.poehali.dev/files/1d3ca896-e7c9-415d-bde3-8fc9aa5aab2e.jpeg" 
                  alt="Вячеслав Ан - автор методики" 
                  className="rounded-lg w-full max-w-md mx-auto shadow-sm"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                  <h3 className="text-xl font-bold text-white">Вячеслав Ан</h3>
                  <p className="text-gray-200 text-sm">Автор АФГ и тренажера «Ось Жизни»</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorInfo;
