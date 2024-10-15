import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className=" font-poppins">
      <Navbar />

      {/* Hero Section */}
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

      {/* Second Section */}
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
        {/* First column (100% on small screens, 60% on medium and larger screens) */}
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

        {/* Second column with 2 rows (100% width on small screens, 40% on medium and larger) */}
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
          consectetur{" "}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:mx-16 mx-4 md:mx-4 text-white">
          {/* First column with 2 rows (1st row 60%, 2nd row 40%) */}
          <div className="grid grid-rows-5 gap-2">
            {/* First Column - Row 1 (60%) with background image */}
            <div
              className="border-2 p-4 row-span-3 bg-center bg-no-repeat w-full h-60 cursor-pointer"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/df3ffobko/image/upload/v1728965189/Rectangle_985_igviwr.png')",
                backgroundSize: "100% 100%", // Ensures the image stretches to fill the container
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

            {/* First Column - Row 2 (40%) */}
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

          {/* Second column with 2 rows (1st row 40%, 2nd row 60%) */}
          <div className="grid grid-rows-5 gap-2">
          
            {/* Second Column - Row 1 (40%) */}
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

            {/* Second Column - Row 2 (60%) */}
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
    </div>
  );
}
