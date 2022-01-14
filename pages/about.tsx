import ContactSection from "components/contactSection";
import Container from "components/container";
import Testimonial from "components/testimonial";
import imageAndi from "../public/images/andi.jpg";

export default function About() {
  const age = new Date().getFullYear() - 1986;

  return (
    <>
      <Container>
        <p className="quote">
          &quot;I have no special talent. I am only passionately curious.&quot;
        </p>
        <p className="quotee">– Albert Einstein</p>
      </Container>
      <Container>
        <h2>Wer bin ich</h2>
        <p>
          Hallo, ich bin Dominique Huber, {age} Jahre alt und komme aus Bern.
          Als freischaffender Software Entwickler unterstütze ich Unternehmen
          bei der Ideenfindung, Entwicklung und Einführung von digitalen
          Lösungen.
        </p>
        <p>
          Meine Kernkompetenz liegt in der Entwicklung von Web & Mobile Apps
          sowie Games.
        </p>
      </Container>
      <Container>
        <h2>Technologien</h2>
        <p>
          Ich bevorzuge&nbsp;
          <a
            href="https://en.wikipedia.org/wiki/Open-source_software"
            target="_blank"
            rel="noreferrer"
          >
            Open Source Software
          </a>
          &nbsp;. Technologien wähle ich aufgrund der Ausgangslage und
          Anforderungen des Projekts aus.
        </p>
        <p className="quote">&quot;Use the right tool for the job.&quot;</p>
        <p className="quotee">– Ancient Dev God</p>
        <p>
          Für die serverseitige Programmierung von unternehmenskritischen
          Anwendungen setze ich auf das Ökosystem rund um Elixir. Mit Elixir als
          Programmiersprache, Erlang VM als Runtime, Phoenix Framework für Web
          APIs und PostgreSQL als Datenbank bietet Elixir eine hervorragende
          Umgebung für langfristige Lösungen.
        </p>
        <p>Web Apps entwickle ich basierend auf Next.js und React.</p>
        <p>Für Mobile Apps bevorzuge ich React Native.</p>
        <p>
          Wenn es schnell gehen soll, beim Rapid Prototyping oder für Minimal
          Viable Products, setzte ich auf Backend-as-a-Service Technologien wie
          Supabase.
        </p>
        <p>Games entwickle ich basierend auf der Unity Game Engine.</p>
      </Container>
      <Container>
        <h2>Hobbies</h2>
        <p>
          In meiner Freizeit bin ich sehr gerne in der Natur. Zum Abschalten
          nach einem kopflastigen Arbeitstag gibt es nichts besseres als beim
          Biken Adrenalin auszuschütten und den Alltag zu vergessen.
        </p>
        <p>
          Bücher sind eine weitere Leidenschaft. Fantasy Geschichten à la Wheel
          of Time, The Lord of the Rings, Harry Potter oder A Song of Ice and
          Fire lassen mein Herz höher schlagen 🤩.
        </p>
        <p>
          Aber auch in der Freizeit kann ich es mit der Software Entwicklung
          nicht sein lassen. Ich liebe es neue Technologien auszuprobieren und
          alle möglichen Probleme mit Software zu lösen 😆.
        </p>
      </Container>
      <Container>
        <Testimonial
          authorRole="Partner bei crossmind inc."
          imageAuthor={imageAndi}
          text="Dominique ist ein leidenschaftlicher Full Stack Architekt, welcher dank seiner dynamischen und sympathischen Art jederzeit erfolgreich in innovativen und agilen Projekten eingesetzt werden kann. Er denkt aktiv mit, bringt sein Know-how mit ein und ist jederzeit auf dem aktuellen Stand was Technologien und Marktentwicklungen anbelangen. Es war eine grosse Freude für mich mit ihm zu arbeiten und ich kann ihn vorbehaltslos weiterempfehlen. Ich wünsche dir weiterhin viel Erfolg und es würde mich freuen, wenn es in Zukunft wieder zu einer Zusammenarbeit kommen würde."
          author="Andreas Windler"
          customer="crossmind inc."
        />
      </Container>
      <Container>
        <ContactSection />
      </Container>
    </>
  );
}
