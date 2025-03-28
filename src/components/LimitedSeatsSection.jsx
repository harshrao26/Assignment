import React, { useEffect, useState } from 'react';

const LimitedSeatsSection = () => {
  const [timeLeft, setTimeLeft] = useState({ hrs: '00', mins: '00', secs: '00' });

  useEffect(() => {
    const deadline = new Date(new Date().getTime() + 2 * 60 * 60 * 1000 + 19 * 60 * 1000 + 18 * 1000); // 2h 19m 18s

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

  return (
    <>
      {/* Swing animation CSS */}
      <style>
        {`
          @keyframes swing {
            0% { transform: translateX(-50%) rotate(3deg); }
            50% { transform: translateX(-50%) rotate(-3deg); }
            100% { transform: translateX(-50%) rotate(3deg); }
          }
        `}
      </style>

      <div className="bg-[#E6FAFB] py-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-teal-600 mb-6">
          Limited Seats Available (Filling Fast)
        </h2>

        {/* Countdown Timer */}
        <div className="flex justify-center items-center space-x-4 mb-10">
          {[
            { label: 'HOURS', value: timeLeft.hrs },
            { label: 'MINUTES', value: timeLeft.mins },
            { label: 'SECONDS', value: timeLeft.secs },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-800 text-white text-2xl font-bold px-4 py-2 rounded-lg">
                {item.value}
              </div>
              <div className="text-xs font-semibold mt-1 text-gray-700">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Swing Button */}
        <div className="relative">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 animate-swing z-50"
            style={{ animation: 'swing 2s infinite ease-in-out' }}
          >
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 text-lg rounded shadow-lg transform rotate-2">
              YES! SAVE MY SPOT NOW &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LimitedSeatsSection;
