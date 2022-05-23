/* eslint-disable @next/next/no-img-element */

const customers = [
  { image: "/images/logo-bkw.webp", alt: "BKW" },
  { image: "/images/logo-edorex.webp", alt: "Edorex" },
  { image: "/images/logo-iwb.webp", alt: "IWB" },
  { image: "/images/logo-migros.webp", alt: "Migros" },
  { image: "/images/logo-panter.webp", alt: "Panter" },
  { image: "/images/logo-teko.webp", alt: "TEKO" },
  { image: "/images/logo-toledo.webp", alt: "Mettler Toledo" },
].map((c, i) => (
  <div key={i} className="mr-2 mb-8">
    <img src={c.image} alt={c.alt} />
  </div>
));

export default function CustomersLogo() {
  return <div className="flex flex-wrap justify-around -mb-8">{customers}</div>;
}
