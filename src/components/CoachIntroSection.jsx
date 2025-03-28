import React from 'react';

const CoachIntroSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-20 text-center">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-teal-600 relative inline-block mb-4">
        About The Coach
      </h2>

      {/* Name + Title */}
      <h3 className="text-4xl md:text-5xl font-extrabold mt-6">Abhishek Pal</h3>
      <p className="text-teal-600 text-lg font-medium mt-2 mb-10">Global Job Specialist</p>

      {/* Image and Bio */}
      <div className="flex flex-col md:flex-row items-center gap-10 text-left">
        {/* Image */}
        <img
          src="https://img.flexifunnels.com/images/8299/IMG8353_k2mta_2048.JPEG" // Replace with actual image
          alt="Abhishek Pal"
          className="w-full max-w-sm rounded-lg shadow-lg"
        />

        {/* Bio */}
        <div className="max-w-2xl text-gray-800 leading-relaxed">
          <p className="mb-4 text-sm">
            
Meet Abhishek Pal, your Global Job Specialist and guide to international IT career success.12+ Years of IT Expertise: With over a decade in the industry, Abhishek brings a wealth of knowledge in Network & Cloud Architecture.Living the Dream: Currently thriving in Sweden, Abhishek has successfully navigated the path from India to Europe, giving him firsthand experience of the international job market.
<br /> <br />
Impressive Credentials:CISCO Certified Internetwork Expert (CCIE#48843)Microsoft Cloud ArchitectReal-World Success: Abhishek has helped many IT professionals transform their careers and find opportunities abroad.Insider Knowledge: As a Network & Cloud Architect working in Europe for the past 6 years, Abhishek offers up-to-date insights on the global tech job market.Specializations: Expert in Network Security, Cloud Computing, and guiding professionals in various IT fields including Software Engineering, Cyber Security, AI/ML, SAP, and DevOps.
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default CoachIntroSection;
