import { Coffee, Music, Utensils, Palette } from 'lucide-react';

export default function Culture() {
  const culturalElements = [
    {
      icon: <Utensils className="w-10 h-10" />,
      title: "Cuisine",
      description: "Savor authentic Iraqi dishes like masgouf, dolma, and kebabs. Iraqi cuisine is rich with flavors from ancient Mesopotamian traditions.",
      items: ["Masgouf (Grilled Fish)", "Dolma", "Kubba", "Biryani"]
    },
    {
      icon: <Coffee className="w-10 h-10" />,
      title: "Tea & Coffee",
      description: "Experience the Iraqi tradition of chai (tea) and Arabic coffee, central to social gatherings and hospitality.",
      items: ["Iraqi Chai", "Arabic Coffee", "Cardamom Tea", "Date Syrup Sweets"]
    },
    {
      icon: <Music className="w-10 h-10" />,
      title: "Arts & Music",
      description: "From ancient calligraphy to traditional maqam music, Iraq's artistic heritage spans millennia.",
      items: ["Maqam Music", "Arabic Calligraphy", "Traditional Dance", "Poetry"]
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Crafts",
      description: "Discover traditional handicrafts including intricate carpets, pottery, and metalwork passed down through generations.",
      items: ["Persian Carpets", "Pottery", "Copper Work", "Textiles"]
    }
  ];

  return (
    <section id="culture" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Culture & Heritage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in a living culture that bridges ancient and modern worlds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {culturalElements.map((element, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-orange-600 mt-1">
                  {element.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {element.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {element.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {element.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
