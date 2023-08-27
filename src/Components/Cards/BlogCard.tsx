import localFont from "next/font/local";
import { AiFillSound } from "react-icons/ai";
import { IoDiamondOutline } from "react-icons/io5";
import { BiSolidPlaneAlt } from "react-icons/bi";
const myFont = localFont({ src: "../../../public/fonts/Cardo-Regular.ttf" });
const myFont2 = localFont({ src: "../../../public/fonts/Cardo-Bold.ttf" });

const BlogCard = () => {
  const backgroundImageStyle = {
    backgroundImage:
      "url('https://www.apparelentrepreneurship.com/wp-content/uploads/2023/01/How-To-Make-Your-Clothing-Brand-Stand-Out-In-A-Competitive-Market.jpg')",

    backgroundBlendMode: "",
    backgroundSize: "cover",
  };
  return (
    <div className="bg-gray-100 text-gray-700">
      <div className="container grid grid-cols-12 mx-auto">
        <div
          className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover bg-gray-700 lg:col-span-6 lg:h-auto"
          style={backgroundImageStyle}
        ></div>
        <div className="col-span-12 align-middle lg:col-span-6 lg:h-auto flex flex-col justify-center items-center px-5 py-10">
          <h2 className="uppercase font-bold text-xl " style={myFont.style}>
            KNOW MORE ABOUT OUR COMPANY
          </h2>
          <h1 className="uppercase text-5xl mt-2" style={myFont2.style}>
            WHY CHOOSE US
          </h1>
          <p className="w-3/4 mx-auto text-center">
            SMB TEX LIMITED is an Apparel Buying House, who is dealing with all
            kinds of apparels customers of different countries in the world.
          </p>
          <div className="px-4 py-1 flex flex-col gap-7 mt-10">
            <div className="flex justify-start items-center gap-5">
              <AiFillSound className="w-12 h-12 rounded-full p-2 font-semibold bg-sky-700 text-white " />
              <div className="w-11/12 mx-auto">
                <p
                  className="uppercase text-lg text-gray-600"
                  style={myFont2.style}
                >
                  TECHNICAL SUPPORT FOR PRODUCTION
                </p>
                <p className="text-gray-600">
                  At SMB TEX Limited, We provide full technical support for the
                  production.
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <IoDiamondOutline className="w-12 h-12 rounded-full p-2 font-semibold bg-sky-700 text-white " />
              <div className="w-11/12 mx-auto">
                <p
                  className="uppercase text-lg text-gray-600"
                  style={myFont2.style}
                >
                  QUALITY INSPECTION
                </p>
                <p className="text-gray-600">
                  At SMB TEX Limited, We provide full technical support for the
                  production.
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-5">
              <BiSolidPlaneAlt className="w-12 h-12 rounded-full p-2 font-semibold bg-sky-700 text-white " />
              <div className="w-11/12 mx-auto">
                <p
                  className="uppercase text-lg text-gray-600"
                  style={myFont2.style}
                >
                  SECURED ON TIME SHIPMENT
                </p>
                <p className="text-gray-600">
                  At SMB TEX Limited, We provide full technical support for the
                  production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
