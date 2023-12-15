import Testimonial from "components/testimonial";
import { HighlightWhite } from "components/highlight";

export default function Testimonials() {
  return (
    <div className="space-y-10">
      <Testimonial
        authorRole="Head of Digital Product Management, Die Schweizerische Post"
        imageAuthor="/images/flo.webp"
        imageCustomer="/images/logo-post.webp"
        text={
          <>
            Bei der Umsetzung unseres Innovationsprojektes hat uns Dominique
            super unterstützt. Er hat sich{" "}
            <HighlightWhite>extrem</HighlightWhite> schnell in die Thematik
            eingearbeitet und auch ausserhalb seines Fachgebietes{" "}
            <HighlightWhite>wichtige</HighlightWhite> Inputs geliefert. Durch
            seine zuverlässige, weitsichtige und termingenaue Arbeitsweise
            konnten wir uns <HighlightWhite>voll</HighlightWhite> und ganz auf
            Ihn verlassen und unseren Fokus auf andere Aspekte des Projektes
            legen. Die <HighlightWhite>äusserst</HighlightWhite> angenehme
            Zusammenarbeit rundet den sehr guten Eindruck ab, sodass ich
            Dominique vorbehaltslos weiterempfehlen kann und mich auf weitere
            gemeinsame Projekte <HighlightWhite>freue</HighlightWhite>.
          </>
        }
        author="Florian Thut"
        customer="Die Schweizerische Post"
      />
    </div>
  );
}
