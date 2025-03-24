import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import img1 from "../../assets/images/storeImages/img41.jpg";
import img2 from "../../assets/images/storeImages/img42.jpg";
import img3 from "../../assets/images/storeImages/img43.jpg";
import img4 from "../../assets/images/storeImages/img44.jpg";
import img5 from "../../assets/images/storeImages/img45.jpg";
import img6 from "../../assets/images/storeImages/img46.jpg";
import img7 from "../../assets/images/storeImages/img47.jpg";
import img8 from "../../assets/images/storeImages/img48.jpg";
import img9 from "../../assets/images/storeImages/img49.jpg";

const Slider = () => {
  return (
    <div>
      <Splide
        options={{
          type: "loop", // Enables infinite scrolling
          perPage: 6, // Shows 6 slides at a time (default)
          perMove: 1, // Moves 1 slide at a time
          autoplay: true, // Enables autoplay
          interval: 2000, // Time between slides (2s)
          pauseOnHover: true, // Pauses on hover
          pauseOnFocus: true, // Pauses on focus
          speed: 1000, // Transition speed (1s)
          arrows: false, // Hides navigation arrows
          pagination: false, // Hides pagination dots
          gap: "20px", // Adds space between slides
          breakpoints: {
            1024: { perPage: 4 }, // Medium screens (4 slides)
            768: { perPage: 2 }, // Small screens (2 slides)
            480: { perPage: 1 }, // Extra small screens (1 slide)
          },
        }}
        aria-label="React Splide Example"
      >
        {[img1, img2, img3, img4, img5, img6, img7, img8, img9].map(
          (image, index) => (
            <SplideSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto"
              />
            </SplideSlide>
          )
        )}
      </Splide>
    </div>
  );
};

export default Slider;
