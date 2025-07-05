import React from "react";
import { motion } from "framer-motion";
import helperBot from "/src/assets/helper1.png"; // replace with your character image
import { Link } from "react-router";

export default function HelperBot() {
  return (
    <Link
        to="/contact">
    <motion.div
        
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: [20, -10, 0], opacity: 1 }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      title="Need help?"
    >
      <div className="relative">
        <img
          src={helperBot}
          alt="Help Assistant"
          className="w-46 h-46 sm:w-40 sm:h-40 rounded-full shadow-lg border-4 border-pink-300 hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute -top-10 -left-4 bg-purple-600 text-white px-3 py-1 text-xs rounded-full shadow-md animate-bounce">
          Need Help?
        </div>
      </div>
    </motion.div>
    </Link>
  );
}
