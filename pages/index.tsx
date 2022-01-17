import ContactSection from "components/contactSection";
import Container from "components/container";
import CustomersSection from "components/customersSection";
import Hero from "components/hero";
import ProjectsSection from "components/projectsSection";
import ServicesSection from "components/servicesSection";

export default function Index() {
  return (
    <>
      <Container className="min-h-[75vh] flex flex-col justify-center items-start">
        <Hero />
      </Container>
      <div className="bg-purple-800">
        <Container className="py-32">
          <ServicesSection />
        </Container>
      </div>
      <Container className="py-32">
        <ProjectsSection />
      </Container>
      <div className="bg-teal-50">
        <Container className="py-32">
          <CustomersSection />
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
