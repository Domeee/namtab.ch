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
          <h2 className="pb-4 text-white">Software Entwicklung</h2>
          <dl className="space-y-5">
            <div>
              <dt>
                <CodeIcon
                  className="absolute h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </dt>
              <dd className="mt-2 ml-9 text-base text-purple-200">
                <H>Full Stack Software Entwicklung</H> von Web & Mobile Apps
              </dd>
            </div>
            <div>
              <dt>
                <CubeTransparentIcon
                  className="absolute h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </dt>
              <dd className="mt-2 ml-9 text-base text-purple-200">
                <H>Rapid Prototyping</H> und <H>Produktententwicklung</H> nach
                Lean Startup
              </dd>
            </div>
            <div>
              <dt>
                <AcademicCapIcon
                  className="absolute h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </dt>
              <dd className="mt-2 ml-9 text-base text-purple-200">
                Themenspezifisches <H>Coaching</H>
              </dd>
            </div>
            <div>
              <dt>
                <ClipboardListIcon
                  className="absolute h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </dt>
              <dd className="mt-2 ml-9 text-base text-purple-200">
                <H>Technische Projektleitung</H> und{" "}
                <H>fachliche Teamleitung</H>
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <h2 className="pb-4 text-white">Game Design</h2>
          <dl className="space-y-5">
            <div>
              <dt>
                <PuzzleIcon
                  className="absolute h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </dt>
              <dd className="mt-2 ml-9 text-base text-purple-200">
                <H>Design</H> und <H>Entwicklung</H>von Video Games, Serious
                Games und Simulationen
              </dd>
            </div>
            <div>
              <dt>
                <ThumbUpIcon
                  className="absolute h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </dt>
              <dd className="mt-2 ml-9 text-base text-purple-200">
                <H>Gamification</H> von von Produkten und Dienstleistungen
              </dd>
            </div>
            <div>
              <dt>
                <AcademicCapIcon
                  className="absolute h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </dt>
              <dd className="mt-2 ml-9 text-base text-purple-200">
                Game Design und Game Entwicklung <H>Coaching</H>
              </dd>
            </div>
          </dl>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}
