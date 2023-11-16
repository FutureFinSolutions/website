import React from 'react';

export default function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="relative bg-purple-600 py-10 px-8 md:py-16 md:px-12 rounded-full transform transition-transform hover:scale-105" data-aos="fade-up">

          {/* Background illustration */}
          <div className="absolute right-0 top-0 -ml-40 pointer-events-none" aria-hidden="true">
            <svg width="238" height="110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="illustration-04" x1="369.483" y1="-84.633" x2="139.954" y2="-199.798" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fff" stopOpacity=".01" />
                  <stop offset="1" stopColor="#fff" stopOpacity=".24" />
                </linearGradient>
              </defs>
              fill="url(#illustration-04)" /
            </svg>
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-white mb-2">Stay in the loop</h3>
              <p className="text-purple-200 text-lg">Fill out this form and connect with us.</p>
            </div>

            {/* CTA form */}
            <div data-aos="fade-up" data-aos-delay="600">
              {/* Apply styles to the button */}
              <a className="btn text-black bg-white hover:bg-white hover:text-black rounded-full w-full sm:w-auto sm:ml-4 transition duration-300" href="https://docs.google.com/forms/d/e/1FAIpQLSe5ijyIavO3j3vAAdulps-qrvP3-_wykYJ_Z2Ky3GN_YvH22A/viewform?usp=sf_link" style={{ padding: '12px 24px' }}>
                Form
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
