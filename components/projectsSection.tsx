/* eslint-disable @next/next/no-img-element */
import A from "components/a";
import { HighlightWhite as H } from "components/highlight";

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
        <img src={p.image} alt={p.title} />
        <div className="p-6">
          <div className="grid gap-1 grid-flow-row grid-cols-3">{labels}</div>
          <h3 className="mt-6">{p.title}</h3>
          <p>{p.description}</p>
          <div>
            <p>Rollen: {p.roles.join(", ")}</p>
          </div>
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
    image: "/images/enerjoy.webp",
    title: "enerjoy",
    links: [
      {
        url: "https://enerjoy.ch",
        urlLabel: "www.enerjoy.ch",
      },
    ],
    description: (
      <span>
        enerjoy ist ein personalisierbarer <H>CO2-Fussabdruck Coach</H>.
        Privatanwender reduzieren mit Hilfe von individuellen Tipps und
        Challenges ihren Fussabdruck spielend einfach. Mit der enerjoy
        B2B-Plattform haben Geschäftskunden ein Werkzeug, um die Emissionen
        ihrer Mitarbeitenden auszuwerten und auszugleichen.
      </span>
    ),
    roles: ["CTO", "Lead Software Engineer"],
    labels: [
      "React Native",
      "TypeScript",
      "Elixir",
      "Phoenix",
      "PosgreSQL",
      "Lean Startup",
    ],
  },
  {
    name: "teko",
    image: "/images/teko.webp",
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
    roles: ["Dozent"],
    labels: ["Game Design", "Game Dev", "Unity", "Coaching"],
  },
  {
    name: "lab_invaders",
    image: "/images/lab-invaders.webp",
    title: "Lab Invaders",
    description: (
      <span>
        Lab Invaders ist ein HTML5 basiertes Browser-Game. Das Verkaufspersonal
        von Mettler Toledo wurde so auf spielerische Art und Weise über die neue
        Produktelinie informiert, welche im Herbst 2018 eingeführt wurde.
      </span>
    ),
    roles: ["Game Designer", "Game Developer"],
    labels: ["Game Design", "Game Dev", "Unity"],
  },
  {
    name: "crowdie",
    image: "/images/crowdie.webp",
    title: "Crowdie",
    description: (
      <span>
        Von der Idee zu den ersten zehn Kunden in 29 Tagen. Crowdie ist ein
        Pilotprojekt der <H>Post&nbsp;CH&nbsp;AG</H> und testet die spontane
        Abholung von Brief- und Paketpost bei KMU&apos;s durch offizielle
        Partner.
      </span>
    ),
    roles: ["CTO", "Lead Software Engineer"],
    labels: ["MetorJS", "JavaScript", "React", "Lean Startup"],
  },
];
