import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export interface ButtonProps {
  title: string;
  action: 'primary' | 'secondary';
  onPress: () => void;
}

export function Buttons ({
  title,
  action,
  onPress
}: ButtonProps) {
  const getStyle = () => {
    if (action === 'primary') {
      return {
        backgroundColor: '#FFFFFF',
        textColor: '#002F5C',
        borderColor: '#002F5C',
        shadowColor: '#212B32',
      };
    } else {
      return {
        backgroundColor: '#007F3B',
        textColor: '#FFFFFF',
        shadowColor: '#00411D',
      };
    }
  };

  const styles = getStyle();

  return (
    <View style={buttonStyles.container}>
      <TouchableOpacity
        style={[
          buttonStyles.button,
          {
            backgroundColor: styles.backgroundColor,
            borderColor: styles.borderColor,
            shadowColor: styles.shadowColor,
          },
        ]}
        onPress={onPress}
      >
        <Text style={[buttonStyles.text, { color: styles.textColor }]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const buttonStyles = StyleSheet.create({
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
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});