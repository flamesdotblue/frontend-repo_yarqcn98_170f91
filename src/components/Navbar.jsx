import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500" />
          <span className="text-lg font-semibold tracking-tight text-gray-900">Vibe Studio</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#showcase" className="hover:text-gray-900 transition-colors">Showcase</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Sign in</button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-black">Get started</button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-4 py-3 space-y-3 text-sm">
            <a href="#features" className="block text-gray-700">Features</a>
            <a href="#showcase" className="block text-gray-700">Showcase</a>
            <a href="#pricing" className="block text-gray-700">Pricing</a>
            <div className="pt-2 flex gap-3">
              <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md">Sign in</button>
              <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md">Get started</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
