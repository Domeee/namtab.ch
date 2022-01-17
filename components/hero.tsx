import { HighlightWhite as H } from "components/highlight";

export default function Hero() {
  return (
    <p className="text-lg font-bold pb-12">
      Ich unterstütze Unternehmen bei der Entwicklung von <H>Web</H> &{" "}
      <H>Mobile Apps</H> sowie <H>Games</H>
    </p>
  );
}
