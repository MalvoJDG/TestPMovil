import { Tabs } from 'expo-router';
import React from 'react';
import { Linking, Platform } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Octicons from '@expo/vector-icons/Octicons';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="multiplicadora"
        options={{
          title: 'Multiplicadora',
          tabBarIcon: ({ color }) => <Entypo name="squared-cross" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name= 'sumadora'
        options={{
          title: 'Sumadora',
          tabBarIcon: ({ color }) => <AntDesign name="pluscircle" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name= 'traductora'
        options={{
          title: 'Traductora',
          tabBarIcon: ({ color }) => <Octicons name="number" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="video"
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            Linking.openURL('https://youtu.be/ifWBwBE0MJE?si=mxPYsjm1lVHEsyUZ');
          },
        }}
        options={{
          title: 'Video',
          tabBarIcon: ({ color }) => <AntDesign name="youtube" size={24} color="red" />,
        }}
      />
    </Tabs>
  );
}
