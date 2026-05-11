import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

// fetch plant on page load
function App() {
  const [plants, setPlants] = useState([])
  const [searchQuery, setSearcgQuery] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
    
  }, [])
  // add new plant
  function handleAddPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant])
  }

  // mark plant as sold out
  function HandleSoldOut(id) {
    const updatedPlants = plants.map((plant) => 
      plant.id === id
       ?{ ...plant, instock: false } : plant 
    )
    setPlants(updatedPlants)
  }

  // filter plants based on search
  const filteredPlants = plants.filter((plant) =>      plant.name.toLowerCase().includes(searchQuery.toLowerCase()))
  return (
    <div className="app">
      <Header />

      <PlantPage
        plants={filteredPlants}
        searchQuery={searchQuery}
        onAddPlant={handleAddPlant}
        onSoldOut={HandleSoldOut} />
    </div>
  );
}

export default App;
