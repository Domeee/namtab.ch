import Highlight from "components/highlight";

export default function Hero() {
  return (
    <p className="text-lg font-bold pb-12">
      Ich unterstütze Unternehmen bei der Entwicklung von{" "}
      <Highlight>Web</Highlight> & <Highlight>Mobile Apps</Highlight> sowie{" "}
      <Highlight>Games</Highlight>
    </p>
  );
}
