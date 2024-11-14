import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: '#015EB8',
        tabBarInactiveBackgroundColor: '#015EB8',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="credentials"
        options={{
          title: 'Credentials',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="connections"
        options={{
          title: 'Connections',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="handshake-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="envelope-open" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="share/index"
        options={{
          headerShown: false,
          href: null,
        }}
      />
      <Tabs.Screen
        name="issue/index"
        options={{
          headerShown: false,
          href: null,
        }}
      />
    </Tabs>
  );
}
