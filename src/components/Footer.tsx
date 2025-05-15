
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/20 pt-12 pb-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">EduHub</h3>
            <p className="text-foreground/70 mb-4">
              Transforming lives through quality education and innovative learning experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-primary transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-foreground/70 hover:text-primary transition duration-300">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-primary transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-foreground">Courses</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-foreground/70 hover:text-primary transition duration-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-foreground/70 hover:text-primary transition duration-300">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-foreground/70 hover:text-primary transition duration-300">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-foreground">Contact</h4>
            <address className="text-foreground/70 not-italic">
              <p className="mb-2">123 Education St.</p>
              <p className="mb-2">Learning City, LC 12345</p>
              <p className="mb-2">Email: info@eduhub.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-foreground/70">
            © {new Date().getFullYear()} EduHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
