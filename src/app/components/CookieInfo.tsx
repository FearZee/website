"use client";
import { IconFingerprint } from "@tabler/icons-react";
import { Button } from "./Button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./Drawer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const CookieInfo = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const cookieAccepted = window.localStorage.getItem("cookieAccepted");
    setOpen(cookieAccepted !== "true");
  }, []);

  const handleAcceptCookie = () => {
    localStorage.setItem("cookieAccepted", "true");
    setOpen(false);
  };

  const handleDatenschutz = () => {
    router.push("/datenschutz");
    setOpen(false);
  };

  return (
    <Drawer
      direction="bottom"
      open={open}
      onClose={() => setOpen(false)}
      onOpenChange={(open) => setOpen(open)}
    >
      <DrawerTrigger className="2xl:fixed w-8 text-white 2xl:text-black 2xl:bottom-12 2xl:left-6 2xl:top-auto absolute md:left-24 md:top-[20px] top-4 right-4 z-10">
        <IconFingerprint size={32} />
      </DrawerTrigger>
      <DrawerContent className="w-96 lg:ml-20">
        <DrawerHeader>
          <DrawerTitle>Cookie Informationen</DrawerTitle>
          <DrawerDescription>
            Wir verwenden keine Cookies auf unserer Website.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button onClick={handleAcceptCookie}>Verstanden</Button>
          <Button variant="secondary" onClick={handleDatenschutz}>
            Unsere Datenschutzbestimmung
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
