'use client';
import { useEffect, useState } from "react";

const GradesCarousel = () => {
  const images = ["/img-3.webp", "/img-4.webp", "/img-5.webp", "/img-6.webp"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (previewIndex !== null) {
      setPreviewIndex((previewIndex + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (previewIndex !== null) {
      setPreviewIndex((previewIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="relative w-full py-12 px-8 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
          opacity: 0.35,
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950 to-pink-200 opacity-30 z-10"></div>

      {/* Content Wrapper */}
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Image Carousel */}
        <div className="md:w-[500px] w-full h-[300px] relative overflow-hidden rounded-xl shadow-md ml-16 cursor-pointer">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Grade ${index}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              onClick={() => setPreviewIndex(index)}
            />
          ))}
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Our Grades</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Explore how our students consistently achieve high performance <br />with the help of our academic support services.
          </p>
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-6 right-8 text-white text-3xl font-bold hover:text-red-500"
            onClick={() => setPreviewIndex(null)}
          >
            &times;
          </button>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold px-4"
            onClick={handlePrev}
          >
            &#8592;
          </button>
          <img
            src={images[previewIndex]}
            alt="Preview"
            className="w-full max-w-4xl max-h-[90vh] object-contain rounded-lg shadow-lg"
          />
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold px-4"
            onClick={handleNext}
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
};

export default GradesCarousel;
