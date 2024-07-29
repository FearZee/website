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
    "Novum Analytica GmbH ist Ihr Experte für maßgeschneiderte, szenariofähige KI- und Smart-Data-Produkte. Wir unterstützen Führungsorgane dabei, strategische Erfolgspositionen im gesamten Nachhaltigkeitsspektrum zu sichern. Entdecken Sie C:PAL, unseren Side-Kick für Vorstände, und erhalten Sie Entscheidungsgrundlagen für eine nachhaltige Zukunft.",
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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
