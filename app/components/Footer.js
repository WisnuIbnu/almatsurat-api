import Link from "next/link";

// app/components/Footer.js
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-nav text-foreground/80 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-foreground">Al-Matsurat API</h3>
            <p className="text-muted-foreground">Bacaan harian dalam genggaman Anda.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="https://wisnuibnu-dev.vercel.app/" className="hover:text-primary transition-colors">Kontak</Link>
          </div>
        </div>
        <div className="border-t border-primary/10 mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>© {currentYear} Al-Matsurat API. Made with ❤️ by  
            <Link href="https://wisnuibnu-dev.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 ml-1">WisnuIbnu.</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}