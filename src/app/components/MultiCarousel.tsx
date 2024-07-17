"use client";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import classNames from "classnames";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 20, // this is needed to tell the amount of px that should be visible.
  },
};

interface MultiItemCarouselProps {
  items: { title: string; text: string }[];
}

const MultiCarousel = ({ items }: MultiItemCarouselProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="lg:w-[45rem] lg:ml-12"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <Carousel
        responsive={responsive}
        partialVisible={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        renderButtonGroupOutside={true}
        keyBoardControl={true}
        customRightArrow={<CustomRightArrow hovered={hovered} />}
        customLeftArrow={<CustomLeftArrow hovered={hovered} />}
      >
        {items.map((item, index) => (
          <div
            className="rounded-2xl bg-white p-6 flex flex-col gap-4 w-[18rem] h-full select-none"
            key={index}
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const CustomRightArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
    hovered,
  } = rest;
  return (
    <button
      onClick={() => onClick()}
      className={classNames(
        "z-30 absolute right-0 w-10 h-10 flex justify-center items-center rounded-full bg-gray-900 bg-opacity-50 transition-all duration-200",
        {
          "opacity-1": hovered,
          "opacity-0": !hovered,
        }
      )}
    >
      <IconChevronRight color="white" />
    </button>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
    hovered,
  } = rest;
  return (
    <button
      onClick={() => onClick()}
      className={classNames(
        "z-30 absolute left-0 w-10 h-10 flex justify-center items-center rounded-full bg-gray-900 bg-opacity-50 transition-all duration-200",
        {
          "opacity-1": hovered,
          "opacity-0": !hovered,
        }
      )}
    >
      <IconChevronLeft color="white" />
    </button>
  );
};

export default MultiCarousel;
