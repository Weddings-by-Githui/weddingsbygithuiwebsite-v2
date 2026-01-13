import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Heart, MapPin, Play, Camera, Music, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials.tsx';

interface FeaturedVideo {
  id: string;
  couple: string;
  location: string;
  date: string;
  thumbnail: string;
  youtubeId: string;
}

const Home: React.FC = () => {
  const containerRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState<FeaturedVideo | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.05]);

  const showreel: FeaturedVideo = {
    id: 'showreel',
    couple: 'Weddings by Githui Showreel',
    location: 'Worldwide',
    date: '2024 Edition',
    thumbnail: '',
    youtubeId: '8Xag87NdMeo'
  };

  const featuredFilms: FeaturedVideo[] = [
    {
      id: '1',
      couple: 'Ivy & Raf Wedding Film',
      location: 'Windsor Hotel, Nairobi',
      date: '13th December 2025',
      thumbnail: 'https://img.youtube.com/vi/32DtXwhT0Y8/maxresdefault.jpg',
      youtubeId: '32DtXwhT0Y8'
    },
    {
      id: '2',
      couple: 'Mwende & Charles Wedding Film',
      location: 'Safari Park Hotel, Nairobi',
      date: '28th August 2025',
      thumbnail: 'https://img.youtube.com/vi/dWmVT9vru0A/maxresdefault.jpg',
      youtubeId: 'dWmVT9vru0A'
    },
    {
      id: '3',
      couple: 'Wangari & Daramfon Wedding Film',
      location: 'Tribe Hotel, Nairobi',
      date: '23rd August 2025',
      thumbnail: 'https://img.youtube.com/vi/VvG_o5-hjSE/maxresdefault.jpg',
      youtubeId: 'VvG_o5-hjSE'
    }
  ];

  return (
    <div ref={containerRef} className="bg-[#FAF9F6]">
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-[110]"
            >
              <X size={32} strokeWidth={1.5} />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-6xl aspect-video bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <iframe
                className="w-full h-full border-none"
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&playsinline=1&enablejsapi=1&origin=${window.location.origin}`}
                title={`${selectedVideo.couple} Wedding Film`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070" 
            alt="Cinematic Wedding" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="relative z-20 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="uppercase tracking-[0.5em] text-[10px] font-bold text-[#c5a059]">WEDDINGS BY GITHUI</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="text-6xl md:text-9xl font-serif mb-8 leading-[0.9] tracking-tight"
          >
            Your Love, <br />
            <span className="italic font-light text-[#c5a059]">Eternalized</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="text-white/80 font-serif italic text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light"
          >
            Cinematic wedding films that let you feel your day all over again
          </motion.p>

          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ delay: 1.1, duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
              className="w-[1px] h-20 bg-gradient-to-b from-white/40 to-transparent mb-12 origin-top"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1 }}
            >
              <motion.button 
                onClick={() => setSelectedVideo(showreel)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-3 transition-all duration-700 px-6 py-3.5 rounded-full mx-auto bg-transparent"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-8 h-8 rounded-full bg-[#c5a059] flex items-center justify-center text-white shadow-lg shadow-[#c5a059]/20 group-hover:shadow-[#c5a059]/40 transition-all duration-500"
                  >
                    <Play size={14} fill="currentColor" className="ml-0.5" />
                  </motion.div>
                  <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-white/90 group-hover:text-[#c5a059] transition-colors duration-500">Watch Showreel</span>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-neutral-100 bg-[#FAF9F6] shadow-xl relative"
              >
                <img 
                  src="https://res.cloudinary.com/emacon-production/image/upload/v1766660414/Weddings%20By%20Githui/IMG_2947_bj08v9.jpg" 
                  alt="Quality Wedding Filmmaking" 
                  className="w-full h-full object-cover object-center transition-all duration-1000 grayscale-[10%] hover:grayscale-0"
                />
              </motion.div>
            </div>

            <div className="order-1 lg:order-2 space-y-10">
              <span className="text-[#c5a059] uppercase tracking-[0.5em] text-[10px] font-bold">The Standard</span>
              <h2 className="text-5xl md:text-6xl font-serif text-neutral-900 leading-tight">
                THE RE-IMAGINED <br className="hidden md:block" />
                EXCELLENCE IN <br className="hidden md:block" />
                <span className="italic text-[#c5a059]">WEDDING CINEMATOGRAPHY</span>
              </h2>
              <p className="text-neutral-500 text-lg leading-relaxed font-light">
                Wedding by Githui's purpose is to deliver top-quality wedding films for couples ready to celebrate their love in style. We create bespoke films that transcend the day itself.
              </p>
              <div className="pt-8">
                <Link to="/contact" className="bg-neutral-900 text-white px-10 py-5 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-4 hover:bg-[#c5a059] transition-all self-start inline-flex">
                  Request a Bespoke Film
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-32 bg-[#FAF9F6] border-y border-neutral-100 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className="relative shrink-0"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-[#c5a059]/30 shadow-2xl ring-8 ring-white/50">
                <img 
                  src="https://res.cloudinary.com/emacon-production/image/upload/v1768310327/VB_web-1_jzecbs.jpg" 
                  alt="Victor Githui" 
                  className="w-full h-full object-cover scale-110 grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-dashed border-[#c5a059]/20 rounded-full pointer-events-none"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className="text-center md:text-left space-y-6"
            >
              <span className="text-[#c5a059] uppercase tracking-[0.4em] text-[10px] font-bold">The Visionary</span>
              <h3 className="text-4xl md:text-5xl font-serif text-neutral-900">Victor Githui</h3>
              <p className="text-neutral-500 font-light italic text-lg leading-relaxed max-w-xl">
                "Cinema is the art of memory. My mission is to capture the unseen rhythms of your love and craft a film that doesn't just show how your wedding looked, but allows you to feel the very soul of the day, forever."
              </p>
              <div className="pt-4">
                <Link 
                  to="/about" 
                  className="group flex items-center justify-center md:justify-start gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-900 hover:text-[#c5a059] transition-all"
                >
                  Learn our story 
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Films Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-24">
             <span className="text-[#c5a059] uppercase tracking-[0.3em] text-sm font-bold block mb-4">Timeless Luxury</span>
             <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 max-w-4xl mx-auto leading-tight mb-8">
               Capturing your story with an uncompromising dedication to quality.
             </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:grid-cols-3 mb-24">
            {featuredFilms.map((film, idx) => (
              <motion.div 
                key={film.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer text-left"
                onClick={() => setSelectedVideo(film)}
              >
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl relative group bg-neutral-100">
                  <img src={film.thumbnail} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={film.couple} />
                  <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/40 transition-all flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <Play size={24} fill="white" className="ml-1" />
                    </div>
                  </div>
                </div>
                <div className="px-4 space-y-2">
                  <h3 className="text-3xl font-serif text-neutral-900 group-hover:text-[#c5a059] transition-colors">{film.couple}</h3>
                  <div className="flex items-center gap-2 text-neutral-400">
                    <MapPin size={10} className="text-[#c5a059]" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium">{film.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center"
          >
            <Link 
              to="/portfolio" 
              className="group flex flex-col items-center gap-4 py-8"
            >
              <div className="relative overflow-hidden bg-neutral-900 text-white px-12 py-5 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold shadow-2xl transition-all duration-500 group-hover:bg-[#c5a059] group-hover:-translate-y-2">
                View More Stories
                <motion.div 
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-[#c5a059] translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                >
                   Discover the Gallery
                </motion.div>
              </div>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <ArrowRight size={20} className="text-[#c5a059] rotate-90" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-40 bg-[#FAF9F6] border-t border-neutral-100">
        <div className="container mx-auto px-6">
          <Testimonials />
        </div>
      </section>
    </div>
  );
};

export default Home;