import { Stack } from 'expo-router/stack';
import { Redirect } from 'expo-router';

import { useAuth } from './../../../contexts/useAuthContext';

export default function Layout() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Redirect href={'/landing'} />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
