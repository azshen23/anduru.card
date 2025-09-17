function CardBack() {
  const IVERanking = [
    "Off The Record",
    "OTT",
    "Love Dive",
    "Supernova Love",
    "Attitude",
    "XOXZ",
    "Next Page",
    "After Like",
    "Rebel Heart",
    "삐빅 (♡beats)",
    "Mine",
    "I AM",
    "Either Way",
    "Lips",
    "Accendio",
    "HEYA",
    "TKO",
    "Payback",
    "Ice Queen",
    "Thank U",
  ];
  return (
    <div className="flex-col w-full items-center text-center">
      <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">
        My IVE Top 20 Ranking
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
    </div>
  );
}

export default CardBack;
