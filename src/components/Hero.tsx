import { MapPin, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div id="home" className="relative h-screen pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=2000&q=80")',
            filter: 'brightness(0.5) saturate(1.2)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-transparent to-orange-900/20" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 text-center">
        <div 
          className={`transition-all duration-1000 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="hidden sm:block w-12 h-1 bg-gradient-to-r from-transparent to-teal-400" />
            <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-teal-400" />
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-teal-400" />
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
            Explore Iraq
          </h1>

          <div className="h-1 w-24 bg-gradient-to-r from-teal-400 via-teal-300 to-transparent mx-auto mb-8" />

          <p className="text-lg sm:text-xl md:text-2xl mb-4 text-gray-100 font-light max-w-2xl mx-auto">
            Discover the Cradle of Civilization
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto mb-10 leading-relaxed">
            Journey through ancient Mesopotamia, where timeless wonders, sacred sites, and vibrant cultures await your discovery
          </p>
        </div>

        <div 
          className={`transition-all duration-1000 delay-300 transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className="group inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl hover:shadow-teal-500/50">
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-teal-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
