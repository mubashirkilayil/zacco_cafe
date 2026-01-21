import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Heart, Award } from "lucide-react";
import cafeInterior from "../assets/cafe-interior.jpg";

const features = [
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description: "Ethically sourced beans from the finest coffee farms worldwide",
  },
  {
    icon: Heart,
    title: "Crafted with Love",
    description: "Every drink is handcrafted by our passionate baristas",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in taste and customer experience",
  },
];

 const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cream-dark/30 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elegant-lg">
              <img
                src={cafeInterior}
                alt="Zacco Cafe Interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 lg:right-8 bg-forest text-cream p-6 rounded-xl shadow-elegant-lg max-w-xs"
            >
              <p className="font-serif text-lg italic">
                "Coffee is not just a drink, it's a moment of pure joy"
              </p>
              <p className="text-cream/70 text-sm mt-2">— Zacco Philosophy</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-gold font-medium text-sm tracking-widest uppercase">
              Our Story
            </span>
            <h2 className="text-3xl lg:text-5xl font-serif text-foreground mt-4 mb-6 leading-tight">
              A Legacy of
              <br />
              <span className="text-forest">Crafted Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Founded with a passion for exceptional coffee, Zacco Cafe has been
              serving the community with handcrafted beverages and warm hospitality
              for over a decade. We believe in the art of slow coffee—taking time
              to perfect every pour, every blend, every moment.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;