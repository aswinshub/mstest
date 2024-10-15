import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className=" font-poppins">
      <Navbar />

      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/df3ffobko/image/upload/v1728921832/Mask_group_hqtxum.png')",
        }}
      >
        <div className="h-full flex flex-col justify-end items-start text-white px-6 md:px-12 lg:px-24 pb-20 font-poppins max-w-[75%]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-base md:text-lg lg:text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis velit nulla. In hac habitasse platea dictumst. Fusce non
            venenatis velit. Proin luctus malesuada mauris vitae mattis.
            Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec mattis velit
            nulla. In hac habitasse platea dictumst.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-16">
        <div
          className="my-6 h-[640px] bg-contain bg-center bg-no-repeat relative"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/df3ffobko/image/upload/v1728924185/4students_wiekpy.png')",
          }}
        >
          <div className="absolute bottom-8 md:bottom-16 lg:bottom-36 left-4 md:left-12 lg:left-24 p-4 text-white font-poppins">
            <img
              src="https://res.cloudinary.com/df3ffobko/image/upload/v1728960246/Group_264_ombz2l.png"
              alt="play"
              width={"60px"}
              height={"60px"}
            />{" "}
            <br />
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium">
              Lorem ipsum dolor sit amet.
            </h2>
            <h3 className="text-base md:text-lg lg:text-xl">Sanchez Alexis</h3>
            <p className="text-sm md:text-base lg:text-lg">
              CEO & Founder of Demo
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4  ">
        <div className="md:col-span-3  px-4 lg:px-14 md:px-4 ">
          <h1 className="text-2xl md:text-xl lg:text-4xl mb-4">
            Lorem ipsum dolor sit amet, consectetur{" "}
          </h1>
          <p className="text-sm md:text-lg lg:text-lg py-3 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis velit nulla. In hac habitasse platea dictumst. Fusce non
            venenatis velit. Proin luctus malesuada mauris vitae mattis.
            Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam
            congue non sem et efficitur. Donec in dolor nec tellus iaculis
            sagittis. Sed sit amet aliquam augue. Praesent auctor, purus non
            convallis accumsan, nibh odio gravida felis, vitae mollis massa
            lectus a neque. Mauris mollis elit quis iaculis iaculis. Vestibulum
            molestie nisl eget aliquet scelerisque. Vivamus efficitur dui eget
            velit interdum, non dapibus nisi fringilla. Mauris fermentum
            venenatis volutpat. Quisque efficitur ultricies erat eget rutrum.
            Phasellus feugiat quam eget est dapibus, non eleifend justo
            fermentum. Sed et commodo arcu, id euismod dui.
          </p>{" "}
        </div>

        <div className="grid grid-rows-2 md:col-span-2 gap-2">
          <div className="  pr-8 py-5 ">
            <h1 className="text-xl md:text-xl lg:text-2xl mb-4">Lorem ipsum</h1>
            <p className="text-sm md:text-lg lg:text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst. Fusce non
              venenatis velit. Proin luctus malesuada mauris vitae mattis.
              Pellentesque iaculis elit lorem.
            </p>
          </div>
          <div className="  pr-8 py-5 ">
            <h1 className="text-xl md:text-xl lg:text-2xl mb-4">Lorem ipsum</h1>
            <p className="text-sm md:text-lg lg:text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst. Fusce non
              venenatis velit. Proin luctus malesuada mauris vitae mattis.
              Pellentesque iaculis elit lorem.
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-gray-200 mt-20 p-16 ">
        <h1 className="text-2xl md:text-xl lg:text-4xl mb-2 ">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur
        </h1>
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:mx-16 mx-4 md:mx-4 text-white">
          <div className="grid grid-rows-5 gap-2">
            <div
              className="border-2 p-4 row-span-3 bg-center bg-no-repeat w-full h-60 cursor-pointer"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/df3ffobko/image/upload/v1728965189/Rectangle_985_igviwr.png')",
                backgroundSize: "100% 100%",
              }}
            >
              <div className="mt-28">
                <h1 className="text-l md:text-l lg:text-l  mb-4">
                  Consectetur adipiscing elit
                </h1>
                <p className="text-sm font-thin	 md:text-sm lg:text-sm  ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis velit nulla. In hac habitasse platea dictumst.
                </p>
              </div>
            </div>

            <div
              className="border-2 p-4 row-span-2 "
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/df3ffobko/image/upload/v1728966867/Rectangle_986_1_blqyvb.png')",
                backgroundSize: "100% 100%",
              }}
            >
              <div className="mt-10">
                <h1 className="text-l md:text-l lg:text-l  mb-4">
                  Consectetur adipiscing elit
                </h1>
                <p className="text-sm font-thin	 md:text-sm lg:text-sm  ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis velit nulla. In hac habitasse platea dictumst.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-5 gap-2">
            <div
              className="row-span-2 border-2 p-4"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/df3ffobko/image/upload/v1728966108/Rectangle_986_uilf6w.png')",
                backgroundSize: "100% 100%",
              }}
            >
              <div className="mt-10">
                <h1 className="text-l md:text-l lg:text-l  mb-4">
                  Consectetur adipiscing elit
                </h1>
                <p className="text-sm font-thin	 md:text-sm lg:text-sm  ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis velit nulla. In hac habitasse platea dictumst.
                </p>
              </div>
            </div>

            <div
              className="row-span-3 border-2 p-4"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/df3ffobko/image/upload/v1728966933/Rectangle_985_1_k0gx58.png')",
                backgroundSize: "100% 100%",
              }}
            >
              <div className="mt-28">
                <h1 className="text-l md:text-l lg:text-l  mb-4">
                  Consectetur adipiscing elit
                </h1>
                <p className="text-sm font-thin	 md:text-sm lg:text-sm  ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis velit nulla. In hac habitasse platea dictumst.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x py-10  text-center px-10">
        <div className="px-10">
          <h3 className="font-bold text-4xl">8 Years</h3>
          <br />
          of Success
        </div>
        <div className="px-7">
          <h3 className="font-bold text-4xl">200+</h3>
          <br />
          Members
        </div>
        <div className="px-7">
          <h3 className="font-bold text-4xl">150+</h3>
          <br />
          All over USA
        </div>
        <div className="px-7">
          <h3 className="font-bold text-4xl">200k</h3>
          <br />
          Satisfied Clients
        </div>
      </div>

      <div className="mb-16">
        <div className="px-4 md:px-10 lg:px-20 m-4 md:m-6 lg:m-10">
          <h1 className="text-xl md:text-2xl lg:text-4xl mb-4">Lorem ipsum</h1>
          <p className="text-sm md:text-base lg:text-base mb-6 lg:pr-72">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis velit nulla. In hac habitasse platea dictumst. Fusce non
            venenatis velit. Proin luctus malesuada mauris vitae mattis.
            Pellentesque iaculis elit lorem, et varius ipsum dictum.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 md:px-16 lg:px-28 gap-10">
            <div className="divide-y rounded-2xl h-auto px-5 py-5 hover:text-white bg-[#ECFAFF] hover:bg-[#002A3A] transition-colors duration-300">
              <div className="mb-5 font-semibold">01</div>
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl mb-4  mt-5">
                  Lorem ipsum dolor sit amet, consectetur
                </h3>
                <p className="text-sm md:text-sm lg:text-base leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis velit nulla. In hac habitasse platea dictumst. Fusce
                  non venenatis velit. Proin luctus malesuada mauris vitae
                  mattis. Pellentesque iaculis elit lorem, et varius ipsum
                  dictum a. Etiam congue non sem et efficitur. Donec in dolor
                  nec tellus iaculis sagittis. Sed sit amet aliquam augue.
                </p>
              </div>
            </div>

            <div className="divide-y rounded-2xl h-auto px-5 py-5 hover:text-white bg-[#ECFAFF] hover:bg-[#002A3A] transition-colors duration-300">
              <div className="mb-5 font-semibold">02</div>
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl mb-4 mt-5">
                  Lorem ipsum dolor sit amet, consectetur
                </h3>
                <p className="text-sm md:text-sm lg:text-base leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis velit nulla. In hac habitasse platea dictumst. Fusce
                  non venenatis velit. Proin luctus malesuada mauris vitae
                  mattis. Pellentesque iaculis elit lorem, et varius ipsum
                  dictum a. Etiam congue non sem et efficitur. Donec in dolor
                  nec tellus iaculis sagittis. Sed sit amet aliquam augue.
                </p>
              </div>
            </div>

            <div className=" divide-y rounded-2xl h-auto px-5 py-5 hover:text-white bg-[#ECFAFF] hover:bg-[#002A3A] transition-colors duration-300">
              <div className="mb-5">03</div>
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl mb-4   mt-5">
                  Lorem ipsum dolor sit amet, consectetur
                </h3>
                <p className="text-sm md:text-sm lg:text-base leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis velit nulla. In hac habitasse platea dictumst. Fusce
                  non venenatis velit. Proin luctus malesuada mauris vitae
                  mattis. Pellentesque iaculis elit lorem, et varius ipsum
                  dictum a. Etiam congue non sem et efficitur. Donec in dolor
                  nec tellus iaculis sagittis. Sed sit amet aliquam augue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative h-screen bg-cover bg-no-repeat px-32 py-20  "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/df3ffobko/image/upload/v1728974499/image_273_1_mihs2t.png')",
        }}
      >
        <div className="flex flex-col md:flex-row gap-4 relative">
          <div className="w-full md:w-1/2 p-2">
            <h2 className="text-xl">
              Lorem Ipsum <br /> dolor sit consectetur
            </h2>{" "}
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst. Fusce non
              venenatis velit. Proin luctus malesuada mauris vitae mattis.
              Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
              velit nulla. In hac habitasse platea dictumst. Fusce non venenatis
              velit. Proin luctus malesuada mauris vitae mattis. Pellentesque
              iaculis elit lorem, et varius ipsum dictum.
            </p>
          </div>

          <div className="w-2/5 p-4 bg-white rounded-[10px] ml-20  relative">
            <h2 className="text-xl ">Lorem Ipsum ?</h2>

            <div className="absolute mt-64 p-5">
              <h3 className=" text-xl">Lorem Ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis velit nulla. In hac habitasse platea dictumst. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <br />
            <img
              src="https://res.cloudinary.com/df3ffobko/image/upload/v1728976064/image_276_1_yecucb.png"
              alt=""
            />
          </div>
          <div className="absolute top-48  -right-8  cursor-pointer">
            <img
              src="https://res.cloudinary.com/df3ffobko/image/upload/v1728977106/Group_2746_vixp2w.png"
              alt=""
              width={"80px"}
              height={"80px"}
            />
          </div>
        </div>
      </div>

      <div className="p-20">
        <div className="flex flex-col md:flex-row gap-4">
          {/* First column */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl ">Latest Insights</h2>
          </div>

          {/* Second column */}
          <div className="w-full md:w-1/2 p-4 flex justify-end gap-2">
            <button>
              <img
                src="https://res.cloudinary.com/df3ffobko/image/upload/v1728978618/Group_653_iatlcs.png"
                alt=""
                height="33px"
                width="33px"
              />
            </button>
            <button>
              <img
                src="https://res.cloudinary.com/df3ffobko/image/upload/v1728978618/Group_652_1_gzs0ci.png"
                alt=""
                height="33px"
                width="33px"
              />
            </button>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3   gap-10 p-5">
            {/* Card 1 */}
            <div
              className="rounded-lg h-[375px] bg-cover bg-center flex items-end p-4"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/df3ffobko/image/upload/v1728979411/image_269_qfchr6.png')",
              }}
            >
              <div className=" p-4 text-white w-full rounded-lg">
                <p className="text-base font-semibold">
                  dictumst. Fusce non venenatis velit. Proin luctus malesuada
                  mauris vitae mattis
                </p>
                <button className="text-sm"> Read More</button>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="rounded-lg h-[375px] bg-cover bg-center flex items-end p-4"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/df3ffobko/image/upload/v1728979516/image_272_rorwsu.png')",
              }}
            >
              <div className=" p-4 text-white w-full rounded-lg">
                <p className="text-base font-semibold">
                  dictumst. Fusce non venenatis velit. Proin luctus malesuada
                  mauris vitae mattis
                </p>
                <button className="text-sm"> Read More</button>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="rounded-lg h-[375] bg-cover bg-center flex items-end p-4"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/df3ffobko/image/upload/v1728979557/image_271_m8e5rv.png')",
              }}
            >
              <div className=" p-4 text-white w-full rounded-lg">
                <p className="text-base font-semibold">
                  dictumst. Fusce non venenatis velit. Proin luctus malesuada
                  mauris vitae mattis
                </p>
                <button className="text-sm"> Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="h-auto bg-cover bg-no-repeat  relative flex justify-center items-center  "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/df3ffobko/image/upload/v1728982980/Rectangle_1187_jslxto.png')",
        }}
      >
        <div className="flex flex-col md:flex-row gap-10 px-6 md:px-20 py-10 md:py-20 mb-5">
          <div className="flex-1 text-white p-4 md:p-6 rounded-lg">
            <h2 className="text-xl md:text-2xl tracking-wider mb-4">
              Let’s work Together
            </h2>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur. Mattis cursus nulla ornare
              tristique euismod arcu tristique nisl id nibh. Viverra feugiat
              viverra. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <div className="flex-1 p-4 md:p-6 flex justify-center md:justify-end items-center">
            <button className="bg-white text-black px-6  md:px-8 py-2 rounded-md text-sm tracking-wider font-semibold">
              <span>View Vacancies</span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
