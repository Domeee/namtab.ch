import Container from "components/container";
import Link from "components/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  function toggleCheckbox() {
    setIsChecked(!isChecked);
  }

  return (
    <header className="mb-28 sm:mb-40">
      <Container className="flex justify-between items-end pt-5">
        <Link href="/">
          <span className="font-logo text-6xl uppercase">namtab</span>
        </Link>
      </Container>
      <input
        type="checkbox"
        checked={isChecked}
        className="fixed top-0 right-0 h-16 w-16 cursor-pointer opacity-0 z-30 peer"
        onChange={toggleCheckbox}
      />
      <div className="fixed top-[20px] right-5 h-2 w-8 bg-teal-500 z-20 origin-[0%_0%] transition peer-checked:rotate-45 peer-checked:translate-x-[8px] peer-checked:translate-y-[2px] peer-checked:bg-white" />
      <div className="fixed top-[32px] right-5 h-2 w-8 bg-teal-500 z-20 transition peer-checked:opacity-0" />
      <div className="fixed top-[44px] right-5 h-2 w-8 bg-teal-500 z-20 origin-[0%_100%] transition peer-checked:-rotate-45 peer-checked:translate-x-[8px] peer-checked:translate-y-[-1px] peer-checked:bg-white" />
      <div />
      <div />
      <nav className="fixed inset-0 flex justify-center items-center z-10 -translate-x-full transition peer-checked:translate-x-0 bg-teal-500 text-white">
        <ul className="space-y-10 text-center">
          {routes.map((r, i) => (
            <li key={i}>
              <button
                onClick={() => {
                  router.push(r.route);
                  toggleCheckbox();
                }}
              >
                <span className="text-6xl font-extrabold leading-normal uppercase">
                  {r.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

const routes = [
  {
    route: "/",

    title: "home",
  },

  { route: "/about", title: "über mich" },

  { route: "/contact", title: "kontakt" },
];
