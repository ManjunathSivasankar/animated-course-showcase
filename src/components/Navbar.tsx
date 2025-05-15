
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-background shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-foreground">
          EduHub
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className="text-foreground font-medium hover:text-accent underline-animation smooth-transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-foreground font-medium hover:text-accent underline-animation smooth-transition"
          >
            About
          </Link>
          <Link
            to="/courses"
            className="text-foreground font-medium hover:text-accent underline-animation smooth-transition"
          >
            Courses
          </Link>
          <Link
            to="/contact"
            className="text-foreground font-medium hover:text-accent underline-animation smooth-transition"
          >
            Contact
          </Link>
          <Button className="bg-gold text-charcoal hover:bg-gold-dark smooth-transition" asChild>
            <Link to="/contact">Enroll Now</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-background shadow-lg lg:hidden animate-smooth-fade-in">
            <nav className="flex flex-col py-4 px-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="py-3 text-foreground font-medium hover:text-accent border-b border-gold/20 smooth-transition"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="py-3 text-foreground font-medium hover:text-accent border-b border-gold/20 smooth-transition"
              >
                About
              </Link>
              <Link
                to="/courses"
                onClick={() => setIsOpen(false)}
                className="py-3 text-foreground font-medium hover:text-accent border-b border-gold/20 smooth-transition"
              >
                Courses
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="py-3 text-foreground font-medium hover:text-accent border-b border-gold/20 smooth-transition"
              >
                Contact
              </Link>
              <Button 
                className="mt-4 bg-gold text-charcoal hover:bg-gold-dark smooth-transition"
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
