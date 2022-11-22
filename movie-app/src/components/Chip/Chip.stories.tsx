import { Story } from '@storybook/react';
import Chip from './Chip';
import { TProps } from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
};

const Template: Story<TProps> = (args): JSX.Element => <Chip {...args} />;

export const Basic: Story<TProps> = Template.bind({});
Basic.args = {
  chip: {
    id: 1,
    name: 'Chip',
    actived: false,
  },
};

export const Actived: Story<TProps> = Template.bind({});
Actived.args = {
  chip: {
    id: 1,
    name: 'Chip',
    actived: true,
  },
};
