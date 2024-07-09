import React from 'react';

const B2BOnboarding = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="text-center pt-[200px] py-16 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Accelerate Your B2B Onboarding with Comprehensive Document Verification</h1>
        <p className="text-lg mb-4">
          Ensure fast, secure, and compliant onboarding across industries with our advanced document verification services.
        </p>
      </section>
      
      {/* Overview of B2B Onboarding Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Overview of B2B Onboarding Services</h2>
          <p className="text-lg mb-4">
            Our B2B Onboarding services are designed to facilitate the swift and secure verification of essential corporate documents, enabling businesses to streamline their partner and client onboarding processes. By integrating advanced verification for director identities, GST registrations, and Corporate Identification Numbers (CIN), we help you ensure compliance and establish trust from the outset.
          </p>
          <p className="text-lg mb-4">
            Reduce operational friction, enhance due diligence, and speed up business partnerships with our efficient onboarding solutions.
          </p>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">How It Works</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li><strong>Data Submission:</strong> Clients submit the necessary corporate documents through our secure platform.</li>
            <li><strong>Verification Process:</strong> We verify director details, GST numbers, CIN, and other pertinent corporate information using our advanced data-check algorithms and access to official registries.</li>
            <li><strong>Results and Compliance Checks:</strong> Receive comprehensive reports and compliance status, ensuring that all information is accurate and up to date.</li>
            <li><strong>Integration into Client Systems:</strong> Verified data can be seamlessly integrated into your ERP or other business systems for continuous operational efficiency.</li>
          </ol>
        </div>
      </section>
      
      {/* Industry Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Industry Applications</h2>
          <ul className="space-y-4">
            <li><strong>Manufacturing:</strong> Streamline supplier and vendor onboarding by verifying corporate credentials and compliance with industry standards.</li>
            <li><strong>Finance and Banking:</strong> Enhance due diligence processes with thorough checks on corporate documents, essential for forming new banking relationships.</li>
            <li><strong>Technology and Startups:</strong> Quickly onboard new business clients and partners by validating startup credentials and director backgrounds.</li>
            <li><strong>Healthcare:</strong> Ensure that your partners and suppliers comply with healthcare regulations and standards by verifying their corporate information accurately.</li>
          </ul>
        </div>
      </section>
      
      {/* Security and Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Security and Compliance</h2>
          <p className="text-lg mb-4">
            Our B2B Onboarding services adhere to the highest standards of data security and privacy, ensuring all client information is protected under stringent compliance measures.
          </p>
          <p className="text-lg mb-4">
            We utilize advanced encryption and secure data handling practices to safeguard all information processed through our platform.
          </p>
        </div>
      </section>
      
      {/* Customer Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Customer Success Stories</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Case Study:</h3>
            <p>Discover how a leading tech company optimized their vendor onboarding time by 60% using our comprehensive B2B onboarding services.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Testimonial:</h3>
            <p>"Our partnership with Finb has revolutionized how we manage B2B relationships, making the verification process both faster and more reliable." - COO of a multinational corporation</p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 text-center bg-gray-100">
        <p className="text-lg mb-4">Ready to Streamline Your B2B Onboarding?</p>
        <button className="px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700">Contact Us to Learn More</button>
      </section>
    </div>
  );
};

export default B2BOnboarding;
