import React from 'react';

const WhoIsItForAndBonuses = () => {
  const roles = [
    'IT professionals', 'Network Engineers', 'Cloud Specialist',
    'Data Scientist', 'Cybersecurity Engineers', 'Aspiring expats',
    'SAP Consultant', 'BI Analyst', 'AI & ML Engineer',
    'Software developer', 'DevOps/ AWS Specialist', 'IT Project Manager',
  ];

  const bonuses = [
    {
      title: 'Interview Prep Checklist',
      desc: 'We will provide you with a comprehensive Interview Prep Checklist.',
    },
    {
      title: 'Relocation Guide',
      desc: 'We will provide you with a complete Relocation Guide.',
    },
    {
      title: 'Skill Finder Tool',
      desc: 'We will provide you with a comprehensive Skill Finder Tool and a detailed guide on how to use it.',
    },
  ];

  return (
    <>
      {/* Inline Swing Animation */}
      <style>
        {`
          @keyframes swing {
            0% { transform: translateX(-50%) rotate(3deg); }
            50% { transform: translateX(-50%) rotate(-3deg); }
            100% { transform: translateX(-50%) rotate(3deg); }
          }
        `}
      </style>

      {/* Who is it for section */}
      <section className="bg-[#f5f5f5] text-center py-12 px-4">
        <p className="text-orange-500 font-semibold uppercase mb-1">Why Choose Us</p>
        <h2 className="text-3xl font-bold mb-8">Who is it for?</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-lg font-medium text-black mb-10">
          {roles.map((role, idx) => (
            <div key={idx}>{role}</div>
          ))}
        </div>

        {/* Swinging Button */}
        <div className="relative mt-6">
          <div
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{ animation: 'swing 2s infinite ease-in-out' }}
          >
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 text-lg rounded shadow-lg transform rotate-2">
              YES! SAVE MY SPOT NOW &gt;
            </button>
          </div>
        </div>
      </section>

      {/* Bonuses section */}
      <section className="bg-[#fbeeff] py-16 px-4 text-center border-t-8 border-[#0E0F24]">
        <p className="text-pink-600 font-bold mb-2">Bonuses</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-10 italic text-black">
          Here is what you get for <span className="text-pink-600 font-extrabold not-italic">₹Free only (Bonuses)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bonuses.map((item, idx) => (
            <div key={idx} className="bg-black text-white rounded-md p-6 text-left">
              <div className="text-2xl mb-4">🎁</div> {/* Replace with icons if needed */}
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhoIsItForAndBonuses;
