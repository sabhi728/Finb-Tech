import React from 'react';

const ESignSolutions = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="text-center pt-[200px] py-16 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Securely Sign Documents Anywhere, Anytime with Our E-Sign Solutions</h1>
        <p className="text-lg mb-4">
          Utilize our advanced E-Sign services, powered by Aadhaar OTP and face verification, to enhance document processing efficiency across all industries.
        </p>
      </section>
      
      {/* Overview of E-Sign Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Overview of E-Sign Services</h2>
          <p className="text-lg mb-4">
            Our E-Sign services streamline your document signing processes by integrating cutting-edge technology such as Aadhaar OTP and facial recognition for verification, ensuring legal compliance and high security.
          </p>
          <p className="text-lg mb-4">
            Reduce turnaround times, lower costs, and improve security with our digital signature solutions that are legally binding and universally recognized.
          </p>
        </div>
      </section>
      
      {/* How E-Sign Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">How E-Sign Works</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li><strong>Document Upload:</strong> Users upload the documents to be signed electronically to our secure platform.</li>
            <li><strong>Identity Verification:</strong> Signatories verify their identity using Aadhaar OTP or through a secure facial recognition process.</li>
            <li><strong>Signing the Document:</strong> Once verified, users can sign documents electronically, with each signature timestamped and encrypted.</li>
            <li><strong>Document Management:</strong> Signed documents are stored securely and can be accessed or sent to other parties instantly.</li>
          </ol>
        </div>
      </section>
      
      {/* Industry Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Industry Applications</h2>
          <ul className="space-y-4">
            <li><strong>Banking and Finance:</strong> Facilitate quick loan approvals and other financial agreements with secure, verifiable E-Signatures.</li>
            <li><strong>Healthcare:</strong> Enable confidential medical documents and consent forms to be signed securely, adhering to patient privacy laws.</li>
            <li><strong>Real Estate:</strong> Streamline property transactions by allowing buyers, sellers, and agents to sign contracts digitally from any location.</li>
            <li><strong>Education:</strong> Simplify the administration of student forms, staff contracts, and academic records with easy, secure E-Sign solutions.</li>
            <li><strong>Government:</strong> Enhance the efficiency of public service delivery by enabling citizens to sign documents electronically with verified digital IDs.</li>
          </ul>
        </div>
      </section>
      
      {/* Security and Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Security and Compliance</h2>
          <p className="text-lg mb-4">
            Our E-Sign solutions are designed with stringent security measures and comply with all relevant legal standards, including provisions under the IT Act, ensuring that every electronic signature is as legally binding as its handwritten counterpart.
          </p>
          <p className="text-lg mb-4">
            We employ advanced encryption and secure server storage to protect all signed documents and user data.
          </p>
        </div>
      </section>
      
      {/* Customer Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Customer Success Stories</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Case Study:</h3>
            <p>Learn how a leading bank implemented our E-Sign solution to reduce document processing time by 75%, enhancing customer satisfaction and operational efficiency.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Testimonial:</h3>
            <p>"The ability to sign documents electronically with Aadhaar OTP has transformed how we manage contracts, making our processes faster and more reliable." - CEO of a major insurance company</p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 text-center bg-gray-100">
        <p className="text-lg mb-4">Ready to Transform Your Document Signing Process?</p>
        <button className="px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700">Start Using E-Sign Today</button>
      </section>
    </div>
  );
};

export default ESignSolutions;
