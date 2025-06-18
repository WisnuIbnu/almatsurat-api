"use client"
import Image from "next/image";
import { useState, useEffect } from 'react';
import Header from '../app/components/Header';

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

  const fetchData = async () => {
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
  };

  return (
  <div className="min-h-screen">
      <Header />
      <main className="container py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Al-Matsurat API</h2>
          <p className="text-center max-w-2xl mx-auto mb-8 text-blue-200 dark:text-blue-300">
            API untuk mendapatkan bacaan Al-Matsurat pagi dan sore (Kubro dan Sugro)
          </p>

          <div className="bg-blue-800 dark:bg-blue-900 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">API Endpoints</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {API_ENDPOINTS.map((endpoint) => (
                <button
                  key={endpoint.url}
                  onClick={() => setSelectedEndpoint(endpoint.url)}
                  className={`p-4 rounded-lg text-center transition-colors ${
                    selectedEndpoint === endpoint.url
                      ? 'bg-blue-600 dark:bg-blue-700 text-white'
                      : 'bg-blue-700 dark:bg-blue-800 hover:bg-blue-600 dark:hover:bg-blue-700'
                  }`}
                >
                  {endpoint.name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-blue-800 dark:bg-blue-900 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Contoh Penggunaan API</h3>
            <pre className="bg-black bg-opacity-50 p-4 rounded overflow-x-auto">
              <code className="text-green-400">
                {`fetch('${selectedEndpoint}')
  .then(response => response.json())
  .then(data => console.log(data));`}
              </code>
            </pre>
          </div>
        </section>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-900 text-red-200 p-4 rounded-lg mb-8">
            <p>Error: {error}</p>
          </div>
        )}
      </main>

      <footer className="bg-blue-900 dark:bg-blue-800 text-white py-6 mt-12">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} Al-Matsurat API. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
