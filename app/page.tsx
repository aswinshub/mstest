import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">Lorem ipsum dolor sit amet</h1>
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
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium">Lorem ipsum dolor sit amet.</h2>
            <h3 className="text-base md:text-lg lg:text-xl">Sanchez Alexis</h3>
            <p className="text-sm md:text-base lg:text-lg">CEO & Founder of Demo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
