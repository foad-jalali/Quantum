import { LogoSlider } from "./ui/logo-slider";

interface Items {
  image: string;
  alt: string;
}

interface PartnerItems {
  items: Items[];
  backgroundColor?: string;
}

export default function PartnersSection({
  items,
  backgroundColor = "transparent",
}: PartnerItems) {
  return (
    <section
      style={{ backgroundColor }}
      className="py-10"
      aria-labelledby="partners-heading"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-6">
          <h2 id="partners-heading" className="text-2xl font-bold">
            Our Trusted Partners & Vendor Network
          </h2>
        </header>
        <LogoSlider logos={items} direction="left" speed="fast" />
      </div>
    </section>
  );
}
