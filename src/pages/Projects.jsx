import React from "react";
import ProjectCard from "../components/projects/ProjectsCard";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
  

function Projects() {

  const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  },{
     image1:'https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg',
    image2:'https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg'
  }
   
]

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{

    gsap.from('.hero',{
      height:'100px',
      stagger:{
        amount:0.4
      },
      scrollTrigger:{
        trigger:'.hero',
        markers:true,
        start:'top 100%',
        end: 'top -210%',
        scrub:true
      }
    })
  })
  return (
     <div className='lg:p-4 p-2 mb-[50vh]'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projets</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[400px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects;
