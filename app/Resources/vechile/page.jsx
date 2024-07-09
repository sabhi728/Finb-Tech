import React from 'react';

const VehicleVerificationSolutions = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="text-center pt-[200px] pb-16 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Secure Your Operations with Reliable Vehicle Verification</h1>
        <p className="text-lg">Utilize comprehensive vehicle verification to ensure safety, compliance, and authenticity in your fleet and related operations.</p>
      </section>
      
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-lg mb-4">
            Vehicle verification is a critical component for businesses that rely on transportation and logistics. It involves confirming the authenticity and legal status of vehicles, which is essential for mitigating risks, enhancing operational safety, and ensuring compliance with transportation regulations.
          </p>
        </div>
      </section>
      
      {/* Applications of Vehicle Verification Across Industries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Applications of Vehicle Verification Across Industries</h2>
          <ul className="space-y-8">
            <li>
              <h3 className="text-xl font-bold mb-4">Transportation and Logistics</h3>
              <p>Use: Verification of commercial vehicles to ensure they are properly registered and fit for operation.</p>
              <p>Benefits: Enhances road safety, reduces the risk of penalties for non-compliance, and ensures operational reliability.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Automotive</h3>
              <p>Use: Verification of pre-owned vehicles before purchase or resale.</p>
              <p>Benefits: Helps in confirming the vehicle's history, ownership details, and accident history, ensuring transparency in transactions.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Insurance</h3>
              <p>Use: Verification of vehicle details before issuing or renewing insurance policies.</p>
              <p>Benefits: Ensures accurate premium calculation based on the vehicle’s condition and history, reducing the risk of insurance fraud.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Ride-Sharing and Taxi Services</h3>
              <p>Use: Verification of vehicles registered on the platform to ensure they meet safety and regulatory standards.</p>
              <p>Benefits: Builds customer trust by ensuring only verified and safe vehicles are used for passenger transportation.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Manufacturing</h3>
              <p>Use: Verification of transport vehicles used for carrying raw materials and finished goods.</p>
              <p>Benefits: Guarantees compliance with safety standards and regulations, minimizing the risk of operational disruptions.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold mb-4">Government and Public Sector</h3>
              <p>Use: Verification of government vehicles for compliance with emission and safety standards.</p>
              <p>Benefits: Ensures that all vehicles meet environmental and safety regulations, supporting public health and safety initiatives.</p>
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
              <h3 className="text-lg font-bold mb-2">What is Vehicle Verification?</h3>
              <p>Vehicle verification is the process of checking a vehicle’s registration details, insurance status, fitness certificate, and other legal requirements to confirm its authenticity and compliance with road laws.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Why is Vehicle Verification important?</h3>
              <p>It is crucial for ensuring that vehicles are legally compliant, roadworthy, and safe to operate, thereby protecting businesses from legal issues and enhancing road safety.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">How is Vehicle Verification conducted?</h3>
              <p>It typically involves checking the vehicle’s registration number against databases held by the Regional Transport Offices (RTO) to retrieve and verify details like ownership, insurance validity, and vehicle history.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Is Vehicle Verification mandatory for all businesses?</h3>
              <p>For businesses involved in transportation, logistics, or that rely on vehicle fleets, vehicle verification is essential to ensure compliance with transport regulations and to safeguard against fraud.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">What documents are needed for Vehicle Verification?</h3>
              <p>Common documents include the vehicle registration certificate, insurance policy, pollution under control certificate, and the vehicle’s fitness certificate.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Can Vehicle Verification be automated?</h3>
              <p>Yes, several service providers offer digital vehicle verification services that allow businesses to verify vehicle details electronically and in real-time.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 text-center bg-gray-100">
        <p className="text-lg mb-4">Ensure the authenticity and safety of your vehicle operations with our advanced Vehicle Verification solutions. Contact us today for seamless integration!</p>
        <button className="px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700">Start Vehicle Verification Now</button>
      </section>
    </div>
  );
};

export default VehicleVerificationSolutions;
