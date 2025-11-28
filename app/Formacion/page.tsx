"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FormacionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md shadow-md z-50">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-white hover:opacity-80 transition-opacity">
              Marving Quintanilla
            </Link>
            <div className="space-x-4 [&>a]:text-white [&>a]:font-bold">
              <Link href="/" className="hover:underline font-semibold">Inicio</Link>
              <Link href="/sobre-mi" className="hover:underline font-semibold">Sobre Mí</Link>
              <Link href="/Formacion" className="hover:underline font-semibold">Formación</Link>
              <Link href="/Proyectos" className="hover:underline font-semibold">Proyectos</Link>
             
            </div>
          </div>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1 
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Mi Formación
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Formación Académica */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-blue-300 mb-6">Formación Académica</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-white">Sistemas Microinformáticos y Redes</h3>
                  <p className="text-blue-100">2024 - En curso</p>
                  <p className="mt-2 text-blue-50">
                    Formación integral en administración de sistemas, redes locales, seguridad informática y mantenimiento de equipos.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-white">Máster en Ciberseguridad</h3>
                  <p className="text-blue-100">2024 - En curso</p>
                  <p className="mt-2 text-blue-50">
                    Especialización en seguridad informática, protección de sistemas y análisis de vulnerabilidades.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Formación Técnica */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-blue-300 mb-6">Formación Técnica</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Prometeo by thepower</h3>
                  <ul className="space-y-2 pl-5 list-disc text-blue-50">
                    <li>Montaje, mantenimiento y administración de sistemas informáticos</li>
                    <li>Configuración de redes locales (LAN)</li>
                    <li>Instalación de sistemas operativos y software</li>
                    <li>Diagnóstico y resolución de incidencias técnicas</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Máster en Ciberseguridad</h3>
                  <ul className="space-y-2 pl-5 list-disc text-blue-50">
                    <li>Introducción a la ciberseguridad y protección de la información</li>
                    <li>Fundamentos del hacking ético y análisis de vulnerabilidades</li>
                    <li>Conceptos de redes seguras y gestión de incidentes</li>
                    <li>Uso de herramientas para detección de riesgos</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/Proyectos" 
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver Mis Proyectos
            </Link>
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
          <p className="text-blue-100">© {new Date().getFullYear()} Marving Quintanilla </p>
        </div>
      </motion.footer>
    </div>
  );
}
