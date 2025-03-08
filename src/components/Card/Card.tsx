import { useState } from "react";
import { motion } from "framer-motion";
import CardFront from "./CardFaces/CardFront";
import CardBack from "./CardFaces/CardBack";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col h-screen w-full items-center justify-start md:justify-center bg-gradient-to-b from-gray-900 to-black text-white px-4 pt-8 md:pt-0">
      <div
        className="relative w-full max-w-[700px] h-[600px] md:h-[750px] cursor-pointer flex items-center justify-center"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          perspective: "1000px",
        }}
      >
        {/* Flipping Container */}
        <motion.div
          className="relative w-full h-full rounded-xl shadow-lg border border-gray-700"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            type: "tween",
          }}
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          {/* Front Face */}
          <div
            className="absolute w-full h-full flex items-center justify-center bg-gray-800 p-4 md:p-6 rounded-xl"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <CardFront />
          </div>

          {/* Back Face */}
          <div
            className="absolute w-full h-full flex items-center justify-center bg-gray-800 p-4 md:p-6 rounded-xl"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)", // Ensures it flips correctly
            }}
          >
            <CardBack />
          </div>
        </motion.div>
      </div>
      <p className="text-xs md:text-base">(not made with carrd)</p>
      <p className="text-xs md:text-base">
        (click card for my ive song ranking)
      </p>
    </div>
  );
};

export default Card;
