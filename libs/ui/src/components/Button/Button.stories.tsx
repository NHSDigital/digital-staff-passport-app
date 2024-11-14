import { View, Alert } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { Buttons } from '.';

const ButtonStory: Meta<typeof Buttons> = {
  title: 'Button',
  component: Buttons,
  decorators: [
    (Story) => (
      <View
        style={{
          paddingHorizontal: '25%',
          paddingVertical: '50%',
        }}
      >
        <Story />
      </View>
    ),
  ],
  argTypes: {
    action: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};

export default ButtonStory;

const btnTestAlert = () =>
  Alert.alert('Title', 'Content', [
    {
      text: 'cancel',
      onPress: () => console.log('cancel pressed'),
      style: 'cancel',
    },
]);

export const Primary: StoryObj<typeof Buttons> = {
  args: {
    title: 'Primary',
    action: 'primary',
    onPress: btnTestAlert,
  },
};

export const Secondary: StoryObj<typeof Buttons> = {
  args: {
    title: 'Secondary',
    action: 'secondary',
    onPress: btnTestAlert,
  },
};