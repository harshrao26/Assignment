import React from 'react';

const FinalCallToAction = () => {
  return (
    <>
      {/* Swing Animation Inline */}
      <style>
        {`
          @keyframes swing {
            0% { transform: rotate(3deg); }
            50% { transform: rotate(-3deg); }
            100% { transform: rotate(3deg); }
          }
        `}
      </style>

      {/* Top Orange Section */}
      <section className="bg-orange-500 text-white text-center py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          We are limited to 200 webinar attendees.
        </h2>
        <p className="text-lg mb-6">Once the seats become full, registration will close</p>
        <button className="border border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-orange-600 transition">
          YES! I WANT TO SAVE MY SPOT NOW &gt;
        </button>
      </section>

      {/* Ready to Fly Section */}
      <section className="bg-[#1c1c1c] text-white text-center py-16 px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Fly?</h2>
        <p className="text-gray-400 mb-10">
          This Webinar contains everything you could ever need to know about Global Jobs
        </p>

        {/* Swinging Button */}
        <div
          className="inline-block animate-swing transform rotate-2"
          style={{ animation: 'swing 2s infinite ease-in-out' }}
        >
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded shadow-lg text-lg">
            YES! SAVE MY SPOT NOW &gt;
          </button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white text-[10px] text-gray-700 text-center px-4 py-6 max-w-4xl mx-auto leading-relaxed">
        Disclaimer: This site is not a part of the Facebook website or Meta Platforms, Inc. Additionally, this site is NOT
        endorsed by Facebook or Instagram in any way. "Facebook" & "Instagram" are trademarks of Meta Platforms, Inc.
        Testimonials or examples used are exceptional results, which do not apply to the average purchaser and are not intended
        to represent or guarantee that anyone will achieve the same or similar results. Each individual’s success depends on
        their background, dedication, desire, and motivation. There is no assurance that examples of past earnings can be
        duplicated in the future. We cannot guarantee your future results and/or success...
      </section>
    </>
  );
};

export default FinalCallToAction;
