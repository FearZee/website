"use client";
import { IconStarFilled } from "@tabler/icons-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Example Company",
    title: "Software Engineer",
    text: "Mit der Plattform konnten wir Daten schnell analysieren und fundierte Entscheidungen treffen. Eine benutzerfreundliche Lösung, die unsere Effizienz gesteigert hat.",
    stars: 5,
  },
  {
    id: 2,
    name: "John Doe",
    title: "Software Engineer",
    text: 'Die Plattform hat uns geholfen, unsere betrieblichen Abläufe zu vereinfachen und schneller zu wachsen. Eine flexible und benutzerfreundliche Plattform, die genau auf die Bedürfnisse kleiner und mittlerer Unternehmen zugeschnitten ist."',
    stars: 5,
  },
];

export const TestimonialsSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonials[0]
  );

  return (
    <section className="mt-20">
      <article className="flex flex-col gap-12 justify-center align-middle">
        <div className="flex gap-1 justify-center">
          <IconStarFilled />
          <IconStarFilled />
          <IconStarFilled />
          <IconStarFilled />
          <IconStarFilled />
        </div>
        <p className="text-3xl text-center leading-normal">
          {selectedTestimonial.text}
        </p>
        <div>
          <p className="text-center">{selectedTestimonial.name}</p>
          <p className="text-base text-center">{selectedTestimonial.title}</p>
        </div>
      </article>
      {/* <div className="z-30 flex justify-center space-x-3 rtl:space-x-reverse mt-8">
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-gray-500"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-gray-300"
        ></button>
      </div> */}
    </section>
  );
};
