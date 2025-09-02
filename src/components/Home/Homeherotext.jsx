import React from "react";
import Video from "./Video";

function Homeherotext() {
  return (
    <div className="font-[font2] pt-3 text-white flex flex-col justify-center items-center h-screen sm:justify-start ">
      <div className="text-[9vw] leading-[8vw] sm:top-50 text-center uppercase">
        L'étincelle
      </div>
      <div className="text-[9vw] flex items-center justify-center  leading-[8vw] uppercase">
        qui
        <div className="h-[7vw] w-[16vw] -mt-3 rounded-full border-1 border-white overflow-hidden">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9vw] leading-[8vw] text-center uppercase">
        la créativité
      </div>
    </div>
  );
}

export default Homeherotext;
