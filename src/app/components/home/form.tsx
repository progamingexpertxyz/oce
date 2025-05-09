"use client";
import { useState } from "react";
import Swal from "sweetalert2";

const NursingDiscountForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [loading, setLoading] = useState(false);
  const [page] = useState('Nursing Discount Page');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "phone") setPhone(value);
    if (name === "service") setService(value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    const formData = { name, email, phone, service, page };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Form submitted successfully.',
        });
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setService('');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error: ' + data.message,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'An error occurred',
        text: 'Please try again later.',
      });
    }

    setLoading(false);
  };

  return (
    <div className="md:w-[360px] bg-white text-black rounded-2xl p-4 shadow-lg md:mr-32 mt-6 md:mt-0">
      <div className="flex justify-center mb-2">
        <img src="/Oce 1.png" alt="OCE logo" className="p-1 rounded-full border border-white w-24 h-24" />
      </div>
      <h3 className="text-center text-xl font-semibold text-[#EE1D90] mb-3 -mt-1">Get 30% Off</h3>

      <form onSubmit={handleSubmit} className="space-y-2">
        <input type="hidden" name="page" value={page} />

        <label htmlFor="name" className="sr-only">Full Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full text-sm rounded-full border border-gray-300 bg-gray-50 px-4 py-1.5 focus:outline-none focus:border-pink-500"
        />

        <label htmlFor="email" className="sr-only">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full text-sm rounded-full border border-gray-300 bg-gray-50 px-4 py-1.5 focus:outline-none focus:border-pink-500"
        />

        <label htmlFor="phone" className="sr-only">Phone</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          className="w-full text-sm rounded-full border border-gray-300 bg-gray-50 px-4 py-1.5 focus:outline-none focus:border-pink-500"
        />

        <label htmlFor="service" className="sr-only">Select Course</label>
        <select
          id="service"
          name="service"
          value={service}
          onChange={handleChange}
          required
          className="w-full text-sm rounded-full border border-gray-300 bg-gray-50 px-4 py-1.5 focus:outline-none focus:border-pink-500"
        >
          <option value="">Select Course</option>
          <option value="Online Course">Online Course</option>
          <option value="Half Online Course">Half Online Course</option>
          <option value="Only Assignments">Only Assignments</option>
          <option value="Simulation Help">Simulation Help</option>
          <option value="Others">Others</option>
        </select>

        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#EE1D90] hover:bg-pink-700 text-white font-semibold py-1.5 px-9 rounded-full text-base transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      <div className="mt-3 text-center text-[10px] text-primary-500 leading-tight">
        <p className="font-semibold text-base">Disclaimer:</p>
        <p className="text-xs -mt-4">Provide accurate info to get your Discount Offer.</p>
      </div>
    </div>
  );
};

export default NursingDiscountForm;
