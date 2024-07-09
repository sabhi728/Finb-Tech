'use client';
import React from 'react';

const kyc = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="text-center pt-[200px] py-16 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Seamless KYC & Onboarding for Every Industry</h1>
        <p className="text-lg mb-4">
          Leverage comprehensive and compliant KYC verification tailored to meet the diverse needs of different sectors with precision and efficiency.
        </p>
      </section>
      
      {/* Introduction to KYC & Onboarding */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-lg">
            At Finb Tech, we understand the importance of streamlined and secure customer onboarding. Our KYC solutions are designed to integrate seamlessly with your existing systems, offering robust document verification and real-time data validation across a wide range of industries. From banking to retail, our technology ensures compliance and enhances customer experience.
          </p>
        </div>
      </section>
      
      {/* Industry-Specific Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Industry-Specific Solutions</h2>
          <ul className="space-y-4">
            <li><strong>Banking & Financial Services:</strong> Optimize account openings with real-time verification of Aadhaar, PAN, and other banking documents. Ensure full compliance with RBI guidelines while delivering a smooth customer experience.</li>
            <li><strong>Telecommunications:</strong> Speed up the onboarding process for new customers with instant verifications of ID proofs such as Aadhaar and voter ID, directly impacting your time to market and customer satisfaction.</li>
            <li><strong>Healthcare:</strong> Securely verify patient identities using Aadhaar and PAN for a streamlined registration process that respects patient confidentiality and complies with healthcare regulations.</li>
            <li><strong>Retail & E-Commerce:</strong> Enhance customer trust with quick and reliable document verification at the point of sale or online checkout, including Aadhaar and DL, reducing fraud and simplifying transactions.</li>
            <li><strong>Automotive:</strong> Use DL, RC, and other relevant document verifications to ensure a seamless onboarding experience for vehicle registrations and purchases.</li>
          </ul>
        </div>
      </section>
      
      {/* Document Verification Capabilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Document Verification Capabilities</h2>
          <ul className="space-y-4">
            <li><strong>Aadhaar Verification:</strong> Authenticate Aadhaar details swiftly to ensure eligibility and identity accuracy for any service or transaction.</li>
            <li><strong>PAN Verification:</strong> Verify PAN cards instantly to aid in financial transactions and meet tax-related compliance requirements.</li>
            <li><strong>Bank Account Validation:</strong> Ensure bank details are correct and active, reducing the risk of transactional errors in financial services.</li>
            <li><strong>Voter ID and Driving License (DL):</strong> Verify voter ID and DL details to enhance the authenticity of user profiles across various applications.</li>
            <li><strong>Vehicle Registration Certificate (RC):</strong> Validate vehicle ownership details during transactions to prevent fraud and ensure legal compliance.</li>
          </ul>
        </div>
      </section>
      
      {/* Why Choose Finb Tech for KYC & Onboarding? */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-lg">
            Our KYC and onboarding solutions offer unparalleled accuracy, compliance, and flexibility, designed to fit perfectly into your operational workflow. With Finb Tech, benefit from reduced onboarding times, increased customer satisfaction, and robust fraud prevention mechanisms.
          </p>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 text-center bg-gray-100">
        <p className="text-lg mb-4">Enhance your onboarding process with our advanced KYC solutions.</p>
        <button className="px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700">Get Started with Finb Tech</button>
      </section>
    </div>
  );
};

export default kyc;
