import { Story } from '@storybook/react';
import Menu from './Menu';
import { TProps } from './Menu';

export default {
  title: 'Components/Menu',
  component: Menu,
};

const Template: Story<TProps> = (args): JSX.Element => <Menu {...args} />;

export const Basic: Story<TProps> = Template.bind({});
Basic.args = {
  title: 'Menu',
  children: 'Children',
};
