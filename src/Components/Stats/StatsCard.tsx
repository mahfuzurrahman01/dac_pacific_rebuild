import { FaUsers } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { BiSolidBriefcaseAlt } from "react-icons/bi";
import { GiTrophy } from "react-icons/gi";
const StatsCard = () => {
  return (
    <div className="w-full py-5 px-2 lg:flex hidden justify-between items-center bg-zinc-950">
      <div className="flex flex-col justify-center items-center gap-1 w-1/4 hover:bg-black duration-500 p-5">
        <FaUsers className="text-white text-5xl" />
        <h1 className="font-bold text-6xl text-white">1200</h1>
        <h1 className="font-semibold text-2xl text-white uppercase">Clients</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 w-1/4 hover:bg-black duration-500 p-5">
        <AiFillBank className="text-white text-5xl" />
        <h1 className="font-bold text-6xl text-white">1277</h1>
        <h1 className="font-semibold text-2xl text-white uppercase">
          ITEM SOLD
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 w-1/4 hover:bg-black duration-500 p-5">
        <BiSolidBriefcaseAlt className="text-white text-5xl" />
        <h1 className="font-bold text-6xl text-white">869</h1>
        <h1 className="font-semibold text-2xl text-white uppercase">
          Projects
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 w-1/4 hover:bg-black duration-500 p-5">
        <GiTrophy className="text-white text-5xl" />
        <h1 className="font-bold text-6xl text-white">76</h1>
        <h1 className="font-semibold text-2xl text-white uppercase">Awards</h1>
      </div>
    </div>
  );
};

export default StatsCard;
