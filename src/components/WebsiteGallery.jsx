import React, { useRef } from "react";
import autoleadr from "../assets/images/websites/autoleadr.png";
import beauty from "../assets/images/websites/beauty.png";
import das_v2 from "../assets/images/websites/das_v2.png";
import fitness from "../assets/images/websites/fitness.png";
import priorhealth from "../assets/images/websites/priorhealth.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "../App.css";

const slides = [
  { img: autoleadr, alt: "AutoLeadr", link: "https://autoleadr.com" },
  { img: das_v2, alt: "Dylan's Auto Sales v2", link: "https://dylans.rubxsol.com/" },
  { img: beauty, alt: "Beauty Website" },
  { img: fitness, alt: "Fitness Website" },
  { img: priorhealth, alt: "Priority Health Website" },
];

const WebsiteGallery = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="website-gallery">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Navigation]}
        className="gallery-swiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="gallery-slide">
            <img
              src={slide.img}
              alt={slide.alt}
              onClick={() => slide.link && window.open(slide.link, "_blank")}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WebsiteGallery;
