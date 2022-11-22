import { Story } from '@storybook/react';
import Tooltip from './Tooltip';
import { TProps } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

const Template: Story<TProps> = (args): JSX.Element => <Tooltip {...args}>Hover</Tooltip>;

export const Basic: Story<TProps> = Template.bind({});
Basic.args = {
  text: 'Tooltip',
};
