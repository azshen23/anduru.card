import Spacer from "../Spacer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CardFront from "./CardFaces/CardFront";
import CardBack from "./CardFaces/CardBack";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-4">
      <div
        className="relative w-full md:w-[700px] h-[600px] md:h-[750px] cursor-pointer transform-gpu"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <AnimatePresence initial={false} mode="wait">
          {!isFlipped ? (
            <motion.div
              key="front"
              className="absolute w-full h-full rounded-xl bg-gray-800 p-4 md:p-6 shadow-lg text-center border border-gray-700"
              initial={{ rotateY: 180 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: 180 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
                type: "tween",
              }}
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <CardFront />
            </motion.div>
          ) : (
            <motion.div
              key="back"
              className="absolute w-full h-full rounded-xl bg-gray-800 p-4 md:p-6 shadow-lg text-center border border-gray-700"
              initial={{ rotateY: -180 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: -180 }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
                type: "tween",
              }}
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <CardBack />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Spacer />
      <p className="text-xs md:text-base">(not made with carrd)</p>
      <p className="text-xs md:text-base">
        (click card for my ive song ranking)
      </p>
    </div>
  );
};

export default Card;
