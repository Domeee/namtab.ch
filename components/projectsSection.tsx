import A from "components/a";
import { HighlightWhite as H } from "components/highlight";
import Image from "next/image";
import imageCrowdie from "../public/images/crowdie.jpg";
import imageEnerjoy from "../public/images/enerjoy.png";
import imageTeko from "../public/images/teko.png";

export default function ProjectsSection() {
  const projectCards = projects.map((p) => {
    const labels = p.labels.map((l) => (
      <p
        key={l}
        className="flex justify-center items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 truncate"
      >
        {l}
      </p>
    ));
    return (
      <div
        key={p.name}
        className="rounded-lg shadow-lg overflow-hidden bg-white"
      >
        <Image src={p.image} alt="Crowdie" />
        <div className="p-6">
          <div className="grid gap-1 grid-flow-row grid-cols-3">{labels}</div>
          <h3 className="mt-6">{p.title}</h3>
          <p>{p.description}</p>
          {p.links &&
            p.links.map((l, i) => (
              <div className="mt-3" key={i}>
                <A href={l.url} styled external>
                  {l.urlLabel}
                </A>
              </div>
            ))}
        </div>
      </div>
    );
  });
  return (
    <>
      <h6 className="pb-6 text-teal-600">projekte</h6>
      <div className="space-y-10">{projectCards}</div>
    </>
  );
}

const projects = [
  {
    name: "enerjoy",
    image: imageEnerjoy,
    title: "enerjoy",
    links: [
      {
        url: "https://enerjoy.ch",
        urlLabel: "www.enerjoy.ch",
      },
    ],
    description: (
      <span>
        enerjoy schafft durch Tracking der alltäglichen Handlungen Transparenz
        zum eigenen CO2-Footprint und zeigt dank intelligenten Algorithmen auf,
        wie dieser persönlich am besten reduziert werden kann.
      </span>
    ),
    labels: [
      "React Native",
      "TypeScript",
      "Elixir",
      "Phoenix Framework",
      "PosgreSQL",
      "Lean Startup",
    ],
  },
  {
    name: "teko",
    image: imageTeko,
    title: "TEKO NDS Game Design",
    links: [
      {
        url: "https://www.teko.ch/blog/game-design",
        urlLabel: "Blog Game Design @ teko.ch",
      },
      {
        url: "https://www.teko.ch/technik/nachdiplomstudien-nds/game-design-und-simulation/4659",
        urlLabel: "NDS Game Design",
      },
    ],
    description: (
      <span>
        Aufbau und Weiterentwicklung des Nachdiplomstudiums NDS HF Game Design.
        Unterricht der Module <H>Unity</H>, <H>Game Design</H>,{" "}
        <H>Game Programming</H>.
      </span>
    ),
    labels: ["Game Design", "Game Entwicklung", "Unity", "Coaching"],
  },
  {
    name: "crowdie",
    image: imageCrowdie,
    title: "Crowdie",
    description: (
      <span>
        Von der Idee zu den ersten zehn Kunden in 29 Tagen. Crowdie ist ein
        Pilotprojekt der <H>Post&nbsp;CH&nbsp;AG</H> und testet die spontane
        Abholung von Brief- und Paketpost bei KMU&apos;s durch offizielle
        Partner.
      </span>
    ),
    labels: ["MetorJS", "JavaScript", "React", "Lean Startup"],
  },
];
