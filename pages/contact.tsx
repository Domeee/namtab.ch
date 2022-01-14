import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import ContactForm from "components/contactForm";

export default function Contact() {
  return (
    <div className="relative bg-white">
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Ich freue mich auf deine Nachricht!
            </h2>
            <p className="mt-3">
              Egal welcher Kanal, ich melde mich spätestens am nächsten
              Arbeitstag bei dir.
            </p>
            <dl className="mt-8 text-base text-gray-500">
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
                  <span className="ml-3">+41 79 339 80 07</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">E-Mail</dt>
                <dd className="flex">
                  <MailIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">hey@namtab.ch</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
