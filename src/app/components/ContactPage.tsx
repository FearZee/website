"use client";

import Image from "next/image";
import image from "../../../public/katarinafedora-20-pdf.png";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./Form";
import { Input } from "./Input";
import { Button } from "./Button";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(6).max(20),
  company: z.string().min(2).max(50),
});

export const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Submitting data", values);

    fetch("/api/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => {
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setOpen(true);
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
      }
    });
  };

  return (
    <section className="section min-h-screen">
      <Dialog open={open} onOpenChange={(c) => setOpen(c)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Wir haben Ihre Kontaktdaten erhalten</DialogTitle>
            <DialogDescription>
              Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen
              melden.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div className="flex lg:flex-row flex-col gap-12 py-24 h-full">
        <div>
          <div className="lg:w-full w-3/4">
            <h2 className="h2">Mit unserem Team kontakt aufnehmen</h2>
            <p>
              Lassen sie uns gemeinsam über Ihre erfolgreiche Zukunft sprechen
            </p>
          </div>
          <div className="flex flex-col gap-8 mt-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Firma</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefon</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Kontakt aufnehmen</Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="lg:h-[50rem] rounded-xl relative lg:order-last order-first">
          <h2 className="lg:absolute lg:p-8 text-3xl font-semibold leading-normal">
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
            className="rounded-xl lg:h-full h-[23rem] object-cover"
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
