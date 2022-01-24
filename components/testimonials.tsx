import Testimonial from "components/testimonial";
import { HighlightWhite } from "components/highlight";

export default function Testimonials() {
  return (
    <div className="space-y-10">
      <Testimonial
        authorRole="Head of Digital Product Management, Die Schweizerische Post"
        imageAuthor="/images/flo.jpg"
        imageCustomer="/images/logo-post.png"
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
      <Testimonial
        authorRole="Senior Partner, INNOArchitects"
        imageAuthor="/images/daniel.jpg"
        imageCustomer="/images/logo-ia.png"
        text={
          <>
            Dominique erarbeitet in einem{" "}
            <HighlightWhite>hoch&nbsp;interdisziplinären</HighlightWhite>,
            dynamischen und agilen Umfeld MVP Prototypen zur Validierung von
            Produktideen und bringt diese in die Incubation und Pilotierung
            direkt am Markt. Als Full Stack Entwickler und Architekt übernimmt
            Dominique die <HighlightWhite>Verantwortung</HighlightWhite> für die
            technische Umsetzung und ist jeder Zeit in der Lage bei allen
            Aspekten im Gesamtprojektteam Inputs zu leisten und wird so auch
            <HighlightWhite>sehr&nbsp;geschätzt</HighlightWhite>. Unsere Kunden
            sind <HighlightWhite>begeistert</HighlightWhite> von der schnellen
            und zielgerichteten Realisierung ihrer Themen als digitale Lösungen.
            Wir schätzen Dominique als hilfsbereiten, erfahrenen und
            pragmatischen Teamplayer und <HighlightWhite>freuen</HighlightWhite>{" "}
            uns sehr auf die weitere Zusammenarbeit.
          </>
        }
        author="Daniel Ledermann"
        customer="INNOArchitects"
      />
    </div>
  );
}
