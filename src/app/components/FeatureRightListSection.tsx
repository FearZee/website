import classNames from "classnames";

const featureItems = [
  {
    title: "Nachhaltiges Wachstum",
    text: "Wir fördern langfristigen Erfolg durch nachhaltiges Wachstum. Unsere Lösungen optimieren Prozesse und identifizieren kontinuierliche Verbesserungsmöglichkeiten.",
  },
  {
    title: "Stärkung von Unternehmen",
    text: "Unsere Lösungen stärken Unternehmen und verbessern ihre Agilität durch technologische Innovationen und strategische Unterstützung.",
  },
  {
    title: "Digitale Transformation",
    text: "Wir unterstützen Unternehmen mit innovativen Technologien auf dem Weg zur digitalen Transformation, um Wettbewerbsfähigkeit zu stärken und neue Märkte zu erschließen.",
  },
  {
    title: "Branchenführende Lösungen",
    text: "Mit wegweisenden Technologien bieten wir die besten Lösungen für zukunftsorientierte Geschäftsentwicklungen.",
  },
];

export const FeatureRightListSection = () => {
  return (
    <section
      className={classNames(
        "section",
        "flex flex-col lg:flex-row scroll-my-16"
      )}
      id="our-mission"
    >
      <div className="lg:max-w-[44rem]">
        <h2 className="h2">
          Innovative Technologien für Ihr nachhaltiges Wachstum und Ihre
          digitale Transformation
        </h2>
        <p className="lg:max-w-[80%] lg:mt-12 md:mt-4 mt-8 mb-8 md:mb-0">
          Unsere Vision ist es, Unternehmen mit hochmodernen
          Intelligenzdiensten, Technologien und KI-Produkten auszustatten, die
          Komplexitäten vereinfachen und Effizienz steigern. Wir möchten die
          treibende Kraft hinter Ihrem Erfolg in einer sich schnell verändernden
          digitalen Landschaft sein.
        </p>
      </div>
      <div className="flex flex-col lg:gap-6 md:gap-8 gap-12 lg:ml-12 sm:mt-12 mt-8 lg:mt-0 w-fit">
        {featureItems.map((item, index) => (
          <article key={index}>
            <h3 className="text-xl text-indigo-600 font-semibold mb-1">
              {item.title}
            </h3>
            <p className="text-md lg:w-full w-4/5">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
