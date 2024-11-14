import { Text, Button, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={{ flexDirection: 'column', flex: 1 }}>
      <Text>Good Morning Sarah-Louise</Text>
      <Link href={'/issue'} asChild>
        <Button title="Credentials Ready To Review" />
      </Link>

      <Link href={'/share'} asChild>
        <Button title="Credentials Ready To Share" />
      </Link>
    </View>
  );
}
