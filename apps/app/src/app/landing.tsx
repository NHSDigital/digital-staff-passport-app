import { Text, View } from 'react-native';
import { Button } from '@digital-staff-passport/ui';
import { useAuth } from '@digital-staff-passport/features';

export default function Landing() {
  const { toggleLogin } = useAuth();
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

      <Button title="Continue" onPress={toggleLogin} action="primary" />
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
