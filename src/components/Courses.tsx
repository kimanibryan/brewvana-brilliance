import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shirt, TreePine, Award, BookOpen, IdCard, Camera } from "lucide-react";

const features = [
  {
    icon: Shirt,
    title: "Brewvana-Branded Uniform",
    description: "Every student receives an official Brewvana uniform to wear throughout the training.",
  },
  {
    icon: TreePine,
    title: "Coffee Farm Visit",
    description: "Experience the full coffee journey with an immersive visit to a real coffee farm.",
  },
  {
    icon: Award,
    title: "Certification on Completion",
    description: "Earn an industry-recognized certificate to kickstart your professional barista career.",
  },
  {
    icon: BookOpen,
    title: "All Materials Provided",
    description: "Course materials, resources, and hands-on equipment are fully provided at no extra cost.",
  },
];

const entryRequirements = [
  { icon: IdCard, text: "Original ID Photocopy" },
  { icon: Camera, text: "Passport Photo" },
];

const Courses = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="py-24 bg-background">
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
            What We Offer
          </span>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Welcome to Brewvana Barista School.
            <br />
            <span className="text-accent">We offer a Professional Barista Course for 1 month.</span>
          </h2>
          <p className="section-subtitle">
            Master espresso extraction, milk texturing, latte art, and coffee theory.
            Everything you need to launch your barista career — all in one comprehensive course.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isCardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isCardInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="course-card group"
                >
                  <div className="p-6 flex gap-4 items-start">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                      <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Entry Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="course-card p-8 mb-8"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-4 text-center">
              Entry Requirements
            </h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {entryRequirements.map((req) => {
                const Icon = req.icon;
                return (
                  <div key={req.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{req.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <motion.a
              href="mailto:brewvanabaristaschool@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-semibold text-lg hover:opacity-90 transition-opacity duration-300"
            >
              Inquire for Details
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
