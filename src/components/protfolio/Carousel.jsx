import React, { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import ctl from "@netlify/classnames-template-literals";
import { motion } from "framer-motion";
import * as LinkStyled from "../../Global-shit/LinesUnderLink";
import ModalProject from "./ModalProject";
import useToggle from "../../hooks/useToggle";

const Carousel = React.memo(() => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [displayedProject, setDisplayedProject] = useState({});
  const [isOpen, setIsOpen] = useToggle();

  const projects = [
    {
      place: "Chelsea Apartment",
      view: true,
      images: [
        "swiper/Chelsea-Apartment-1_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/Chelsea-Apartment-3_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/Chelsea-Apartment-2_dbf8d6a38dd21a4600d81f78eddca413.jpg",
      ],
    },
    {
      place: "London Townhouse",
      view: true,
      images: [
        "swiper/zhOuTbHQ_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/zhOuTbHQ_dbf8d6a38dd21a4600d81f78eddca413j.jpg",
        "swiper/zhOuTbHQ_dbf8d6a38dd21a4600d81f78eddca413d.jpg",
      ],
    },

    {
      place: "Soho Loft, New York",
      view: true,
      images: [
        "swiper/NY_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/NY.3_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/NY.5_dbf8d6a38dd21a4600d81f78eddca413.jpg",
      ],
    },
    {
      place: "Marine",
      view: true,
      images: [
        "swiper/Marine-3_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/Marine-2_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/Marine-1_dbf8d6a38dd21a4600d81f78eddca413.jpg",
      ],
    },
    {
      place: "London Townhouse",
      view: true,
      images: [
        "swiper/London-Townhouse-1_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/London-Townhouse-3_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/London-Townhouse-2_dbf8d6a38dd21a4600d81f78eddca413.jpg",
      ],
    },

    {
      place: "The Blonde Hedgehog",
      view: true,
      images: [
        "swiper/Bryanston-Square12106_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/Bryanston-Square12106_dbf8d6a38dd21a4600d81f78eddca4134.jpg",
        "swiper/Bryanston-Square12106_dbf8d6a38dd21a4600d81f78eddca4131.jpg",
      ],
    },
    {
      place: "Dubai",
      view: true,
      images: [
        "swiper/51A6412_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/51A5998flat_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/51A6161_dbf8d6a38dd21a4600d81f78eddca413.jpg",
      ],
    },
    {
      place: "Notting Hill Family Home",
      view: true,
      images: [
        "swiper/Guest-Bath_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/Bathroom_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/Bedroom_dbf8d6a38dd21a4600d81f78eddca413.jpg",
      ],
    },
    {
      place: "Aviation",
      view: true,
      images: [
        "swiper/2-Mato-6106_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/2-Mato-6177_dbf8d6a38dd21a4600d81f78eddca413as.jpg",
        "swiper/2-Mato-6177_dbf8d6a38dd21a4600d81f78eddca413.jpg",
      ],
    },
    {
      place: "Soho Penthouse, New York",
      view: false,
      images: [
        "swiper/Soho-Loft-Apartment-New-York-1_41e3d52726a6919d0b92ccd3a3c821d5.jpg",
        "swiper/Soho-Loft-Apartment-New-York-2_41e3d52726a6919d0b92ccd3a3c821d5.jpg",
        "swiper/Soho-Loft-Apartment-New-York-3_41e3d52726a6919d0b92ccd3a3c821d5.jpg",
      ],
    },
  ];

  const swiper_props = {
    allowTouchMove: false,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    speed: 2500,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: -500,
      depth: 400,
      slideShadows: false,
    },
    navigation: {
      nextEl: "#next",
      prevEl: "#prev",
    },
    onTransitionStart: (e) => setActiveIndex(e.realIndex),
    modules: [Navigation, EffectCoverflow],
  };

  const styles = {
    swiper_wrapper: ctl(`
    h-screen
    flex 
    justify-center
    items-center
    `),

    swiper: ctl(`
    mt-auto 
    overflow-y-visible 
    flex 
    flex-col
    `),

    centerd_img: ctl(`
    relative
    cursor-pointer
    w-full
    h-[650px]
    `),

    RL_img: ctl(`
    absolute
    w-[80%]
    h-[80%]
    -z-10
    top-0
    `),
  };

  const variants = {
    L_img_variant: {
      initial: {
        x: 0,
        y: 0,
      },
      animate: (i) => ({
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
      animate: (i) => ({
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
        y: 0,
        x: 0,
      },
      // animate: {
      //   x:,
      //   y:,
      //   transition: {},
      // },
    },
    init_animate: { animate: "animate", initial: "initial" },
  };

  const modal_handler = (i) => {
    setDisplayedProject(projects[i]);
    setIsOpen(true);
  };

  return (
    <>
      <Swiper {...swiper_props} className={styles.swiper}>
        {/* NAVIGATION BTNS */}
        <Navigate_btns />
        {/* PROJECTS SLIDE */}
        {projects.map(({ images, place, view }, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-1/2 h-full mx-auto">
              <img
                onClick={() => modal_handler(i)}
                className={styles.centerd_img}
                src={images[0]}
              />
              <motion.img
                custom={i}
                {...variants.init_animate}
                variants={variants.L_img_variant}
                className={styles.RL_img}
                src={images[1]}
              />
              <motion.img
                custom={i}
                {...variants.init_animate}
                variants={variants.R_img_variant}
                className={styles.RL_img}
                src={images[2]}
              />
              {/* ------------PROJECT PLACE View */}
              <div className="absolute -translate-y-full -left-80 top-1/2">
                <motion.h1
                  {...variants.init_animate}
                  variants={variants.project_details}
                  custom={i}
                >
                  {place}
                </motion.h1>
                {/* ----------VIEW BTN */}
                <motion.button
                  {...variants.init_animate}
                  variants={variants.project_details}
                  custom={i}
                  onClick={() => modal_handler(i)}
                  disabled={!view}
                  className={view && LinkStyled.Class}
                >
                  {view ? "View Project" : "coming soom"}
                  {view && <LinkStyled.Lines />}
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* VIEW PROJECT MODAL */}
      <ModalProject {...{ displayedProject, isOpen, setIsOpen }} />
    </>
  );
}, []);

const Navigate_btns = () => {
  const navigate_btns = [
    {
      id: "prev",
      clas: "absolute z-50 h-[65vh] align-middle px-14 left-0",
    },
    {
      id: "next",
      clas: "absolute z-50 h-[65vh] align-middle px-14 right-0",
    },
  ];

  return (
    <>
      <div className="flex justify-center my-20">
        <button id="prev">prev</button>
        <button id="next">next</button>
      </div>
      {/*  */}
      {navigate_btns.map((btn, i) => (
        <button key={i} className={btn.clas} id={btn.id}></button>
      ))}
    </>
  );
};
export default Carousel;
