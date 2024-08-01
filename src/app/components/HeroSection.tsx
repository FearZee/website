'use client'
import { C2AButton } from "./C2AButton";
import image from "../../../public/Frame 106.png";
import imageSmall from "../../../public/Image Small.png";
import Image from "next/image";
import classNames from "classnames";
import { TypeWriter } from "./TypeWriter";
import { useMediaQuery } from "@/hooks/use-media-query";

export const HeroSection = () => {

  const isMobile = useMediaQuery("(min-width: 1536px)");

  return (
    <section className={classNames("section", "lg:h-screen lg:pt-10")}>
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
        {!isMobile ? <Image
          {...imageSmall}
          alt="Hero section image"
          className="lg:h-[812px] object-cover w-auto "
          unoptimized
        />:
        <Image
          {...image}
          alt="Hero section image"
          className="lg:h-[812px] object-cover xl:absolute w-auto xl:right-[-20rem]"
        />}
      </div>
    </section>
  );
};
