import { Fade } from "@chakra-ui/react";
import ctl from "@netlify/classnames-template-literals";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CloseIcon } from "@chakra-ui/icons";

const ModalProject = React.memo((props) => {
  const { displayedProject, isOpen, setIsOpen, smallDevice } = props;

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

  const swiper_variants = {
    centeredSlides: true,
    slidesPerView: 1,
    grabCursor: true,
  };

  return (
    <>
      <Fade className={styles.project_viewer} in={isOpen}>
        <button
          onClick={() => setIsOpen(false)}
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

        </Swiper>
      </Fade>
    </>
  );
});
export default ModalProject;
