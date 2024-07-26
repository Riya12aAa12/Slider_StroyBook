import React from 'react';
import ContinuousSlider from './ContinuousSlider';
import DiscreteSlider from './DiscreetSlider'; // Ensure the correct import name
import RangeSlider from './RangeSlider';
import './Slider.scss';

export interface SliderProps {
  type: 'Continuous' | 'Discrete';
  subtype: 'Single' | 'Range';
  steps?: number;
  handleSize: 'Size_24' | 'Size_32';
  onChange: (value: number | [number, number]) => void;
}

const Slider: React.FC<SliderProps> = (props) => {
  const { type, subtype, handleSize } = props;

  if (type === 'Continuous' && subtype === 'Single') {
    return <ContinuousSlider {...props} handleSize={handleSize} />;
  } else if (type === 'Discrete' && subtype === 'Single') {
    return <DiscreteSlider {...props} handleSize={handleSize} />;
  } else if (subtype === 'Range') {
    return <RangeSlider {...props} handleSize={handleSize} />;
  }

  return null;
};

export default Slider;
