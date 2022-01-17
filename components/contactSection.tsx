import Button from "components/button";
import Link from "components/link";

export default function ContactSection() {
  return (
    <div className="space-x-6">
      <p className="text-white">
        Egal ob mit Gleichgesinnten fachsimpeln oder die nächste spannende
        Herausforderung besprechen – ich bin immer für eine Tasse Kaffe oder ein
        kühles Bier zu haben.
      </p>
      <Link href="/contact">
        <Button title="Kontaktmöglichkeiten" />
      </Link>
    </div>
  );
}
