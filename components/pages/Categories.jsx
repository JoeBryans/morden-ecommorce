import Image from "next/image";
import Link from "next/link";
import {
  Beauty,
  Electronics,
  Fashion,
  Grocery,
  HomeAndOffice,
  Laptop,
  Latest,
  Others,
  Phones,
  Sports,
} from "../../action/action";
const ProductCategories = async () => {
  // const phones = await Phones();
  const [
    phones,
    laptops,
    homeandoffice,
    fashion,
    grocery,
    electronics,
    others,
    sports,
    beauty,
    latest,
  ] = await Promise.all([
    Phones(),
    Laptop(),
    HomeAndOffice(),
    Fashion(),
    Grocery(),
    Electronics(),
    Others(),
    Sports(),
    Beauty(),
    Latest(),
  ]);

  return (
    <div className="w-full relative flex flex-col gap-10">
      {/* latest products */}
      <div className="w-full    relative overflow-auto scrollbar-hide px-5 py-2 rounded-lg ">
        <div className="w-max   py-3 relative mx-auto">
          <h1 className="text-left text-2xl font-bold text-black">Latest</h1>
          <div className="flex items-center gap-4 w-max px-4">
            {latest.length>0&&
              latest?.slice(0, 10).map((item, index) => {
                return (
              <div
                key={index}
                className=" w-40 h-56 flex flex-col items-center relative p-1.5 overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <div className=" w-40 h-24  flex items-center justify-center rounded-lg overflow-hidden  group-hover:opacity-55">
                  <Image
                    src={item.image[0].url}
                    alt={item.name}
                    width={500}
                    height={500}
                    className="w-[80%] h-48  object-cover rounded-lg transition-all duration-300 ease-in-out cusor-pointer"
                  />
                </div>
                <div className="mt-3 flex flex-col items-start gap-2 w-full">
                  <span className="text-gray-700 text-xl font-semibold line-clamp-1">
                    {item.name}
                  </span>
                </div>
                <div className="flex gap-2 justify-between items-center w-full  mt-2 ">
                  <p className=" opacity-60 line-through text-sm font-semibold md:block hidden">{`$${item.price}`}</p>
                  <p className=" text-sm font-semibold">{item.price}</p>
                </div>
              </div>
              );
              })

              }
          </div>
        </div>
      </div>

      {/* Phone Products */}

      <div className="w-full      relative overflow-auto scrollbar-hide px-5 py-2 rounded-lg">
        <div className="w-max py-3 relative mx-auto">
          <h1 className="text-left text-2xl font-bold text-black">Phones</h1>
          <div className="flex items-center gap-4 w-max px-4">
            {phones &&
              phones?.slice(0, 10).map((item, index) => {
                return (
                  <div key={index}>
                    <Link href={`/phones`}>
                      <div className=" w-40 h-56 flex flex-col items-center relative p-1.5 overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out">
                        <div className=" w-40 h-24  flex items-center justify-center rounded-lg overflow-hidden  group-hover:opacity-55">
                          <Image
                            src={item.image[0].url}
                            alt={item.name}
                            width={500}
                            height={500}
                            className="w-[80%] h-48  object-cover rounded-lg transition-all duration-300 ease-in-out cusor-pointer"
                          />
                        </div>
                        <div className="mt-3 flex flex-col items-start gap-2 w-full">
                          <span className="text-gray-700 text-xl font-semibold line-clamp-1">
                            {item.name}
                          </span>
                        </div>
                        <div className="flex gap-2 justify-between items-center w-full  mt-2 ">
                          <p className=" opacity-60 line-through text-sm font-semibold md:block hidden">{`$${item.price}`}</p>
                          <p className=" text-sm font-semibold">{item.price}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/* laptop Products */}

      <div className="w-full     relative overflow-auto scrollbar-hide px-5 py-2 rounded-lg">
        <div className="w-max  py-3 relative mx-auto">
          <h1 className="text-left text-2xl font-bold text-black">Laptop</h1>
          <div className="flex items-center gap-4 w-max px-4">
            {laptops.length>0 &&
              laptops?.slice(0, 10).map((item, index) => {
                return (
                  <div key={index}>
                    <Link href={`/computer`}>
                      <div className=" w-40 h-56 flex flex-col items-center relative p-1.5 overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out">
                        <div className=" w-40 h-24  flex items-center justify-center rounded-lg overflow-hidden  group-hover:opacity-55">
                          <Image
                            src={item.image[0].url}
                            alt={item.name}
                            width={500}
                            height={500}
                            className="w-[80%] h-48  object-cover rounded-lg transition-all duration-300 ease-in-out cusor-pointer"
                          />
                        </div>
                        <div className="mt-3 flex flex-col items-start gap-2 w-full">
                          <span className="text-gray-700 text-xl font-semibold line-clamp-1">
                            {item.name}
                          </span>
                        </div>
                        <div className="flex gap-2 justify-between items-center w-full  mt-2 ">
                          <p className=" opacity-60 line-through text-sm font-semibold md:block hidden">{`$${item.price}`}</p>
                          <p className=" text-sm font-semibold">{item.price}</p>
                        </div>
                      </div>
                    </Link>{" "}
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Fashion Products */}

      <div className="w-full      relative overflow-auto hide-scrollbar px-5 py-2 rounded-lg">
        <div className="w-max py-3 relative mx-auto">
          <h1 className="text-left text-2xl font-bold text-black">Fashion</h1>
          <div className="flex items-center gap-4 w-max px-4">
            {fashion.length > 0 &&
              fashion?.slice(0, 10).map((item, index) => {
                return (
                  <div key={index}>
                    <Link href={`/fashion`}>
                      <div className=" w-40 h-56 flex flex-col items-center relative p-1.5 overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out">
                        <div className=" w-40 h-24  flex items-center justify-center rounded-lg overflow-hidden  group-hover:opacity-55">
                          <Image
                            src={item.image[0].url}
                            alt={item.name}
                            width={500}
                            height={500}
                            className="w-[80%] h-48  object-cover rounded-lg transition-all duration-300 ease-in-out cusor-pointer"
                          />
                        </div>
                        <div className="mt-3 flex flex-col items-start gap-2 w-full">
                          <span className="text-gray-700 text-xl font-semibold line-clamp-1">
                            {item.name}
                          </span>
                        </div>
                        <div className="flex gap-2 justify-between items-center w-full  mt-2 ">
                          <p className=" opacity-60 line-through text-sm font-semibold md:block hidden">{`$${item.price}`}</p>
                          <p className=" text-sm font-semibold">{item.price}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Tablet Products */}
      {/* <div className="flex items-center gap-4 w-full ">
        {product &&
          product.map((item, index) => {
            return (
              <div
                key={index}
                className=" group   flex flex-col items-center h-full relative p-3 overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <div className=" w-full h-36 flex items-center justify-center rounded-lg overflow-hidden  group-hover:opacity-55">
                  <Image
                    src={item.image[0].url}
                    alt={item.name}
                    width={150}
                    height={100}
                    className="w-[80%] h-28  object-cover rounded-lg transition-all duration-300 ease-in-out cusor-pointer"
                  />
                </div>
                <div className="mt-3 flex flex-col items-start gap-2 w-full">
                  <p className="text-black opacity-80 text-lg  ">
                    {item.category}
                  </p>
                  <Link
                    href={`/products/${item.id}`}
                    className="text-gray-700 text-xl font-semibold line-clamp-1 hover:underline cusor-pointer"
                  >
                    {item.name}
                  </Link>
                </div>
                <div className="flex gap-2 justify-start w-full  mt-2 ">
                  <p className="text-black opacity-60 line-through text-sm font-semibold md:block hidden">{`$${item.price}`}</p>
                  <p className="text-black text-sm font-semibold">
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
      </div> */}

      {/* fashion Products */}
      {/* <div className="flex items-center gap-4 w-full ">
        {product &&
          product.map((item, index) => {
            return (
              <div
                key={index}
                className=" group   flex flex-col items-center h-full relative p-3 overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <div className=" w-full h-36 flex items-center justify-center rounded-lg overflow-hidden  group-hover:opacity-55">
                  <Image
                    src={item.image[0].url}
                    alt={item.name}
                    width={150}
                    height={100}
                    className="w-[80%] h-28  object-cover rounded-lg transition-all duration-300 ease-in-out cusor-pointer"
                  />
                </div>
                <div className="mt-3 flex flex-col items-start gap-2 w-full">
                  <p className="text-black opacity-80 text-lg  ">
                    {item.category}
                  </p>
                  <Link
                    href={`/products/${item.id}`}
                    className="text-gray-700 text-xl font-semibold line-clamp-1 hover:underline cusor-pointer"
                  >
                    {item.name}
                  </Link>
                </div>
                <div className="flex gap-2 justify-start w-full  mt-2 ">
                  <p className="text-black opacity-60 line-through text-sm font-semibold md:block hidden">{`$${item.price}`}</p>
                  <p className="text-black text-sm font-semibold">
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
      </div> */}

      {/* Electronic Products */}

      {/* <div className="flex items-center gap-4 w-full ">
        {product &&
          product.map((item, index) => {
            return (
              <div
                key={index}
                className=" group   flex flex-col items-center h-full relative p-3 overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <div className=" w-full h-36 flex items-center justify-center rounded-lg overflow-hidden  group-hover:opacity-55">
                  <Image
                    src={item.image[0].url}
                    alt={item.name}
                    width={150}
                    height={100}
                    className="w-[80%] h-28  object-cover rounded-lg transition-all duration-300 ease-in-out cusor-pointer"
                  />
                </div>
                <div className="mt-3 flex flex-col items-start gap-2 w-full">
                  <p className="text-black opacity-80 text-lg  ">
                    {item.category}
                  </p>
                  <Link
                    href={`/products/${item.id}`}
                    className="text-gray-700 text-xl font-semibold line-clamp-1 hover:underline cusor-pointer"
                  >
                    {item.name}
                  </Link>
                </div>
                <div className="flex gap-2 justify-start w-full  mt-2 ">
                  <p className="text-black opacity-60 line-through text-sm font-semibold md:block hidden">{`$${item.price}`}</p>
                  <p className="text-black text-sm font-semibold">
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
      </div> */}

      {/* Home and office Products */}
      {/* <div className="flex items-center gap-4 w-full ">
        {product &&
          product.map((item, index) => {
            return (
              <div
                key={index}
                className=" group   flex flex-col items-center h-full relative p-3 overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <div className=" w-full h-36 flex items-center justify-center rounded-lg overflow-hidden  group-hover:opacity-55">
                  <Image
                    src={item.image[0].url}
                    alt={item.name}
                    width={150}
                    height={100}
                    className="w-[80%] h-28  object-cover rounded-lg transition-all duration-300 ease-in-out cusor-pointer"
                  />
                </div>
                <div className="mt-3 flex flex-col items-start gap-2 w-full">
                  <p className="text-black opacity-80 text-lg  ">
                    {item.category}
                  </p>
                  <Link
                    href={`/products/${item.id}`}
                    className="text-gray-700 text-xl font-semibold line-clamp-1 hover:underline cusor-pointer"
                  >
                    {item.name}
                  </Link>
                </div>
                <div className="flex gap-2 justify-start w-full  mt-2 ">
                  <p className="text-black opacity-60 line-through text-sm font-semibold md:block hidden">{`$${item.price}`}</p>
                  <p className="text-black text-sm font-semibold">
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
      </div> */}

      {/* Beauty Products */}
      {/* <div className="flex items-center gap-4 w-full ">
        {product &&
          product.map((item, index) => {
            return (
              <div
                key={index}
                className=" group   flex flex-col items-center h-full relative p-3 overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                <div className=" w-full h-36 flex items-center justify-center rounded-lg overflow-hidden  group-hover:opacity-55">
                  <Image
                    src={item.image[0].url}
                    alt={item.name}
                    width={150}
                    height={100}
                    className="w-[80%] h-28  object-cover rounded-lg transition-all duration-300 ease-in-out cusor-pointer"
                  />
                </div>
                <div className="mt-3 flex flex-col items-start gap-2 w-full">
                  <p className="text-black opacity-80 text-lg  ">
                    {item.category}
                  </p>
                  <Link
                    href={`/products/${item.id}`}
                    className="text-gray-700 text-xl font-semibold line-clamp-1 hover:underline cusor-pointer"
                  >
                    {item.name}
                  </Link>
                </div>
                <div className="flex gap-2 justify-start w-full  mt-2 ">
                  <p className="text-black opacity-60 line-through text-sm font-semibold md:block hidden">{`$${item.price}`}</p>
                  <p className="text-black text-sm font-semibold">
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
      </div> */}
    </div>
  );
};

export default ProductCategories;
