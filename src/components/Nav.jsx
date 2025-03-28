import React, { useEffect, useState } from 'react';

const NavbarWithCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ hrs: '00', mins: '00', secs: '00' });
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: ''
  });

  useEffect(() => {
    const deadline = new Date(new Date().getTime() + 2 * 60 * 60 * 1000 + 30 * 60 * 1000 + 20 * 1000);
    const updateTimer = () => {
      const now = new Date();
      const diff = deadline - now;

      if (diff > 0) {
        const hrs = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
        const mins = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, '0');
        const secs = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
        setTimeLeft({ hrs, mins, secs });
      } else {
        setTimeLeft({ hrs: '00', mins: '00', secs: '00' });
      }
    };

    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://hook.eu2.make.com/tkkcbe1nahgsemi32of48zgkj0k986op', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      alert('Submitted successfully!');
      setShowModal(false);
      setFormData({ name: '', email: '', phone: '', city: '' });
    } catch (err) {
      alert('Something went wrong.');
    }
  };

  return (
    <>
      {/* CSS for Swing */}
      <style>
        {`
          @keyframes swing {
            0% { transform: translateX(-50%) rotate(5deg); }
            50% { transform: translateX(-50%) rotate(-5deg); }
            100% { transform: translateX(-50%) rotate(5deg); }
          }
        `}
      </style>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-300 p-8 rounded-lg w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-center mb-6">Register Now</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                required
                className="w-full p-2 rounded"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email ID"
                required
                className="w-full p-2 rounded"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="tel"
                placeholder="🇮🇳 Phone Number"
                required
                className="w-full p-2 rounded"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <input
                type="text"
                placeholder="City"
                required
                className="w-full p-2 rounded"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
              <button
                type="submit"
                className="bg-red-600 text-white w-full py-2 font-bold rounded hover:bg-red-700"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Countdown Banner */}
      <div className="bg-red-500 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-lg font-bold">Registrations Closing in</h1>
        <div className="flex space-x-2">
          <div className="bg-white text-red-600 px-2 py-1 rounded-md text-lg font-bold">{timeLeft.hrs}</div>
          <div className="bg-white text-red-600 px-2 py-1 rounded-md text-lg font-bold">{timeLeft.mins}</div>
          <div className="bg-white text-red-600 px-2 py-1 rounded-md text-lg font-bold">{timeLeft.secs}</div>
        </div>
        <div className="relative" style={{ animation: 'swing 1s infinite ease-in-out' }}>
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-lg"
            onClick={() => setShowModal(true)}
          >
            Register Now
          </button>
        </div>
      </div>
    </>
  );
};

export default NavbarWithCountdown;
