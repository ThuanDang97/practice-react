import { Story } from '@storybook/react';
import { Button } from '../Button/Button';
import { TProps } from '../Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template: Story<TProps> = (args): JSX.Element => <Button {...args} />;

export const Basic: Story<TProps> = Template.bind({});
Basic.args = {
  children: 'Press me',
  typeButton: 'button',
  radiant: 'contained',
  color: 'primary',
  width: 'w-25',
  radius: 'rd-1',
  isDisable: false,
};

export const Disable: Story<TProps> = Template.bind({});
Disable.args = {
  children: 'Press me',
  typeButton: 'button',
  radiant: 'contained',
  color: 'primary',
  width: 'w-25',
  radius: 'rd-1',
  isDisable: true,
};
