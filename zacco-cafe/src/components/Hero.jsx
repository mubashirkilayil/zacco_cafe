import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Coffee } from "lucide-react";
import { Button } from "../components/ui/button";
import heroImage from "../assets/hero-coffee.jpg";
import logo from "../assets/zacco-logo.jpeg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-forest">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Artisan Coffee"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-transparent to-forest/50" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute top-20 right-10 w-96 h-96 bg-cream rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cream/10 backdrop-blur-sm rounded-full border border-cream/20 mb-6"
            >
              <Coffee className="w-4 h-4 text-gold" />
              <span className="text-cream/90 text-sm font-medium">
                The Crafted Taste
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-cream leading-tight mb-6">
              Where Every Sip
              <br />
              <span className="text-gold">Tells a Story</span>
            </h1>

            <p className="text-cream/70 text-lg lg:text-xl max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0">
              Experience the art of coffee making at Zacco. Handcrafted beverages,
              artisan pastries, and a warm atmosphere await you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <Link to="/menu" className="group">
                  Explore Menu
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#about">Our Story</a>
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-cream/20"
            >
              {[
                { value: "10+", label: "Years of Excellence" },
                { value: "50+", label: "Artisan Drinks" },
                { value: "1000+", label: "Happy Customers" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-serif text-gold font-semibold">
                    {stat.value}
                  </div>
                  <div className="text-cream/60 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Logo/Image Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-80 h-80 border-2 border-cream/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 w-72 h-72 border border-gold/30 rounded-full"
              />
              <img
                src={logo}
                alt="Zacco Cafe"
                className="w-64 h-64 rounded-full object-cover border-4 border-cream/30 shadow-glow relative z-10 m-8"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-cream/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
