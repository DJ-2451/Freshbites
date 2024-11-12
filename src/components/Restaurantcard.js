import React from "react";

const Restaurantcard = ({
  name,
  imgId,
  rating,
  deliveryTime,
  location,
  cussine,
}) => {
  const imgUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <>
      <div className="">
        <img
          className="w-72 h-48 rounded-lg object-cover"
          src={imgUrl + imgId}
        />
        <div className="font-black">{name}</div>
        <div>
          <i class="fa-solid fa-star text-green-800"> </i>
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
