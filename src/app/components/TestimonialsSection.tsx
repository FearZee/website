"use client";
import { IconStarFilled } from "@tabler/icons-react";
import { useState } from "react";
import Logo from "../../../public/biogen-logo-colour.svg";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "",
    title: "",
    text: "Es war, als hätten wir einen erfahrenen Mitgründer an unserer Seite zu haben. Mit dem einzigartigen Mensch-Maschine Ansatz halfen sie uns, Ideen zu entwickeln und den Arbeitsablauf zu verbessern. Dank der integrierten KI-basierten Lösung haben wir den Aufwand um fast 30% reduzieren.",
    stars: 5,
  },
];

export const TestimonialsSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonials[0]
  );

  return (
    <section className="section">
      <article className="flex flex-col gap-12 justify-center align-middle">
        <div className="flex gap-1 justify-center">
          <IconStarFilled />
          <IconStarFilled />
          <IconStarFilled />
          <IconStarFilled />
          <IconStarFilled />
        </div>
        <p className="sm:text-3xl text-2xl text-center sm:leading-normal leading-normal">
          {selectedTestimonial.text}
        </p>
        <div className="flex flex-col justify-center items-center">
          <Image src={Logo} alt="Biogen Logo" />
          <p className="text-center">{selectedTestimonial.name}</p>
          <p className="text-base text-center">{selectedTestimonial.title}</p>
        </div>
      </article>
    </section>
  );
};
