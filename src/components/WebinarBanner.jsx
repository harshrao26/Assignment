import React from 'react';

const WebinarBanner = () => {
  return (
    <div className="bg-[#E6FAFB] py-10 px-4 md:px-16 text-center">
      {/* Top Badge */}
      <div className="inline-block bg-teal-500 text-white font-semibold px-4 py-1 rounded-full text-sm mb-4">
        EXCLUSIVE <span className="text-white font-bold">FREE LIVE WEBINAR</span>
      </div>

      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mt-2">
        GET YOUR DREAM IT <span className="text-red-600 underline">JOB ABROAD</span><br />
        WITHOUT <span className="text-red-600 underline">VISA SPONSORSHIP</span> HURDLES
      </h1>

      {/* Date/Time */}
      <p className="text-lg md:text-xl mt-4">
        <span className="text-teal-600 font-bold">Live Webinar On-</span>{' '}
        <span className="font-bold text-black">Saturday 8th March at 11:00 AM</span>
      </p>

      {/* Content Section */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Image */}
        <img
          src="https://img.flexifunnels.com/images/8299/IMG83691_ezmdg_2048.JPEG" // Replace with actual image path
          alt="Webinar Host"
          className="w-96 h-auto  shadow-lg"
        />

        {/* Right Bullet Points */}
        <ul className="text-left text-gray-800 space-y-4 max-w-md">
          {[
            "How to make your resume stand out to foreign companies",
            "Using LinkedIn to get noticed by overseas job recruiters",
            "Finding companies that will help with your work visa",
            "Step-by-step plan to get an IT job in another country"
          ].map((point, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-teal-500 text-xl mr-2">✔️</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WebinarBanner;
