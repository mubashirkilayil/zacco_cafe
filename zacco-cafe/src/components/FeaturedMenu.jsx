import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import menuEspresso from "../assets/menu-espresso.jpg";
import menuIcedLatte from "../assets/menu-iced-latte.jpg";
import menuMatcha from "../assets/menu-matcha.jpg";
import menuCroissant from "../assets/menu-croissant.jpg";

const featuredItems = [
  {
    name: "Classic Espresso",
    price: "$4.50",
    description: "Rich, bold, and perfectly balanced",
    image: menuEspresso,
    category: "Coffee",
  },
  {
    name: "Iced Caramel Latte",
    price: "$6.50",
    description: "Smooth espresso with vanilla and caramel",
    image: menuIcedLatte,
    category: "Cold Drinks",
  },
  {
    name: "Matcha Latte",
    price: "$5.50",
    description: "Premium ceremonial grade matcha",
    image: menuMatcha,
    category: "Specialty",
  },
  {
    name: "Butter Croissant",
    price: "$4.00",
    description: "Flaky, buttery, fresh-baked daily",
    image: menuCroissant,
    category: "Pastries",
  },
];
 const FeaturedMenu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-cream-dark/30">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium text-sm tracking-widest uppercase">
            Popular Picks
          </span>
          <h2 className="text-3xl lg:text-5xl font-serif text-foreground mt-4">
            Featured Menu
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Discover our most loved creations, crafted with passion and the finest ingredients
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-2xl overflow-hidden shadow-elegant menu-card-hover">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-forest/90 text-cream text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-lg text-foreground font-semibold group-hover:text-forest transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-gold font-semibold text-lg">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="default" size="lg" asChild>
            <Link to="/menu" className="group">
              View Full Menu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
export default FeaturedMenu;