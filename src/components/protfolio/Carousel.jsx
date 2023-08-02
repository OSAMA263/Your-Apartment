import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Carousel() {
  return (
    <>
      <Swiper>
        <SwiperSlide className="h-96">hi</SwiperSlide>
        <SwiperSlide className="h-96">hi</SwiperSlide>
        <SwiperSlide className="h-96">hi</SwiperSlide>
      </Swiper>
    </>
  );
}
