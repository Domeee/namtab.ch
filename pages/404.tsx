import Container from "components/container";
import Head from "next/head";

export default function Custom404() {
  return (
    <Container>
      <Head>
        <title>Namtab - 404</title>
      </Head>
      <p>Diese Seite existiert nicht 🧐</p>
    </Container>
  );
}
