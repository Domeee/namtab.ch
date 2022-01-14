import Link from "next/link";

export default function Header() {
  return (
    <header className="min-h-[20vh]">
      <div className="max-w-md mx-auto flex justify-between items-end px-5 pt-5">
        <p className="font-logo text-6xl uppercase">namtab</p>
      </div>
      <input
        type="checkbox"
        className="fixed top-[36px] right-8 h-8 w-8 cursor-pointer opacity-0 z-30 peer"
      />
      <div className="fixed top-[30px] right-6 h-2 w-8 bg-gray-800 z-20 origin-[0%_0%] transition peer-checked:rotate-45 peer-checked:translate-x-[7px] peer-checked:translate-y-px" />
      <div className="fixed top-[42px] right-6 h-2 w-8 bg-gray-800 z-20 transition peer-checked:opacity-0" />
      <div className="fixed top-[54px] right-6 h-2 w-8 bg-gray-800 z-20 origin-[0%_100%] transition peer-checked:-rotate-45 peer-checked:translate-x-[7px] peer-checked:translate-y-px" />
      <div />
      <div />
      <nav className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-10 -translate-x-full bg-white transition peer-checked:translate-x-0">
        <ul className="space-y-3 text-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">Über mich</Link>
          </li>
          <li>
            <Link href="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
