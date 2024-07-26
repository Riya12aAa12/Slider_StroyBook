import React, { useState, useEffect } from 'react';
import { SliderProps } from './Slider'; // Import SliderProps type
import './Slider.scss';

const RangeSlider: React.FC<SliderProps> = ({ steps, handleSize, onChange }) => {
  const [value, setValue] = useState<[number, number]>([25, 75]);

  useEffect(() => {
    updateTrackBackground(value[0], value[1]);
  }, [value]);

  const updateTrackBackground = (val1: number, val2: number) => {
    const track = document.querySelector('.slider-track') as HTMLElement;
    track.style.background = `linear-gradient(to right, #ddd 0%, #ddd ${val1}%, #28a745 ${val1}%, #28a745 ${val2}%, #ddd ${val2}%, #ddd 100%)`;
  };

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = [...value] as [number, number];
    newValue[index] = Number(e.target.value);
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
        value={value[0]}
        onChange={handleChange(0)}
        className={`slider-thumb ${handleSize.toLowerCase()}`}
      />
      <input
        type="range"
        min="0"
        max="100"
        step={steps ? steps : 1}
        value={value[1]}
        onChange={handleChange(1)}
        className={`slider-thumb ${handleSize.toLowerCase()}`}
      />
      <div className="tooltip" style={{ left: `calc(${value[0]}% + 12px)` }}>{value[0]}%</div>
      <div className="tooltip" style={{ left: `calc(${value[1]}% + 12px)` }}>{value[1]}%</div>
    </div>
  );
};

export default RangeSlider;
