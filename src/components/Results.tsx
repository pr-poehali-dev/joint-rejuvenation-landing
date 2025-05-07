
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const Results = () => {
  const results = [
    {
      id: 1,
      title: "Уходят зависимости от «стимуляторов радости и бодрости»",
      icon: "Coffee"
    },
    {
      id: 2,
      title: "Возвращается чувствительность в конечностях тела",
      icon: "Touch"
    },
    {
      id: 3,
      title: "Раскрепощаются нервные и мышечные зажимы",
      icon: "Unplug"
    },
    {
      id: 4,
      title: "Мгновенный выход из депрессий и подавленности",
      icon: "Smile"
    },
    {
      id: 5,
      title: "Либидо снова захочет «страсти»",
      icon: "Heart"
    },
    {
      id: 6,
      title: "Омоложение кожи",
      icon: "Sparkles"
    },
    {
      id: 7,
      title: "Прилив жизненной энергии: умственной, физической, психической",
      icon: "Zap"
    },
    {
      id: 8,
      title: "Рост когнитивных способностей: память, мышление, речь, обучение, мета навыки",
      icon: "Brain"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-DEFAULT">
              У 92% ЗАНИМАЮЩИХСЯ:
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {results.map((result) => (
            <Card key={result.id} className="bg-white hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r from-primary to-purple-DEFAULT text-white mb-4">
                  <Icon name={result.icon} className="h-7 w-7" />
                </div>
                <h3 className="font-medium text-gray-800">{result.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
