"use client";

import React from 'react';

const Footer: React.FC = () => {
  return (
    
    <footer className=' text-white' style={{backgroundColor:"#002A3A"}}>

<div className="h-20 flex justify-start items-center px-20">
  Quick Links &nbsp; Home &nbsp; About &nbsp; Pricing &nbsp; Portfolios &nbsp; Insights
</div>

<div className="flex flex-col md:flex-row  justify-start  border border-gray-700    ">
  {/* Column 1 */}
  <div className="flex-1 p-4 border-r  border-gray-700 ">
    
  <div className="flex flex-col gap-4 p-4">
  {/* Row 1 */}
  <div className="flex-1 p-4 bg-[#103444]  ">
    
    <p>Lorem ipsum dolor sit amet</p>
  </div>

  {/* Row 2 */}
  <div className="flex-1 p-4 bg-[#103444]  ">
    
    <p>Lorem ipsum dolor sit amet</p>
  </div>

  {/* Row 3 */}
  <div className="flex-1 p-4 bg-[#103444] ">
   
    <p>Lorem ipsum dolor sit amet</p>
  </div>
</div>



  </div>

  {/* Column 2 */}
  

  <div className="flex-1 p-4  border-r border-r-gray-700  ">
    
  <div className="flex flex-col gap-4 p-4">
  {/* Row 1 */}
  <div className="flex-1 p-4 bg-[#103444]  ">
    
    <p>Lorem </p>
  </div>

  {/* Row 2 */}
  <div className="flex-1 p-4 bg-[#103444]  ">
    
    <p>Ipsum </p>
  </div>

  {/* Row 3 */}
  <div className="flex-1 p-4 bg-[#103444] ">
   
    <p>Consectetur</p>
  </div>
  <div className="flex-1 p-4 bg-[#103444] ">
   
    <p>Efficitur</p>
  </div>
</div>



  </div>

  {/* Column 3 */}
  <div className="flex-1 p-4   ">
    <h3 className="text-lg font-semibold">Column 3</h3>
    <p>Content for the third column.</p>
  </div>

  
</div>


        <div>

            All rights 
        </div>

    
    </footer>


  );
}

export default Footer;
