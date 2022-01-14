import {
  CodeIcon,
  CubeTransparentIcon,
  AcademicCapIcon,
  ClipboardListIcon,
  ThumbUpIcon,
  PuzzleIcon,
} from "@heroicons/react/outline";

export default function ServicesSection() {
  return (
    <>
      <h6 className="pb-6 text-purple-700">dienstleistungen</h6>
      <div className="space-y-12">
        <p>
          Benötigst du Unterstützung bei deinem Software-Entwicklungsvorhaben?
          Als freischaffender Software Entwickler unterstütze ich dich sehr
          gerne dabei.
        </p>
        <div>
          <h2 className="pb-4">Software Entwicklung</h2>
          <dl className="space-y-5">
            <div>
              <dt>
                <CodeIcon
                  className="absolute h-6 w-6 text-purple-700"
                  aria-hidden="true"
                />
              </dt>
              <dd className="mt-2 ml-9 text-base">
                Full Stack Software Entwicklung von Web & Mobile Apps
              </dd>
            </div>
            <div>
              <dt>
                <CubeTransparentIcon
                  className="absolute h-6 w-6 text-purple-700"
                  aria-hidden="true"
                />
              </dt>
              <dd className="mt-2 ml-9 text-base">
                Rapid Prototyping und Produktententwicklung nach Lean Startup
              </dd>
            </div>
            <div>
              <dt>
                <AcademicCapIcon
                  className="absolute h-6 w-6 text-purple-700"
                  aria-hidden="true"
                />
              </dt>
              <dd className="mt-2 ml-9 text-base">
                Themenspezifisches Coaching
              </dd>
            </div>
            <div>
              <dt>
                <ClipboardListIcon
                  className="absolute h-6 w-6 text-purple-700"
                  aria-hidden="true"
                />
              </dt>
              <dd className="mt-2 ml-9 text-base">
                Technische Projektleitung und fachliche Teamleitung
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <h2 className="pb-4">Game Design</h2>
          <dl className="space-y-5">
            <div>
              <dt>
                <PuzzleIcon
                  className="absolute h-6 w-6 text-purple-700"
                  aria-hidden="true"
                />
              </dt>
              <dd className="mt-2 ml-9 text-base">
                Design und Entwicklung von Video Games, Serious Games und
                Simulationen
              </dd>
            </div>
            <div>
              <dt>
                <ThumbUpIcon
                  className="absolute h-6 w-6 text-purple-700"
                  aria-hidden="true"
                />
              </dt>
              <dd className="mt-2 ml-9 text-base">
                Entwurf, Test und Entwicklung von Gamification Elementen in
                Produkten und Geschäftsapplikationen
              </dd>
            </div>
            <div>
              <dt>
                <AcademicCapIcon
                  className="absolute h-6 w-6 text-purple-700"
                  aria-hidden="true"
                />
              </dt>
              <dd className="mt-2 ml-9 text-base">
                Game Design und Game Entwicklung Coaching
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
