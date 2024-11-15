import { Button as RNButton } from 'react-native';

export const Button = () => {
  return (
    <RNButton
      onPress={() => console.log('Button Pressed')}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  );
};
