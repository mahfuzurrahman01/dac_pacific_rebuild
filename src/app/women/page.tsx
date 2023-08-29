import Image from "next/image";

const page = () => {
  return (
    <div>
      <h1 className="uppercase font-serif font-bold text-center text-gray-700 text-xl py-5">
      LADIES WOVEN HOODY JACKET
      </h1>
      <section className="py-6 bg-gray-100 text-gray-50 w-4/5 mx-auto">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <Image
            width={200}
            height={300}
            src={"/womens/wh1.jpg"}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
          />
          <Image
            width={200}
            height={300}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={"/womens/wh2.jpg"}
          />
          <Image
            width={200}
            height={300}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={"/womens/wh3.jpg"}
          />
          <Image
            width={200}
            height={300}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={"/womens/wh4.jpg"}
          />
          
        </div>
      </section>
     
    </div>
  );
};

export default page;
