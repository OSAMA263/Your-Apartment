import React, { useCallback, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import ctl from "@netlify/classnames-template-literals";
import { AnimatePresence, motion } from "framer-motion";
import * as LinkStyled from "../../Global-shit/LinesUnderLink";
import ModalProject from "./ModalProject";
import useToggle from "../../hooks/useToggle";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "@uidotdev/usehooks";
import { projects } from "./data";

const Carousel = ({ setIsReady }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [projectInd, setProjectInd] = useState(0);
  const [isOpen, setIsOpen] = useToggle();
  const onLgScreen = useMediaQuery("(min-width:640px)");
  const swiper_props = {
    allowTouchMove: true,
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    speed: 1200,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      depth: 0,
      stretch: 0,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    // ---------------------
    breakpoints: {
      1536: {
        speed: 2500,
        slidesPerView: 2,
        coverflowEffect: {
          stretch: -450,
          depth: 400,
        },
      },
      1024: {
        speed: 2500,
        slidesPerView: 2,
        coverflowEffect: {
          stretch: -280,
          depth: 400,
        },
      },
      640: {
        speed: 2500,
        slidesPerView: 2,
        allowTouchMove: false,
        coverflowEffect: {
          depth: 400,
        },
      },
    },
    onTransitionStart: (e) => setActiveIndex(e.realIndex),
    modules: [Navigation, EffectCoverflow],
  };
  const modal_handler = (i) => {
    setProjectInd(i);
    setIsOpen(true);
  };
  const images_is_ready = useCallback(() => {
    setTimeout(() => {
      setIsReady(true);
    });
  }, []);
  return (
    <>
      <Swiper {...swiper_props} className={styles.swiper}>
        {/* NAVIGATION BTNS */}
        <Navigate_btns activeIndex={activeIndex} />
        {/* NAVIGAT BTNS ON THE SIDES */}
        {styles.side_navigate_btns.map((btn, i) => (
          <button aria-label={btn.name} key={i} className={btn.clas}></button>
        ))}
        {/* PROJECTS SLIDE */}
        {projects.map(({ mobile_imgs, pc_imgs, place, view }, i) => (
          <SwiperSlide className="flex items-center" key={i}>
            <div className={styles.project_wrapper}>
              <picture className="relative">
                <source srcSet={mobile_imgs[0]} media="(max-width:645px)" />
                <img
                  // i think we put it here + make the images smaller bruv
                  onLoad={images_is_ready}
                  onClick={() => modal_handler(i)}
                  className={styles.centerd_img}
                  alt="img1"
                  src={pc_imgs[0]}
                />
              </picture>
              {onLgScreen && (
                <>
                  <motion.img
                    src={pc_imgs[1]}
                    alt="img2"
                    custom={{ i, activeIndex }}
                    loading="lazy"
                    {...variants.init_animate}
                    variants={onLgScreen && variants.L_img_variant}
                    className={styles.RL_img}
                  />
                  <motion.img
                    src={pc_imgs[2]}
                    alt="img3"
                    custom={{ i, activeIndex }}
                    loading="lazy"
                    {...variants.init_animate}
                    variants={onLgScreen && variants.R_img_variant}
                    className={styles.RL_img}
                  />
                </>
              )}
              {/* ------------PROJECT PLACE View */}
              <div className={styles.project_details_wrapper}>
                <div className="overflow-y-hidden ">
                  <motion.h1
                    {...variants.init_animate}
                    variants={variants.project_details}
                    custom={{ i, activeIndex }}
                  >
                    {place}
                  </motion.h1>
                </div>
                {/* ----------VIEW BTN */}
                <div className="hidden pb-3 overflow-y-hidden text-xl sm:block">
                  <motion.button
                    {...variants.init_animate}
                    variants={variants.project_details}
                    custom={{ i, activeIndex }}
                    onClick={() => modal_handler(i)}
                    disabled={!view}
                    className={view ? LinkStyled.Class : ""}
                  >
                    {view ? "View Project" : "coming soom"}
                    {view && <LinkStyled.Lines />}
                  </motion.button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* VIEW PROJECT MODAL */}
      <ModalProject {...{ projectInd, isOpen, setIsOpen, onLgScreen }} />
    </>
  );
};
const variants = {
  L_img_variant: {
    initial: {
      x: 0,
      y: 0,
    },
    animate: ({ i, activeIndex }) => ({
      x: i === activeIndex ? -100 : 0,
      y: i === activeIndex ? 90 : 0,
      rotate: i === activeIndex ? 4 : 0,
      transition: {
        delay: i === activeIndex ? 2.4 : 0,
        duration: 0.7,
      },
    }),
  },

  R_img_variant: {
    initial: {
      x: 0,
      y: 0,
    },
    animate: ({ i, activeIndex }) => ({
      x: i === activeIndex ? 200 : 0,
      y: i === activeIndex ? -90 : 0,
      rotate: i === activeIndex ? -5 : 0,
      transition: {
        delay: i === activeIndex ? 2.4 : 0,
        duration: 0.7,
      },
    }),
  },
  project_details: {
    initial: {
      y: 160,
      opacity: 0,
    },
    animate: ({ i, activeIndex }) => ({
      y: activeIndex !== i ? 160 : 0,
      opacity: i === activeIndex ? 1 : 0,
      transition: {
        delay: i === activeIndex ? 2.5 : 0,
        duration: 0.7,
      },
    }),
  },
  init_animate: { animate: "animate", initial: "initial" },
};
// -----------------------
const Navigate_btns = ({ activeIndex }) => {
  const CURRENT_INDEX_MOTION = {
    initial: {
      y: -20,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.5,
      },
    },
    exit: {
      y: 20,
      transition: {
        duration: 0.4,
      },
    },
    props: { exit: "exit", initial: "initial", animate: "animate" },
  };

  return (
    <>
      <div className="flex gap-x-5 items-center justify-center my-[4.3rem] lg0">
        <button aria-label="prev" className="prev">
          <ChevronLeftIcon className="text-2xl" />
        </button>
        {/* CURRENT SLIDE  */}
        <div className="overflow-y-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              variants={CURRENT_INDEX_MOTION}
              {...CURRENT_INDEX_MOTION.props}
            >
              {activeIndex !== 9 && 0}
              {activeIndex + 1}
            </motion.p>
          </AnimatePresence>
        </div>
        /<span>10</span>
        <button aria-label="next" className="next">
          <ChevronRightIcon className="text-2xl" />
        </button>
      </div>
    </>
  );
};

const styles = {
  swiper_wrapper: ctl(`
  h-screen
  flex 
  justify-center
  items-center
  `),

  swiper: ctl(`
  h-full
  relative
  overflow-y-visible 
  flex 
  flex-col
  justify-end
  [&>.swiper-wrapper]:!h-[70%]
  [&>.swiper-wrapper]:!my-auto
  `),

  centerd_img: ctl(`
  relative
  cursor-pointer
  w-full
  h-full 
  `),

  RL_img: ctl(`
  brightness-75
  absolute
  w-[70%]
  h-[70%]
  -z-10
  top-0
  `),

  project_details_wrapper: ctl(`
  absolute 
  w-1/2 
  mt-4
  text-center
  left-1/2
  -translate-x-1/2
  md:translate-x-0
  md:space-y-4 
  md:text-start
  md:-translate-y-full 
  md:-left-[80%]
  md:top-1/2
  2xl:text-4xl
  md:text-2xl
  sm:text-lg
  text-[1.2rem]
  `),

  project_wrapper: ctl(`
  relative 
  mt-auto 
  2xl:w-1/2 
  xl:w-[55%] 
  2xl:h-[80%] 
  sm:h-[70%] 
  h-[80%] 
  lg:w-[60%] 
  md:w-[69%]
  max-sm:w-[67%]
  w-[88%]
  mx-auto
  `),
  side_navigate_btns: [
    {
      name: "prev",
      clas: "prev absolute z-50 h-[40%] top-1/2 -translate-y-1/2 align-middle md:w-3 lg:w-[5%] left-0",
    },
    {
      name: "next",
      clas: "next absolute z-50 h-[40%] top-1/2 -translate-y-1/2 align-middle md:w-3 lg:w-[5%] right-0",
    },
  ],
};

export default React.memo(Carousel);
