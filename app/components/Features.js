"use client"
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiCopy } from 'react-icons/fi';

const features = [
  { icon: <FiSun size={24} />, title: 'Pagi & Sore', description: 'Dapatkan bacaan khusus untuk waktu pagi dan sore sesuai sunnah.' },
  { icon: <FiMoon size={24} />, title: 'Kubro & Sugro', description: 'Pilihan versi Kubro (lengkap) dan Sugro (ringkas) sesuai kebutuhan.' },
  { icon: <FiCopy size={24} />, title: 'Mudah Digunakan', description: 'API sederhana dengan response JSON yang siap diintegrasikan ke aplikasi Anda.' },
];

const FeatureCard = ({ icon, title, description, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-card p-6 rounded-xl shadow-lg border border-primary/10"
  >
    <div className="bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

export default function Features() {
  return (
    <section id="docs" className="mb-24">
      <h2 className="text-3xl font-bold text-center text-foreground mb-12">Fitur Unggulan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <FeatureCard key={i} index={i} {...feature} />
        ))}
      </div>
    </section>
  );
}