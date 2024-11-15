import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export interface ButtonProps {
  title: string;
  action: 'primary' | 'secondary';
  onPress: () => void;
}

export function Buttons({ title, action, onPress }: ButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.secondary]}
        onPress={onPress}
      >
        <Text style={[styles.text]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  primary: {
    color: 'red',
  },
  secondary: {
    color: 'blue',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
