import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Ich unterstütze Unternehmen bei der Entwicklung von Web & Mobile Apps sowie Games."
        />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="canonical" href="https://namtab.ch" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Namtab - Freelance Software Entwicklung & Game Design"
        />
        <meta
          property="og:description"
          content="Ich unterstütze Unternehmen bei der Entwicklung von Web & Mobile Apps sowie Games."
        />
        <meta
          property="og:image"
          content="https://namtab.ch/images/namtab.png"
        />
        <meta property="og:url" content="https://namtab.ch" />
        <meta property="og:site_name" content="NAMTAB" />
        <meta
          name="twitter:title"
          content="Namtab - Freelance Software Entwicklung & Game Design"
        />
        <meta
          name="twitter:description"
          content="Ich unterstütze Unternehmen bei der Entwicklung von Web & Mobile Apps sowie Games."
        />
        <meta
          name="twitter:image"
          content="https://namtab.ch/images/namtab.png"
        />
        <meta name="twitter:site" content="@donhubi" />
        <meta name="twitter:creator" content="@donhubi" />
      </Head>
      <body className="text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
