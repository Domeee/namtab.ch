/* eslint-disable @next/next/no-img-element */

const customers = [
  { image: "/images/logo-bkw.png", alt: "BKW" },
  { image: "/images/logo-edorex.png", alt: "Edorex" },
  { image: "/images/logo-iwb.png", alt: "IWB" },
  { image: "/images/logo-migros.png", alt: "Migros" },
  { image: "/images/logo-panter.png", alt: "Panter" },
  { image: "/images/logo-teko.png", alt: "TEKO" },
  { image: "/images/logo-toledo.png", alt: "Mettler Toledo" },
].map((c, i) => (
  <div key={i} className="mr-2 mb-8">
    <img src={c.image} alt={c.alt} />
  </div>
));

export default function CustomersLogo() {
  return <div className="flex flex-wrap justify-around -mb-8">{customers}</div>;
}
