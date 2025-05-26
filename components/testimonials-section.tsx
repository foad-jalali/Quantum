"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Slider from "react-slick"
import { ArrowLeft, ArrowRight } from "lucide-react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Testimonial data

export default function TestimonialsSection() {
  const sliderRef = useRef<Slider | null>(null)

  // Custom arrow components
  const PrevArrow = () => (
    <button
      className="absolute bottom-0 left-1/2 -translate-x-16 z-10 w-14 h-14 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-all duration-300"
      onClick={() => sliderRef.current?.slickPrev()}
      aria-label="Previous testimonial"
    >
      <ArrowLeft size={20} />
    </button>
  )

  const NextArrow = () => (
    <button
      className="absolute bottom-0 left-1/2 translate-x-2 z-10 w-14 h-14 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-all duration-300"
      onClick={() => sliderRef.current?.slickNext()}
      aria-label="Next testimonial"
    >
      <ArrowRight size={20} />
    </button>
  )

  // Slider settings
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
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  // Smooth scroll setup
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <section className="bg-black text-white py-16 md:py-24 px-4 relative overflow-hidden" id="testimonials">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-400 text-lg mb-4 font-medium tracking-wide">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light max-w-4xl mx-auto leading-tight">
            VOICES OF TRUST: CLIENT STORIES, TESTIMONIALS THAT ILLUMINATE OUR SHARED SUCCESS.
          </h3>
        </div>

        {/* Testimonials slider */}
        <div className="relative pb-24">
          <Slider ref={sliderRef} {...settings} className="testimonials-slider">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="testimonial-card group">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="w-32 h-32 md:w-48 md:h-48 relative overflow-hidden rounded-md shadow-lg">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={200}
                        height={200}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold mb-1">{testimonial.name}</h4>
                      <p className="text-gray-400 mb-4">{testimonial.title}</p>
                      <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom navigation */}
          <div className="mt-12">
            <PrevArrow />
            <NextArrow />
          </div>
        </div>
      </div>
    </section>
  )
}
