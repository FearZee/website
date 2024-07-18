import image from "../../../public/image 2.png";
import Image from "next/image";

export const ProblemSection = () => {
  return (
    <section className="section">
      <h2 className="h2 sm:text-center">
        Lösungen für Prozessoptimierung, Datensicherheit und smarte
        Entscheidungen
      </h2>
      <div className="sm:flex gap-6 mt-12">
        <div>
          <p>
            Unternehmen stehen heute vor ineffizienten Prozessen, der
            Herausforderung der Datenintegration und -sicherheit sowie
            unsicheren Entscheidungsgrundlagen. Zusätzlich erschweren
            technologische Rückstände und schnelle Marktveränderungen das
            Wachstum und die Anpassungsfähigkeit.
            <br />
            <br />
            <br />
            Wir bieten maßgeschneiderte Lösungen zur Prozessoptimierung, die
            Ihre Abläufe effizienter gestalten, sowie umfassende
            Datensicherheitsstrategien zum Schutz sensibler Informationen. Durch
            unsere datenbasierten Analysen und KI-gestützten Erkenntnisse
            ermöglichen wir fundierte und smarte Entscheidungen, die Ihr
            Unternehmen voranbringen. Mit modernster Technologie und
            tiefgreifendem Branchenwissen geben wir Ihnen die Werkzeuge, die Sie
            benötigen, um erfolgreich zu wachsen und sich den Herausforderungen
            von heute zu stellen.
          </p>
        </div>
        <Image
          {...image}
          alt="Problem image"
          className="rounded-xl sm:w-4/6 object-cover sm:mt-0 mt-6"
        />
      </div>
    </section>
  );
};
