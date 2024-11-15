import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export interface ButtonProps {
  title: string;
  action: 'primary' | 'secondary';
  onPress: () => void;
}

export function Button({ title, action, onPress }: ButtonProps) {
  return (
    <View
      style={[
        styles.container,
        action == 'primary' ? styles.primary : styles.secondary,
      ]}
    >
      <TouchableOpacity style={[styles.button]} onPress={onPress}>
        <Text
          style={[
            styles.buttonText,
            action == 'primary' ? styles.primarytext : styles.secondarytext,
          ]}
        >
          {title}
        </Text>
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
    padding: 20,
    borderRadius: 5,
    borderWidth: 0,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  buttonText: {
    fontSize: 20,
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
    color: 'black',
    textAlign: 'center',
    fontWeight: '500',
  },
  secondarytext: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
