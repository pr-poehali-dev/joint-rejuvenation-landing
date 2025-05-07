
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const Problems = () => {
  const problems = [
    "Постоянная усталость и сонливость",
    "Боли в суставах, спине, шее",
    "Потеря гибкости и мелкой моторики",
    "Ломота в костях и остеопороз",
    "Стресс, раздражительность, апатия",
    "Сколиоз, искривления позвоночного столба"
  ];

  const triedMethods = [
    "Массажи, йога, медитации — без результата",
    "Операции, уколы, гормоны — дорого и опасно",
    "Блокады, таблетки, приборы — временно снимают симптомы",
    "БАДы, иголки, колдуны – боль возвращается"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-DEFAULT">
              Узнаете себя?
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-DEFAULT"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Симптомы</h3>
              <Card className="bg-gradient-to-br from-white to-purple-light/10 shadow-md">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {problems.map((problem, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Icon name="AlertCircle" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-gray-700">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Пробовали?</h3>
              <Card className="bg-gradient-to-br from-white to-turquoise-light/10 shadow-md">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {triedMethods.map((method, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Icon name="XCircle" className="h-5 w-5 text-purple-DEFAULT shrink-0 mt-0.5" />
                        <span className="text-gray-700">{method}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-purple-DEFAULT/10 rounded-lg">
            <p className="text-lg font-medium text-gray-800">
              Мы знаем, как вновь сделать вас молодыми, энергичными и активными, за одну программу, 
              опираясь лишь на научные открытия скрытых ресурсов вашего тела, о которых знала лишь элита!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
