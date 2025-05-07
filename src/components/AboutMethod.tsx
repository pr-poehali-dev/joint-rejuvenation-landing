
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const AboutMethod = () => {
  const gymInfo = [
    "Адаптивная гимнастика на тренажёре «Ось Жизни» — революционный способ укрепления костей и суставов.",
    "Запуск естественного омоложения: за 45 минут, 1 раз в неделю, под контролем специалиста.",
    "Результаты с первого занятия: улучшение осанки, исчезновение болей, повышение плотности костей.",
    "Безопасно для любого возраста и уровня подготовки — научно доказано, подтверждено исследованиями Harvard, Emory, 100+ публикаций.",
    "Без лекарств, операций и побочных эффектов — только ваши внутренние ресурсы!"
  ];

  const benefits = [
    "Перезагрузка нервной системы — расслабление и прилив сил",
    "Иммунитет усиливается на уровне ДНК",
    "Гормональный фон возвращается к молодым показателям",
    "Регенерация костей и соединительной ткани",
    "Коллаген восстанавливает суставы и гибкость",
    "Лимфатическая система очищается",
    "Гормоны радости мгновенно поднимают настроение",
    "Мощный прилив энергии уже во время тренировки!"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-turquoise-light/10 to-purple-light/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-white shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-primary to-purple-DEFAULT p-4">
                <h3 className="text-xl font-bold text-white">ЧТО ТАКОЕ ГИМНАСТИКА и ТРЕНАЖЕР ОСЬ ЖИЗНИ</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {gymInfo.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-purple-DEFAULT to-primary p-4">
                <h3 className="text-xl font-bold text-white">ЧТО ДАЮТ ЗАНЯТИЯ?</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="ArrowRight" className="h-5 w-5 text-purple-DEFAULT shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutMethod;
