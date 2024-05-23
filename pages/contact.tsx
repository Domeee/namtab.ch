import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import Container from "components/container";
import Link from "components/link";
import Head from "next/head";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Namtab - Kontakt</title>
      </Head>
      <Container className="pb-32">
        <h2>Ich freue mich auf deine Nachricht!</h2>
        <p className="mt-3">
          Egal welcher Kanal, ich melde mich spätestens am nächsten Arbeitstag
          bei dir.
        </p>
        <dl className="mt-8">
          <div>
            <dt className="sr-only">Adresse</dt>
            <dd>
              <p>Namtab GmbH</p>
              <p>Eggasse 42b</p>
              <p>3076 Worb</p>
            </dd>
          </div>
          <div className="mt-6">
            <dt className="sr-only">Telefonnummer</dt>
            <dd className="flex">
              <PhoneIcon
                className="flex-shrink-0 h-6 w-6 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-3">
                <Link href="tel:+41793398007" styled>
                  <a>+41 79 339 80 07</a>
                </Link>
              </span>
            </dd>
          </div>
          <div className="mt-3">
            <dt className="sr-only">E-Mail</dt>
            <dd className="flex">
              <MailIcon
                className="flex-shrink-0 h-6 w-6 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-3">
                <Link href="mailto:hey@namtab.ch" styled>
                  <a>hey@namtab.ch</a>
                </Link>
              </span>
            </dd>
          </div>
        </dl>
      </Container>
    </div>
  );
}
