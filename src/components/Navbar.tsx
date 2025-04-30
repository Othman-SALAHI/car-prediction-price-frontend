
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChartBar, Menu, X } from "lucide-react";

interface NavBarProps {
  onGetStarted: () => void;
  onBack: () => void;
}
const Navbar: React.FC<NavBarProps> = ({ onGetStarted, onBack }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center" onClick={onBack}>
              <ChartBar className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-primary">PriceWhisperer</span>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#prediction-tool" className="text-gray-600 hover:text-primary transition-colors">
              Try It
            </a>
            <Button onClick={() => { onGetStarted(); setIsOpen(false); }} variant="default">Get Started</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a 
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#prediction-tool"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Try It
            </a>
            <div className="px-3 py-2">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
