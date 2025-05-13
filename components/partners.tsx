import { LogoSlider } from "./ui/logo-slider";

interface Items {
  image: string;
  alt: string;
}

interface PartnerItems {
  items: Items[]
  backgroundColor?: string;

}

export default function PartnersSection({ items, backgroundColor = "transparent"}: PartnerItems) {
  return (
    <div className={`py-10`} style={{ backgroundColor }}>
      <h2 className="text-center text-2xl font-bold mb-6">Our Trusted Partners & Vendor Network</h2>
      <LogoSlider logos={items} direction="left" speed="fast" />
    </div>
  );
}
