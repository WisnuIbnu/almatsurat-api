// app/page.js
import Header from './components/Header';
import Hero from './components/Hero';
import ApiTester from './components/ApiTester';
import Features from './components/Features';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ApiTester />
            <Features />
        </div>
      </main>
      <Footer />
    </>
  );
}