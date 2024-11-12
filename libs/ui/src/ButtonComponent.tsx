import { Button } from "react-native";

export const ButtonComponent = () => {
    
    return (
      <Button
        onPress= {() => console.log("Button Pressed")}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    );
}