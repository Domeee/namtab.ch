import A from "components/a";
import ContactSection from "components/contactSection";
import Container from "components/container";
import { HighlightWhite } from "components/highlight";
import Section from "components/section";
import Testimonial from "components/testimonial";
import imageAndi from "../public/images/andi.jpg";
import imageHubi from "../public/images/donhubi.jpg";
import { HighlightPurple as HP } from "components/highlight";
import { HighlightWhite as HW } from "components/highlight";
import Image from "next/image";
import Head from "next/head";

export default function About() {
  const age = new Date().getFullYear() - 1986;

  return (
    <>
      <Head>
        <title>Namtab - Über mich</title>
      </Head>
      <div className="bg-teal-50">
        <Container>
          <Section>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src={imageHubi} alt="Dominique Huber" />
              <div className="px-6">
                <span className="text-xs text-gray-400">
                  Weltrekordversuch im Kinderbecherstapeln, Januar 2022
                </span>
              </div>
              <div className="p-6">
                <p>Hallo, ich bin Dominique &quot;Hubi&quot; Huber.</p>
                <p>
                  Ich bin {age} Jahre alt und lebe mit meiner Familie in Worb im
                  Kanton Bern. Als freischaffender Software Entwickler
                  unterstütze ich Unternehmen bei der Ideenfindung, Entwicklung
                  und Einführung von digitalen Lösungen.
                </p>
              </div>
            </div>
          </Section>
        </Container>
      </div>
      <div className="bg-purple-800">
        <Container>
          <Section>
            <blockquote>
              <p className="text-white font-semibold before:content-['\201C'] after:content-['\201D']">
                I have no special talent. I am only passionately curious.
              </p>
            </blockquote>
            <p className="text-purple-400">– Albert Einstein</p>
          </Section>
        </Container>
      </div>
      <Container>
        <Section>
          <h2>Technologien</h2>
          <p>
            Ich bevorzuge{" "}
            <A
              href="https://en.wikipedia.org/wiki/Open-source_software"
              styled
              external
            >
              Open Source Software
            </A>
            . Technologien wähle ich aufgrund der Ausgangslage und Anforderungen
            des Projekts aus.
          </p>
          <p>
            Für die serverseitige Programmierung von unternehmenskritischen
            Anwendungen setze ich auf das Ökosystem rund um <HW>Elixir</HW>. Mit
            Elixir als Programmiersprache, <HW>Erlang</HW> VM als Runtime,{" "}
            <HW>Phoenix Framework</HW> für Web APIs und <HW>PostgreSQL </HW> als
            Datenbank bietet Elixir eine hervorragende Umgebung für langfristige
            Lösungen.
          </p>
          <p>
            Web Apps entwickle ich basierend auf <HW>Next.js</HW> und{" "}
            <HW>React</HW>.
          </p>
          <p>Für Mobile Apps bevorzuge ich React Native.</p>
          <p>
            Wenn es schnell gehen soll, beim Rapid Prototyping oder für Minimal
            Viable Products, setzte ich auf <HW>Backend-as-a-Service</HW>{" "}
            Technologien wie <HW>Supabase</HW>.
          </p>
          <p>Games entwickle ich basierend auf der Unity Game Engine.</p>
        </Section>
      </Container>
      <div className="bg-purple-800">
        <Container>
          <Section>
            <h2 className="text-white">Hobbies</h2>
            <p className="text-purple-200">
              In meiner Freizeit bin ich sehr gerne in der <HP>Natur</HP>. Zum
              Abschalten nach einem kopflastigen Arbeitstag gibt es nichts
              besseres als beim <HP>Biken</HP> Adrenalin auszuschütten und den
              Alltag zu vergessen.
            </p>
            <p className="text-purple-200">
              <HP>Bücher</HP> sind eine weitere Leidenschaft. Fantasy
              Geschichten à la Wheel of Time, The Lord of the Rings, Harry
              Potter oder A Song of Ice and Fire lassen mein Herz höher schlagen
              🤩
            </p>
            <p className="text-purple-200">
              Aber auch in der Freizeit kann ich es mit der{" "}
              <HP>Software Entwicklung</HP>
              nicht sein lassen. Ich liebe es neue Technologien auszuprobieren
              und alle möglichen Probleme mit Software zu lösen 😆
            </p>
          </Section>
        </Container>
      </div>
      <div className="bg-teal-50">
        <Container>
          <Section>
            <Testimonial
              authorRole="Partner bei crossmind inc."
              imageAuthor={imageAndi}
              text={
                <>
                  Dominique ist ein{" "}
                  <HighlightWhite>leidenschaftlicher</HighlightWhite> Full Stack
                  Architekt, welcher dank seiner dynamischen und sympathischen
                  Art <HighlightWhite>jederzeit</HighlightWhite> erfolgreich in
                  innovativen und agilen Projekten eingesetzt werden kann. Er
                  denkt <HighlightWhite>aktiv</HighlightWhite> mit, bringt sein
                  Know-how mit ein und ist jederzeit auf dem aktuellen Stand was
                  Technologien und Marktentwicklungen anbelangen. Es war eine{" "}
                  <HighlightWhite>grosse</HighlightWhite> Freude für mich mit
                  ihm zu arbeiten und ich kann ihn vorbehaltslos
                  weiterempfehlen. Ich wünsche dir weiterhin viel Erfolg und es
                  würde mich <HighlightWhite>freuen</HighlightWhite>, wenn es in
                  Zukunft wieder zu einer Zusammenarbeit kommen würde.
                </>
              }
              author="Andreas Windler"
              customer="crossmind inc."
            />
          </Section>
        </Container>
      </div>
      <div className="bg-purple-800">
        <Container className="py-32">
          <ContactSection />
        </Container>
      </div>
    </>
  );
}
