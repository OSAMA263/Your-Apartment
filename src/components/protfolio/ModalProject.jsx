import { Fade } from "@chakra-ui/react";
import ctl from "@netlify/classnames-template-literals";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CloseIcon } from "@chakra-ui/icons";
import { projects } from "./data";

const ModalProject = React.memo((props) => {
  const swiperRef = useRef();

  const { projectInd, isOpen, setIsOpen, onLgScreen } = props;

  const styles = {
    project_viewer: ctl(`
    absolute
    bg-white
    transition-all
    !duration-1000
    h-full 
    w-full
    ${isOpen ? "z-[6969]" : ""}
  `),
  };
  const handle_close_modal = () => {
    setIsOpen(false);
    swiperRef.current.swiper.slideTo(0);
  };
  return (
    <>
      <Fade className={styles.project_viewer} in={isOpen}>
        <button
          onClick={handle_close_modal}
          aria-label="close-modal"
          className="absolute text-3xl z-[6969] right-[6%] top-10"
        >
          <CloseIcon />
        </button>
        {/* Swiper */}
        <Swiper
          ref={swiperRef}
          {...swiper_variants}
          className="lg:w-2/5 sm:w-[70%] h-full flex justify-center"
        >
          {(onLgScreen
            ? projects[projectInd].pc_imgs
            : projects[projectInd].mobile_imgs
          ).map((src, i) => (
            <SwiperSlide key={i}>
              <picture>
                <source media="(max-width:645px )" srcSet={src} />
                <img src={src} className="w-full h-full" alt={"img" + i} />
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
