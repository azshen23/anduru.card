import Spacer from "./Spacer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const IVERanking = [
    "Off The Record",
    "OTT",
    "Love Dive",
    "Next Page",
    "After Like",
    "Supernova Love",
    "Mine",
    "I AM",
    "Either Way",
    "Attitude",
    "Rebel Heart",
    "Lips",
    "Accendio",
    "HEYA",
    "TKO",
    "Payback",
    "Cherish",
    "Ice Queen",
    "Kitsch",
    "Baddie",
  ];
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-4">
      <div
        className="relative w-full md:w-[700px] h-[600px] md:h-[750px] cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ perspective: "1000px" }}
      >
        <AnimatePresence initial={false} mode="wait">
          {!isFlipped ? (
            <motion.div
              key="front"
              className="absolute w-full h-full rounded-xl bg-gray-800 p-4 md:p-6 shadow-lg text-center border border-gray-700"
              initial={{ rotateY: 180 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: 180 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
              }}
            >
              <h1 className="text-lg md:text-2xl font-bold">andrew</h1>
              <p className="text-xs md:text-md text-gray-400">23 `01</p>
              <p className="text-xs md:text-md text-gray-400">🇨🇳🇺🇸</p>
              <p className="text-xs md:text-md text-gray-400">EN/CN/KR/ESP</p>
              <div className="mt-2 md:mt-4">
                <p className="text-xs md:text-base text-gray-300">
                  lf moots ! i will fb ! (most of the time)
                </p>
                <Spacer />
                <p className="text-sm md:text-lg text-gray-300 font-bold underline">
                  interests
                </p>
                <p className="text-xs md:text-base text-gray-300">
                  kpop, overwatch (masters peak - sup main), league (2025 d2
                  peak - sup main), genshin (yoimiya, furina), basketball
                  (lakers)
                </p>
                <Spacer />
                <p className="text-sm md:text-lg text-gray-300 font-bold underline">
                  background
                </p>
                <p className="text-xs md:text-base text-gray-300">
                  got into kpop in 2018 listening to AKMU, Blackpink, and
                  Mamamoo. kind of stopped listening to kpop in 2020 until Love
                  Dive released. That song on gromp changed my life. IVE is like
                  90% of what i listen to
                </p>
                <Spacer />
                <p className="text-sm md:text-lg text-gray-300 font-bold underline">
                  fav kpop / biases
                </p>
                <p className="text-xs md:text-base text-gray-300">
                  <a className="font-semibold">IVE (ult)</a> - Gaeul
                </p>
                <p className="text-xs md:text-base text-gray-300">
                  <a className="font-semibold">ILLIT</a> - Minju
                </p>
                <p className="text-xs md:text-base text-gray-300">
                  <a className="font-semibold">(G)I-DLE</a> - Yuqi
                </p>
                <p className="text-xs md:text-base text-gray-300">
                  <a className="font-semibold">BABYMONSTER</a> - Rami
                </p>
                <p className="text-xs md:text-base text-gray-300">
                  <a className="font-semibold">MAMAMOO</a> - Moonbyul
                </p>
                <p className="text-xs md:text-base text-gray-300 font-semibold">
                  Yena
                </p>
                <p className="text-xs md:text-base text-gray-300 font-semibold">
                  Punch
                </p>
                <Spacer />
                <p className="text-xs md:text-base text-gray-300">
                  <a className="font-semibold">
                    korean music i listen to casually:{" "}
                  </a>
                </p>
                <p className="text-xs md:text-base text-gray-300">
                  aespa, lsfm, blackpink, astro, jannabi, bol4, suzy, gfriend
                </p>
                <Spacer />
                <p className="text-xs md:text-base text-gray-300">
                  <a className="font-semibold">non kpop:</a>
                </p>
                <p className="text-xs md:text-base text-gray-300">
                  NOTD, Porter Robinson, LiSA, any Dance Pop or Pop Rock
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              className="absolute w-full h-full rounded-xl bg-gray-800 p-4 md:p-6 shadow-lg text-center border border-gray-700"
              initial={{ rotateY: -180 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: -180 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
              }}
            >
              <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">
                IVE song top 20 ranking
              </h2>
              <div className="grid grid-cols-1 gap-1.5 md:gap-2 overflow-y-auto max-h-[500px] md:max-h-[600px] px-2 md:px-4">
                {IVERanking.map((song, index) => (
                  <div
                    key={song}
                    className="flex items-center justify-between p-1.5 md:p-2 rounded-lg bg-gray-700"
                  >
                    <span className="text-base md:text-xl font-bold text-gray-400 mr-2 md:mr-4">
                      #{index + 1}
                    </span>
                    <span className="text-xs md:text-lg text-gray-200 flex-grow text-left">
                      {song}
                    </span>
                  </div>
                ))}
              </div>
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
