import { MapPin, X } from 'lucide-react';
import { useState } from 'react';

export default function Destinations() {
  const [selectedHighlight, setSelectedHighlight] = useState<{ name: string; details: string } | null>(null);
  const destinations = [
    {
      name: "Baghdad",
      description: "The historic capital blending ancient heritage with modern life. Explore the National Museum and vibrant markets.",
      highlights: [
        {
          name: "National Museum",
          details: "The National Museum of Iraq in Baghdad carries a different kind of gravity—like a vault holding the memories of the very first chapters of human civilization. When you walk through it, you're not just looking at \"old things,\" you're brushing against the origins of writing, cities, law, myth, and the strange human urge to record our existence in clay.\n\nIt holds treasures from Sumer, Akkad, Babylon, and Assyria. Think of cuneiform tablets that were once everyday paperwork; statues that watched over ancient temples; jewelry worn by people who lived before the pyramids were even an idea. A tiny cylinder seal might look modest, but roll it in clay and suddenly you see mythic animals, kings, and scenes of ritual—miniature stories that survived millennia.\n\nThe museum also carries scars of the modern world. After 2003 it became a symbol of cultural vulnerability when it was looted, and later a symbol of resilience as Iraqis, archaeologists, and historians worked for years to restore it and bring back its artifacts. That drama adds a layer of emotion to the place: you feel the weight of what was nearly lost, and the pride of what was saved.\n\nIt might be the closest thing we have to a time machine for the cradle of civilization. Every artifact whispers that humanity has been questioning, inventing, fighting, dreaming, and telling stories far longer than our brief lives suggest—and that those patterns continue in surprising ways."
        },
        {
          name: "Mutanabbi Street",
          details: "Mutanabbi Street in Baghdad feels like a living artery made of ink and voices. It's the place where books spill out onto sidewalks, where the smell of old paper mingles with coffee, and where debate is practically a neighborhood sport. You can wander the street and hear a student arguing political theory beside a poet reciting lines that sound like they've soaked up a thousand nights of longing.\n\nThe street carries centuries of literary identity. Named after the great poet al-Mutanabbī—famous for his fierce pride and fierce verses—the place channels his spirit: defiant, witty, unafraid. Even after violence scarred it, the street rebuilt itself with the stubbornness of people who know culture is not a luxury; it's a heartbeat.\n\nThere's something beautiful in the way the vendors arrange books of philosophy next to cookbooks, dictionaries next to revolutionary manifestos. It's a reminder that human knowledge doesn't live in neat categories; it sprawls, overlaps, contradicts itself. Mutanabbi Street accepts that messy wisdom and celebrates it.\n\nSitting in Shabandar Café with a cup of tea, surrounded by portraits and quiet echoes of history, you get the sense that Baghdad's intellectual soul never really went away—it just concentrates itself in certain places, waiting for anyone curious enough to listen."
        },
        {
          name: "Al-Shaheed Monument",
          details: "Al-Shaheed Monument in Baghdad rises from the ground like a quiet blue miracle—two halves of a giant shell poised in a gentle, almost contemplative separation. It looks both futuristic and ancient at the same time, as if someone carved a question mark into the skyline.\n\nThe monument was built to honor the Iraqi soldiers who died in the Iran–Iraq War, but its emotional reach has grown far beyond any single conflict. People approach it with an odd mix of heaviness and serenity. The turquoise dome, split open, seems to say that grief is not meant to be sealed; it needs space to breathe. Between the two curved wings there's a thin, dramatic gap—a kind of architectural wound. Sunlight pours through it, making the whole structure feel alive, like it's inhaling and exhaling memory.\n\nBeneath the surface, there's a museum and permanent flame, but the real poetry is above ground. The monument sits on a vast artificial lake that mirrors the dome, turning the structure into a symbol doubled—memory in the sky, memory in the water. It's the sort of place where silence has texture.\n\nStanding there, you feel the tug of Iraq's long, complicated history, where loss and resilience coexist. The monument doesn't shout; it speaks softly, inviting anyone who visits to reflect on the strange way nations carry their pasts, and how beauty sometimes grows from the hardest soil."
        }
      ]
    },
    {
      name: "Babylon",
      description: "Walk through the legendary ancient city, home to the Hanging Gardens and Ishtar Gate.",
      highlights: [
        {
          name: "Ishtar Gate",
          details: "The Ishtar Gate, the Hanging Gardens, and the ancient ruins of Babylon form a kind of archaeological constellation—three points where history blends with imagination, and where the ancient world still breathes beneath layers of dust and time.\n\nThe Ishtar Gate was the northern entrance to Babylon, a city that shimmered in ancient records like a legend trying to prove it was real. The deep blue glazed bricks, decorated with lions, bulls, and dragons, weren't just decoration; they were a political statement. Imagine an army or a foreign delegation passing beneath its arch while the colors glowed under the Babylonian sun. It was Nebuchadnezzar's way of saying: this city has power, style, and cosmic ambition. The reconstructed gate now stands in Berlin, but the original site in Iraq still carries the presence of what it once framed."
        },
        {
          name: "Hanging Gardens Site",
          details: "The Hanging Gardens are a more mysterious story. No one knows their exact location, or even whether they existed in the dramatic form described by Greek writers. But the idea of terraced gardens rising above a city in the desert—fed by ingenious water-lifting systems and shaded by trees—captures the imagination. If they really existed, they were a vision of engineering poetry, a human-made oasis that defied the landscape around it."
        },
        {
          name: "Ancient Ruins",
          details: "The ruins of Babylon feel like a book with half its pages missing. You can walk through the outlines of streets, temple foundations, palace walls, and ancient ramparts. Even in silence, the place carries a kind of resonance—as if history moves through it like a faint wind, revealing just enough to remind you of its scale and hiding the rest behind the veil of time.\n\nBabylon was an early workshop for political imagination, architecture, astronomy, and storytelling. Standing among these sites, you sense that civilizations don't vanish—they simply change the way they inhabit the world, leaving echoes that still shape how we dream about the past."
        }
      ]
    },
    {
      name: "Erbil",
      description: "One of the oldest continuously inhabited cities in the world with a magnificent citadel.",
      highlights: [
        {
          name: "Erbil Citadel",
          details: "The Erbil Citadel is considered one of the oldest continuously inhabited sites in the world, with a history of human occupation dating back over 6,000 years. Located atop a large artificial mound (a \"tell\"), it has been a strategic and cultural center for various civilizations since at least the 3rd millennium BCE, including the Assyrians, Persians, and Sumerians. Its history includes periods as a religious capital and royal residence, and despite a history of change and the loss of many residents, ongoing restoration projects aim to preserve its rich legacy."
        },
        {
          name: "Kurdish Culture",
          details: "Kurdish culture is a diverse tapestry of traditions that includes rich literature, music, and dance, alongside distinct regional clothing styles and a varied cuisine. Celebrated holidays like Newroz on March 21st are central to their cultural identity. Kurdish culture is deeply connected to the region's history and shares commonalities with neighboring Iranian, Azerbaijani, Turkic, and Arabic cultures."
        },
        {
          name: "Modern Bazaars",
          details: "In Erbil, \"modern bazaars\" can refer to a mix of new, internationally-inspired retail complexes and modern interpretations of traditional-style markets. Some of the main modern shopping destinations are large, multi-story malls, while others are contemporary redevelopments or new concepts for street markets.\n\nModern shopping malls are indoor, multi-story complexes featuring a mix of international and local brands, as well as dining and entertainment options.\n\nFamily Mall: Often cited as one of Erbil's most popular and modern malls. It has a mix of shopping, dining, and entertainment venues and is conveniently located.\n\nMajidi Mall: A shopping mall that offers a blend of retail, dining, and entertainment, with multiple locations, including Grand Majidi Mall.\n\nRoyal Mall: A well-known shopping destination for international brands.\n\nMega Mall: Another prominent shopping mall in the city.\n\nUsa Bazaar: A shopping mall that is highly recommended by visitors for its range of original products.\n\nGulan Mall: A large shopping and entertainment complex.\n\nSama Mall: Offers a mix of international brands and local goods."
        }
      ]
    },
    {
      name: "Ur",
      description: "Birthplace of Abraham and site of the ancient Ziggurat, dating back to 2100 BCE.",
      highlights: ["Great Ziggurat", "Royal Tombs", "Ancient City"]
    },
    {
      name: "Najaf & Karbala",
      description: "Sacred cities with stunning Islamic architecture and deep spiritual significance.",
      highlights: ["Imam Ali Shrine", "Hussain Shrine", "Islamic Architecture"]
    },
    {
      name: "Marshlands",
      description: "The Mesopotamian Marshes, a UNESCO site where ancient water culture still thrives.",
      highlights: ["Traditional Villages", "Wildlife", "Boat Tours"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Must-Visit Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From ancient ruins to sacred cities, Iraq offers unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-6 h-6 text-orange-600" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    {destination.name}
                  </h3>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {destination.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-900">Highlights:</p>
                  {destination.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                      {typeof highlight === 'string' ? (
                        <span className="text-sm text-gray-600">{highlight}</span>
                      ) : (
                        <button
                          onClick={() => setSelectedHighlight(highlight)}
                          className="text-sm text-orange-600 hover:text-orange-800 hover:underline cursor-pointer font-medium"
                        >
                          {highlight.name}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedHighlight && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-900">{selectedHighlight.name}</h2>
              <button
                onClick={() => setSelectedHighlight(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {selectedHighlight.details}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
