import React from 'react';

const ENACHSolutions = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="text-center pt-[200px] pb-16 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Streamline Your Payment Collections with eNACH Solutions</h1>
        <p className="text-lg">Automate your recurring payments with eNACH, ensuring timely and efficient transaction processing across industries.</p>
      </section>
      
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-lg mb-4">
            eNACH (Electronic National Automated Clearing House) is a modern payment service designed to handle recurring transactions across various sectors. By allowing businesses to automate the debit of recurring fees directly from their customers' bank accounts, eNACH not only streamlines payment processes but also enhances the reliability and efficiency of financial operations, contributing to better customer service and sustained cash flows.
          </p>
        </div>
      </section>
      
      {/* Applications of eNACH Across Industries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Applications of eNACH Across Industries</h2>
          <ul className="space-y-8">
            <li>
              <h3 className="text-xl font-bold mb-4">Banking and Financial Services</h3>
              <p>Use: Collection of EMIs, credit card bills, and insurance premiums.</p>
              <p>Benefits: Ensures consistent cash flow and reduces the administrative costs associated with manual collections.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Utilities</h3>
              <p>Use: Automated billing for electricity, water, and gas services.</p>
              <p>Benefits: Reduces billing errors, ensures timely payments, and improves customer satisfaction by offering a hassle-free payment solution.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Telecommunications</h3>
              <p>Use: Monthly billing for mobile and internet services.</p>
              <p>Benefits: Prevents service interruptions, enhances customer retention by simplifying the payment process, and ensures steady revenue from subscriptions.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <p>Use: Collection of tuition and other recurring school fees.</p>
              <p>Benefits: Provides a reliable revenue stream for institutions and convenience for parents, reducing missed or late payments.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Real Estate</h3>
              <p>Use: Management of rental or maintenance collections for residential and commercial properties.</p>
              <p>Benefits: Automates transaction processing, reduces delinquencies, and streamlines property management tasks.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Healthcare</h3>
              <p>Use: Subscription services for wellness programs, regular check-ups, or health club memberships.</p>
              <p>Benefits: Facilitates easy and uninterrupted access to healthcare services, ensuring timely payment and reducing operational overhead.</p>
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
              <h3 className="text-lg font-bold mb-2">What is eNACH?</h3>
              <p>eNACH is a service provided by the National Payments Corporation of India (NPCI) that allows businesses to collect recurring payments directly from a customer's bank account, after obtaining the necessary mandate.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">How does eNACH benefit businesses?</h3>
              <p>eNACH provides businesses with a cost-effective, reliable, and efficient means to manage recurring collections, reducing the dependency on physical checks and manual processing.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Is eNACH secure?</h3>
              <p>Yes, eNACH follows stringent security protocols established by NPCI, ensuring that all transactions are secure and data privacy is maintained.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">What is required to set up eNACH for a business?</h3>
              <p>Businesses need to partner with a bank or a payment service provider that supports eNACH services. They must also obtain a duly filled and signed mandate from their customers authorizing the automated debits.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Can customers cancel their eNACH mandate?</h3>
              <p>Yes, customers can cancel their eNACH mandate at any time, giving them control over their subscriptions and recurring payments.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">What happens if an eNACH transaction fails?</h3>
              <p>In the event of a transaction failure, notifications are typically sent to both the business and the customer to take appropriate action, such as updating account details or ensuring sufficient funds are available.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 text-center bg-gray-100">
        <p className="text-lg mb-4">Optimize your payment processes and enhance customer satisfaction with our eNACH solutions. Contact us today to get started!</p>
        <button className="px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700">Implement eNACH Now</button>
      </section>
    </div>
  );
};

export default ENACHSolutions;
