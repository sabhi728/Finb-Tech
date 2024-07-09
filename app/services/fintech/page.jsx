import React from 'react';

const FintechAPIs = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="text-center pt-[200px] py-16 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Revolutionize Your Business with Comprehensive Fintech APIs</h1>
        <p className="text-lg mb-4">
          Unlock the potential of your business with our secure, scalable, and diverse set of Fintech APIs designed for seamless integration across various sectors.
        </p>
      </section>
      
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-lg">
            Our robust suite of Fintech APIs delivers precise, efficient, and secure solutions tailored to meet the needs of multiple industries including finance, healthcare, real estate, automotive, and more. Whether it’s enhancing identity verification processes or facilitating complex financial transactions, our APIs are designed to empower your operations and ensure compliance with regulatory standards.
          </p>
        </div>
      </section>
      
      {/* Identity Verification APIs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Identity Verification APIs</h2>
          <ul className="space-y-4">
            <li><strong>Aadhaar Verification APIs:</strong> Automate and secure your KYC processes with Aadhaar Verification, Aadhaar OCR, Aadhaar Masking, and more for a paperless and offline verification experience.</li>
            <li><strong>Other ID Verifications:</strong> Ensure comprehensive user verification with APIs for Driving License, PAN Card, Passport, and Voter ID, including features like PAN Aadhaar Seeding and PAN Name DoB checks.</li>
          </ul>
        </div>
      </section>
      
      {/* Utilities APIs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Utilities APIs</h2>
          <p className="text-lg mb-4">
            Streamline daily operations with essential services like Electricity Bill API, RC Verification, and Stolen Vehicle Verification.
          </p>
          <p className="text-lg mb-4">
            Enhance your customer onboarding process in rental and real estate sectors with reliable checks such as Email Verification and Tenant Registration.
          </p>
        </div>
      </section>
      
      {/* Entity/Business Level Verification */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Entity/Business Level Verification</h2>
          <p className="text-lg mb-4">
            Simplify business verification processes with APIs for DIN, Udyog Aadhaar, TIN Search, and GSTIN, crucial for regulatory compliance and business operations management.
          </p>
        </div>
      </section>
      
      {/* Employment Verification APIs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Employment Verification APIs</h2>
          <p className="text-lg mb-4">
            Securely verify employee details with UAN Verification, EPFO Verification, and check for Dual Employment or Employment Defaults to maintain workplace integrity and compliance.
          </p>
        </div>
      </section>
      
      {/* Banking & Payments APIs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Banking & Payments APIs</h2>
          <p className="text-lg mb-4">
            Leverage APIs like Bank Statement Analysis and UPI Handle Verification to enhance financial transaction capabilities and security.
          </p>
          <p className="text-lg mb-4">
            Utilize Experian Credit Report and Digital Address Verification to improve credit decision processes and customer verification.
          </p>
        </div>
      </section>
      
      {/* Fraud Detection APIs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Fraud Detection APIs</h2>
          <p className="text-lg mb-4">
            Protect your operations with advanced verification techniques using Face API Verification, Liveness Checks, Court Checks, Defaulting Director Checks, and Global Sanctions Checks.
          </p>
        </div>
      </section>
      
      {/* Professional Verification APIs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Professional Verification APIs</h2>
          <p className="text-lg mb-4">
            Ensure the credentials of professionals in the insurance and healthcare sectors with Insurance Agent Verification, Nurses Verification, and validations for Medical Documents and Opinions, including ICSI Verification.
          </p>
        </div>
      </section>
      
      {/* Industry Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Industry Applications</h2>
          <ul className="space-y-4">
            <li><strong>Finance:</strong> Enhance fraud prevention and customer onboarding.</li>
            <li><strong>Healthcare:</strong> Secure patient data and verify medical staff credentials.</li>
            <li><strong>Real Estate:</strong> Streamline tenant verifications and property management operations.</li>
            <li><strong>Automotive:</strong> Authenticate vehicle and owner details efficiently.</li>
          </ul>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 text-center bg-gray-100">
        <p className="text-lg mb-4">Integrate Flexibility and Security into Your Business Today!</p>
        <button className="px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700">Get API Access Now</button>
      </section>
    </div>
  );
};

export default FintechAPIs;
