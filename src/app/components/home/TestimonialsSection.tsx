import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import TestimonialCard from '../ui/TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Pharmacology finally makes sense! My tutor explained drug classes in a way I could actually understand and remember. Highly recommend!",
      author: "Jessica M.",
      course: "Nursing Student",
      imageUrl: "https://randomuser.me/api/portraits/women/18.jpg", 
      rating: 5,
    },
    {
      quote: "I was really intimidated by Pathophysiology. The one-on-one sessions helped break down complex disease processes, making it much less daunting.",
      author: "David L.",
      course: "BSN Program",
      imageUrl: "https://randomuser.me/api/portraits/men/20.jpg", 
      rating: 4,
    },
    {
      quote: "The coaching on time management made a huge difference in handling my nursing workload.",
      author: "Fatima R.",
      course: "Nursing Student",
      imageUrl: "https://randomuser.me/api/portraits/women/22.jpg", 
      rating: 5,
    },
  ];

  return (
    <section className="py-8">
      <div className="container-custom">
        <SectionTitle 
          title="What Our Students Say"
          subtitle="Hear from students who have enhanced their academic journey with our support."
        />

        <div className="max-w-2xl mx-auto"> {/* Centered and width controlled */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard 
                  quote={testimonial.quote}
                  author={testimonial.author}
                  course={testimonial.course}
                  imageUrl={testimonial.imageUrl}
                  rating={testimonial.rating}
                  delay={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
