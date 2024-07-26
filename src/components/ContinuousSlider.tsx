import React, { useState, useEffect } from 'react';
import { SliderProps } from './Slider';
import './Slider.scss';

const ContinuousSlider: React.FC<SliderProps> = ({ steps, handleSize, onChange }) => {
  const [value, setValue] = useState<number>(50);

  useEffect(() => {
    updateTrackBackground(value);
  }, [value]);

  const updateTrackBackground = (val: number) => {
    const track = document.querySelector('.slider-track') as HTMLElement;
    track.style.background = `linear-gradient(to right, #28a745 0%, #28a745 ${val}%, #ddd ${val}%, #ddd 100%)`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="slider-container">
      <div className="slider-track"></div>
      <input
        type="range"
        min="0"
        max="100"
        step={steps ? steps : 1}
        value={value}
        onChange={handleChange}
        className={`slider-thumb ${handleSize.toLowerCase()}`} // Apply handleSize class
      />
    </div>
  );
};

export default ContinuousSlider;
