import React from 'react';

export default function Features() {
  return (
    <section className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20 flex flex-wrap justify-center items-start">
        {/* MISSION Section */}
        <div id="mission" className="max-w-md mx-4 bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105 hover:border-blue-500 hover:border-gold-500 mb-6">
          <div className="text-center p-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-500 hover:text-blue-300">MISSION 🚀</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-loose">Our mission is to inspire a financial revolution among the young and the bold. We're committed to providing the tools, knowledge, and opportunities for the next generation to take charge of their financial destinies. We want to make investing as second nature as breathing, helping young minds pave the way for a prosperous tomorrow.</p>
          </div>
        </div>

        {/* VISION Section */}
        <div className="max-w-md mx-4 bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105 hover:border-blue-500 hover:border-gold-500 mb-6">
          <div className="text-center p-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-500 hover:text-blue-200">VISION 🔮</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-loose">Our vision is to be the guiding star in the financial galaxy of tomorrow. We see a future where the youth aren't just prepared for financial challenges; they're excited to meet them head-on. We envision a world where financial wisdom is shared, wealth is accessible, and every young person has the power to shape their own financial universe. Join us in bringing this vision to life.</p>
          </div>
        </div>

        {/* ABOUT US Section */}
        <div className="max-w-md mx-4 bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105 hover:border-blue-500 hover:border-gold-500 mb-6">
          <div className="text-center p-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-500 hover:text-blue-300">ABOUT US ⭐</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-loose">Imagine a platform where young minds can venture into the world of stocks, fixed deposits, and other intriguing assets. Witness your investments grow, chart your financial path, and seize control of your future. But that's not all - you can also experience the freedom of UPI-based payments tailored for the youth.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
