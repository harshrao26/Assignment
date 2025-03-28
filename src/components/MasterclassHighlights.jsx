import React from 'react';

const cards = [
  {
    title: 'The Strategic Roadmap',
    desc: 'Chart your course to a dream IT job abroad, custom-tailored for ambitious professionals',
  },
  {
    title: 'Recruiter Magnet Strategies',
    desc: 'Learn foolproof techniques to grab attention and land interviews in competitive international markets',
  },
  {
    title: 'Visa Sponsorship Secrets',
    desc: 'Discover how to find and approach employers willing to sponsor your Relocation abroad',
  },
  {
    title: 'Skill-to-Opportunity Mapping',
    desc: 'Understand how to position your specific IT expertise (Cloud, Network, AI/ML, etc.) for maximum impact in the global job market',
  },
  {
    title: 'Insider Knowledge',
    desc: 'Gain priceless insights from a CCIE (#48843) and Microsoft Cloud Architect with 12+ years of international experience',
  },
  {
    title: 'Community Power',
    desc: 'Learn how to tap into our exclusive Global IT Engineers Community to supercharge your career growth',
  },
];

const MasterclassHighlights = () => {
  return (
    <section className="bg-[#0E0F24] text-white py-16 px-4 md:px-20 text-center">
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

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        What You’ll Uncover in this Masterclass
      </h2>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-500 rounded-lg p-6 text-left bg-[#0E0F24] hover:border-cyan-400 transition"
          >
            {/* Dummy icon */}
            <div className="text-cyan-400 text-3xl mb-3">🧩</div>

            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.desc}</p>

            <p className="text-cyan-400 text-sm font-medium mt-4 hover:underline">
              Read More →
            </p>
          </div>
        ))}
      </div>

      {/* Swinging Button */}
      <div className="relative mt-16">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 z-50"
          style={{ animation: 'swing 2s infinite ease-in-out' }}
        >
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 text-lg rounded shadow-lg transform rotate-2">
            YES! SAVE MY SPOT NOW &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default MasterclassHighlights;
