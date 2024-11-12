import type {Meta, StoryObj} from '@storybook/react';
 
import {ButtonComponent} from './ButtonComponent';
 
const meta: Meta<typeof ButtonComponent> = {
    component: ButtonComponent,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/6dO5jjkWG01nR8avlv8VcZ/AMI-Platform?type=design&node-id=539%3A2050&mode=dev',
        },
    },
};
 
export default meta;
type Story = StoryObj<typeof ButtonComponent>;
 
export const Default: Story = {

};
 