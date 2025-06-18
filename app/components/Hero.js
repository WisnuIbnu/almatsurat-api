"use client"
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="text-center py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 mb-4"
        >
          Al-Matsurat API
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
        >
          Akses bacaan Al-Matsurat pagi dan sore (Kubro dan Sugro) melalui API yang sederhana dan mudah digunakan.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <a href="#try-it" className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold shadow-lg shadow-primary/20 transition-all duration-300 transform hover:scale-105">
            Coba Sekarang
          </a>
          <a href="#docs" className="px-8 py-3 bg-card border border-primary/20 text-primary rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105">
            Dokumentasi
          </a>
        </motion.div>
      </div>
    </section>
  )
}