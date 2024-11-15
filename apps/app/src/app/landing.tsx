import { Text, View, Image } from 'react-native';
import { Button } from '@digital-staff-passport/ui';
import { useAuth } from '@digital-staff-passport/features';
import NHS_LOGO from '../../assets/NHS_Logo.svg';

export default function Landing() {
  const { toggleLogin } = useAuth();
  return (
    <View
      style={{ flex: 1, backgroundColor: '#015EB8', alignContent: 'center' }}
    >
      <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center' }}>
        <NHS_LOGO width={500} height={50} />
      </View>
      <View style={{ flex: 3 }}>
        <Text
          style={{
            paddingBottom: 10,
            color: 'white',
            fontSize: '30',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Access your NHS Staff Passport
        </Text>
        <Button title="Continue" onPress={toggleLogin} action="primary" />
        <View style={{ alignItems: 'center', paddingTop: 50 }}>
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
    </View>
  );
}
