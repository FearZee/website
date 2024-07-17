import { C2AButton } from "./C2AButton";
import image from "../../../public/Frame 106.png";
import Image from "next/image";
import classNames from "classnames";

export const HeroSection = () => {
  return (
    <section className={classNames("section", "lg:h-screen")}>
      <div className="flex gap-4 flex-col lg:flex-row">
        <div className="mt-24">
          <h1 className="lg:text-8xl sm:text-6xl text-4xl font-extrabold lg:w-[48rem] leading-[115%] uppercase">
            Die All-in-One Plattform für Ihr WACHSTUM
          </h1>
          <p className="max-w-[35rem] leading-normal mt-6">
            Intelligente Lösungen und persönliche Beratung für KMUs. Wir bieten
            nicht nur Informationen und Konzepte, sondern auch maßgeschneiderte
            Handlungsoptionen und Umsetzung.
          </p>
          <C2AButton className="mt-12 lg:w-[25rem] w-full">
            Schedule a Call
          </C2AButton>
        </div>
        <Image
          {...image}
          alt="Hero section iamge"
          className="lg:h-[812px] object-cover xl:absolute w-auto xl:right-[-15rem]"
        />
      </div>
    </section>
  );
};
