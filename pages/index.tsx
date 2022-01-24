import ContactSection from "components/contactSection";
import Container from "components/container";
import CustomersSection from "components/customersSection";
import Hero from "components/hero";
import ProjectsSection from "components/projectsSection";
import Section from "components/section";
import ServicesSection from "components/servicesSection";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Namtab - Freelance Software Entwicklung & Game Design</title>
      </Head>
      <Container className="flex flex-col justify-center items-start mb-40">
        <Hero />
      </Container>
      <div className="bg-purple-800">
        <Container>
          <Section>
            <ServicesSection />
          </Section>
        </Container>
      </div>
      <div className="bg-teal-50">
        <Container>
          <Section>
            <ProjectsSection />
          </Section>
        </Container>
      </div>
      <Container>
        <Section>
          <CustomersSection />
        </Section>
      </Container>
      <div className="bg-purple-800">
        <Container>
          <Section>
            <ContactSection />
          </Section>
        </Container>
      </div>
    </>
  );
}
