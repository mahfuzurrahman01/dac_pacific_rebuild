import localFont from "next/font/local";
import { MdOutlineMarkEmailRead } from "react-icons/md";
const myFont2 = localFont({ src: "../../../public/fonts/Cardo-Bold.ttf" });
const Touch = () => {
  const containerStyle = {
    backgroundImage: `url('https://source.unsplash.com/random/640x480')`,
    backgroundPosition: "center center",
    backgroundBlendMode: "multiply",
    backgroundSize: "cover",
    /* Add other styles as needed */
    width: "100vw", // Example width for full viewport width
    height: "100vh", // Example height for full viewport height
  };
  return (
    <div>
      <div className="bg-transparent w-full h-96 flex justify-center flex-col items-center gap-10">
        <h1
          style={myFont2.style}
          className="font-bold text-2xl text-white w-3/4 text-center"
        >
          TILL NOW WE HAVE WORKED WITH THIS BRANDS AND MOVING ON SUCCESSFULLY.
        </h1>
        <p className="text-white text-lg font-light">
          To serve our honorable customers with sincerity, Honesty and hard
          labor to keep them happy .
        </p>
        <div className="flex justify-center items-center gap-4">
          <button className="py-2 px-8 rounded-full hover:bg-cyan-700 duration-300  bg-transparent border-2 border-white text-white ">
            READ MORE
          </button>
          <button className="py-2 px-8 rounded-full bg-cyan-700 hover:bg-transparent duration-300 border-2 border-white text-white ">
            GET IN TOUCH
          </button>
        </div>
      </div>
      <div className="w-full bg-gray-50 ">
        <div className="pt-5 container flex flex-col flex-wrap content-center items-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1
            className="uppercase text-5xl antialiased font-semibold text-center text-gray-800"
            style={myFont2.style}
          >
            Get Our Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-800">
            Find out about events and other news
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3 outline-slate-500 text-gray-800 bg-gray-300"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-cyan-700 text-gray-50 "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Touch;
