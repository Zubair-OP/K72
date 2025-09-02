import React from "react";
import { Link } from "react-router-dom";

function Homebottomtext() {
  return (
    <div>
      <div className="font-[font2] flex gap-3 text-white lg:mb-2">
        <p className="absolute lg:w-[25vw] w-50 font-[font1] lg:text-sm text-[9px] lg:right-10 right-20 lg:bottom-[18vh] bottom-25">
          &nbsp; &nbsp; &nbsp; &nbsp; K72 est une agence qui pense chaque action pour nourrir la marque.
          Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
          l’étincelle pour générer de l’émotion. Pour assurer une relation
          honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce
          qui doit être fait.
        </p>
        <Link
          to={"/Projects"}
          className="lg:text-[5.5vw] sm:text-[4vw] hover:border-green-300 lg:border-3 border-2 hover:text-green-300 border-amber-300 lg:px-9 px-6 leading-[6vw] rounded-full"
        >
          PROJECTS
        </Link>
        <Link
          to={"/Agents"}
          className="lg:text-[5.5vw] sm:text-[4vw] hover:border-green-300 hover:text-green-300 lg:border-3 border-2 border-amber-300 lg:px-9 px-6 leading-[6vw] rounded-full"
        >
          AGENCE
        </Link>
      </div>
    </div>
  );
}

export default Homebottomtext;
