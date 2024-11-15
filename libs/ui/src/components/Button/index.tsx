import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export interface ButtonProps {
  title: string;
  action: 'primary' | 'secondary';
  onPress: () => void;
}

export function Buttons({ title, action, onPress }: ButtonProps) {
  const isPrimary = action === 'primary';

  return (
    <View style={[styles.container, isPrimary ? styles.primary : styles.secondary]}>
      <TouchableOpacity style={[styles.button]} onPress={onPress}>
        <Text style={[isPrimary ? styles.primarytext : styles.secondarytext]}>{title}</Text>
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
    backgroundColor: '#FFFFFF',
    borderColor: '#002F5C',
    shadowColor: '#212B32',
  },
  secondary: {
    backgroundColor: '#007F3B',
    shadowColor: '#00411D',
  },
  primarytext: {
    color: '#002F5C',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  secondarytext: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
