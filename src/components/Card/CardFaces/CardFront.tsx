import Spacer from "../../Spacer";

function CardFront() {
  return (
    <div className="w-full text-center">
      <h1 className="text-lg md:text-2xl font-bold">andrew</h1>
      <p className="text-xs md:text-lg text-gray-400">24 `01</p>
      <p className="text-xs md:text-lg text-gray-400">chinese american</p>
      <p className="text-xs md:text-lg text-gray-400">EN/CN/KR/ESP</p>
      <div className="mt-2 md:mt-4">
        <p className="text-sm md:text-lg text-gray-300 font-bold underline">
          background
        </p>
        <p className="text-xs md:text-base text-gray-300">
          got into kpop in 2018 listening to AKMU, Blackpink, and Mamamoo. kind
          of stopped listening to kpop in 2020 until Love Dive released - IVE became like 90% of what i listen to
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
          <a className="font-semibold">I-DLE</a> - Yuqi
        </p>
        <p className="text-xs md:text-base text-gray-300">
          <a className="font-semibold">BABYMONSTER</a> - Rami
        </p>
        <p className="text-xs md:text-base text-gray-300">
          <a className="font-semibold">MAMAMOO</a> - Moonbyul
        </p>
        <p className="text-xs md:text-base text-gray-300 font-semibold">Yena</p>
        <p className="text-xs md:text-base text-gray-300 font-semibold">
          Punch
        </p>
        <Spacer />
        <p className="text-xs md:text-base text-gray-300">
          <a className="font-semibold">korean music i listen to casually: </a>
        </p>
        <p className="text-xs md:text-base text-gray-300">
          aespa, lsfm, blackpink, astro, jannabi, bol4, suzy, gfriend, most gen 3-5
        </p>
        <Spacer />
        <p className="text-xs md:text-base text-gray-300">
          <a className="font-semibold">non kpop:</a>
        </p>
        <p className="text-xs md:text-base text-gray-300">
          NOTD, Porter Robinson, LiSA, any Dance Pop or Pop Rock
        </p>
        <Spacer />
      </div>
    </div>
  );
}

export default CardFront;
