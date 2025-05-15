
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-black">
          EduHub
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className="text-black font-medium hover:text-gray-700 underline-animation"
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="text-black font-medium hover:text-gray-700 underline-animation"
          >
            Courses
          </Link>
          <Link
            to="/contact"
            className="text-black font-medium hover:text-gray-700 underline-animation"
          >
            Contact
          </Link>
          <Button className="bg-black text-white hover:bg-gray-800" asChild>
            <Link to="/contact">Enroll Now</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden animate-fade-in">
            <nav className="flex flex-col py-4 px-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="py-3 text-black font-medium hover:text-gray-700 border-b border-gray-100"
              >
                Home
              </Link>
              <Link
                to="/courses"
                onClick={() => setIsOpen(false)}
                className="py-3 text-black font-medium hover:text-gray-700 border-b border-gray-100"
              >
                Courses
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="py-3 text-black font-medium hover:text-gray-700 border-b border-gray-100"
              >
                Contact
              </Link>
              <Button 
                className="mt-4 bg-black text-white hover:bg-gray-800"
                asChild
                onClick={() => setIsOpen(false)}
              >
                <Link to="/contact">Enroll Now</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
