import { Fade } from "@chakra-ui/react";
import ctl from "@netlify/classnames-template-literals";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CloseIcon } from "@chakra-ui/icons";
import { projects } from "./data";

const ModalProject = React.memo((props) => {
  const { projectInd, isOpen, setIsOpen } = props;
  const styles = {
    project_viewer: ctl(`
    absolute
    bg-white
    transition-all
    !duration-1000
    h-screen 
    w-screen
    ${isOpen ? "z-[6969]" : ""}
  `),
  };
  return (
    <>
      <Fade className={styles.project_viewer} in={isOpen}>
        <button
          onClick={() => setIsOpen(false)}
          aria-label="close-modal"
          className="absolute text-3xl z-[6969] right-[6%] top-10"
        >
          <CloseIcon />
        </button>
        <Swiper
          {...swiper_variants}
          className={`${
            isOpen && "cursor-grab"
          } lg:w-2/5 sm:w-[70%] h-full flex justify-center`}
        >
          {projects.map((src, i) => (
            <SwiperSlide key={i}>
              <picture>
                <source
                  media="(max-width:645px )"
                  srcSet={projects[projectInd].mobile_imgs[i]}
                />
                <img
                  src={projects[projectInd].pc_imgs[i]}
                  className="w-full h-full"
                  alt={"img" + i}
                />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
      </Fade>
    </>
  );
});

const swiper_variants = {
  centeredSlides: true,
  slidesPerView: 1,
  grabCursor: true,
};
export default ModalProject;
