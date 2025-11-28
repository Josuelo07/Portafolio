"use client";
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SobreMi() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md shadow-md z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Mi Portafolio SMR
            </motion.h1>
            <motion.div 
              className="space-x-4 [&>a]:text-white [&>a]:font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/" className="hover:underline font-semibold">Inicio</Link>
              <Link href="/sobre-mi" className="hover:underline font-semibold">Sobre Mí</Link>
              <Link href="/Formacion" className="hover:underline font-semibold">Formación</Link>
              <Link href="/Proyectos" className="hover:underline font-semibold">Proyectos</Link>
             
            </motion.div>
          </div>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1 
            className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sobre Mí
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl -z-10"></div>
            
            {/* Sección 1: Presentación */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="p-2">
                  <p className="text-blue-50 leading-relaxed">
                    Hola, soy Marving Josue Quintanilla, estudiante de informática con un enfoque especial en programación, 
                    SMR (Sistemas Microinformáticos y Redes) y ciberseguridad y IA. Desde que comencé mis estudios, me ha 
                    apasionado explorar cómo funcionan los sistemas, cómo se conectan las redes y cómo proteger la información 
                    frente a amenazas digitales. Me motiva aprender cada día y aplicar mis conocimientos en proyectos reales y prácticos.
                  </p>
                </div>
                <div className="h-full flex items-center justify-center">
                  <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden">
                    <img 
                      src="/IMG-20250523-WA0011.jpg"
                      alt="Marving Josue Quintanilla"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sección 2: Trayectoria */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg my-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="h-full">
                  <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden">
                    <img 
                      src="/IMG-20250523-WA0009.jpg"
                      alt="Marving trabajando en tecnología"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-blue-50 leading-relaxed">
                    Mi día a día combina estudio, práctica y curiosidad constante. Paso gran parte de mi tiempo programando, 
                    configurando sistemas y redes, y experimentando con técnicas de ciberseguridad en entornos de prueba. 
                    Me apasiona documentar mi aprendizaje y compartir conocimientos con la comunidad.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sección 3: Intereses */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="order-2 md:order-1">
                  <p className="text-blue-50 leading-relaxed">
                    Además de la informática, tengo varios hobbies que me ayudan a mantener un equilibrio. Disfruto leyendo sobre 
                    romanticismo, novelas y reflexiones. Me gustan mucho los videojuegos de estrategia, exploración y simulación, 
                    siendo mis favoritos Minecraft y Hollow Knight. También valoro mucho el tiempo que paso con mis seres queridos y 
                    mis mascotas. Todos estos intereses me inspiran a crecer tanto profesional como personalmente.
                  </p>
                </div>
                <div className="order-1 md:order-2 h-full">
                  <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden">
                    <img 
                      src="/IMG-20251023-WA0006.jpeg"
                      alt="Marving en sus momentos de ocio"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Botón de acción */}
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                href="/Formacion" 
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ver Mi Formación
              </Link>
            </motion.div>
          </motion.div>
        </div>
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
          <p className="text-blue-100"> {new Date().getFullYear()} Marving Quintanilla</p>
        </div>
      </motion.footer>
    </div>
  );
}