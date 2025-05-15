
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-offwhite border-t border-gold/20 pt-12 pb-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">EduHub</h3>
            <p className="text-offwhite/70 mb-4">
              Transforming lives through quality education and innovative learning experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-offwhite/70 hover:text-gold transition-colors smooth-transition">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-offwhite/70 hover:text-gold transition-colors smooth-transition">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-offwhite/70 hover:text-gold transition-colors smooth-transition">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-offwhite/70 hover:text-gold transition-colors smooth-transition">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-offwhite/70 hover:text-gold transition-colors smooth-transition">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-offwhite/70 hover:text-gold transition duration-300 smooth-transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-offwhite/70 hover:text-gold transition duration-300 smooth-transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-offwhite/70 hover:text-gold transition duration-300 smooth-transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-offwhite/70 hover:text-gold transition duration-300 smooth-transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-gold">Courses</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-offwhite/70 hover:text-gold transition duration-300 smooth-transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-offwhite/70 hover:text-gold transition duration-300 smooth-transition">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-offwhite/70 hover:text-gold transition duration-300 smooth-transition">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-gold">Contact</h4>
            <address className="text-offwhite/70 not-italic">
              <p className="mb-2">123 Education St.</p>
              <p className="mb-2">Learning City, LC 12345</p>
              <p className="mb-2">Email: info@eduhub.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gold/20 pt-8 text-center">
          <p className="text-offwhite/70">
            © {new Date().getFullYear()} EduHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
