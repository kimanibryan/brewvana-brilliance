import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Target, Users, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion First",
    description: "We believe great coffee starts with genuine love for the craft.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We set the highest standards in barista training and education.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a network of skilled professionals who support each other.",
  },
  {
    icon: TrendingUp,
    title: "Future Ready",
    description: "Preparing our graduates for successful careers in the coffee industry.",
  },
];

const About = () => {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
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
            Our Story
          </span>
          <h2 className="section-title">About Brewvana</h2>
        </motion.div>

        {/* Content Grid */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Crafting the Future of
              <span className="text-gradient-honey"> Coffee Excellence</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Brewvana Barista School, we're more than just a training center – 
              we're a community united by our love for exceptional coffee. Our 
              mission is to transform passionate individuals into skilled baristas 
              who can create memorable experiences, one cup at a time.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Founded with the vision of elevating coffee culture, we combine 
              hands-on training with industry expertise to prepare our graduates 
              for successful careers. Whether you dream of working in world-class 
              cafés or opening your own coffee shop, Brewvana is your first step 
              toward that goal.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "500+", label: "Graduates" },
                { value: "15+", label: "Expert Trainers" },
                { value: "98%", label: "Employment Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-card hover:bg-secondary/50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
