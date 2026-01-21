import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Coffee Street", "Downtown, City 12345"],
  },
  {
    icon: Phone,
    title: "Contact",
    details: ["+1 (234) 567-8900", "hello@zaccocafe.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 7am - 9pm", "Sat-Sun: 8am - 10pm"],
  },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];
 const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 lg:py-32 bg-forest text-cream">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium text-sm tracking-widest uppercase">
              Visit Us
            </span>
            <h2 className="text-3xl lg:text-5xl font-serif mt-4 mb-6">
              Come Experience
              <br />
              <span className="text-gold">The Crafted Taste</span>
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-10 max-w-md">
              We'd love to welcome you to our cozy space. Drop by for your daily
              dose of perfectly crafted coffee and good vibes.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-cream/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cream">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-cream/70 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4 mt-10"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5 text-cream/80" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-forest-light/50 rounded-2xl h-full min-h-[400px] flex items-center justify-center overflow-hidden border border-cream/10">
              {/* Decorative Map Placeholder */}
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-cream/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-gold" />
                </div>
                <p className="text-cream/60 text-lg font-serif">
                  Find us in the heart of Downtown
                </p>
                <p className="text-cream/40 text-sm mt-2">
                  Interactive map coming soon
                </p>
              </div>

              {/* Decorative circles */}
              <div className="absolute top-10 right-10 w-32 h-32 border border-cream/10 rounded-full" />
              <div className="absolute bottom-10 left-10 w-24 h-24 border border-gold/20 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Contact;