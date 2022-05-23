import {
  CodeIcon,
  CubeTransparentIcon,
  AcademicCapIcon,
  ClipboardListIcon,
  ThumbUpIcon,
  PuzzleIcon,
} from "@heroicons/react/outline";
import { HighlightPurple as H } from "components/highlight";

export default function ServicesSection() {
  return (
    <>
      <h6 className="pb-6 text-purple-400">dienstleistungen</h6>
      <div className="space-y-12">
        <p className="text-purple-200">
          Benötigst du Unterstützung bei deinem Software-Entwicklungsvorhaben?
          Als freischaffender Software Entwickler unterstütze ich dich sehr
          gerne dabei.
        </p>
        <div>
          <h2 className="text-white">Software Entwicklung</h2>
          <dl className="space-y-5">
            {services.software.map((s, i) => (
              <div key={i}>
                <dt>{s.icon}</dt>
                <dd className="mt-2 ml-9 text-purple-200">{s.text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h2 className="text-white">Game Design</h2>
          <dl className="space-y-5">
            {services.game.map((s, i) => (
              <div key={i}>
                <dt>{s.icon}</dt>
                <dd className="mt-2 ml-9 text-purple-200">{s.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}

const services = {
  software: [
    {
      icon: (
        <CodeIcon className="absolute h-6 w-6 text-white" aria-hidden="true" />
      ),
      text: (
        <>
          <H>Full Stack Software Entwicklung</H> von Web & Mobile Apps
        </>
      ),
    },
    {
      icon: (
        <CubeTransparentIcon
          className="absolute h-6 w-6 text-white"
          aria-hidden="true"
        />
      ),
      text: (
        <>
          <H>Rapid Prototyping</H> und <H>Produktententwicklung</H> nach Lean
          Startup
        </>
      ),
    },
    {
      icon: (
        <AcademicCapIcon
          className="absolute h-6 w-6 text-white"
          aria-hidden="true"
        />
      ),
      text: (
        <>
          Themenspezifisches <H>Coaching</H>
        </>
      ),
    },
    {
      icon: (
        <ClipboardListIcon
          className="absolute h-6 w-6 text-white"
          aria-hidden="true"
        />
      ),
      text: (
        <>
          <H>Technische Projektleitung</H> und <H>fachliche Teamleitung</H>
        </>
      ),
    },
  ],
  game: [
    {
      icon: (
        <PuzzleIcon
          className="absolute h-6 w-6 text-white"
          aria-hidden="true"
        />
      ),
      text: (
        <>
          <H>Design</H> und <H>Entwicklung</H> von Video Games, Serious Games
          und Simulationen
        </>
      ),
    },
    {
      icon: (
        <ThumbUpIcon
          className="absolute h-6 w-6 text-white"
          aria-hidden="true"
        />
      ),
      text: (
        <>
          <H>Gamification</H> von Produkten und Dienstleistungen
        </>
      ),
    },
    {
      icon: (
        <AcademicCapIcon
          className="absolute h-6 w-6 text-white"
          aria-hidden="true"
        />
      ),
      text: (
        <>
          Game Design und Game Entwicklung <H>Coaching</H>
        </>
      ),
    },
  ],
};
