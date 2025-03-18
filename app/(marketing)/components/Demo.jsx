import React from "react";

const TerzoDemoPage = () => {
  return (
    <div className="min-h-screen rounded-lg flex items-center justify-center">
      <div className="w-full max-w-6xl flex flex-col rounded-2xl md:flex-row">
        {/* Left Column - Dark gradient background - Corrected to match design */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-purple-950 via-purple-900 to-blue-950 p-12 flex flex-col justify-center">
          <div className="flex mb-6">
            <div className="h-2 w-8 rounded-full bg-purple-500 mr-2"></div>
            <div className="h-2 w-2 rounded-full bg-purple-500"></div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Zsonic Demo Experience
          </h1>
          <p className="text-white text-lg">
            During your customized demo, our team of product experts will show
            you an overview of Terzo core platform to help make the job you do
            every day easier.
          </p>
        </div>

        {/* Right Column - Light background with form */}
        <div className="w-full md:w-1/2 bg-gray-50 p-12">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-purple-500"
              >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path d="M2 17L12 22L22 17" fill="currentColor" />
                <path d="M2 12L12 17L22 12" fill="currentColor" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-2">
            Schedule a Demo
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Submit your information below and we will be in touch to set up a
            live demo.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-48 bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-full font-medium"
              >
                Schedule a Demo
              </button>
              <p className="mt-4 text-sm text-gray-600">
                Your personal data will be processed in accordance with{" "}
                <a href="#" className="text-purple-400 hover:underline">
                  Terzo's Privacy Statement
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TerzoDemoPage;
