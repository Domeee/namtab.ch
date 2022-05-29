import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang="de">
      <Head>
        <link
          rel="preload"
          href="/fonts/grinched.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/grinched.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter-v7-latin-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/inter-v7-latin-600.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <meta
          name="description"
          content="Digitale Lösungen mit Fokus aufs Wesentliche: Kunden, Wirtschaftlichkeit und Freude"
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
          content="Digitale Lösungen mit Fokus aufs Wesentliche: Kunden, Wirtschaftlichkeit und Freude"
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
          content="Digitale Lösungen mit Fokus aufs Wesentliche: Kunden, Wirtschaftlichkeit und Freude"
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
