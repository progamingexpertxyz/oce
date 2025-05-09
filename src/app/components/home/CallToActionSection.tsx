'use client';
import NursingDiscountForm from "../home/form";

const AnotherComponent = () => {
  return (
    <section className="relative py-4 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/bg1.jpg')", opacity: 0.55 }}></div>
      <div className="absolute inset-0 opacity-50 z-0"></div>
      <div className="relative z-10 container-custom mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-7 text-black">Ready to Boost Your <br /> Confidence and Skills?</h2>
          <p className="text-xl mb-2 text-black -mt-5 leading-6 ml-1">
            Take control of your academic success. Explore our <br /> ethical support services today.
          </p>
        </div>
       
          <NursingDiscountForm />
        </div>

    </section>
  );
};

export default AnotherComponent;
