"use client";

import Image from "next/image";
import image from "../../../public/katarinafedora-20-pdf.png";
import { C2AButton } from "./C2AButton";
import { ReactEventHandler, useState } from "react";

export const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    let data = {
      name,
      email,
      phone,
      company,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
      }
    });
  };

  return (
    <section className="section h-screen">
      <div className="flex gap-12 py-24 h-full">
        <div className="w-3/4">
          <h2 className="h2">Mit unserem Team kontakt aufnehmen</h2>
          <p>
            Lassen sie uns gemeinsam über Ihre erfolgreiche Zukunft sprechen
          </p>
          <div className="flex flex-col gap-8 mt-8">
            <div className="flex gap-4">
              <Input label="Name" value={name} onChange={setName} />
              <Input label="Firma" value={company} onChange={setCompany} />
            </div>
            <Input label="Email" value={email} onChange={setEmail} />
            <Input label="Telefon" value={phone} onChange={setPhone} />
            <button className="w-full" onClick={handleSubmit}>
              Kontaktieren Sie uns
            </button>
          </div>
        </div>
        <div className="h-full rounded-xl relative">
          <h2 className="absolute p-8 text-3xl font-semibold leading-normal">
            Unsere Trusted AI hilft uns Ihr Potential auszuschöpfen und das
            kontunierlich
          </h2>
          <div className="absolute bottom-0 p-4">
            <p className="font-semibold">R. Bengez</p>
            <p className="">CEO & Mind of AI</p>
          </div>
          <Image
            {...image}
            alt="CEO Image"
            className="rounded-xl h-full object-cover"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
};

interface InputProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="w-full">
      <div className="relative w-full min-w-[200px] h-10">
        <input
          className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
          placeholder=" "
          value={props.value}
          onChange={(e) => props.onChange?.(e.target.value)}
        />
        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
          {label}
        </label>
      </div>
    </div>
  );
};
