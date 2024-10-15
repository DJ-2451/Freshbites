import React from "react";

const Restaurantcard = ({
  name,
  img,
  rating,
  deliveryTime,
  location,
  cussine,
}) => {
  return (
    <>
      <div className="">
        <img className="w-72 h-52 rounded-lg" src={img} />
        <div className="font-black">{name}</div>
        <div>
          <i class="fa-solid fa-star text-green-800"></i>
          {rating}
        </div>
        <div>{deliveryTime}</div>
        <div>{cussine}</div>
        <div>{location}</div>
      </div>
    </>
  );
};

export default Restaurantcard;
