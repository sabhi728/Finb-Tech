'use client'

const credit = () => {
  return (
    <section className="bg-[#0A003D] relative " style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <div className="absolute -top-[300px] left-1/2 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
      <div className="container relative ">
        <div className="absolute left-1/2 top-20 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
          <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
        </div>
        <div className="grid grid-cols-">
          <div className="max-w-[1000px]">
            <p className="section-tagline"></p>
            <h2 className='text-white'>Credit Bureau Services</h2>
            <br/>
            <h3 className='text-white'>1. Loan Application Screening:-</h3>
            <p className="text-white">
              Using credit bureau data to screen loan applicants effectively to determine their creditworthiness.
            </p>
            <br/>
            <h3 className='text-white'>2. Credit Risk Monitoring:-</h3>
            <p className="text-white">
              Continuously monitoring the credit status of existing customers to manage risk proactively.
            </p>
            <br/>
            <h3 className='text-white'>3. Mortgage Processing:-</h3>
            <p className="text-white">
              Utilizing detailed credit reports to process mortgage applications faster and with greater accuracy.
            </p>
            <br/>
            <h3 className='text-white'>4. Auto Financing:-</h3>
            <p className="text-white">
              Checking potential buyers' credit scores to streamline the auto financing process.
            </p>
            <br/>
            <h3 className='text-white'>5. Debt Collection Prioritization:-</h3>
            <p className="text-white">
              Helping businesses prioritize their debt collection efforts based on the creditworthiness of debtors.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default credit