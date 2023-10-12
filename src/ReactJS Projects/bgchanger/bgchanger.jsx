import React, {useState } from "react";

const BackgroundColorChanger = () => {
  // Define a state variable to store the background color
  const [bgColor, setBgColor] = useState("bg-gray-200"); // Initial background color

  // Function to handle button click and change background color
  const handleChangeColor = (color) => {
    // Generate a random color class from Tailwind CSS classes
    const colors = [
      "bg-red-400",
      "bg-green-400",
      "bg-blue-400",
      "bg-yellow-400",
      "bg-purple-400",
    ];
    var randomColorClass;
    if (color == "red") {
      randomColorClass = colors[0];
    }
    if (color == "green") {
      randomColorClass = colors[1];
    }
    if (color == "blue") {
      randomColorClass = colors[2];
    }
    if (color == "yellow") {
      randomColorClass = colors[3];
    }
    if (color == "purple") {
      randomColorClass = colors[4];
    }
   
      setBgColor(randomColorClass);

    // Update the background color
    
  }

  return (
    <div className={`min-h-screen ${bgColor}`}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Background Color Changer</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={()=>handleChangeColor('blue')}
        >
          Blue
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={()=>handleChangeColor('red')}
        >
          Red
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={()=>handleChangeColor('green')}
        >
          Green
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={()=>handleChangeColor('yellow')}
        >
          Yellow
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={()=>handleChangeColor('purple')}
        >
          Purple
        </button>
      </div>
    </div>
  );
};

export default BackgroundColorChanger;
