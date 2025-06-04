import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "../App.css";

// ✅ Import actual logo images based on your folder
import DAS_v3 from "../assets/images/logos/DAS_v3.png";
import Logo_Showcase from "../assets/images/logos/Logo_Showcase.png";
import NoBraikes from "../assets/images/logos/NoBraikes.png";
import Ray_Logo from "../assets/images/logos/Ray_Logo.png";
import Untitled_Artwork from "../assets/images/logos/Untitled_Artwork.png";
import Untitled_Artwork_2 from "../assets/images/logos/Untitled_Artwork_2.png";
import victoria_logo from "../assets/images/logos/victoria_logo.png";

const logos = [
  { img: DAS_v3, alt: "DAS_v3" },
  { img: Logo_Showcase, alt: "Logo_Showcase" },
  { img: NoBraikes, alt: "NoBraikes" },
  { img: Ray_Logo, alt: "Ray_Logo" },
  { img: Untitled_Artwork, alt: "Untitled Artwork" },
  { img: Untitled_Artwork_2, alt: "Untitled_Artwork_2" },
  { img: victoria_logo, alt: "victoria_logo" },
];

const LogoGallery = () => {
  return (
    <div className="logo-gallery">
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
        {logos.map((logo, i) => (
          <SwiperSlide key={i} className="gallery-slide">
            <img src={logo.img} alt={logo.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoGallery;
