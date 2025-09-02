import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      {/* First Project Card */}
      <div className="w-full lg:w-1/2 group transition-all relative rounded-none hover:rounded-[20px] sm:hover:rounded-[30px] lg:hover:rounded-[70px] overflow-hidden h-full mb-2 lg:mb-0">
        <img 
          className="h-full w-full object-cover" 
          src={props.image1} 
          alt="" 
        />
        <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15">
          <div className="text-center">
            <h2 className="uppercase text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-[font1] border-2 sm:border-3 lg:border-4 pt-2 sm:pt-3 lg:pt-4 px-4 sm:px-6 lg:px-8 text-white border-white rounded-full">
              Vior le projet
            </h2>
          </div>
        </div>
      </div>

      {/* Second Project Card */}
      <div className="w-full lg:w-1/2 group transition-all relative rounded-none hover:rounded-[20px] sm:hover:rounded-[30px] lg:hover:rounded-[70px] overflow-hidden h-full">
        <img 
          className="h-full w-full object-cover" 
          src={props.image2} 
          alt="" 
        />
        <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15">
          <div className="text-center">
            <h2 className="uppercase text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-[font1] border-2 sm:border-3 lg:border-4 pt-2 sm:pt-3 lg:pt-4 px-4 sm:px-6 lg:px-8 text-white border-white rounded-full">
              Vior le projet
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;