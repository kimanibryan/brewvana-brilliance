import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Clock } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Brewvana" className="h-12 w-auto rounded-lg" />
              <div>
                <span className="font-display text-xl font-bold">Brewvana</span>
                <span className="block text-xs tracking-wider uppercase opacity-70">
                  Barista School
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Transforming coffee lovers into skilled professionals. Join our
              community and master the art of coffee.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Our Courses", "Gallery", "About Us"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Philadelphia House, Hakati Road
                  <br />
                  PR7H+24X, Tom Mboya St
                  <br />
                  Nairobi, Kenya
                </span>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Philadelphia+House,+Tom+Mboya+St,+Nairobi,+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 overflow-hidden rounded-lg border border-white/20 hover:border-accent transition-colors"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819420!2d36.8241!3d-1.2841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22ba12345%3A0x123456789!2sPhiladelphia+House%2C+Tom+Mboya+St%2C+Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                    width="200"
                    height="120"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Brewvana Location"
                    className="pointer-events-none"
                  />
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+254710101791"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  0710 101 791
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:brewvanabaristaschool@gmail.com"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  brewvanabaristaschool@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              Business Hours
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { day: "Monday", hours: "8:00 AM – 6:00 PM" },
                { day: "Tuesday", hours: "8:00 AM – 6:00 PM" },
                { day: "Wednesday", hours: "8:00 AM – 6:00 PM" },
                { day: "Thursday", hours: "8:00 AM – 6:00 PM" },
                { day: "Friday", hours: "8:00 AM – 6:00 PM" },
                { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
                { day: "Sunday", hours: "Closed" },
              ].map(({ day, hours }) => (
                <li key={day} className="flex justify-between gap-2">
                  <span className="text-primary-foreground/70">{day}</span>
                  <span className={`font-medium ${hours === "Closed" ? "text-destructive" : "text-accent"}`}>
                    {hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-16">
          <h4 className="font-display text-lg font-bold mb-4">Newsletter</h4>
          <p className="text-primary-foreground/70 text-sm mb-4">
            Subscribe to get updates on new courses and coffee tips.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors text-sm"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-honey-dark transition-colors text-sm"
            >
              {subscribed ? "Subscribed!" : "Subscribe"}
            </motion.button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Brewvana Barista School. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: Instagram, href: "https://www.instagram.com/brewvanabarista?igsh=MXcwMndpbXB1NDN1OA==" },
              { icon: Facebook, href: "https://www.facebook.com/share/1Qhv5RYnRt/" },
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
