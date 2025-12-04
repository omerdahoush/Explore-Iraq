import { BookOpen, Users, Landmark } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Landmark className="w-12 h-12" />,
      title: "Ancient Heritage",
      description: "Home to some of the world's oldest civilizations, including Babylon, Ur, and Nineveh"
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Rich History",
      description: "Birthplace of writing, mathematics, and the first code of law in human history"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Warm Hospitality",
      description: "Experience the legendary Iraqi hospitality and diverse cultural traditions"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Visit Iraq?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Iraq offers an unparalleled journey through time, where ancient wonders meet modern resilience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-orange-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
