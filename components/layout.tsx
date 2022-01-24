import Container from "components/container";
import FooterSection from "components/footerSection";
import Header from "components/header";
import Section from "components/section";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Container className="bg-reg-500">
        <Section>
          <FooterSection />
        </Section>
      </Container>
    </>
  );
}
