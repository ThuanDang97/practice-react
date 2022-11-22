import { Story } from '@storybook/react';
import Optional from './Optional';
import { TProps } from './Optional';

export default {
  title: 'Components/Optional',
  component: Optional,
};

const Template: Story<TProps> = (args): JSX.Element => (
  <div
    style={{
      background: 'black',
      position: 'absolute',
      width: '30px',
      height: '30px',
      left: '0',
    }}
  >
    <Optional {...args} />
  </div>
);

export const Basic: Story<TProps> = Template.bind({});
Basic.args = {};
