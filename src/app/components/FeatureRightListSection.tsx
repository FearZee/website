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
    <section className={classNames("section", "flex flex-col lg:flex-row")}>
      <div className="lg:max-w-[44rem]">
        <h2 className="h2">
          Innovative Technologien für Ihr nachhaltiges Wachstum und Ihre
          digitale Transformation
        </h2>
        <p className="lg:max-w-[80%] mt-12">
          Unsere Vision ist es, Unternehmen mit hochmodernen
          Intelligenzdiensten, Technologien und KI-Produkten auszustatten, die
          Komplexitäten vereinfachen und Effizienz steigern. Wir möchten die
          treibende Kraft hinter Ihrem Erfolg in einer sich schnell verändernden
          digitalen Landschaft sein.
        </p>
      </div>
      <div className="flex flex-col lg:gap-6 gap-8 lg:ml-12 mt-12 lg:mt-0 w-fit">
        {featureItems.map((item, index) => (
          <article key={index}>
            <h3 className="text-xl text-indigo-600 font-semibold mb-1">
              {item.title}
            </h3>
            <p className="text-md">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
