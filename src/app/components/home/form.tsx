"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const options = [
  "Online Course",
  "Half Online Course",
  "Only Assignments",
  "Simulation Help",
  "Others"
];

const NursingDiscountForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
const [page, setPage] = useState('');

useEffect(() => {
  if (typeof window !== 'undefined') {
    setPage(window.location.href);
  }
}, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "phone") setPhone(value);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.name;
    setServices((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    const formData = { name, email, phone, services, page };

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
        setName('');
        setEmail('');
        setPhone('');
        setServices([]);
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
    <div className="md:w-[360px] bg-white text-black rounded-2xl p-4 shadow-lg md:mr-32 mt-4 md:mt-0 border border-neutral-200">
      <div className="flex justify-center mb-2">
        <img src="/Oce 1.png" alt="OCE logo" className="p-1 rounded-full border border-white w-24 h-24" />
      </div>
      <h3 className="text-center text-xl font-semibold text-[#EE1D90] mb-3 -mt-1">Get 30% Off</h3>

      <form onSubmit={handleSubmit} className="space-y-2">
        <input type="hidden" name="page" value={page} />
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full text-sm rounded-full border border-gray-300 bg-gray-50 px-4 py-1.5"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full text-sm rounded-full border border-gray-300 bg-gray-50 px-4 py-1.5"
        />
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          className="w-full text-sm rounded-full border border-gray-300 bg-gray-50 px-4 py-1.5"
        />

        <div className="pt-1">
          <p className="text-sm font-semibold mb-1 text-left">Select Services</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {options.map((option) => (
              <label key={option} className="flex items-center gap-2 text-left">
                <input
                  type="checkbox"
                  name={option}
                  checked={services.includes(option)}
                  onChange={handleCheckboxChange}
                  className="form-checkbox text-secondary-400"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

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
