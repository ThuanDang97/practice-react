import { Story } from '@storybook/react';
import Popup from './Popup';
import { TProps } from './Popup';

export default {
  title: 'Components/Popup',
  component: Popup,
};

const Template: Story<TProps> = (args): JSX.Element => (
  <div
    style={{
      background: 'gray',
      width: '15%',
    }}
  >
    <Popup {...args} />
  </div>
);

export const Basic: Story<TProps> = Template.bind({});
Basic.args = {
  title: 'Element',
  src: 'http://localhost:3000/src/assets/heart-black.svg',
  alt: 'Element',
  color: 'black',
};

export const Active: Story<TProps> = Template.bind({});
Active.args = {
  title: 'Element',
  src: 'http://localhost:3000/src/assets/heart-black.svg',
  alt: 'Element',
  color: 'pink',
};
