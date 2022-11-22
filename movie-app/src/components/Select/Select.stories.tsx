import { Story } from '@storybook/react';
import Select from './Select';
import { TProps } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
};

const Template: Story<TProps> = (args): JSX.Element => <Select {...args} />;

export const Basic: Story<TProps> = Template.bind({});
Basic.args = {};
