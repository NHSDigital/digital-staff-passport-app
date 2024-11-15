import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6dO5jjkWG01nR8avlv8VcZ/AMI-Platform?type=design&node-id=539%3A2050&mode=dev',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
