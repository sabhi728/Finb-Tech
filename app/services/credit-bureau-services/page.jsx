import React from 'react';

const CreditBureauServices = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="text-center pt-[200px] py-16 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Access Comprehensive Credit Reports from Leading Credit Bureaus</h1>
        <p className="text-lg mb-4">
          Make informed decisions with detailed credit information for individuals and corporations, sourced from all RBI-regulated bureaus.
        </p>
      </section>
      
      {/* Overview of Credit Bureau Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Overview of Credit Bureau Services</h2>
          <p className="text-lg mb-4">
            Our Credit Bureau services equip you with detailed credit reports from top bureaus including Equifax, TransUnion CIBIL, CRIF High Mark, and Experian. Whether you’re assessing an individual or a corporation, our service provides deep insights into credit histories, helping you mitigate risk and make informed financial decisions.
          </p>
          <p className="text-lg mb-4">
            Enhance your risk assessment processes with accurate, up-to-date credit information that supports your financial activities across various industries.
          </p>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">How It Works</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li><strong>Data Access:</strong> Gather credit data using identifiers such as name, address, mobile number, and ID for individuals, and similar identifiers for corporations.</li>
            <li><strong>Report Compilation:</strong> Compile comprehensive reports that reflect detailed credit histories, including data from MFI, retail, and corporate sectors.</li>
            <li><strong>Delivery:</strong> Receive these reports in a format that integrates seamlessly into your decision-making processes, ensuring you have the information when you need it.</li>
          </ol>
        </div>
      </section>
      
      {/* Industry Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Industry Applications</h2>
          <ul className="space-y-4">
            <li><strong>Banking and Financial Services:</strong> Utilize precise credit reports to assess loan applications, manage credit risks, and tailor financial products to customer profiles.</li>
            <li><strong>Real Estate:</strong> Employ credit reports to evaluate potential tenants or buyers, ensuring reliability and financial stability.</li>
            <li><strong>Human Resources:</strong> Use credit assessments in background checks to ensure potential hires have a responsible financial history.</li>
            <li><strong>Retail:</strong> Offer better credit terms based on reliable credit information, improving customer relations and minimizing defaults.</li>
          </ul>
        </div>
      </section>
      
      {/* Security and Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Security and Compliance</h2>
          <p className="text-lg mb-4">
            Adherence to the highest standards of data security and regulatory compliance is at the heart of our Credit Bureau services. All data is processed and handled with the utmost integrity, ensuring compliance with RBI guidelines and protecting the privacy of individuals and entities involved.
          </p>
          <p className="text-lg mb-4">
            We employ robust encryption and secure handling practices to maintain data integrity and confidentiality.
          </p>
        </div>
      </section>
      
      {/* Customer Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Customer Success Stories</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Case Study:</h3>
            <p>Learn how a leading bank leveraged our Credit Bureau services to reduce non-performing assets by effectively screening credit applications.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Testimonial:</h3>
            <p>"With access to comprehensive credit reports from Finb, we've been able to significantly enhance our credit assessment process, leading to better decision-making and reduced financial risk." - Finance Director of a major corporate group</p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 text-center bg-gray-100">
        <p className="text-lg mb-4">Enhance Your Financial Decision-Making with Detailed Credit Reports</p>
        <button className="px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700">Get Started Now</button>
      </section>
    </div>
  );
};

export default CreditBureauServices;
