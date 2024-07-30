import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const germanKeywords = [
  "Novum Analytica",
  "KI-Produkte",
  "Smart-Data-Lösungen",
  "Szenariofähige KI",
  "C-Level Lösungen",
  "Vorstand Unterstützung",
  "Nachhaltigkeitsstrategien",
  "Ökonomie und KI",
  "ESG-Analyse",
  "C:PAL",
  "Künstliche Intelligenz für Führungsebene",
];

// Englisch
const englishKeywords = [
  "AI Products",
  "Smart Data Solutions",
  "Scenario-capable AI",
  "C-Level Solutions",
  "Board Support",
  "Sustainability Strategies",
  "Economy and AI",
  "ESG Analysis",
  "C:PAL",
  "Artificial Intelligence for Leadership",
];

export const metadata: Metadata = {
  title: "Novum Analytica",
  description:
    "Novum Analytica ist ein umfassendes Ökosystem aus Menschen - akademischen Forschern, Unternehmern, Visionären, Fachleuten, Experten - und einem Technologie-Stack, der über den Stand der Technik hinausgeht. Durch tiefgreifendes Fachwissen in KI-Technologien und in fortschrittlichen analytischen Methoden lösen wir die komplexen Herausforderungen auf, um KMUs und größere Organisationen in die Lage zu versetzen, Spitzenleistungen zu erzielen.",
  keywords: [
    ...germanKeywords,
    ...englishKeywords,
    "Novum Analytica Gmbh",
    "Jörg Dubiel",
    "CPAL",
    "KI für Führungskräfte",
    "Nachhaltigkeitsstrategien",
    "Ökonomie und KI",
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className="scroll-smooth overflow-x-hidden"
      content="width=device-width, initial-scale=1.0"
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
