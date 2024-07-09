import React from 'react';

const PANVerificationSolutions = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="text-center pt-[200px] pb-16 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Enhance Your Compliance with Reliable PAN Verification</h1>
        <p className="text-lg">Verify PAN details in real-time to ensure accuracy and compliance in all your business transactions.</p>
      </section>
      
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-lg mb-4">
            PAN Verification is crucial for businesses in India to ensure that all financial transactions are compliant with tax regulations. Verifying a PAN (Permanent Account Number) helps in authenticating the identity of individuals and entities, reducing tax evasion and enhancing the reliability of financial documentation.
          </p>
        </div>
      </section>
      
      {/* Applications of PAN Verification Across Industries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Applications of PAN Verification Across Industries</h2>
          <ul className="space-y-8">
            <li>
              <h3 className="text-xl font-bold mb-4">Banking and Financial Services</h3>
              <p>Use: Verification of PAN for opening new bank accounts, processing loans, and conducting high-value transactions.</p>
              <p>Benefits: Helps in adhering to KYC norms and monitoring financial transactions to prevent fraudulent activities.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Real Estate</h3>
              <p>Use: Verification of PAN details for property transactions, registration, and legal documentation.</p>
              <p>Benefits: Ensures that all parties in property transactions are verified, reducing the risk of fraudulent deals.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Human Resources</h3>
              <p>Use: Verification of PAN for salary account setups and formulating tax deduction details for employees.</p>
              <p>Benefits: Streamlines payroll processing and ensures accurate TDS (Tax Deducted at Source) submissions.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">E-commerce</h3>
              <p>Use: Verification of PAN for sellers on platforms to ensure tax compliance and legitimate business practices.</p>
              <p>Benefits: Maintains a trusted marketplace by verifying seller identities and their tax registration statuses.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Insurance</h3>
              <p>Use: PAN verification during the issuance of policies and for processing claims.</p>
              <p>Benefits: Assists in fraud prevention and ensures compliance with regulatory guidelines.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Healthcare</h3>
              <p>Use: Verification of PAN for billing, insurance claims processing, and high-value transactions.</p>
              <p>Benefits: Helps in accurate billing and streamlining insurance claims, ensuring compliance with financial regulations.</p>
            </li>
          </ul>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">FAQs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-2">What is PAN Verification?</h3>
              <p>PAN Verification involves checking the validity of a Permanent Account Number provided by individuals or entities against the database maintained by the Income Tax Department of India.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Why is PAN Verification important for businesses?</h3>
              <p>It is crucial for validating identity, ensuring tax compliance, preventing financial fraud, and maintaining accurate financial records.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">How does PAN Verification work?</h3>
              <p>Businesses can verify PAN details electronically through interfaces provided by service partners linked with the Income Tax Department. This verification checks the name and other registration details against the PAN number provided.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Is PAN Verification mandatory?</h3>
              <p>Yes, PAN Verification is mandatory for complying with various financial and tax-related regulations in India, especially for high-value transactions and while onboarding new customers or vendors.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Can PAN Verification be automated?</h3>
              <p>Yes, many service providers offer APIs that can integrate PAN Verification into your business systems for real-time checking and validation.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">What are the consequences of not verifying PAN?</h3>
              <p>Failing to verify PAN can lead to regulatory penalties, tax issues, and potential disruptions in business due to non-compliance with financial regulations.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 text-center bg-gray-100">
        <p className="text-lg mb-4">Ensure the authenticity of financial transactions and maintain compliance with our efficient PAN Verification solutions. Get in touch to integrate PAN Verification into your operations today!</p>
        <button className="px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700">Start PAN Verification Now</button>
      </section>
    </div>
  );
};

export default PANVerificationSolutions;
