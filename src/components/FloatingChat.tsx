import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingChat = () => {
  return (
    <motion.a
      href="mailto:brewvanabaristaschool@gmail.com"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fab-chat"
      aria-label="Chat with us"
    >
      <MessageCircle className="w-7 h-7 text-accent-foreground" />
      
      {/* Ping Animation */}
      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
    </motion.a>
  );
};

export default FloatingChat;
