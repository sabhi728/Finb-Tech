import React from 'react';

const PaymentServices = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="text-center pt-[200px] py-16 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Streamline Your Financial Transactions with Advanced Payment and Collection Services</h1>
        <p className="text-lg mb-4">
          Empower your business with flexible, secure, and efficient payment solutions tailored for diverse industry needs.
        </p>
      </section>
      
      {/* Overview of Payment and Collection Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Overview of Payment and Collection Services</h2>
          <p className="text-lg mb-4">
            Our Payment and Collection services provide a comprehensive suite of tools designed to facilitate smooth and secure financial transactions for businesses in various sectors, including HR, banking, retail, and more.
          </p>
          <p className="text-lg mb-4">
            From enhancing cash flow management to reducing transaction costs, our solutions are engineered to improve your financial operations.
          </p>
        </div>
      </section>
      
      {/* Payment Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Payment Solutions</h2>
          <ul className="space-y-4">
            <li><strong>Unified Payments Interface (UPI):</strong> Leverage the simplicity and speed of UPI to make and receive payments instantly, ideal for businesses looking for fast transaction times.</li>
            <li><strong>National Electronic Funds Transfer (NEFT):</strong> Utilize NEFT for reliable and secure batch payments, suitable for businesses that handle large transaction volumes.</li>
            <li><strong>Immediate Payment Service (IMPS):</strong> Ensure real-time payment capabilities around the clock with IMPS, perfect for urgent and after-hours transactions.</li>
            <li><strong>Bulk Payments:</strong> Streamline your payroll and vendor payments with our bulk payment solutions, allowing for efficient large-scale disbursements.</li>
          </ul>
        </div>
      </section>
      
      {/* Collection Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Collection Solutions</h2>
          <ul className="space-y-4">
            <li><strong>AutoPay:</strong> Automate recurring payments for subscriptions and services, enhancing customer retention and simplifying revenue collection.</li>
            <li><strong>Virtual Accounts:</strong> Use virtual accounts to manage multiple payment streams and facilitate easier reconciliation.</li>
            <li><strong>NACH:</strong> Automate recurring payments for installments, ensuring timely collection and simplifying revenue collection.</li>
          </ul>
        </div>
      </section>
      
      {/* Industry Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Industry Applications</h2>
          <ul className="space-y-4">
            <li><strong>Banking:</strong> Optimize transaction processing, improve ledger management, and enhance customer service with tailored payment solutions.</li>
            <li><strong>Human Resources:</strong> Simplify payroll processing and expense reimbursements with secure, scheduled bulk payments.</li>
            <li><strong>Retail:</strong> Enhance the customer checkout experience with fast, secure UPI and AutoPay options for in-store and online purchases.</li>
            <li><strong>Healthcare:</strong> Streamline patient billing and payments with integrated collection solutions that support diverse payment methods.</li>
          </ul>
        </div>
      </section>
      
      {/* Security and Compliance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Security and Compliance</h2>
          <p className="text-lg mb-4">
            Security at the core: Our solutions are built with the highest standards of security and compliance, ensuring your financial data is protected at every transaction point.
          </p>
          <p className="text-lg mb-4">
            Fully compliant with regulatory requirements, our payment systems ensure that your business adheres to the latest financial security protocols.
          </p>
        </div>
      </section>
      
      {/* Customer Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Customer Success Stories</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Case Study 1:</h3>
            <p>Discover how a major retail chain implemented our UPI and AutoPay solutions to reduce checkout times by 50% and enhance customer satisfaction.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Testimonial:</h3>
            <p>"The efficiency and reliability of Finb Tech’s payment solutions have transformed how we manage our financial operations." - Finance Director of a leading healthcare provider</p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 text-center bg-gray-100">
        <p className="text-lg mb-4">Ready to optimize your payment and collection processes?</p>
        <button className="px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700">Contact Us Today</button>
      </section>
    </div>
  );
};

export default PaymentServices;
