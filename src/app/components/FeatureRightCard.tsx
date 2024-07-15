import MultiCarousel from "./MultiCarousel";

const featureItems = [
  {
    id: 0,
    title: "Transparenz",
    text: "Vollständige Einsicht in die Funktionsweise unserer KI-Systeme und die Daten, die für ihre Entwicklung und Nutzung verwendet werden.",
  },
  {
    id: 1,
    title: "Rechtlich",
    text: "Wir übernehmen die Verantwortung für jede Entscheidung, die unsere KI-Systeme treffen.",
  },
  {
    id: 2,
    title: "Fairness",
    text: "Fairness ist für uns nicht verhandelbar. Wir stellen sicher, dass unsere KI-Systeme unvoreingenommen arbeiten und keine Diskriminierung unterstützen.",
  },
  {
    id: 3,
    title: "Sicherheit",
    text: "Ihre Sicherheit ist unser oberstes Anliegen. Wir setzen fortschrittliche Sicherheitsmaßnahmen ein, um Ihre Daten vor Bedrohungen zu schützen.",
  },
  {
    id: 4,
    title: "Datenschutz",
    text: "Wir respektieren Ihre Privatsphäre. Unsere Datenschutzrichtlinien und -praktiken sind darauf ausgelegt, Ihre persönlichen Daten zu schützen und zu respektieren.",
  },
];

export const FeatureRightCard = () => {
  return (
    <section className="flex mt-20">
      <div className="max-w-[32rem]">
        <h2 className="text-5xl font-bold leading-normal">
          Verantwortungsvolle KI: Transparenz für eine sichere und faire Nutzung
        </h2>
        <p className="max-w-[80%] mt-12">
          Wir glauben fest daran, dass Transparenz der Schlüssel zur Schaffung
          vertrauenswürdiger künstlicher Intelligenz ist. Durch unsere
          Verpflichtung zu diesen Prinzipien möchten wir eine positive und
          verantwortungsvolle Nutzung von KI fördern.
        </p>
      </div>
      <MultiCarousel itemsToShow={2} items={featureItems} />
    </section>
  );
};
