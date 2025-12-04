import { MapPin, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Destinations() {
  const [selectedHighlight, setSelectedHighlight] = useState<{ name: string; details: string } | null>(null);
  const destinations = [
    {
      name: "Baghdad",
      description: "The historic capital blending ancient heritage with modern life. Explore the National Museum and vibrant markets.",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac560?w=500&q=80",
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
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
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
      image: "https://images.unsplash.com/photo-1478862400919-41a05654fb11?w=500&q=80",
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
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&q=80",
      highlights: [
        {
          name: "Great Ziggurat",
          details: "The Great Ziggurat in Iraq, formally known as the Ziggurat of Ur (or the Great Ziggurat of Ur), is one of the best-preserved and most impressive structures from ancient Mesopotamia.\n\nLocation and Significance:\nThe ziggurat is located in what was the ancient Sumerian city of Ur, near the modern city of Nasiriyah in the Dhi Qar Province of southern Iraq. A ziggurat is a massive stepped tower with a temple or shrine at its summit, built by the Sumerians, Babylonians, and Assyrians. It was believed to serve as a connection point between heaven and earth. The Ziggurat of Ur was the spiritual heart of the city and was dedicated to the moon god Nanna (Sîn in Akkadian), the patron deity of Ur.\n\nConstruction and History:\nThe structure was originally built in the Early Bronze Age, around the 21st century BCE, by King Ur-Nammu, the founder of the Third Dynasty of Ur (Ur III period). The project was completed by his son, King Shulgi. It originally consisted of a massive step pyramid with three levels of terraces, built with a solid core of sun-dried mud bricks and an outer casing of baked bricks set in bitumen. It measured approximately 64 meters (210 ft) in length and 45 meters (148 ft) in width, with a speculative original height of over 30 meters (98 ft). By the 6th century BCE, the structure had crumbled into ruins and was restored by the Neo-Babylonian King Nabonidus, who rebuilt the upper part in seven stages instead of the original three.\n\nExcavation and Modern Restoration:\nThe ruins were rediscovered in the 19th century and extensively excavated by Sir Leonard Woolley in the 1920s and 1930s. A partial reconstruction of the façade and the monumental triple staircase was carried out in the 1980s under Saddam Hussein's regime.\n\nCurrent State:\nToday, the remains consist of the massive first level (largely original Ur-Nammu construction) and the foundation of the second level (mostly Nabonidus's restoration), along with the partially reconstructed façade and staircases. The Great Ziggurat of Ur is one of the best-preserved ziggurats in Mesopotamia and is a designated UNESCO World Heritage site. The ruins of the ancient city of Ur, including the ziggurat, are also famously linked to the Biblical tradition as the possible birthplace of Abraham."
        },
        {
          name: "Royal Tombs",
          details: "The Royal Tombs of Ur refer to the rich and significant burials of the Sumerian elite in the ancient city of Ur, in modern-day Dhi Qar Province, southern Iraq. Discovered in the 1920s and 1930s by British archaeologist Sir Leonard Woolley, these tombs date to the Early Dynastic IIIA period (c. 2600–2500 BCE) and are famous for their immense wealth, exquisite artifacts, and evidence of large-scale human sacrifice.\n\nKey Features and Discoveries:\n\nLocation and Context: The tombs are part of a large cemetery (over 2,000 burials) located near the center of the ancient city of Ur. Sixteen of these were classified as \"royal\" due to their monumental scale, rich grave goods, and the presence of numerous attendants buried alongside the principal individual.\n\nStructure: The royal tombs were elaborate brick-built structures at the bottom of deep pits, accessed by a sloping ramp. They contained a main burial chamber, often vaulted or domed, and adjacent \"death pits\" where attendants and offerings were interred.\n\nHuman Sacrifice: One of the most striking and debated aspects of the tombs is the presence of dozens of attendants (guards, female courtiers, musicians, and servants) who were evidently sacrificed to accompany their rulers into the afterlife.\n\nPrincipal Burials: The most notable intact tomb was that of Queen Puabi (PG 800), identified by her inscribed cylinder seal. Other significant individuals named in inscriptions include King Meskalamdug (PG 755/789) and King Ur-Pabilsag (PG 779)."
        },
        {
          name: "Ancient City",
          details: "Ur was a pivotal ancient Sumerian city-state in Mesopotamia (modern Iraq), situated near the Persian Gulf on the Euphrates River, serving as the capital of the Sumerian Empire.\n\nPeak Power (Ur III Period): Its golden age was during the Third Dynasty of Ur (c. 2112–2004 BCE), when it served as the capital of a centralized empire and was governed by kings like Ur-Nammu.\n\nThe Great Ziggurat: The city's most famous structure is the Great Ziggurat of Ur, a massive temple tower dedicated to the moon god Nanna.\n\nEconomic Center: Ur was a major port and trading hub, importing materials like gold, silver, and lapis lazuli from distant lands.\n\nArchaeological Discoveries: Excavations, notably of the Royal Cemetery of Ur, yielded spectacular treasures, including the famous Standard of Ur and the Lyres of Ur, offering crucial insights into early Sumerian royalty and culture.\n\nThe city was eventually abandoned around 400 BCE, primarily due to the shifting course of the Euphrates River."
        }
      ]
    },
    {
      name: "Najaf & Karbala",
      description: "Sacred cities with stunning Islamic architecture and deep spiritual significance.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80",
      highlights: [
        {
          name: "Imam Ali Shrine",
          details: "The Imam Ali Shrine is one of the holiest sites in Shia Islam, located in the city of Najaf.\n\nTomb: It is the revered resting place of Ali ibn Abi Talib (Imam Ali), the cousin and son-in-law of the Prophet Muhammad, and the First Imam in Shia tradition. Prophets Adam and Noah are also traditionally believed to be buried there.\n\nAppearance: The shrine is famous for its spectacular architecture, centered on a massive, highly visible golden dome and two golden minarets, which shine over the city.\n\nSignificance: It serves as a major annual pilgrimage destination and is adjacent to the Wadi-us-Salaam (Valley of Peace), the world's largest cemetery."
        },
        {
          name: "Hussain Shrine",
          details: "The Imam Husayn Shrine is the mausoleum of Husayn ibn Ali, located in the city of Karbala, Iraq. It is one of the most revered places in the world for Shia Muslims.\n\nThe Burial Site: The shrine houses the tomb of Husayn ibn Ali (the third Shia Imam), the grandson of the Prophet Muhammad, and the son of Imam Ali.\n\nThe Battle of Karbala: The shrine stands near the spot where Husayn and 72 of his companions were martyred in the Battle of Karbala in 680 CE (61 AH) while standing against the Umayyad Caliph Yazid I. This event is the central tragedy and foundational narrative of Shia Islam.\n\nHoliest Site: It is considered one of the holiest sites in Shia Islam, outside of Mecca and Medina.\n\nMass Pilgrimage: Millions of pilgrims visit the shrine annually, especially during Ashura (the 10th of Muharram, which marks the day of Husayn's martyrdom) and Arba'een (the 40th day after Ashura, when one of the world's largest religious pilgrimages culminates in Karbala).\n\nGolden Dome and Minarets: Like the Imam Ali Shrine, the Husayn Shrine is topped with a massive, eye-catching golden dome and flanked by shimmering golden minarets, often covered in pure gold tiles.\n\nThe Rawdah: The burial area, known as the Rawḍah (the Garden), is at the center of the complex. The actual grave is enclosed by a latticed structure called the Zarih, which is intricately designed with gold and silver.\n\nOther Tombs: The complex also contains a mass grave at Husayn's feet for the 72 martyrs of Karbala, as well as the tombs of his two sons, 'Ali al-Akbar and the infant 'Ali al-Asghar.\n\nThe city of Karbala and its shrines serve as a powerful symbol of sacrifice, justice, and resistance against tyranny for Shia Muslims globally."
        },
        {
          name: "Islamic Architecture",
          details: "The major shrines in Najaf (Imam Ali) and Karbala (Imam Husayn and Al-Abbas) are prime examples of monumental Shi'a Islamic architecture, primarily influenced by the Safavid (Persian) and Ottoman styles.\n\nKey External Features: They are instantly recognizable by their immense golden domes and towering golden minarets, which are covered in thousands of gold-plated tiles.\n\nDecoration: The sanctuaries are famous for their dazzling use of decorative techniques, including intricate mirror mosaics (Ayina Kari) on the interior walls and vibrant glazed tilework on the facades.\n\nLayout: The complexes are designed to manage vast crowds, featuring massive open courtyards (Sahan) that lead through arched corridors (Riwaqs) to the central, richly decorated inner sanctuary (Haram) housing the Imams' tombs."
        }
      ]
    },
    {
      name: "Marshlands",
      description: "The Mesopotamian Marshes, a UNESCO site where ancient water culture still thrives.",
      image: "https://images.unsplash.com/photo-1511516017401-cac6e4b3d463?w=500&q=80",
      highlights: [
        {
          name: "Traditional Villages",
          details: "The most distinctive structure is the Mudhif (Guest House), but the villages consist of several types of reed buildings.\n\nThe Mudhif (Guest House):\nPurpose: This is the large, ceremonial guest house and community hall for the tribal sheik. It is used for welcoming travelers, holding tribal councils, resolving disputes, and religious ceremonies. It is not used as a family dwelling.\n\nStructure: It is a large, elaborate, barrel-vaulted structure built entirely from reeds.\n\nConstruction: Long, thick bundles of reeds are planted vertically in two opposing rows on the ground (often a man-made island called a dibein). The tops of the bundles are bent inward and tied together, forming huge parabolic arches. Woven reed mats are laid over this skeletal framework to form the walls and roof.\n\nFeatures: The flat end walls feature open latticework panels to allow for airflow and light, crucial for the hot, humid climate. The entrance traditionally faces Mecca.\n\nResidential Dwellings (Sarifa and Raba):\nSarifa: The most common form of family dwelling. It is a smaller, simpler structure than the Mudhif, typically rectangular with a curving reed roof.\n\nRaba: A larger family dwelling, usually with entrances at both ends.\n\nVillage Construction and Layout:\nArtificial Islands (Dibein): Settlements are not built on natural land but on man-made islands constructed from compacted layers of mud, reeds, and rush mats dredged from the marsh bottom. These islands elevate the structures above the water.\n\nMaterials: Every component of the village life, from houses and animal pens (Sitra, used for water buffalo) to boats (mashoof), is made from reeds (primarily the ihdri variety). Reeds are an excellent building material due to their abundance, flexibility, and natural water- and insect-resistance due to high silica content.\n\nTransportation: The primary mode of transportation between these settlements is the canoe (mashoof), navigating the elaborate network of streams and channels.\n\nCultural Significance and History:\nThe villages are centers for the Marsh Arabs' unique culture, which revolves around fishing, reed gathering, mat weaving, and raising water buffalo. The area, known as the Ahwar of Southern Iraq, was designated a UNESCO World Heritage Site (Mixed: Cultural and Natural) in 2016. The city of Al-Chibayish is one of the key hubs for the Marsh Arab culture and eco-tourism today."
        },
        {
          name: "Wildlife",
          details: "The Iraqi Marshlands (or Mesopotamian Marshes) are one of the world's most critical wetland ecosystems, often referred to as the \"Garden of Eden.\" They are an incredibly rich source of biodiversity, particularly for birds, fish, and other aquatic life.\n\nAvian Species (Birds):\nThe marshes are a globally important breeding ground and a vital stopover point on the migration route between Siberia/Central Asia and Africa. Over 200 species of birds have been recorded here.\n\nGlobally Important & Endemic Species:\nBasra Reed-Warbler: The marshes are critical, likely holding over 90% of the world's population of this endangered species.\nMarbled Teal: A significant portion (40% to 60%) of the world's population of this threatened duck species lives in the marshes.\nIraq Babbler: This small, distinctive songbird is nearly endemic to the region.\nAfrican Darter (Levant Darter subspecies): A local subspecies once feared extinct, small populations still survive.\n\nMigratory and Resident Birds:\nWading Birds: Large populations of flamingos, pelicans, various species of herons (e.g., Grey Heron, Purple Heron, Night Heron), and storks.\nWaterfowl: Numerous species of ducks, geese, and swans, including the Eurasian Teal.\nOther Notables: Pygmy Cormorant, Sacred Ibis, Common Redshank, and the Mesopotamian Crow.\n\nAquatic Life:\nThe vast network of shallow lakes and streams supports a rich fish population, which historically supplied over 60% of Iraq's total fish catch. At least 40 species of fish are found in the marshes, including various species of Barbel, carp, and catfish. The marshes serve as important nurseries for marine fish and shrimp that move between freshwater marshes and saline waters.\n\nMammals:\nWater Buffalo: The water buffalo is absolutely central to the ecosystem and culture of the Marsh Arabs. They provide milk and are perfectly adapted to grazing on marsh vegetation.\nOtters: Both the Eurasian Otter and Smooth-coated Otter survive in the waterways, though populations have declined.\nWild Boar: Common along the edges and islands of the marshes.\n\nConservation Status:\nThe draining of the marshes in the 1990s was an ecological disaster. Since reflooding began in 2003, there has been a \"remarkable rate of reestablishment\" of wildlife. The ecosystem remains fragile due to regional droughts, dams on rivers, and salinity issues. The protection of the Ahwar of Southern Iraq as a UNESCO World Heritage Site is crucial for ongoing survival."
        },
        {
          name: "Boat Tours",
          details: "The Mesopotamian Marshes are a UNESCO World Heritage site and boat tours are the primary way to experience this vast wetland ecosystem.\n\nThe Experience: What to Expect:\nYou will travel in a traditional, long, and narrow canoe called a mashoof (or mashuf), which is perfectly designed for navigating dense reed beds and waterways. While some tours use motorized versions, the traditional design is ancient, dating back to Sumerian times. Tours often include visits to local Marsh Arab communities, seeing their unique reed houses called Mudhif. Many tours include a traditional Iraqi meal, most famously Masgouf (grilled fish) cooked over an open fire. The marshes are home to water buffalo, diverse fish species, and thousands of migratory birds.\n\nPrimary Access Points:\nThe Marshlands are most commonly accessed from Nasiriyah and Basra. The most popular area is the Hammar Marshes around Al-Chibayish.\n\nTour Options:\nOrganized Day or Multi-Day Tours: Ranges from 9-hour trips to 2-day adventures with overnight stays. Many include transportation from the city, boat trip, and traditional lunch.\nIndependent Booking: Travel to Al-Chibayish and hire a local boat captain directly near the Martyrs Monument. Prices are negotiated.\n\nPractical Advice:\nBest Time: September to end of March for cooler temperatures.\nPermits and Safety: Advised to go with established local tour guides or agencies.\nCurrency: Bring Iraqi Dinars (IQD) for local payments. USD preferred in new condition.\nWhat to Bring: Sun protection, water, modest clothing, and appropriate footwear."
        }
      ]
    }
  ];

  return (
    <section id="destinations" className="py-24 px-4 bg-gradient-warm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 text-teal-600 font-semibold">
              <MapPin className="w-5 h-5" />
              <span>Discover Iraq</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Must-Visit Destinations
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From ancient Mesopotamian ruins to sacred pilgrimage sites, explore destinations that shaped human civilization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-48 md:h-56 overflow-hidden bg-gray-200">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-teal-400" />
                    {destination.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col h-full">
                <p className="text-gray-700 mb-6 leading-relaxed text-sm md:text-base flex-grow">
                  {destination.description}
                </p>

                <div className="space-y-3 mb-6">
                  <p className="text-xs md:text-sm font-semibold text-gray-900 uppercase tracking-wider">Highlights</p>
                  <div className="space-y-2">
                    {destination.highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        {typeof highlight === 'string' ? (
                          <span className="text-xs md:text-sm text-gray-600">{highlight}</span>
                        ) : (
                          <button
                            onClick={() => setSelectedHighlight(highlight)}
                            className="text-xs md:text-sm text-teal-600 hover:text-teal-700 hover:underline font-medium transition-colors"
                          >
                            {highlight.name}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="flex items-center justify-between w-full px-4 py-3 bg-teal-50 hover:bg-teal-100 text-teal-700 rounded-lg font-semibold transition-all group">
                  Explore
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedHighlight && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-teal-50 to-sand-50 border-b border-teal-100 p-6 md:p-8 flex justify-between items-start gap-4">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900">{selectedHighlight.name}</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full mt-3"></div>
              </div>
              <button
                onClick={() => setSelectedHighlight(null)}
                className="p-2 hover:bg-teal-100 rounded-lg transition flex-shrink-0"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-wrap">
                {selectedHighlight.details}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
