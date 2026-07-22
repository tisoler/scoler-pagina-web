import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import LogoMark from './LogoMark';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or document class list
    const isDarkClass = document.documentElement.classList.contains('dark');
    setIsDark(isDarkClass);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Plataforma Astre', href: '#plataforma' },
    { name: 'Calculadora', href: '#calculadora' },
    { name: 'Cómo Funciona', href: '#como-funciona' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-3 group">
              <LogoMark className="h-8 w-auto shrink-0 text-primary dark:text-white transition-colors mb-2" />
              <span className="text-2xl font-black bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent transition-all group-hover:opacity-90">
                Scoler Servicios
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground bg-primary rounded-full animate-pulse">
                Landing
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTAs and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 cursor-pointer"
              title="Cambiar Tema"
            >
              {isDark ? <Sun className="size-5 text-amber-500" /> : <Moon className="size-5 text-indigo-600" />}
            </button>
            <a
              href="http://localhost:5174/login" // Link to main app port
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200"
            >
              Acceso Clientes
            </a>
            <a
              href="#contacto"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 shadow-md shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="size-4" />
              Solicitar Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 cursor-pointer"
            >
              {isDark ? <Sun className="size-5 text-amber-500" /> : <Moon className="size-5 text-indigo-600" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 cursor-pointer"
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 pt-2 pb-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="border-t border-border pt-4 mt-4 space-y-3">
            <a
              href="http://localhost:5174/login"
              className="block text-center px-4 py-3 rounded-xl text-base font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            >
              Acceso Clientes
            </a>
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="block text-center px-4 py-3 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all"
            >
              Solicitar Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
