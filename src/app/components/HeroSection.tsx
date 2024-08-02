"use client";
import { C2AButton } from "./C2AButton";
import image from "../../../public/Frame 106.png";
import imageSmall from "../../../public/Image Small.png";
import Image from "next/image";
import classNames from "classnames";
import { TypeWriter } from "./TypeWriter";
import { useMediaQuery } from "@/hooks/use-media-query";
import bgImage from "../../../public/iStock-1720565768.jpg";
import image40Card from "../../../public/Frame 3.png";
import imageChart from "../../../public/Frame 1.png";

export const HeroSection = () => {
  const isMobile = useMediaQuery("(min-width: 768px)");

  return (
    <section className={classNames("section", "lg:h-screen lg:pt-10 mb-4")}>
      <div className="flex gap-4 flex-col lg:flex-row">
        <div className="mt-24">
          <h1 className="xl:text-8xl md:text-7xl sm:text-6xl sm:w-3/4 text-5xl font-extrabold xl:w-[48rem] md:w-full leading-[115%] uppercase">
            Die All-in-One Plattform, für
            <TypeWriter
              hats={[
                "Kunden-Verhalten",
                "Konkurrenz-Verhalten",
                "Markt-Verhalten",
              ]}
            />
          </h1>
          <p className="max-w-[35rem] leading-normal mt-6">
            Intelligente Lösungen und persönliche Beratung für KMUs. Wir bieten
            nicht nur Informationen und Konzepte, sondern auch maßgeschneiderte
            Handlungsoptionen und Umsetzung.
          </p>
          <C2AButton className="mt-12 lg:w-[25rem] w-full" href="/contact">
            Anruf vereinbaren
          </C2AButton>
        </div>
        {/* {!isMobile ? (
          <Image
            {...imageSmall}
            alt="Hero section image"
            className="lg:h-[812px] object-cover w-auto "
            unoptimized
          />
        ) : ( */}
        <div className="relative h-full">
          <Image
            {...bgImage}
            alt="Hero section image"
            className="lg:h-[812px] w-[600px] lg:w-[600px] object-cover rounded-2xl lg:mx-0 mx-auto"
          />
          <Image
            {...image40Card}
            alt="Hero section image"
            className="absolute lg:right-6 lg:top-[-2rem] bottom-4 right-0 lg:w-auto md:w-[200px] w-[150px]"
          />
          {isMobile && (
            <Image
              {...imageChart}
              alt="Hero section image"
              className="absolute lg:left-[-6rem] left-0 lg:bottom-8 bottom-0 lg:w-auto md:w-[300px] w-[250px]"
            />
          )}
        </div>

        {/* )} */}
      </div>
    </section>
  );
};
