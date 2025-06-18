import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="bg-blue-900 dark:bg-blue-800 text-white py-4 shadow-lg">
      <div className="container flex justify-between items-center">
        <h1 className="text-2xl font-bold">Al-Matsurat API</h1>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;