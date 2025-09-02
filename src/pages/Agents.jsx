import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { useRef } from "react";

function Agents() {
  const imgref = useRef(null);
  const imgidxref = useRef(null);
  gsap.registerPlugin(ScrollTrigger)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]


useGSAP(() => {
  ScrollTrigger.create({
    trigger: imgref.current,
    start: "top top",
    end: "bottom -100%",
    scrub: 1,
    pin: true,
    pinSpacing:true,
    pinReparent:true,
    pinType:'transform',
    anticipatePin: 1,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      let imgidx;
      if (self.progress < 1) {
        imgidx = Math.floor(self.progress * (imageArray.length - 1));
      } else {
        imgidx = imageArray.length - 1;
      }
      if (imgidxref.current) {
        imgidxref.current.src = imageArray[imgidx];
      }
    },
  });
});



  return (
    <>  
      <div className="lg:font-[font2] section-1 relative py-1">
        <div ref={imgref} className="lg:w-[15vw] w-[30vw] lg:h-[45vh] h-[25vh] overflow-hidden absolute lg:top-[16vh] lg:left-[30vw] left-[20vw] lg:rounded-3xl rounded-xl">
          <img ref={imgidxref}
            className="h-full w-full rounded-3xl object-cover"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
        <div className="relative">
          <h1 className="text-[20vw] uppercase leading-[19vw] text-center lg:mt-[50vh] mt-[37vh]">
            Soixan7e <br />
            Douze
          </h1>
        </div>
        <div className="w-full lg:pl-[45%] mt-10">
          <p className="lg:text-5xl text-xl px-5 lg:leading-none ">
            &nbsp; &nbsp; &nbsp; &nbsp; Notre curiosité nourrit notre
            créativité. On reste humbles et on dit non aux gros egos, même le
            vôtre. Une marque est vivante. Elle a des valeurs, une personnalité,
            une histoire. Si on oublie ça, on peut faire de bons chiffres à
            court terme, mais on la tue à long terme. C’est pour ça qu’on
            s’engage à donner de la perspective, pour bâtir des marques
            influentes.
          </p>
        </div>
        <div className="section2 h-screen">
        </div>
      </div>
    </>
  );
}

export default Agents;
