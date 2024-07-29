"use client";
import ioAnalytica from "../../../public/ioanalytica.svg";
import alpenkalk from "../../../public/AlpenKalk_Logo_370x185 (1).png";
import nttData from "../../../public/nttlogo.png";
import ecofave from "../../../public/Blattherz-farbig-links-Name-schwarz-rechtsHj4NAqnd9lZPo.svg";
import KellerPartner from "../../../public/kp-monogram_wg.png";
import Biogen from "../../../public/biogen-logo-colour.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { set } from "zod";
import Carousel from "react-multi-carousel";

const customers = [
  ioAnalytica,
  alpenkalk,
  nttData,
  ecofave,
  KellerPartner,
  Biogen,
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 615 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 615, min: 0 },
    items: 1,
  },
};

export const CustomersList = () => {
  const [visible, setVisible] = useState(0);

  return (
    <section className="section mb-10 sm:mb-20">
      <h2 className="text-center mb-10">Unsere Partner</h2>
      <div className="relative h-40">
        <Carousel
          responsive={responsive}
          partialVisible={true}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          renderButtonGroupOutside={true}
          keyBoardControl={true}
          autoPlay={true}
          infinite={true}
          //   customRightArrow={<CustomRightArrow hovered={hovered} />}
          //   customLeftArrow={<CustomLeftArrow hovered={hovered} />}
        >
          {customers.map((customer, index) => (
            <div className="flex justify-center items-center h-full">
              <Image
                unselectable="on"
                key={index}
                src={customer}
                alt={customer.name}
                className={classNames(
                  "h-auto w-auto max-w-44 pointer-events-none select-none"
                )}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
