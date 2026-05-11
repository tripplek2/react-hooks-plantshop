import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({
  plants,
  searchQuery,
  setSearchQuery,
  onAddPlant,
  onSoldOut, }) {
  return (
    <main>
      {/* form to add new plant */}
      <NewPlantForm onAddPlant={onAddPlant} />

      {/* search bar */}
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} />

        {/* list of plants */}
      <PlantList plants={plants} onSoldOut={onSoldOut} />
    </main>
  );
}

export default PlantPage;
