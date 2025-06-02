"use client";

import { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

interface Slide {
  title: string;
  content: string;
  color: string;
  slug: string;
  image: string;
}

interface StorySectionProps {
  title: string;
  subtitle?: string;
  slides: Slide[];
  backgroundColor?: string;
}

const StorySection = ({
  title,
  subtitle,
  slides,
  backgroundColor = "#000000",
}: StorySectionProps) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className="py-16 px-4 relative overflow-hidden"
      style={{ backgroundColor }}
      aria-label="Story section"
    >
      <div className="container mx-auto">
        <header className="text-center mb-12">
          {subtitle && (
            <h2 className="text-3xl md:text-3xl text-amber-500 font-bold mb-2">
              {title}
            </h2>
          )}
          <h3 className="text-2xl md:text-2xl font-bold text-white">{subtitle}</h3>
        </header>

        <div className="relative pb-24">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide, i) => (
              <Link key={i} href={slide.slug} className="px-4 block group">
                <article
                  className="rounded-lg p-6 h-full min-h-[250px] bg-white/5 border border-white/10 backdrop-blur-md 
                             flex flex-col md:flex-row gap-6 group-hover:scale-[1.01] transition-transform duration-300"
                  style={{ borderLeft: `4px solid ${slide.color}` }}
                >
                  <figure className="w-full md:w-1/3 aspect-video relative rounded-md overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <div className="flex-1 flex flex-col justify-center text-left">
                    <h4 className="text-xl font-semibold mb-2 text-white">{slide.title}</h4>
                    <p className="text-gray-300 line-clamp-5">{slide.content}</p>
                  </div>
                </article>
              </Link>
            ))}
          </Slider>

          <div className="mt-10 flex justify-center gap-6">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-14 h-14 rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white 
                         transition-all duration-300 flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-14 h-14 rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white 
                         transition-all duration-300 flex items-center justify-center"
              aria-label="Next slide"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
