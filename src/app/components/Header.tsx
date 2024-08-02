"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./NavigationMenu";
import { navigationMenuTriggerStyle } from "@/app/components/NavigationMenu";
import { C2AButton } from "./C2AButton";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "./Drawer";
import { IconMenu } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import classNames from "classnames";
import logo from "../../../public/logo.svg";
import Image from "next/image";

export const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos < prevScrollPos || currentScrollPos <= 40) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, handleScroll]);

  if (!isDesktop) {
    return (
      <header>
        <Drawer direction="right" open={open} onOpenChange={setOpen}>
          <DrawerTrigger className="mt-4">
            <IconMenu />
          </DrawerTrigger>
          <DrawerContent className="p-2">
            <a
              className="text-3xl mb-4"
              href={"/"}
              onClick={() => setOpen(false)}
            >
              <Image src={logo} alt="Logo" />
            </a>
            <a href="/" onClick={() => setOpen(false)}>
              Saas Platform
            </a>
            <div className="px-2 mt-2 flex flex-col gap-4">
              <C2AButton
                className="w-3/4 h-10 text-sm align-middle p-0 justify-center items-center flex mx-2 absolute bottom-4"
                href="/contact"
                onClick={() => setOpen(false)}
              >
                Anruf vereinbaren
              </C2AButton>
            </div>
          </DrawerContent>
        </Drawer>
      </header>
    );
  }

  return (
    <header
      className={classNames(
        "w-full bg-zinc-900/70 text-white fixed top-0 z-10 transition-all duration-200 backdrop-blur-sm",
        { "translate-y-[-2rem]": !isVisible }
      )}
    >
      {isVisible && (
        <div className="flex justify-center items-center p-4">
          <Link className="text-3xl  absolute left-4" href={"/"}>
            <Image src={logo} alt="Logo" className="w-14" />
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="">
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="no-underline font-medium">
                      Saas Platform
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="list-none bg-zinc-800">
                  <NavigationMenuItem className="p-4 w-96">
                    <Link href="#how-does-it-work" legacyBehavior passHref>
                      <NavigationMenuLink className="no-underline font-medium">
                        Wie funktioniert es?
                        <p className="text-xs font-normal">
                          Wie ist der Workflow von der Anfrage bis zum Ergebnis?
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="p-4 w-96 pt-0">
                    <Link href="/#our-mission" legacyBehavior passHref>
                      <NavigationMenuLink className="no-underline font-medium">
                        Das macht uns besonderns
                        <p className="text-xs font-normal">
                          Wir wollen Unternehmen in allen Belangen eine Hilfe
                          sein für Ihren Erfolg.
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="p-4 w-96 pt-0">
                    <Link href="#our-ai" legacyBehavior passHref>
                      <NavigationMenuLink className="no-underline font-medium">
                        Unsere KI
                        <p className="text-xs font-normal">
                          Wir bauen auf Transparenz un übernehmen Verantwortung
                          für unsere KI
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
            </NavigationMenuList>
          </NavigationMenu>
          <C2AButton
            className="lg:w-[10rem] w-full h-10 text-sm align-middle p-0 justify-center items-center flex px-2 absolute right-4 text-black"
            href="/contact"
          >
            Anruf vereinbaren
          </C2AButton>
        </div>
      )}
    </header>
  );
};
