"use client";
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';

const page = () => {
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
              <Link href="/proyectos" className="hover:underline font-semibold">Proyectos</Link>
              
            </motion.div>
          </div>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Mis Proyectos
          </motion.h1>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proyecto 1 */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Red Local Empresarial</h3>
                <p className="text-blue-100 mb-4">Configuración y administración de una red local para una pequeña empresa con servidores y seguridad.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Redes</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Cisco</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Seguridad</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-400 hover:text-white font-medium transition-colors"
                >
                  Ver más →
                </motion.button>
              </div>
            </motion.div>

            {/* Proyecto 2 */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            >
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Servidor Web Apache</h3>
                <p className="text-blue-100 mb-4">Instalación y configuración de un servidor web Apache con hostings virtuales y certificados SSL.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Servidores</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Apache</span>
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Linux</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-400 hover:text-white font-medium transition-colors"
                >
                  Ver más →
                </motion.button>
              </div>
            </motion.div>

            {/* Proyecto 3 */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            >
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Análisis de Seguridad</h3>
                <p className="text-blue-100 mb-4">Auditoría de seguridad y análisis de vulnerabilidades en sistemas informáticos empresariales.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Ciberseguridad</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Auditoría</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Herramientas</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-400 hover:text-white font-medium transition-colors"
                >
                  Ver más →
                </motion.button>
              </div>
            </motion.div>

            {/* Proyecto 4 */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            >
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Scripting Automatización</h3>
                <p className="text-blue-100 mb-4">Desarrollo de scripts en Python y Bash para automatizar tareas de administración de sistemas.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Python</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Bash</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Automatización</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-400 hover:text-white font-medium transition-colors"
                >
                  Ver más →
                </motion.button>
              </div>
            </motion.div>

            {/* Proyecto 5 */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            >
              <div className="h-48 bg-gradient-to-br from-teal-500 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Base de Datos MySQL</h3>
                <p className="text-blue-100 mb-4">Diseño e implementación de base de datos relacional para gestión de inventario empresarial.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">MySQL</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">SQL</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Diseño</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-400 hover:text-white font-medium transition-colors"
                >
                  Ver más →
                </motion.button>
              </div>
            </motion.div>

            {/* Proyecto 6 */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            >
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Mantenimiento Hardware</h3>
                <p className="text-blue-100 mb-4">Diagnóstico y reparación de equipos informáticos, instalación de componentes y optimización.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Hardware</span>
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Diagnóstico</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Soporte</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-400 hover:text-white font-medium transition-colors"
                >
                  Ver más →
                </motion.button>
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
              href="/" 
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Volver al Inicio
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
          <p className="text-blue-100"> {new Date().getFullYear()} Marving Quintanilla </p>
        </div>
      </motion.footer>
    </div>
  );
}

export default page