import React, { useState } from 'react';
import Slider from './components/Slider';
import './App.scss'; // Assuming you have global styles

const App: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(50);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  return (
    <div className="app-container">
      <h1>React Slider Component</h1>
      <Slider
        min={0}
        max={100}
        step={1}
        value={sliderValue}
        onChange={handleSliderChange}
        type="Continuous"
        subtype="Single"
        handleSize="Size_24"
        icon="volume" // You can change this to 'brightness' or any other icon
        color="#4caf50" // Customize the slider color
      />
      <p>Current Value: {sliderValue}</p>
    </div>
  );
};

export default App;
