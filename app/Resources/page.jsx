import React from 'react';

const UPIAutopaySolutions = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="text-center pt-[200px] pb-16 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Enhance Your Billing Efficiency with UPI Autopay</h1>
        <p className="text-lg">Automate your recurring payments seamlessly with UPI Autopay, ensuring timely collections and improved customer satisfaction.</p>
      </section>
      
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-lg mb-4">
            UPI Autopay offers a revolutionary way for businesses across India to manage recurring payments efficiently. Ideal for industries involving regular subscription models or billing cycles, UPI Autopay facilitates smooth, automated transactions directly linked to customers’ UPI (Unified Payments Interface) accounts, enhancing payment security and operational efficiency.
          </p>
        </div>
      </section>
      
      {/* Applications of UPI Autopay Across Industries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Applications of UPI Autopay Across Industries</h2>
          <ul className="space-y-8">
            <li>
              <h3 className="text-xl font-bold mb-4">Telecommunications</h3>
              <p>Use: Automating monthly billing for mobile and internet service subscriptions.</p>
              <p>Benefits: Ensures timely payment of bills, reduces payment delinquencies, and improves customer retention.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Utilities</h3>
              <p>Use: Regular payments for electricity, water, and gas services.</p>
              <p>Benefits: Streamlines payment processes, eliminates the hassle of manual bill payments for customers, and reduces administrative overhead.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Media and Entertainment</h3>
              <p>Use: Subscription fees for OTT platforms, news websites, and digital magazines.</p>
              <p>Benefits: Facilitates smooth and uninterrupted access to services, enhancing user experience and loyalty.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <p>Use: Collection of tuition and other recurring educational fees.</p>
              <p>Benefits: Provides a hassle-free fee payment experience for students and parents while ensuring consistent cash flow for institutions.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Healthcare</h3>
              <p>Use: Payments for subscription-based health services, such as telemedicine, wellness programs, or regular check-ups.</p>
              <p>Benefits: Simplifies the payment process for ongoing health services, making it easier for patients to maintain regular health check-ups and treatments.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Insurance</h3>
              <p>Use: Premium payments for various types of insurance policies.</p>
              <p>Benefits: Reduces the risk of policy lapse due to non-payment, ensuring continuous coverage for policyholders.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Real Estate</h3>
              <p>Use: Regular maintenance fee collections for residential and commercial properties.</p>
              <p>Benefits: Automates the collection process, improving efficiency and reducing disputes over payment timings.</p>
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
              <h3 className="text-lg font-bold mb-2">What is UPI Autopay?</h3>
              <p>UPI Autopay is a feature under the Unified Payments Interface (UPI) system that allows businesses and customers to set up automatic recurring payments using their UPI-linked bank accounts.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">How does UPI Autopay benefit businesses?</h3>
              <p>It helps businesses ensure timely collection of payments, reduces administrative costs related to manual billing, and improves customer service by providing a convenient payment option.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Is UPI Autopay secure?</h3>
              <p>Yes, UPI Autopay is built on the UPI platform, which is backed by the National Payments Corporation of India (NPCI), ensuring robust security for transactions.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Can customers manage their UPI Autopay subscriptions?</h3>
              <p>Yes, customers can easily manage their subscriptions, including opting out or modifying the payment amounts, directly from their UPI-enabled app.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">What are the transaction limits for UPI Autopay?</h3>
              <p>The transaction limits for UPI Autopay are typically up to INR 2,00,000 per transaction, but these can vary depending on the customer's bank and the specific terms set by the NPCI.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">How can businesses integrate UPI Autopay?</h3>
              <p>Businesses can integrate UPI Autopay by partnering with payment service providers that offer UPI solutions. Integration usually involves setting up UPI payment capabilities on the business’s billing platform.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 text-center bg-gray-100">
        <p className="text-lg mb-4">Automate your recurring payments with our secure and efficient UPI Autopay solutions. Contact us today to streamline your payment processes!</p>
        <button className="px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700">Implement UPI Autopay Now</button>
      </section>
    </div>
  );
};

export default UPIAutopaySolutions;
