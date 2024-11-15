import { Button, Text, View } from 'react-native';
// import { useAuth } from './../../contexts/useAuthContext';

export default function Landing() {
  // const { toggleLogin } = useAuth();
  return (
    <View
      style={{ flex: 1, backgroundColor: '#015EB8', alignContent: 'center' }}
    >
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            color: 'white',
            fontSize: '30',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Access your NHS Staff Passport
        </Text>
      </View>

      {/* <Button title="Login" onPress={toggleLogin} /> */}
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            color: 'white',
            fontSize: '20',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          version 1.0
        </Text>
      </View>
    </View>
  );
}
