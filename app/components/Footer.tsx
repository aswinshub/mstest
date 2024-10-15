"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: "#002A3A" }}>
      <div className="h-20 flex justify-start items-center px-16">
        <h3 className="text-lg">Quick Links</h3> &nbsp; &nbsp; Home &nbsp; About
        &nbsp; Pricing &nbsp; Portfolios &nbsp; Insights
      </div>

      <div className="flex flex-col md:flex-row justify-start border border-gray-700">
        <div className="flex-1 p-4 border-r border-gray-700">
          <div className="flex flex-col gap-4 p-4">
            <div className="flex-1 p-4 bg-[#103444]">
              <p>Lorem ipsum dolor sit amet</p>
            </div>

            <div className="flex-1 p-4 bg-[#103444]">
              <p>Lorem ipsum dolor sit amet</p>
            </div>

            <div className="flex-1 p-4 bg-[#103444]">
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 border-r border-gray-700">
          <div className="flex flex-col gap-4 p-4">
            <div className="flex-1 p-4 bg-[#103444]">
              <p>Lorem</p>
            </div>

            <div className="flex-1 p-4 bg-[#103444]">
              <p>Ipsum</p>
            </div>

            <div className="flex-1 p-4 bg-[#103444]">
              <p>Consectetur</p>
            </div>

            <div className="flex-1 p-4 bg-[#103444]">
              <p>Efficitur</p>
            </div>
          </div>
        </div>

        <div className="flex-1 pt-8 pl-8 mb-5">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p>
            Lorem Ipsum, Iso lorem,
            <br />
            Iso Lorem Posum <br />
            +91 00000 00000 <br />
            info@demo.com
          </p>{" "}
          <br />
          <h3 className="text-base font-semibold">Follow us On</h3>
          <div className="flex flex-row gap-1">
            <button>
              <img
                src="https://res.cloudinary.com/df3ffobko/image/upload/v1728988029/Group_161_lvcspz.png"
                alt=""
                width="30px"
                height="30px"
              />
            </button>
            <button>
              <img
                src="https://res.cloudinary.com/df3ffobko/image/upload/v1728988027/Group_162_u7ff8c.png"
                alt=""
                width="30px"
                height="30px"
              />
            </button>
            <button>
              <img
                src="  https://res.cloudinary.com/df3ffobko/image/upload/v1728988540/Group_163_va1scc.png"
                alt=""
                width="30px"
                height="30px"
              />
            </button>

            <button>
              <img
                src="https://res.cloudinary.com/df3ffobko/image/upload/v1728988027/Group_164_ht5owa.png"
                alt=""
                width="30px"
                height="30px"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="h-20 flex justify-start items-center px-20">
        ©2024 Demo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
