import React from "react";
import Restaurantcard from "./Restaurantcard";

const Cardcontainer = () => {
  const restaurant = [
    {
      name: "KFC",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_433401.JPG",
      rating: "3.4",
      deliveryTime: "20-25",
      cussine: "Chicken,Burger",
      location: "Kalyan",
    },
    // Duplicate entries can be replaced or removed as needed
    {
      name: "Grameen Kulfi",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zma74lt3fmzb1wojuuzg",
      rating: "4.4",
      deliveryTime: "10-15",
      cussine: "Kulfi",
      location: "Kalyan",
    },
    {
      name: "McDonald's",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/6d4a618f-ab85-4432-a80c-882cdb47083e_23746.jpg",
      rating: "3.4",
      deliveryTime: "20-25",
      cussine: "Chicken,Burger",
      location: "Kalyan",
    },
    {
      name: "KFC",
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_433401.JPG",
      rating: "3.4",
      deliveryTime: "20-25",
      cussine: "Chicken,Burger",
      location: "Kalyan",
    },
    // Duplicate entries can be replaced or removed as needed
  ];

  return (
    <div className="flex flex-wrap justify-center gap-7 my-10">
      {restaurant.map((restaurant) => (
        <Restaurantcard
          name={restaurant.name}
          img={restaurant.img}
          rating={restaurant.rating}
          deliveryTime={restaurant.deliveryTime}
          cussine={restaurant.cussine}
          location={restaurant.location}
        />
      ))}
    </div>
  );
};

export default Cardcontainer;
