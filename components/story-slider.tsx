"use client";

import { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const PrevArrow = () => (
    <button
      className="absolute bottom-0 left-1/2 -translate-x-20 z-10 w-14 h-14 rounded-full 
               border border-gray-600 text-gray-400 hover:text-white hover:border-white 
               transition-all duration-300 flex items-center justify-center"
      onClick={() => sliderRef.current?.slickPrev()}
      aria-label="Previous testimonial"
    >
      <div className="flex items-center justify-center w-6 h-6">
        <ArrowLeft className="w-full h-full" />
      </div>
    </button>
  )

  const NextArrow = () => (
    <button
      className="absolute bottom-0 left-1/2 translate-x-6 z-10 w-14 h-14 rounded-full 
               border border-gray-600 text-gray-400 hover:text-white hover:border-white 
               transition-all duration-300 flex items-center justify-center"
      onClick={() => sliderRef.current?.slickNext()}
      aria-label="Next testimonial"
    >
      <div className="flex items-center justify-center w-6 h-6">
        <ArrowRight className="w-full h-full" />
      </div>
    </button>
  )


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
    <section className="py-16 px-4 relative overflow-hidden" style={{ backgroundColor }}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          {subtitle && <h2 className="text-3xl md:text-3xl text-amber-500 font-bold mb-2">{title}</h2>}
          <h3 className="text-2xl md:text-2xl font-bold text-white">{subtitle}</h3>
        </div>

        <div className="relative pb-24">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide, i) => (
              <div key={i} className="px-4">
                <div
                  className="rounded-lg p-6 h-full min-h-[250px] bg-white/5 border border-white/10 backdrop-blur-md flex flex-col md:flex-row gap-6"
                  style={{ borderLeft: `4px solid ${slide.color}` }}
                >
                  <div className="w-full md:w-1/3 aspect-video relative rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-center text-left">
                    <h4 className="text-xl font-semibold mb-2 text-white">{slide.title}</h4>
                    <p className="text-gray-300 line-clamp-5">{slide.content}</p>
                  </div>
                </div>

              </div>
            ))}
          </Slider>

          {/* Navigation arrows */}
          <div className="mt-10">
            <PrevArrow />
            <NextArrow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
