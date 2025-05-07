
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const DeviceInfo = () => {
  const principles = [
    "Формирует точечно направленную весовую нагрузку на осевой̆ скелет",
    "Передаёт усилие в кость, минуя суставы и поверхностные мышцы",
    "Включает в работу глубокие стабилизирующие цепи тела",
    "Происходит выделение новых клеток, коллагена",
    "Запускается мобилизация гормональной и нервной регуляции"
  ];

  const uniquenesses = [
    "Мгновенный эффект: уже после первого занятия клиент ощущает прилив энергии, омоложение и улучшение общего состояния.",
    "Безопасность и естественность: никаких инъекций, медикаментов или хирургии — всё происходит за счёт активации внутренних ресурсов организма.",
    "Глубокая регенерация: стимулируется рост новых клеток, коллагена, восстанавливаются кости и соединительные ткани, что особенно важно при сколиозе.",
    "Мощная перезагрузка нервной системы: расслабление, снятие мышечного напряжения и восстановление гармонии между телом и разумом.",
    "Долгосрочный эффект: укрепление костей, суставов и связок, улучшение гормонального фона и иммунитета — всё это помогает не только исправить искривление, но и значительно повысить качество жизни."
  ];

  const whyChoose = [
    "Это не маскировка симптомов или временное исправление положения — а раскрытие внутреннего потенциала вашего тела, возвращая вас к состоянию молодости, энергии и гармонии.",
    "Это не лечение —а перезагрузка, быстро, безопасно и навсегда.",
    "Гарантированный результат: укрепление костей, суставов, восстановление гибкости и устранение болей —без болезненных процедур и долгого восстановления."
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-DEFAULT">
            ТРЕНАЖЁР «ОСЬ ЖИЗНИ»
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="p-4 bg-gradient-to-br from-primary/5 to-purple-DEFAULT/5 rounded-lg shadow-sm">
            <img 
              src="https://cdn.poehali.dev/files/666d1327-b8e7-4c42-acab-cf1ca08d3c13.png" 
              alt="Тренажер Ось Жизни" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
          
          <div className="space-y-8">
            <Card className="bg-white shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-primary to-purple-DEFAULT p-4">
                  <h3 className="text-xl font-bold text-white">ПРИНЦИП ВОЗДЕЙСТВИЯ ТРЕНАЖЁРА</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {principles.map((principle, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Icon name="ArrowRight" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-gray-700">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-purple-DEFAULT to-primary p-4">
                  <h3 className="text-xl font-bold text-white">УНИКАЛЬНОСТЬ ВЛИЯНИЯ</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Основанный на естественных ресурсах тела и природных механизмах. В отличие от традиционных 
                    методов лечения сколиоза, которые часто требуют длительного времени, хирургического 
                    вмешательства или медикаментов, тренажёр «Ось Жизни» предлагает следующие преимущества:
                  </p>
                  <ul className="space-y-3">
                    {uniquenesses.map((unique, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Icon name="CheckCircle" className="h-5 w-5 text-purple-DEFAULT shrink-0 mt-0.5" />
                        <span className="text-gray-700">{unique}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-purple-DEFAULT/10 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
                ПОЧЕМУ НАШ МЕТОД ВЫБИРАЮТ 1000 КЛИЕНТОВ:
              </h3>
              <ul className="space-y-3">
                {whyChoose.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="Star" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-center font-medium text-gray-800">
                Если вы хотите вернуть себе здоровье, гибкость, молодость, энергию, а времени ждать, 
                или летать по деревням у вас нет — наш метод именно для вас!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeviceInfo;
