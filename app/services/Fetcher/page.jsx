
import React from 'react';

const Fetcher = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="text-center pt-[200px] py-16 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Instant KYC Retrieval Across Industries</h1>
        <p className="text-lg mb-4">
          Access comprehensive customer profiles with just a name and mobile number, leveraging our fully compliant KYC database.
        </p>
      </section>
      
      {/* Overview of Fetcher */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Overview of Fetcher</h2>
          <p className="text-lg mb-4">
            Our Fetcher service simplifies the KYC process by allowing businesses to retrieve detailed customer information using only a name and mobile number. This efficient solution is designed to support a range of industries by providing quick access to essential customer data.
          </p>
          <p className="text-lg mb-4">
            Fetcher adheres to the highest standards of compliance, ensuring all data retrieval is in full alignment with Indian regulatory requirements.
          </p>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Key Features</h2>
          <ul className="space-y-4">
            <li><strong>Comprehensive Data Retrieval:</strong> Obtain detailed customer information including full name, PAN card details, masked Aadhaar number, date of birth, income, gender, voter ID, and other relevant IDs and addresses.</li>
            <li><strong>Fast and Secure:</strong> Our platform ensures rapid access to data while maintaining stringent security protocols to protect personal information.</li>
          </ul>
        </div>
      </section>
      
      {/* Industry Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Industry Applications</h2>
          <ul className="space-y-4">
            <li><strong>Banking and Finance:</strong> Enhance customer verification processes, streamline onboarding, and improve credit assessment with quick access to financial and identity information.</li>
            <li><strong>Telecommunications:</strong> Utilize Fetcher for rapid identity verification of new subscribers, ensuring compliance and speeding up the onboarding process.</li>
            <li><strong>Insurance:</strong> Accelerate claim processing and policy issuance by quickly verifying policyholder details.</li>
            <li><strong>Retail and E-commerce:</strong> Use Fetcher to verify customer identity during high-value transactions and minimize the risk of fraud.</li>
            <li><strong>Healthcare:</strong> Securely verify patient identities for online consultations and health services, ensuring privacy and compliance.</li>
          </ul>
        </div>
      </section>
      
      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Technical Specifications</h2>
          <ul className="space-y-4">
            <li><strong>Data Sources:</strong> Fetcher integrates seamlessly with official databases to pull encrypted and secure data. Our system is updated in real-time to ensure accuracy and reliability.</li>
            <li><strong>Integration:</strong> Easily integrate Fetcher into your existing systems with our robust API, designed for straightforward implementation and minimal disruption.</li>
          </ul>
        </div>
      </section>
      
      {/* Customer Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Customer Success Stories</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Case Study:</h3>
            <p>Discover how a leading bank utilized Fetcher to reduce onboarding time by 70% while enhancing KYC accuracy and compliance.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Testimonial:</h3>
            <p>"Fetcher has revolutionized how we manage customer onboarding and verification, making it faster and more reliable than ever." - CEO of a major telecom company</p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 text-center bg-gray-100">
        <p className="text-lg mb-4">Ready to streamline your KYC process?</p>
        <button className="px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700">Contact Us to Get Started with Fetcher</button>
      </section>
    </div>
  );
};

export default Fetcher;
