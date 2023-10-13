// These are all the necessary imports.
import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

// This function will generate the random animal that will be displayed.
function getRandomAnimal() {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

    return animals[Math.floor(Math.random() * animals.length)]; // Return a random, rounded number between one and five, which is equal to animals.length.
}

// This is the parent component of the application.
function App() {
    const [animals, setAnimals] = useState([]); // Call useState and destructure the array it returns to get the piece of state and its setter. "animals" is an empty array by default.

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]); // Use the spread operator to copy animals and add the new, random animal. React will re-render the component at this point.
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} /> // Map every element of the animals array into an instance of the AnimalShow component.
    });

    return (
        // Display the button that displays an animal, as well as the list of animal images (with hearts).
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    );
}

export default App;