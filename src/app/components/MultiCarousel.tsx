"use client";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { log } from "console";
import React, { useState } from "react";

interface MultiItemCarouselProps {
  items: { title: string; text: string }[];
  itemsToShow: number;
}

const MultiCarousel = ({ items, itemsToShow }: MultiItemCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < items.length ? prevIndex + 1 : prevIndex
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= 0 ? prevIndex - 1 : 0));
  };

  const isNextDisabled = currentIndex + 1 >= items.length;
  const isPrevDisabled = currentIndex === 0;

  return (
    <div className="flex align-middle justify-center items-end overflow-hidden gap-2">
      <div className="flex align-middle justify-center items-center overflow-hidden gap-2">
        <button
          className="rounded-full bg-indigo-400 hover:bg-indigo-500 p-2 carousel-button text-white disabled:opacity-50 md:relative md:left-0 absolute bottom-[0rem] left-[0%]"
          onClick={prev}
          disabled={isPrevDisabled}
        >
          <IconChevronLeft />
        </button>
        <div className="flex overflow-hidden md:pb-0 pb-12">
          <div
            className="flex transition-all duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${(600 / itemsToShow) * currentIndex}px)`,
            }}
          >
            {items.map((item, index) => (
              <div
                className="rounded-2xl bg-white p-6 flex flex-col gap-4 w-[18rem]"
                key={index}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          className="rounded-full bg-indigo-400 hover:bg-indigo-500 p-2 carousel-button text-white disabled:opacity-50 md:relative md:right-0 absolute bottom-[0rem] right-[0%]"
          onClick={next}
          disabled={isNextDisabled}
        >
          <IconChevronRight />
        </button>
      </div>
    </div>
  );
};

export default MultiCarousel;
