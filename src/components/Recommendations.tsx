
import { Card, CardContent } from '@/components/ui/card';

const Recommendations = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-turquoise-light/10 to-purple-light/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-DEFAULT">
            НАС РЕКОМЕНДУЮТ
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/8001331f-17c5-4ca8-895b-a9f0fa0efaa5.png" 
                  alt="Виктор Алексеевич Ефимов" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Виктор Алексеевич Ефимов</h3>
                <p className="text-gray-600 mb-4">
                  Советский и российский партийный и государственный деятель, инженер-метролог, 
                  экономист и публицист. Кандидат технических наук, доктор экономических наук, профессор.
                </p>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-primary">
                  <p className="text-gray-700 text-sm">
                    <span className="font-semibold">Автор серии книг:</span><br />
                    Концепция Общественной Безопасности<br />
                    Концептуальная власть и десятки других книг в сфере экономики, политики, управления
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/3c1b6ca2-fc63-421c-9e80-4f26f558c47d.png" 
                  alt="Борис Алексеевич Семенов" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Борис Алексеевич Семенов</h3>
                <p className="text-gray-600 mb-4">
                  Советский российский живописец, график, член Санкт-Петербургского Союза художников, 
                  представитель ленинградской школы живописи. Академик Российской Академии естественных наук.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
