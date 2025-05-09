import { useEffect, useState } from 'react';

export default function PopupForm() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 mx-4">
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-gray-500 text-2xl font-bold hover:text-gray-700"
          onClick={() => setShow(false)}
        >
          &times;
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-0">
          <img
            src="Oce 1.png"
            alt="ocelogo"
            className=" p-2 rounded-full border-2 border-white w-24 h-24"
          />
        </div>

        <h3 className="text-center text-lg font-semibold text-pink-600 mb-2">
          Get 30% Off
        </h3>

        {/* Your Form */}
        <form action="tmn_class.php" method="POST" className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full text-sm rounded-full border border-gray-300 bg-gray-50 px-4 py-2 focus:outline-none focus:border-pink-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full text-sm rounded-full border border-gray-300 bg-gray-50 px-4 py-2 focus:outline-none focus:border-pink-500"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            required
            className="w-full text-sm rounded-full border border-gray-300 bg-gray-50 px-4 py-2 focus:outline-none focus:border-pink-500"
          />

          <select
            name="service"
            required
            className="w-full text-sm rounded-full border border-gray-300 bg-gray-50 px-4 py-2 focus:outline-none focus:border-pink-500"
          >
            <option value="">Select Course</option>
            <option value="Online Course">Online Course</option>
            <option value="Half Online Course">Half Online Course</option>
            <option value="Only Assignments">Only Assignments</option>
            <option value="Simulation Help">Simulation Help</option>
            <option value="Others">Others</option>
          </select>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full text-sm transition"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="mt-4 text-center text-[11px] text-blue-500 leading-tight">
          <p className="font-semibold">Disclaimer:</p>
          <p>Provide accurate info to get your Discount Offer.</p>
        </div>
      </div>
    </div>
  );
}
