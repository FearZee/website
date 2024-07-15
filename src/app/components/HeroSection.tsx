import { C2AButton } from "./C2AButton";
import image from "../../../public/Frame 106.png";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto relative mt-16 h-screen">
      <div className="flex gap-4">
        <div className="mt-24">
          <h1 className="text-8xl font-extrabold w-[48rem] leading-[115%] uppercase">
            Die All-in-One Plattform für Ihr WACHSTUM
          </h1>
          <p className="max-w-[40rem] leading-normal mt-6">
            Intelligente Lösungen und persönliche Beratung für KMUs. Wir bieten
            nicht nur Informationen und Konzepte, sondern auch maßgeschneiderte
            Handlungsoptionen und Umsetzung.
          </p>
          <C2AButton className="mt-[5rem] w-[25rem]">Schedule a Call</C2AButton>
        </div>
        <Image
          {...image}
          alt="Hero section iamge"
          className="h-[812px] object-cover xl:absolute w-auto xl:right-[-15rem]"
        />
      </div>
    </section>
  );
};
