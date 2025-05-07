
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const BusinessOpportunities = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-DEFAULT">
            ВАШ КЛЮЧ К НОВЫМ ВОЗМОЖНОСТЯМ!
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-purple-DEFAULT/5 shadow-lg border-none overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Хотите расширить возможности вашего бизнеса или приобрести тренажер для дома?
              </h3>
              
              <div className="space-y-6 mt-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-purple-DEFAULT flex items-center justify-center text-white shrink-0">
                      <Icon name="Building" className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">Для профессионалов</h4>
                      <p className="text-gray-600 mb-4">
                        Вы — профессионал в сфере фитнеса, массажа, мануальной терапии или оздоровления? 
                        Хотите предложить своим клиентам уникальные методы восстановления и укрепления организма, 
                        которые гарантируют быстрый эффект и высокий уровень удовлетворенности?
                      </p>
                      <Button className="bg-primary hover:bg-primary/90 text-white">
                        Открыть свой Центр Жизни
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-DEFAULT to-primary flex items-center justify-center text-white shrink-0">
                      <Icon name="Home" className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">Для домашнего использования</h4>
                      <p className="text-gray-600 mb-4">
                        Хотите заниматься в удобное время, не выходя из дома? 
                        Приобретите тренажер для домашнего использования и освойте гимнастику для 
                        самостоятельной практики!
                      </p>
                      <Button className="bg-purple-DEFAULT hover:bg-purple-DEFAULT/90 text-white">
                        Купить тренажер
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-amber-50 rounded-lg text-center">
                <p className="text-amber-800">
                  Свяжитесь с нами для получения подробной информации о франшизе и условиях приобретения тренажера.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BusinessOpportunities;
