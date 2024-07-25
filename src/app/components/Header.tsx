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

export const Header = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState(false);

  if (!isDesktop) {
    return (
      <header>
        <Drawer direction="right" open={open} onOpenChange={setOpen}>
          <DrawerTrigger>
            <IconMenu />
          </DrawerTrigger>
          <DrawerContent className="p-2">
            <a
              className="text-3xl mb-4"
              href={"/"}
              onClick={() => setOpen(false)}
            >
              N|A
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
    <header>
      <div className="flex justify-center items-center p-4">
        <Link className="text-3xl  absolute left-4" href={"/"}>
          N|A
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
              <NavigationMenuContent className="list-none bg-[#f2f1f1]">
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
                        Wir wollen Unternehmen in allen Belangen eine Hilfe sein
                        für Ihren Erfolg.
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
          className="lg:w-[10rem] w-full h-10 text-sm align-middle p-0 justify-center items-center flex px-2 absolute right-4"
          href="/contact"
        >
          Anruf vereinbaren
        </C2AButton>
      </div>
    </header>
  );
};
