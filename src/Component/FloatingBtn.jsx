import React, { useEffect, useState } from "react";
import {
  AiOutlineStar,
  AiOutlinePhone,
  AiOutlineMessage,
  AiOutlineComment,
} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ChatBot from "./ChatBot";
import ReviewModal from "./ReviewModal";

export default function FloatingBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleCloseChat = () => setShowChat(false);
  const handleCloseReview = () => setShowReview(false);

  // Animation variants
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.5, y: 20 },
  };

  // Show scroll-to-top after scrolling some distance
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      setShowScrollTop(scrolled > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Buttons - hidden when chat is open */}
      {!showChat && (
        <div className="fixed right-3 bottom-3 sm:right-5 sm:bottom-5 flex flex-col items-center z-50">
          {/* Action Buttons */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="flex flex-col items-center gap-3 sm:gap-4 mb-3 sm:mb-4"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {
                    transition: { staggerChildren: 0.1, staggerDirection: -1 },
                  },
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
              >
                {/* Review Button */}
                <motion.button
                  variants={buttonVariants}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 15px rgba(251,191,36,0.7)",
                  }}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-lg bg-yellow-400"
                  onClick={() => setShowReview(true)}
                >
                  <AiOutlineStar
                    size={20}
                    className="sm:size-[22px]"
                    color="black"
                  />
                </motion.button>

                {/* Chat Button */}
                <motion.button
                  variants={buttonVariants}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 15px rgba(59,130,246,0.7)",
                  }}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-lg bg-blue-500"
                  onClick={() => {
                    setShowChat(true);
                    setIsOpen(false);
                  }}
                >
                  <AiOutlineMessage
                    size={20}
                    className="sm:size-[22px]"
                    color="white"
                  />
                </motion.button>

                {/* Call Button */}
                <motion.button
                  variants={buttonVariants}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 15px rgba(59,130,246,0.7)",
                  }}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-lg bg-blue-500"
                  onClick={() => (window.location.href = "tel:+917540082155")}
                >
                  <AiOutlinePhone
                    size={20}
                    className="sm:size-[22px]"
                    color="white"
                  />
                </motion.button>

                {/* WhatsApp Button */}
                <motion.button
                  variants={buttonVariants}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 15px rgba(34,197,94,0.7)",
                  }}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-lg bg-green-500"
                  onClick={() =>
                    window.open(
                      "https://wa.me/917540082155?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
                      "_blank"
                    )
                  }
                >
                  <FaWhatsapp
                    size={20}
                    className="sm:size-[22px]"
                    color="white"
                  />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scroll To Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                key="scroll-top"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleScrollToTop}
                aria-label="Back to top"
                className="mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-lg bg-gray-800 text-white"
                title="Back to top"
              >
                ↑
              </motion.button>
            )}
          </AnimatePresence>

          {/* Main Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-xl 
                     bg-gradient-to-tr from-blue-500 to-purple-500 text-white text-xl sm:text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AiOutlineComment size={24} className="sm:size-[26px]" />
          </motion.button>
        </div>
      )}

      {/* Chatbot Popup */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.4 }}
            className="w-[90vw] sm:w-[400px] max-w-[95vw] fixed bottom-20 right-2 sm:right-5 z-50"
          >
            <ChatBot onClose={handleCloseChat} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Review Modal */}
      <AnimatePresence>
        {showReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ReviewModal open={showReview} onClose={handleCloseReview} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
