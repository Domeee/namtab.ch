import ContactSection from "components/contactSection";
import Container from "components/container";
import CustomersLogo from "components/customersLogo";
import Hero from "components/hero";
import ServicesSection from "components/servicesSection";
import Testimonials from "components/testimonials";
import Image from "next/image";
import imageCrowdie from "../public/images/crowdie.jpg";

const projects = [
  {
    image: imageCrowdie,
    title: "Crowdie",
    description:
      "Von der Idee zu den ersten zehn Kunden in 29 Tagen. Crowdie ist ein Pilotprojekt der Post CH AG und testet die spontane Abholung von Brief- und Paketpost bei KMU's durch offizielle Partner.",
    labels: ["MetorJS", "JavaScript", "React", "Lean Startup"],
  },
];

const projectCards = projects.map((p) => {
  const labels = p.labels.map((l) => (
    <span
      key={l}
      className="flex justify-center items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
    >
      {l}
    </span>
  ));
  return (
    <div key={p.title} className="rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48 w-full border-black">
        <Image src={p.image} alt="" />
      </div>
      <div className="p-6">
        <div className="grid gap-1 grid-flow-row grid-cols-3">{labels}</div>
        <h3 className="mt-3">{p.title}</h3>
        <p className="mt-3 text-base text-gray-500">{p.description}</p>
        <div className="mt-3">
          <a href="#">Mehr erfahren</a>
        </div>
      </div>
    </div>
  );
});

export default function Index() {
  return (
    <>
      <Container className="min-h-[75vh] flex flex-col justify-center items-start">
        <Hero />
      </Container>
      <div className="bg-purple-200">
        <Container className="py-32">
          <ServicesSection />
        </Container>
      </div>
      <Container className="pt-32">
        <h6>projekte</h6>
        <div>{projectCards}</div>
      </Container>
      {/* <Container className="pt-32"> */}
      {/*   <h6>kunden</h6> */}
      {/*   <Testimonials /> */}
      {/*   <CustomersLogo /> */}
      {/* </Container> */}
      {/* <Container> */}
      {/*   <ContactSection /> */}
      {/* </Container> */}
    </>
  );
}
