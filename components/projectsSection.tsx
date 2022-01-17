import { HighlightWhite } from "components/highlight";
import Link from "components/link";
import Image from "next/image";
import imageCrowdie from "../public/images/crowdie.jpg";

export default function ProjectsSection() {
  const projects = [
    {
      name: "crowdie",
      image: imageCrowdie,
      title: "Crowdie",
      description: (
        <span>
          Von der Idee zu den ersten zehn Kunden in 29 Tagen. Crowdie ist ein
          Pilotprojekt der <HighlightWhite>Post&nbsp;CH&nbsp;AG</HighlightWhite>{" "}
          und testet die spontane Abholung von Brief- und Paketpost bei
          KMU&apos;s durch offizielle Partner.
        </span>
      ),
      labels: ["MetorJS", "JavaScript", "React", "Lean Startup"],
    },
  ];

  const projectCards = projects.map((p) => {
    const labels = p.labels.map((l) => (
      <span
        key={l}
        className="flex justify-center items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800"
      >
        {l}
      </span>
    ));
    return (
      <div key={p.name} className="rounded-lg shadow-lg overflow-hidden">
        <Image src={p.image} alt="Crowdie" />
        <div className="p-6">
          <div className="grid gap-1 grid-flow-row grid-cols-3">{labels}</div>
          <h3 className="mt-6">{p.title}</h3>
          <p className="mt-3">{p.description}</p>
          <div className="mt-3">
            <Link href={`/projects/${p.name}`} styled>
              Mehr erfahren
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <h6 className="pb-6 text-gray-600">projekte</h6>
      <div>{projectCards}</div>
    </>
  );
}
