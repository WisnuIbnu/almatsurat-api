// app/components/ApiTester.js
"use client"
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCopy, FiCheck } from 'react-icons/fi';

const API_ENDPOINTS = [
  { name: 'Pagi Kubro', url: '/api/almatsurat/pagiKubro' },
  { name: 'Pagi Sugro', url: '/api/almatsurat/pagiSugro' },
  { name: 'Sore Kubro', url: '/api/almatsurat/soreKubro' },
  { name: 'Sore Sugro', url: '/api/almatsurat/soreSugro' },
];

export default function ApiTester() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(API_ENDPOINTS[0].url);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [fetchExample, setFetchExample] = useState('');

  useEffect(() => {
    const absoluteUrl = `${window.location.origin}${selectedEndpoint}`;
  const newFetchExample = `axios.get('${absoluteUrl}')
  .then(response => 
  console.log(response.data));`;

    setFetchExample(newFetchExample);

  }, [selectedEndpoint]); 
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await fetch(selectedEndpoint);
      if (!response.ok) throw new Error(`Gagal memuat data: ${response.statusText}`);
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

  const copyToClipboard = (text) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="try-it" className="mb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-card rounded-2xl shadow-2xl shadow-primary/5 dark:shadow-black/20 overflow-hidden border border-primary/10"
      >
        <div className="p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">Coba Langsung API</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {API_ENDPOINTS.map((endpoint) => (
              <button
                key={endpoint.url}
                onClick={() => setSelectedEndpoint(endpoint.url)}
                className={`p-4 rounded-xl text-center transition-all duration-200 font-semibold text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card ${
                  selectedEndpoint === endpoint.url
                    ? 'bg-primary text-primary-foreground shadow-md scale-105'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {endpoint.name}
              </button>
            ))}
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-muted-foreground mb-3">Contoh Penggunaan</h3>
            <div className="relative group">
              <pre className="bg-[#0d1117] text-gray-300 p-4 rounded-lg overflow-x-auto text-sm sm:text-base min-h-[110px]">
                {/* 3. Tampilkan state. Awalnya akan kosong, lalu diisi oleh useEffect */}
                <code>{fetchExample || '...' }</code>
              </pre>
              <button
                onClick={() => copyToClipboard(fetchExample)}
                className="absolute top-3 right-3 p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Salin kode"
              >
                {copied ? <FiCheck className="text-green-400" /> : <FiCopy className="text-gray-300" />}
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-background/50 p-6 sm:p-8 border-t border-primary/10">
          <h3 className="text-lg font-semibold text-muted-foreground mb-4">Response</h3>
          <div className="relative min-h-[20rem] bg-black  rounded-lg p-4 border border-white/10 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {loading && (
                <motion.div key="loader" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </motion.div>
              )}
              {error && (
                <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg">
                  <p className="font-semibold">Terjadi Error</p>
                  <p className="text-sm">{error}</p>
                </motion.div>
              )}
              {data && (
                <motion.div key="data" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full">
                  <pre className="text-sm text-gray-300 h-full w-full overflow-auto">
                    {JSON.stringify(data, null, 2)}
                  </pre>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}