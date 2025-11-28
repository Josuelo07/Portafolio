"use client";
import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [showHeader, setShowHeader] = useState(false);

  // Efecto para detectar el scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
      setShowHeader(true);
    } else {
      setIsScrolled(false);
      setShowHeader(latest > 0);
    }
  });

  // Valores transformados basados en el scroll
  const titleY = useTransform(scrollY, [0, 300], [0, -100]);
  const titleOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const titleScale = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Estilo de fondo con la imagen
  const backgroundStyle = {
    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' viewBox=\'0 0 100 100\' preserveAspectRatio=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,0 L100,0 L100,100 L0,100 Z\' fill=\'%231a202c\' /%3E%3Cpath d=\'M0,0 L100,0 L100,100 L0,100 Z\' fill=\'url(%23gradient)\' fill-opacity=\'0.1\' /%3E%3Cdefs%3E%3ClinearGradient id=\'gradient\' gradientTransform=\'rotate(45)\'%3E%3Cstop offset=\'0\' stop-color=\'%233b82f6\' /%3E%3Cstop offset=\'1\' stop-color=\'%238b5cf6\' /%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  return (
    <div className="min-h-screen text-white" style={backgroundStyle}>
      {/* Header que aparece al hacer scroll */}
      <AnimatePresence>
        {showHeader && (
          <motion.header 
            className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md shadow-md z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container mx-auto px-6 py-3">
              <div className="flex items-center justify-between">
                <motion.h1 
                  className="text-xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Marving Quintanilla
                </motion.h1>
                <motion.div 
                  className="space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link href="/" className="hover:underline font-bold text-white">Inicio</Link>
                  <Link href="/sobre-mi" className="hover:underline font-bold text-white">Sobre Mí</Link>
                  <Link href="/Formacion" className="hover:underline font-bold text-white">Formación</Link>
                  <Link href="/Proyectos" className="hover:underline font-bold text-white">Proyectos</Link>
                  
                </motion.div>
              </div>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Contenido principal */}
      <main className="container mx-auto px-6">
        {/* Título grande centrado */}
        <section className="h-screen flex items-center justify-center text-center">
          <motion.div
            className="w-full"
            style={{
              y: titleY,
              opacity: titleOpacity,
              scale: titleScale,
            }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Marving Quintanilla
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Sistemas Microinformáticos y Redes
            </motion.p>
          </motion.div>
        </section>

        {/* Sección de Enfoque */}
        <section className="py-16 md:py-24">
          <motion.div 
            className="max-w-4xl mx-auto px-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-700/50">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-6 text-blue-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Estudiante de Sistemas Microinformáticos y Redes
              </motion.h2>
              
              <motion.p 
                className="text-blue-100 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Amante de la informática, la programación y la seguridad digital.
                Aprendiendo y creciendo cada día en el mundo de la informática.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4 justify-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Link 
                  href="/sobre-mi"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-sm font-medium flex items-center gap-2"
                >
                  <span>Conóceme más</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link 
                  href="/Formacion"
                  className="px-6 py-2.5 bg-transparent hover:bg-gray-700/50 text-blue-300 border border-blue-400/30 hover:border-blue-400/50 rounded-lg transition-colors duration-300 text-sm font-medium flex items-center gap-2"
                >
                  <span>Mi formación</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer 
        className="bg-gray-900/80 backdrop-blur-sm py-6 mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-blue-100">© {new Date().getFullYear()} Marving Quintanilla </p>
        </div>
      </motion.footer>
    </div>
  );
}
