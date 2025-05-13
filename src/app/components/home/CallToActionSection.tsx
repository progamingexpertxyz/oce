'use client';
import NursingDiscountForm from "../home/form";

const AnotherComponent = () => {
  return (
    <section className="relative py-4 text-white text-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/bg1.jpg')", opacity: 0.55 }}></div>
      <div className="absolute inset-0 opacity-50 z-0"></div>
      <div className="relative z-10 container-custom mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="md:w-1/2 mt-2 md:mt-0 md:ml-8">
          <h2 className="text-xl md:text-5xl font-bold mb-7 md:mb-7 leading-5 md:leading-16 text-black">Ready to Boost Your <br /> Confidence and Skills?</h2>
          <p className="text-sm md:text-lg mb-2 text-black -mt-5  md:leading-7 leading-4 ml-1">
            Take control of your academic success.<span className="block w-2 md:hidden" />
             Explore our <span className="hidden w-2 md:block" /> ethical support services today.
          </p>
        </div>
       
          <NursingDiscountForm />
        </div>

    </section>
  );
};

export default AnotherComponent;
