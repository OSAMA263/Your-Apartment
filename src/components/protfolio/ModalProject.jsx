import { Fade } from "@chakra-ui/react";
import ctl from "@netlify/classnames-template-literals";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ModalProject = React.memo((props) => {
  const { displayedProject, isOpen, setIsOpen } = props;
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
          className="absolute right-0 top-0"
        >
          close
        </button>
        <Swiper className="w-1/3 h-full overflow-visible">
          <SwiperSlide>
            {displayedProject.images && (
              <img
                src={displayedProject.images[0]}
                className="h-full w-full"
                alt=""
              />
            )}
          </SwiperSlide>
          <button className="absolute -left-full top-1/2">prev</button>
          <button className="absolute -right-full top-1/2">next</button>
        </Swiper>
      </Fade>
    </>
  );
});
export default ModalProject;
