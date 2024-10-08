"use client";
import { useEffect, useState } from "react";

export const TypeWriter = ({ hats }: any) => {
  const [currentHat, setCurrentHat] = useState(0);
  const [collapseClass, setCollapseClass] = useState(" w-0");
  const typeWriterClass =
    "font-bold border-b-2 border-b-indigo-400 border-b-4 pr-1" +
    "animate-cursor overflow-hidden  transition-[width] ease-in-out duration-1000 mr-auto";

  useEffect(() => {
    setTimeout(() => setCollapseClass(" w-full 2xl:w-[95%]"), 100);

    const incrementHat = async () => {
      // Set the width to 0 - transition duration is 1000ms
      setCollapseClass(" w-0");
      setTimeout(() => {
        /**
         * After 1100ms, change the displayed text while the div
         * is collapsed by incrementing the index
         */
        setCurrentHat((oldVal) => {
          let hatIndex;
          if (oldVal >= hats.length - 1) {
            hatIndex = 0;
          } else {
            hatIndex = oldVal + 1;
          }

          return hatIndex;
        });
      }, 1100);
      // After 1000ms, set width to 100% - transition duration is 1000ms
      setTimeout(() => {
        setCollapseClass(" w-full 2xl:w-[95%]");
      }, 1000);
    };
    // Interval timer to change text every 4000ms
    const id = setInterval(incrementHat, 4000);

    // Cleanup interval timer
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`${typeWriterClass}${collapseClass}`}>
      {hats[currentHat]}
    </div>
  );
};
