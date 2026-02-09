import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Coffee, Award, Home, Sparkles } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Professional Barista Training",
    description:
      "Master espresso extraction, milk texturing, and coffee theory. Perfect for those starting their barista career.",
    price: "KSh 25,000",
    duration: "4 Weeks",
    icon: Coffee,
    featured: true,
  },
  {
    id: 2,
    title: "Latte Art Mastery",
    description:
      "From hearts to rosettas to advanced free-pour designs. Elevate your presentation skills to impress every customer.",
    price: "KSh 15,000",
    duration: "2 Weeks",
    icon: Sparkles,
    featured: false,
  },
  {
    id: 3,
    title: "Home Brewing Excellence",
    description:
      "Explore pour-over, French press, Aeropress and more. Brew café-quality coffee in the comfort of your home.",
    price: "KSh 12,000",
    duration: "1 Week",
    icon: Home,
    featured: false,
  },
  {
    id: 4,
    title: "Advanced Certification",
    description:
      "Industry-recognized certification covering advanced techniques, coffee origins, and business management.",
    price: "KSh 45,000",
    duration: "4 Weeks",
    icon: Award,
    featured: false,
  },
];

const CourseCard = ({
  course,
  index,
}: {
  course: (typeof courses)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = course.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`course-card group ${course.featured ? "md:col-span-2" : ""}`}
    >
      <div className="p-8 h-full flex flex-col">
        {/* Icon & Badge */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
            <Icon
              className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-500"
            />
          </div>
          {course.featured && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground">
              Most Popular
            </span>
          )}
        </div>

        {/* Content */}
        <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
          {course.title}
        </h3>
        <p className="text-muted-foreground mb-6 flex-grow">
          {course.description}
        </p>

        {/* Footer */}
        <div className="flex items-end justify-between pt-4 border-t border-border/50">
          <div>
            <span className="text-2xl font-bold text-foreground">
              {course.price}
            </span>
            <span className="block text-sm text-muted-foreground">
              {course.duration}
            </span>
          </div>
          <motion.a
            href="mailto:brewvanabaristaschool@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-espresso-light transition-colors duration-300"
          >
            Enroll Now
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Courses = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

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
          <h2 className="section-title">Our Courses</h2>
          <p className="section-subtitle">
            From beginner to professional, find the perfect course to elevate
            your coffee skills and launch your barista career.
          </p>
        </motion.div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
