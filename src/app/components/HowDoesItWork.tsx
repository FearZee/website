import {
  IconBrain,
  IconChartHistogram,
  IconDeviceAnalytics,
  IconRocket,
} from "@tabler/icons-react";
import kickOffImage from "../../../public/startup.png";
import analyseImage from "../../../public/data 1.png";
import aiImage from "../../../public/ai-cloud 1.png";
import dashboardImage from "../../../public/dashboard 1.png";
import { StaticImageData } from "next/image";
import Image from "next/image";

const items = [
  {
    index: 1,
    icon: kickOffImage,
    title: "Kick Off und Zielsetzung",
    description:
      "Zu Beginn des Prozesses legen wir gemeinsam mit Ihnen Ihre Ziele fest. Wir verstehen Ihre Anforderungen und definieren klare Meilensteine für den Erfolg.",
  },
  {
    index: 2,
    icon: analyseImage,
    title: "Datenanalyse und -anreicherung",
    description:
      "Wir analysieren Ihre vorhandenen Daten und reichern sie gegebenenfalls an, um eine umfassende Basis für unsere Analyse und Modellbildung zu schaffen.",
  },
  {
    index: 3,
    icon: aiImage,
    title: "Modellfindung und Training",
    description:
      "Basierend auf den analysierten Daten finden wir das optimale Modell für Ihre spezifischen Anforderungen. Wir trainieren das Modell kontinuierlich, um die besten Ergebnisse zu erzielen.",
  },
  {
    index: 4,
    icon: dashboardImage,
    title: "Datenvisualisierung und Handlungsempfehlungen",
    description:
      "Wir präsentieren Ihnen die Daten in aussagekräftigen Visualisierungen und geben fundierte Handlungsempfehlungen, die auf den Ergebnissen unserer Analyse basieren.",
  },
];

export const HowDoesItWork = () => {
  return (
    <section
      className="color-section mx-2 sm:mx-4 w-auto scroll-my-16 relative bg-indigo-800 rounded-2xl p-4 py-10 text-white"
      id="how-does-it-work"
    >
      <h2 className="h2 md:text-center">Wie funktioniert unsere Plattform</h2>
      <div className="flex flex-wrap items-center xl:w-[1225px] gap-6 mt-12">
        {items.map((item) => (
          <WorkItem key={item.index} {...item} />
        ))}
      </div>
      <p className="lg:w-[48%] mt-8">
        Wir stehen Ihnen jederzeit für Fragen und Anpassungen zur Verfügung.
        Unser Team unterstützt Sie dabei, die Lösung optimal in Ihre
        Unternehmensabläufe zu integrieren und das volle Potenzial Ihrer Daten
        auszuschöpfen.
      </p>
    </section>
  );
};

interface WorkItemProps {
  title: string;
  description: string;
  icon: StaticImageData;
  index: number;
}

const WorkItem = ({ title, description, icon, index }: WorkItemProps) => {
  return (
    <article className="p-6 flex flex-col gap-4 bg-indigo-200 text-black rounded-2xl 2xl:w-[600px] lg:w-[48%]">
      <div className="flex gap-4">
        <div className="rounded-[100%] sm:p-4 p-2 bg-white sm:w-20 sm:h-20 h-10 w-10 sm:text-3xl text-xl flex items-center justify-center">
          {index}
        </div>
        <Image
          {...icon}
          alt={title}
          className="sm:w-20 sm:h-20                                                                      h-12 w-12"
        />
      </div>
      <h3 className="text-[#4F46E5] text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </article>
  );
};
