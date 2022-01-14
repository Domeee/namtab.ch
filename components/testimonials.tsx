import imagePost from "../public/images/logo-post.png";
import imageFlo from "../public/images/flo.jpg";
import imageIa from "../public/images/logo-ia.png";
import imageDaniel from "../public/images/daniel.jpg";
import Testimonial from "components/testimonial";

export default function Testimonials() {
  return (
    <div className="">
      <Testimonial
        authorRole="Head of Digital Product Management, Die Schweizerische Post"
        imageAuthor={imageFlo}
        imageCustomer={imagePost}
        text="Bei der Umsetzung unseres Innovationsprojektes hat uns Dominique
              super unterstützt. Er hat sich extrem schnell in die Thematik
              eingearbeitet und auch ausserhalb seines Fachgebietes wichtige
              Inputs geliefert. Durch seine zuverlässige, weitsichtige und
              termingenaue Arbeitsweise konnten wir uns voll und ganz auf Ihn
              verlassen und unseren Fokus auf andere Aspekte des Projektes
              legen. Die äusserst angenehme Zusammenarbeit rundet den sehr guten
              Eindruck ab, sodass ich Dominique vorbehaltslos weiterempfehlen
              kann und mich auf weitere gemeinsame Projekte freue."
        author="Florian Thut"
        customer="Die Schweizerische Post"
      />
      <Testimonial
        authorRole="Senior Partner, INNOArchitects"
        imageAuthor={imageDaniel}
        imageCustomer={imageIa}
        text="Dominique erarbeitet in einem hoch interdisziplinären, dynamischen und agilen Umfeld MVP Prototypen zur Validierung von Produktideen und bringt diese in die Incubation und Pilotierung direkt am Markt. Als Full Stack Entwickler und Architekt übernimmt Dominique die Verantwortung für die technische Umsetzung und ist jeder Zeit in der Lage bei allen Aspekten im Gesamtprojektteam Inputs zu leisten und wird so auch sehr geschätzt. Unsere Kunden sind begeistert von der schnellen und zielgerichteten Realisierung ihrer Themen als digitale Lösungen. Wir schätzen Dominique als hilfsbereiten, erfahrenen und pragmatischen Teamplayer und freuen uns sehr auf die weitere Zusammenarbeit."
        author="Daniel Ledermann"
        customer="INNOArchitects"
      />
    </div>
  );
}
