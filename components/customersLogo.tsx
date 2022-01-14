import Image from "next/image";
import imageBkw from "../public/images/logo-bkw.png";
import imageEdorex from "../public/images/logo-edorex.png";
import imageIwb from "../public/images/logo-iwb.png";
import imageMigros from "../public/images/logo-migros.png";
import imagePanter from "../public/images/logo-panter.png";
import imageTeko from "../public/images/logo-teko.png";
import imageToledo from "../public/images/logo-toledo.png";

const customers = [
  { image: imageBkw, alt: "BKW" },
  { image: imageEdorex, alt: "Edorex" },
  { image: imageIwb, alt: "IWB" },
  { image: imageMigros, alt: "Migros" },
  { image: imagePanter, alt: "Panter" },
  { image: imageTeko, alt: "TEKO" },
  { image: imageToledo, alt: "Mettler Toledo" },
].map((c, i) => (
  <div key={i} className="mr-1 mb-1">
    <Image src={c.image} alt={c.alt} />
  </div>
));

export default function CustomersLogo() {
  return <div className="flex flex-wrap justify-around">{customers}</div>;
}
