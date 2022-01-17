import Link from "components/link";

export default function FooterSection() {
  const navigation = {
    main: [
      { name: "Home", href: "/" },
      { name: "Über mich", href: "/about" },
      { name: "Kontakt", href: "/contact" },
    ],
  };

  return (
    <footer>
      <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
        {navigation.main.map((item) => (
          <div key={item.name} className="px-5 py-2">
            <Link href={item.href} styled>
              {item.name}
            </Link>
          </div>
        ))}
      </nav>
      <p className="mt-8 text-center text-base text-gray-300">
        &copy; {new Date().getFullYear()} Namtab GmbH
      </p>
    </footer>
  );
}
