import { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import ctl from "@netlify/classnames-template-literals";
import { motion } from "framer-motion";
import LinkUnderLine from "../../Global-shit/LinkUnderLine";

export default function Carousel() {
  const [index, setIndex] = useState(null);

  const projects = [
    {
      place: "",
      view: true,
      image: [
        "swiper/Chelsea-Apartment-1_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/Chelsea-Apartment-3_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/Chelsea-Apartment-2_dbf8d6a38dd21a4600d81f78eddca413.jpg",
      ],
    },
    {
      place: "",
      view: true,
      image: [
        "swiper/zhOuTbHQ_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/zhOuTbHQ_dbf8d6a38dd21a4600d81f78eddca413j.jpg",
        "swiper/zhOuTbHQ_dbf8d6a38dd21a4600d81f78eddca413d.jpg",
      ],
    },

    {
      place: "",
      view: true,
      image: [
        "swiper/NY_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/NY.3_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/NY.5_dbf8d6a38dd21a4600d81f78eddca413.jpg",
      ],
    },
    {
      place: "",
      view: true,
      image: [
        "swiper/Marine-3_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/Marine-2_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/Marine-1_dbf8d6a38dd21a4600d81f78eddca413.jpg",
      ],
    },
    {
      place: "",
      view: true,
      image: [
        "swiper/London-Townhouse-1_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/London-Townhouse-3_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/London-Townhouse-2_dbf8d6a38dd21a4600d81f78eddca413.jpg",
      ],
    },

    {
      place: "",
      view: true,
      image: [
        "swiper/Bryanston-Square12106_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/Bryanston-Square12106_dbf8d6a38dd21a4600d81f78eddca4134.jpg",
        "swiper/Bryanston-Square12106_dbf8d6a38dd21a4600d81f78eddca4131.jpg",
      ],
    },
    {
      place: "",
      view: true,
      image: [
        "swiper/51A6412_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/51A5998flat_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/51A6161_dbf8d6a38dd21a4600d81f78eddca413.jpg",
      ],
    },
    {
      place: "",
      view: true,
      image: [
        "swiper/Guest-Bath_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/Bathroom_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/Bedroom_dbf8d6a38dd21a4600d81f78eddca413.jpg",
      ],
    },
    {
      place: "z",
      view: true,
      image: [
        "swiper/2-Mato-6106_dbf8d6a38dd21a4600d81f78eddca413.jpg",
        "swiper/2-Mato-6177_dbf8d6a38dd21a4600d81f78eddca413as.jpg",
        "swiper/2-Mato-6177_dbf8d6a38dd21a4600d81f78eddca413.jpg",
      ],
    },
    {
      place: "z",
      view: false,
      image: [
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
      stretch: -450,
      depth: 400,
      slideShadows: false,
    },
    navigation: {
      nextEl: "#next",
      prevEl: "#prev",
    },
    onTransitionStart: (e) => setIndex(e.realIndex),
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
      init: {
        x: 0,
        y: 0,
      },
      animate: (i) => ({
        x: i === index ? -100 : 0,
        y: i === index ? 90 : 0,
        rotate: i === index ? 4 : 0,
        transition: {
          delay: i === index ? 2.4 : 0,
          duration: 0.7,
        },
      }),
    },

    R_img_variant: {
      init: {
        x: 0,
        y: 0,
      },
      animate: (i) => ({
        x: i === index ? 200 : 0,
        y: i === index ? -90 : 0,
        rotate: i === index ? -5 : 0,
        transition: {
          delay: i === index ? 2.4 : 0,
          duration: 0.7,
        },
      }),
    },
  };

  return (
    <>
      <div className={styles.swiper_wrapper}>
        <Swiper {...swiper_props} className={styles.swiper}>
          {/* NAVIGATION BTNS */}
          <Navigate_btns />
          {/* PROJECTS SLIDE */}
          {projects.map(({ image, place, view }, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-1/2 h-full mx-auto">
                <img className={styles.centerd_img} src={image[0]} />
                <motion.img
                  custom={i}
                  initial="init"
                  animate="animate"
                  variants={variants.L_img_variant}
                  className={styles.RL_img}
                  src={image[1]}
                />
                <motion.img
                  custom={i}
                  initial="init"
                  animate="animate"
                  variants={variants.R_img_variant}
                  className={styles.RL_img}
                  src={image[2]}
                />
                {/* PROJECT PLACE */}
                <div className="absolute -translate-y-full -left-80 top-1/2">
                  <h1>{place}</h1>
                  {view ? (
                    <button className="  relative w-fit [&>span]:hover:left-0 [&>span]:hover:w-full">
                      View Project <LinkUnderLine />
                    </button>
                  ) : (
                    <p>coming soom</p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

const Navigate_btns = () => {
  const navigate_btns = [
    {
      id: "prev",
      clas: "absolute z-50 h-[65vh] align-middle px-12 left-0",
    },
    {
      id: "next",
      clas: "absolute z-50 h-[65vh] align-middle px-12 right-0",
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
