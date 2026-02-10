import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Grace Wanjiku",
    role: "Head Barista, Artcaffe",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=150&h=150&fit=crop&crop=face",
    content: "Brewvana transformed my passion for coffee into a rewarding career. The hands-on training and expert instructors gave me the confidence to land my dream job within weeks of graduating.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Ochieng",
    role: "Coffee Shop Owner",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop&crop=face",
    content: "The Advanced Certification course was exactly what I needed to open my own café. From latte art to business management, Brewvana covers it all. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Faith Muthoni",
    role: "Barista, Java House",
    image: "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=150&h=150&fit=crop&crop=face",
    content: "I came with zero experience and left as a skilled barista. The instructors are patient, knowledgeable, and truly passionate about coffee. Best investment I've made!",
    rating: 5,
  },
  {
    id: 4,
    name: "Kevin Kamau",
    role: "Freelance Barista",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=150&h=150&fit=crop&crop=face",
    content: "The latte art course exceeded my expectations. Now I'm creating beautiful designs that wow customers every day. Brewvana's training is world-class!",
    rating: 5,
  },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 relative group hover:shadow-xl transition-shadow duration-300"
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 left-8">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-md">
          <Quote className="w-5 h-5 text-accent-foreground" />
        </div>
      </div>

      {/* Content */}
      <p className="text-muted-foreground leading-relaxed mt-4 mb-6">
        "{testimonial.content}"
      </p>

      {/* Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-accent text-accent"
          />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-border/50">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-accent/30"
        />
        <div>
          <h4 className="font-display font-bold text-foreground">
            {testimonial.name}
          </h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium tracking-wider uppercase mb-4 bg-accent/10 text-accent">
            Success Stories
          </span>
          <h2 className="section-title">What Our Graduates Say</h2>
          <p className="section-subtitle">
            Hear from our alumni who have transformed their passion for coffee
            into successful careers across Kenya and beyond.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Ready to start your coffee journey?
          </p>
          <motion.a
            href="mailto:brewvanabaristaschool@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-espresso-light transition-colors duration-300"
          >
            Join Our Next Class
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
