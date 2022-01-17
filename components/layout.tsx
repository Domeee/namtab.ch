import Container from "components/container";
import FooterSection from "components/footerSection";
import Header from "components/header";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Container className="py-32">
        <FooterSection />
      </Container>
    </>
  );
}
