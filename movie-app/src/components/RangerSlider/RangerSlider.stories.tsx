import { Story } from '@storybook/react';
import RangerSlider from './RangerSlider';
import { TProps } from './RangerSlider';

export default {
  title: 'Components/RangerSlider',
  component: RangerSlider,
};

const Template: Story<TProps> = (args): JSX.Element => <RangerSlider {...args} />;

export const Basic: Story<TProps> = Template.bind({});
Basic.args = {
  label: 'Score',
  min: 0,
  max: 10,
  defaultValue: 10,
  step: 1,
};
