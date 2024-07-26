import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Slider, { SliderProps } from './Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['Continuous', 'Discrete'], // Ensure correct types
    },
    subtype: {
      control: { type: 'radio' },
      options: ['Single', 'Range'],
    },
    steps: {
      control: { type: 'number' },
      if: { arg: 'type', eq: 'Discrete' }, // Show only for Discrete type
    },
    handleSize: {
      control: { type: 'radio' },
      options: ['Size_24', 'Size_32'],
    },
  },
} as Meta<typeof Slider>;

const Template: StoryFn<SliderProps> = (args) => <Slider {...args} onChange={action('slider-value-changed')} />;

export const ContinuousSingleSize24 = Template.bind({});
ContinuousSingleSize24.args = {
  type: 'Continuous',
  subtype: 'Single',
  handleSize: 'Size_24',
};

export const DiscreteRangeSize32 = Template.bind({});
DiscreteRangeSize32.args = {
  type: 'Discrete',
  subtype: 'Range',
  steps: 10,
  handleSize: 'Size_32',
};
