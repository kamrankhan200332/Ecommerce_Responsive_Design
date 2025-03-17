import React, { useEffect, useState } from "react";
import lineRose from "../../assets/images/lineRose.png";
import SliderSmall from "../../utills/SwiperSmall/SliderSmall";

const DailyDeal = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds === 59) {
          if (minutes === 59) {
            return { hours: hours + 1, minutes: 0, seconds: 0 };
          } else {
            return { hours, minutes: minutes + 1, seconds: 0 };
          }
        } else {
          return { hours, minutes, seconds: seconds + 1 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <div className="space-y-10">
        <div className="flex items-center justify-center flex-col space-y-5">
          <h1 className="font-['Playfair_Display'] text-4xl font-semibold">
            Daily Deal
          </h1>
          <div className="lineRose">
            <img src={lineRose} alt="lineRose" />
          </div>
          <p className="opacity-60">
            Lorem ipsum dolor sit amet adipisicing elit. Illum voluptatibus
            incidunt eveniet quis?
          </p>
          <div className="count flex items-center gap-5">
            <div className="hours flex items-center justify-center flex-col">
              <span className="text-3xl font-bold text-green-500">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <p className="opacity-60">Hours</p>
            </div>
            <div className="text-3xl font-bold text-green-500">:</div>
            <div className="hours flex items-center justify-center flex-col">
              <span className="text-3xl font-bold text-green-500">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <p className="opacity-60">Minutes</p>
            </div>
            <div className="text-3xl font-bold text-green-500">:</div>
            <div className="hours flex items-center justify-center flex-col">
              <span className="text-3xl font-bold text-green-500">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <p className="opacity-60">Seconds</p>
            </div>
          </div>
        </div>
      </div>
      <div className="SmallSlider">
        <SliderSmall />
      </div>
    </div>
  );
};

export default DailyDeal;
