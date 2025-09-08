"use client";
import Image from "next/image";

const OrderItems = ({ Items }) => {
  // const num = Math.round(Items?.rating);
  // const rate = new Array(num).fill(0);
  const price = Items.price;
  const totalPrice = Items.qty * price;

  // const total=cartItems.reduce((acc,item)=>{
  //   return acc+Number(item.qty)*Number(item.price)
  // },0)
  return (
    <div className="flex w-full  gap-3 h-16 px-1 mb-3  items-center rounded-lg">
      <div className="flex gap-3 items-center w-full  px-3 py-2">
        <div className="w-24 h-20">
          <Image
            src={Items.image[0].url}
            alt={Items.name}
            height={500}
            width={500}
            priority
            className="w-[80%] h-12 object-contain"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="line-clamp-2">{Items.name}</span>
          <span>${totalPrice}</span>
          <span>quantity : {Items.qty}</span>
        </div>

        {/* <DeleteButton items={Items}/> */}
      </div>
    </div>
  );
};

export default OrderItems;
