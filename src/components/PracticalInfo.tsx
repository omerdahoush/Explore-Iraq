import { Info, Calendar, Thermometer, Shield } from 'lucide-react';

export default function PracticalInfo() {
  const infoSections = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Best Time to Visit",
      content: "October to April offers pleasant weather. Spring (March-May) showcases blooming landscapes, while autumn provides comfortable temperatures for exploration."
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Climate",
      content: "Iraq has a desert climate with hot summers (up to 50°C) and mild winters. Northern regions are cooler with occasional snow in Kurdistan."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Travel Tips",
      content: "Research current travel advisories, arrange visas in advance, respect local customs, dress modestly, and consider hiring local guides for the best experience."
    },
    {
      icon: <Info className="w-8 h-8" />,
      title: "Cultural Etiquette",
      content: "Iraqis are known for warm hospitality. Remove shoes when entering homes, use right hand for greetings, and dress conservatively, especially at religious sites."
    }
  ];

  return (
    <section id="travel" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Plan Your Visit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential information to help you prepare for your Iraqi adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {infoSections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="text-orange-600 mt-1">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-red-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Explore Iraq?
          </h3>
          <p className="text-lg mb-8 text-orange-50 max-w-2xl mx-auto">
            Begin your journey through one of the world's most historically significant regions
          </p>
          <button className="bg-white text-orange-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
            Contact Travel Advisors
          </button>
        </div>
      </div>
    </section>
  );
}
