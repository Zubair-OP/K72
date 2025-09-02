import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

function Loader(props) {
  const stairparent = useRef(null);
  const appdiv = useRef(null);
  const currentpath = useLocation().pathname;

  useGSAP(() => {
    const t1 = gsap.timeline();

    t1.to(stairparent.current, {
      display: "block",
      delay: -0.2,
    });

    t1.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
      duration: 0.5,
    });

    t1.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
      duration: 0.5,
    });

    t1.to(stairparent.current, {
      display: "none",
    });

    t1.to(".stair", {
      y: "0%",
    });

    gsap.from(appdiv.current, {
      opacity: 0,
      scale: 1.3,
      delay: 1,
    });
  }, [currentpath]);

  return (
    <div>
      <div ref={stairparent} className="fixed top-0 w-full h-screen z-10">
        <div className="w-full h-full flex">
          <div className="stair w-1/5  bg-black h-full"></div>
          <div className="stair w-1/5  bg-black h-full"></div>
          <div className="stair w-1/5  bg-black h-full"></div>
          <div className="stair w-1/5  bg-black h-full"></div>
          <div className="stair w-1/5  bg-black h-full"></div>
        </div>
      </div>
      <div ref={appdiv}>{props.children}</div>
    </div>
  );
}

export default Loader;
