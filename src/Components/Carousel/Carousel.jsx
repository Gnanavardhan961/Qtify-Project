import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

function Carousel({ items, renderItem }) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={"auto"}
      navigation
      breakpoints={{
        320: { slidesPerView: 1.2 },
        640: { slidesPerView: 2.2 },
        1024: { slidesPerView: 4.2 },
        1440: { slidesPerView: 6.2 },
      }}
      className={styles.carousel}
    >
      {items.map((item, idx) => (
        <SwiperSlide key={idx} style={{ width: "auto" }}>
          {renderItem(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
