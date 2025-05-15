
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-black">EduHub</h3>
            <p className="text-gray-600 mb-4">
              Transforming lives through quality education and innovative learning experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-black">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-black transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-black transition duration-300">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-black transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-black">Courses</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-black transition duration-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-black transition duration-300">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-black transition duration-300">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-black">Contact</h4>
            <address className="text-gray-600 not-italic">
              <p className="mb-2">123 Education St.</p>
              <p className="mb-2">Learning City, LC 12345</p>
              <p className="mb-2">Email: info@eduhub.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} EduHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
