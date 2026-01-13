import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';

const WhatsAppConcierge: React.FC = () => {
  const phoneNumber = "254701230892";
  const message = "Hello Weddings by Githui, I would like to inquire about your luxury cinematography services.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 bg-[#c5a059] text-white p-5 rounded-full shadow-[0_20px_60px_rgba(197,160,89,0.4)] z-50 flex items-center gap-3 overflow-hidden group border border-white/20"
    >
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 font-bold text-[10px] uppercase tracking-[0.3em] whitespace-nowrap pl-0 group-hover:pl-4 relative z-10">
        Chat with Concierge
      </span>
      
      <div className="relative z-10">
        <MessageCircle size={22} className="relative z-10" />
        <motion.div
          animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute -top-1 -right-1 text-white/60"
        >
          <Sparkles size={10} />
        </motion.div>
      </div>
    </motion.a>
  );
};

export default WhatsAppConcierge;