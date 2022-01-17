import Link from "components/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  function toggleCheckbox() {
    setIsChecked(!isChecked)
  }

  return (
    <header className="min-h-[20vh]">
      <div className="max-w-md mx-auto flex justify-between items-end px-5 pt-5">
        <Link href="/">
          <a>
            <p className="font-logo text-6xl uppercase">namtab</p>
          </a>
        </Link>
      </div>
      <input
        type="checkbox"
        checked={isChecked}
        className="fixed top-[36px] right-8 h-8 w-8 cursor-pointer opacity-0 z-30 peer"
        onClick={toggleCheckbox}
      />
      <div className="fixed top-[30px] right-6 h-2 w-8 bg-teal-500 z-20 origin-[0%_0%] transition peer-checked:rotate-45 peer-checked:translate-x-[7px] peer-checked:translate-y-px peer-checked:bg-white" />
      <div className="fixed top-[42px] right-6 h-2 w-8 bg-teal-500 z-20 transition peer-checked:opacity-0" />
      <div className="fixed top-[54px] right-6 h-2 w-8 bg-teal-500 z-20 origin-[0%_100%] transition peer-checked:-rotate-45 peer-checked:translate-x-[7px] peer-checked:translate-y-px peer-checked:bg-white" />
      <div />
      <div />
      <nav className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-10 -translate-x-full transition peer-checked:translate-x-0 bg-teal-500 text-white">
        <ul className="space-y-10 text-center">
          <li>
          <button onClick={() => {router.push("/"); toggleCheckbox()}}><h1 className="uppercase">home</h1>
            </button>
          </li>
          <li>
          <button onClick={() => {router.push("/about"); toggleCheckbox()}}><h1 className="uppercase">über mich</h1></button>
          </li>
          <li>
          <button onClick={() => {router.push("/contact"); toggleCheckbox()}}><h1 className="uppercase">kontakt</h1></button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
