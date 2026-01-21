import { Link } from "react-router-dom";
import logo from "../assets/zacco-logo.jpeg";
 const Footer = () => {
  return (
    <footer className="bg-forest-dark py-12 text-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Zacco Cafe"
              className="w-12 h-12 rounded-full object-cover border-2 border-cream/20"
            />
            <div>
              <span className="font-serif text-xl font-semibold block">
                Zacco Cafe
              </span>
              <span className="text-cream/50 text-xs">The Crafted Taste</span>
            </div>
          </Link>

          {/* Links */}
          <nav className="flex gap-8 text-sm">
            <Link
              to="/"
              className="text-cream/70 hover:text-cream transition-colors"
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="text-cream/70 hover:text-cream transition-colors"
            >
              Menu
            </Link>
            <a
              href="/#about"
              className="text-cream/70 hover:text-cream transition-colors"
            >
              About
            </a>
            <a
              href="/#contact"
              className="text-cream/70 hover:text-cream transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-cream/50 text-sm">
            © 2025 Zacco Cafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;