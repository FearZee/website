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

export const Header = () => {
  return (
    <header>
      <div className="flex justify-center items-center p-4">
        <h1 className="text-3xl  absolute left-4">N|A</h1>
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
                    </NavigationMenuLink>
                  </Link>
                  <p className="text-xs">
                    Wie ist der Workflow von der Anfrage bis zum Ergebnis?
                  </p>
                </NavigationMenuItem>
                <NavigationMenuItem className="p-4 w-96">
                  <Link href="/#our-mission" legacyBehavior passHref>
                    <NavigationMenuLink className="no-underline font-medium">
                      Das macht uns besonderns
                    </NavigationMenuLink>
                  </Link>
                  <p className="text-xs">
                    Wir wollen Unternehmen in allen Belangen eine Hilfe sein für
                    Ihren Erfolg.
                  </p>
                </NavigationMenuItem>
                <NavigationMenuItem className="p-4 w-96">
                  <Link href="#our-ai" legacyBehavior passHref>
                    <NavigationMenuLink className="no-underline font-medium">
                      Unsere KI
                    </NavigationMenuLink>
                  </Link>
                  <p className="text-xs">
                    Wir bauen auf Transparenz un übernehmen Verantwortung für
                    unsere KI
                  </p>
                </NavigationMenuItem>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
