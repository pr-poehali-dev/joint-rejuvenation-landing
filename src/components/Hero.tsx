
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-turquoise-light/20 via-purple-light/10 to-turquoise-light/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:pr-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 leading-tight">
              Природное омоложение суставов, позвоночника и ЦНС, 
              <span className="text-primary"> без лекарств</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-600">
              Адаптивно функциональная гимнастика, на запатентованном тренажёре «Ось Жизни» 
              — ваш короткий путь к омоложению, источнику энергии молодости, 
              без уколов, операций и мучений.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-lg">
                Записаться на занятие
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 h-12 px-8 text-lg">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-DEFAULT rounded-full blur opacity-30"></div>
              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/files/1d3ca896-e7c9-415d-bde3-8fc9aa5aab2e.jpeg"
                  alt="Вячеслав Ан - автор методики"
                  className="rounded-full object-cover h-80 w-80 border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
