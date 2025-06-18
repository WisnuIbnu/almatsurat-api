"use client"
import { useState, useEffect } from 'react';
import Header from '../app/components/Header';
import { FiMoon, FiSun, FiCopy, FiCheck } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useCallback } from 'react';

const API_ENDPOINTS = [
  { name: 'Sore Kubro', url: '/api/almatsurat/soreKubro' },
  { name: 'Pagi Kubro', url: '/api/almatsurat/pagiKubro' },
  { name: 'Sore Sugro', url: '/api/almatsurat/soreSugro' },
  { name: 'Pagi Sugro', url: '/api/almatsurat/pagiSugro' },
];

export default function Home() {

  const [selectedEndpoint, setSelectedEndpoint] = useState(API_ENDPOINTS[0].url);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(selectedEndpoint);
      if (!response.ok) throw new Error('Failed to fetch data');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [selectedEndpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `fetch('${selectedEndpoint}')\n  .then(response => response.json())\n  .then(data => console.log(data));`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-blue-800 transition-colors duration-300">
      <Header />
      
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-4"
          >
            Al-Matsurat API
          </motion.h1>
          <p className="text-lg text-blue-800 dark:text-blue-200 max-w-3xl mx-auto mb-8">
            Akses bacaan Al-Matsurat pagi dan sore (Kubro dan Sugro) melalui API yang sederhana dan mudah digunakan
          </p>
          
          <div className="flex justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#try-it"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg transition-all"
            >
              Coba Sekarang
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#docs"
              className="px-6 py-3 bg-white dark:bg-blue-900 border border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-300 rounded-lg font-medium shadow-lg transition-all"
            >
              Dokumentasi
            </motion.a>
          </div>
        </section>

        {/* API Endpoints Section */}
        <section id="try-it" className="mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-blue-900 rounded-2xl shadow-xl overflow-hidden transition-all duration-300"
          >
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-blue-800 dark:text-white mb-6">Pilih Endpoint</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {API_ENDPOINTS.map((endpoint) => (
                  <motion.button
                    key={endpoint.url}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedEndpoint(endpoint.url)}
                    className={`p-4 rounded-xl text-center transition-all duration-200 ${
                      selectedEndpoint === endpoint.url
                        ? 'bg-blue-600 dark:bg-blue-700 text-white shadow-md'
                        : 'bg-blue-50 dark:bg-blue-800 text-blue-700 dark:text-blue-200 hover:shadow-md'
                    }`}
                  >
                    <span className="font-medium">{endpoint.name}</span>
                  </motion.button>
                ))}
              </div>
              
              <div className="relative">
                <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-3">Contoh Penggunaan</h3>
                <div className="relative">
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm sm:text-base">
                    <code className="language-javascript">
                      {`fetch('${selectedEndpoint}')\n  .then(response => response.json())\n  .then(data => console.log(data));`}
                    </code>
                  </pre>
                  <button
                    onClick={copyToClipboard}
                    className="absolute top-3 right-3 p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
                    aria-label="Copy to clipboard"
                  >
                    {copied ? (
                      <FiCheck className="text-green-400" />
                    ) : (
                      <FiCopy className="text-gray-300" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-blue-950 p-6 sm:p-8 border-t border-gray-200 dark:border-blue-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">Response</h3>
                <button
                  onClick={fetchData}
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  {loading ? 'Memuat...' : 'Refresh Data'}
                </button>
              </div>
              
              <div className="relative min-h-40">
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                )}
                
                {error && (
                  <div className="bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 p-4 rounded-lg">
                    <p>Error: {error}</p>
                  </div>
                )}
                
                {data && (
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-white dark:bg-blue-800 p-4 rounded-lg border border-gray-200 dark:border-blue-700 overflow-x-auto"
                    >
                      <pre className="text-sm text-gray-800 dark:text-gray-200">
                        {JSON.stringify(data, null, 2)}
                      </pre>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="docs" className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 dark:text-white mb-12">Fitur API</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-blue-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-blue-800 transition-all"
            >
              <div className="bg-blue-100 dark:bg-blue-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FiSun className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 dark:text-white mb-2">Pagi & Sore</h3>
              <p className="text-blue-600 dark:text-blue-300">
                Dapatkan bacaan khusus untuk waktu pagi dan sore sesuai dengan Al-Matsurat
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-blue-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-blue-800 transition-all"
            >
              <div className="bg-blue-100 dark:bg-blue-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FiMoon className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 dark:text-white mb-2">Kubro & Sugro</h3>
              <p className="text-blue-600 dark:text-blue-300">
                Pilihan antara versi Kubro (lengkap) dan Sugro (ringkas) sesuai kebutuhan
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-blue-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-blue-800 transition-all"
            >
              <div className="bg-blue-100 dark:bg-blue-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FiCopy className="text-blue-600 dark:text-blue-400 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 dark:text-white mb-2">Mudah Digunakan</h3>
              <p className="text-blue-600 dark:text-blue-300">
                API sederhana dengan response JSON yang siap diintegrasikan ke aplikasi Anda
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 dark:bg-blue-950 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Al-Matsurat API</h3>
              <p className="text-blue-300">Bacaan harian dalam genggaman Anda</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                Dokumentasi
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                Kontak
              </a>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
            <p>© {new Date().getFullYear()} Al-Matsurat API. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}