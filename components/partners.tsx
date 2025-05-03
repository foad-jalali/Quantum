import { LogoSlider } from "./ui/logo-slider";

const logos = [
  { image: "/partners/1.png", alt: "Logo 1" },
  { image: "/partners/2.png", alt: "Logo 2" },
  { image: "/partners/3.png", alt: "Logo 3" },
  { image: "/partners/4.png", alt: "Logo 3" },
  { image: "/partners/5.png", alt: "Logo 3" },
];

export default function PartnersSection() {
  return (
    <div className="py-10 bg-[#DBF9F0]">
      <h2 className="text-center text-2xl font-bold mb-6">Our Trusted Partners & Vendor Network</h2>
      <LogoSlider logos={logos} direction="left" speed="fast" />
    </div>
  );
}
