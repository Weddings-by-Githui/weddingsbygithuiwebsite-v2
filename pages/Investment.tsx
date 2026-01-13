import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Investment: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Tailored To You */}
        <section className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-48 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-neutral-100">
              <img 
                src="https://res.cloudinary.com/emacon-production/image/upload/v1768310327/VB_web-1_jzecbs.jpg" 
                alt="The Creative Team" 
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 tracking-wider uppercase">
                Wedding Filmmaking, <br />
                <span className="italic">Tailored To You</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-neutral-500 font-light leading-relaxed text-lg">
              <p>
                At Weddings by Githui, we go beyond documenting a wedding day—we design an experience that is entirely your own. From your first inquiry to the moment you relive your story through film, every detail is approached with intention and care.
              </p>
              <p>
                We capture the raw emotions, intimate details, and fleeting moments that define your celebration, preserving them in a way that feels timeless and artfully composed. Our goal is simple: to create a film that not only reflects your love, but becomes a treasured part of your story for years to come.
              </p>
            </div>

            <div className="pt-4">
              <Link 
                to="/contact" 
                className="bg-neutral-900 text-white px-12 py-5 rounded-md text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#c5a059] transition-all inline-block shadow-lg"
              >
                Connect Today
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Bottom Section: The Investment Card */}
        <section className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="bg-[#FAF9F6] p-12 md:p-24 rounded-lg shadow-sm border border-neutral-100 text-center space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-5xl md:text-6xl font-serif italic text-neutral-800">The Investment</h3>
              <h4 className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold text-neutral-900 max-w-2xl mx-auto leading-loose">
                Every Great Love Story Deserves to be Preserved with Intention and Artistry
              </h4>
            </div>

            <p className="text-neutral-500 font-light text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              With years of experience filming weddings around the world, our team is dedicated to capturing your most meaningful moments with the utmost care. Our pricing reflects the expertise and dedication we bring to every celebration, ensuring your film will be as enduring as the memories it holds.
            </p>

            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl bg-neutral-200">
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2070" 
                alt="Luxury Destination Wedding" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-10">
              <div className="text-[11px] uppercase tracking-[0.4em] font-bold text-neutral-900">
                Our 2026 Packages Begin at KES 210,000.
              </div>

              <p className="text-neutral-400 font-light text-sm leading-relaxed max-w-2xl mx-auto">
                Whether your celebration unfolds in the heart of a city or halfway across the world, we create bespoke films that transcend the day itself. Every collection is tailored to reflect the scope and character of your event, so your story is told in a way that is entirely your own.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Footer Link */}
        <div className="mt-24 text-center">
          <Link 
            to="/portfolio" 
            className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 hover:text-[#c5a059] transition-all"
          >
            Explore our film gallery
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Investment;