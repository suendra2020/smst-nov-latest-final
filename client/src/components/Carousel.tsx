import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: '/three.png',
    title: '',
    description: '',
  },
  {
    id: 2,
    image: '/five.png',
    title: '',
    description: '',
  },
  {
    id: 3,
    image: '/one.png',
    title: 'Venkaiah Swami',
    description: 'The Supreme Guru - Representing Brahma, Vishnu, and Shiva',
  },
  {
    id: 4,
    image: '/four.png',
    title: 'Shirdi Sai Baba',
    description: 'The Compassionate Saint - A beacon of divine wisdom and spiritual guidance',
  },
  {
    id: 5,
    image: '/two.png',
    title: 'Lord Dattatreya',
    description: 'The Divine Master - Blessed teachings of the enlightened saint',
  },
  {
    id: 6,
    image: '/five.png',
    title: '',
    description: '',
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  return (
    <div className="relative w-full bg-gray-900 overflow-hidden rounded-lg">
      {/* Carousel Container */}
      <div className="relative h-96 md:h-screen flex items-center justify-center">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
          <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4">
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg md:text-2xl max-w-2xl">
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-orange-500 hover:bg-orange-600 text-white p-2 md:p-3 rounded-full transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-orange-500 hover:bg-orange-600 text-white p-2 md:p-3 rounded-full transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-orange-500 w-8'
                : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Auto-play Toggle */}
      <button
        onClick={() => setAutoPlay(!autoPlay)}
        className="absolute top-6 right-6 z-20 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all"
      >
        {autoPlay ? '⏸ Pause' : '▶ Play'}
      </button>
    </div>
  );
}
