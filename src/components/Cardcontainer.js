import React, { useEffect, useState } from "react";
import Restaurantcard from "./Restaurantcard";

const CardContainer = () => {
  let [restaurants, setRestaurants] = useState([]);

  const getRestaurant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.19630&lng=72.96750&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(restaurants);
  useEffect(() => {
    getRestaurant();
  }, []);
  // setReastaurants(getRestaurant);
  return (
    <>
      <div className="flex flex-wrap justify-center gap-7 my-10 ">
        {restaurants.map((restaurant) => (
          <Restaurantcard
            name={restaurant.info.name}
            imgId={restaurant.info.cloudinaryImageId}
            rating={restaurant.info.avgRating}
            deliveryTime={restaurant.info.sla.slaString}
            cussine={restaurant.info.cuisines}
            location={restaurant.info.locality}
          />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
