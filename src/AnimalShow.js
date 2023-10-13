// Import the CSS, useState, and all of the necessary images.
import "./AnimalShow.css";
import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = { // It is acceptable to provide just the keys in this object, because the keys and values are the same.
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

// This function will show each individual animal.
function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0); // Initialize the clicks state variable (to zero) and its setter.

    const handleClick = () => {
        setClicks(clicks + 1); // Increment the number of clicks. React will re-render at this point.
    }

    return (
        /* Map the image source to the key specified by the prop "type". Also, 
        increment the heart size by 10 pixels every time the user clicks on an animal. */
        <div className="animal-show" onClick={handleClick}>
            <img className="animal" alt="animal" src={svgMap[type]} />
            <img className="heart"
                alt="heart"
                src={heart}
                style={{ width: 10 + 10 * clicks + "px" }}
            />
        </div>
    );
}

export default AnimalShow;