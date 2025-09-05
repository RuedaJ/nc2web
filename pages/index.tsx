import Head from 'next/head'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Dashboard from '@/components/Dashboard'
import ExportButtons from '@/components/ExportButtons'

const MapWrapper = dynamic(() => import('@/components/Map'), { ssr: false })

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Home() {
  return (
    <>
      <Head>
        <title>CapitalNaturalEval</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-emerald-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold text-stone-800">CapitalNaturalEval</a>
          <nav className="hidden md:flex gap-6 text-stone-700">
            <a href="#como-funciona" className="hover:text-emerald-700">Cómo Funciona</a>
            <a href="#soluciones" className="hover:text-emerald-700">Soluciones</a>
            <a href="#funcionalidades" className="hover:text-emerald-700">Funcionalidades</a>
            <a href="#contacto" className="hover:text-emerald-700">Contacto</a>
          </nav>
          <a href="#contacto" className="hidden md:inline-block px-4 py-2 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800">Solicita Demo</a>
        </div>
      </header>

      <main id="home">
        <section className="bg-gradient-to-b from-emerald-50 via-lime-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-stone-900">🌱 Transformamos datos ambientales en decisiones estratégicas regenerativas</h1>
              <p className="text-lg text-stone-700">Evalúa el potencial regenerativo del capital natural de cualquier territorio mediante análisis visual y datos precisos. Nuestra plataforma integra tecnología GIS avanzada para convertir información compleja en insights accionables.</p>
              <div className="flex flex-wrap gap-3">
                <a href="#contacto" className="px-5 py-3 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800">Solicita una Demo</a>
                <a href="#contacto" className="px-5 py-3 rounded-lg border border-emerald-300 text-emerald-800 hover:bg-emerald-50">Únete a la Prueba Piloto</a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[ 'Análisis en 48h', 'Datos Científicos Verificados', 'Informes Listos para Presentar' ].map((t) => (
                  <div key={t} className="p-3 rounded-xl border border-emerald-200 bg-white/70 backdrop-blur">
                    <span className="text-stone-800 font-medium">{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="space-y-4">
              <MapWrapper />
              <Dashboard />
            </div>
          </div>
        </section>

        <section id="como-funciona" className="py-16 bg-gradient-to-b from-white to-emerald-50/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-6">Tres pasos para transformar tu territorio</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ['Recopilación Inteligente','Integramos datos de satélites, mapas oficiales y registros históricos para crear una visión completa de tu territorio.'],
                ['Análisis Profundo','Generamos puntuaciones precisas por variable ambiental y un score global de potencial regenerativo.'],
                ['Resultados Ejecutables','Recibe mapas interactivos, gráficos claros y recomendaciones prácticas listas para presentar.']
              ].map(([title, desc], i) => (
                <div key={title as string} className="p-6 rounded-2xl border border-emerald-200 bg-white">
                  <div className="text-sm text-emerald-700 mb-1">Paso {i+1}</div>
                  <div className="text-xl font-semibold text-stone-900">{title}</div>
                  <p className="text-stone-700 mt-2">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="soluciones" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-6">Soluciones por Sector</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Dashboard />
              <div className="space-y-3">
                <ul className="space-y-2 text-stone-800">
                  <li>✓ Inversores: oportunidades de inversión sostenible</li>
                  <li>✓ Gobiernos: planificación territorial basada en ciencia</li>
                  <li>✓ ONGs: priorización de proyectos de restauración</li>
                  <li>✓ Gestores: mapas detallados y estrategias basadas en la naturaleza</li>
                </ul>
                <ExportButtons />
              </div>
            </div>
          </div>
        </section>

        <section id="funcionalidades" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-6">Funcionalidades Clave</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <MapWrapper />
              <Dashboard />
            </div>
          </div>
        </section>

        <section id="contacto" className="py-16 bg-gradient-to-br from-emerald-700 to-lime-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Únete al Cambio Regenerativo</h3>
              <p className="mt-3 text-emerald-100">Transforma la manera en que entiendes y gestionas el capital natural.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <ExportButtons />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center text-stone-600">
        © 2024 Herramienta de Evaluación de Capital Natural.
      </footer>
    </>
  )
}
