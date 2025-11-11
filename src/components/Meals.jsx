import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";

// import useHttp from "../hooks/useHttp";
import useHttp from "../hooks/useHttp2";
import Error from "./Error";

function Meals({ filter }) {
  const { error, isLoading, data: meals = [], sendRequest } = useHttp();

  useEffect(() => {
    sendRequest("http://localhost:3000/meals");
  }, [sendRequest]);

  // Filtering Meals
  const query = (filter?.query ?? "").trim().toLowerCase();
  const category = (filter?.category ?? "").trim().toLowerCase();
  const priceFilter = (filter?.priceRange ?? "").trim().toLowerCase();

  const displayedMeals = meals
    ?.filter(
      (meal) => (query ? meal.name?.toLowerCase().includes(query) : true) // Filter by Search
    )
    ?.filter(
      (meal) => (category ? meal.type?.toLowerCase() === category : true) // Filter by Veg/Non-Veg
    )
    ?.filter((meal) => {
      // Filter by Price
      if (priceFilter === "premium") {
        return meal.price > 10 && meal.price < 15;
      } else if (priceFilter === "special") {
        return meal.price > 50;
      } else if (priceFilter === "basic") {
        return meal.price < 10;
      }
      return true;
    });

  // If Loading...
  if (isLoading) {
    return <div className="center loading">Loading...</div>;
  }

  // If No Meals Found
  if (!error && displayedMeals?.length === 0) {
    return (
      <div className="no-meals">
        <img src="/no-food-2.jpg" alt="No meals" className="no-meals-img" />
        <h2>No meals found</h2>
        <p>Try adjusting your search or filter.</p>
      </div>
    );
  }

  // If Error
  if (error) {
    return <Error title="Failled to load meals" message={error} />;
  }

  return (
    <ul id="meals">
      {displayedMeals?.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}

export default Meals;
