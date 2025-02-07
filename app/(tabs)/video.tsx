import { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Linking from 'expo-linking';

export default function VideoScreen() {
  useEffect(() => {
    Linking.openURL('https://www.youtube.com/watch?v=ifWBwBE0MJE');
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Abriendo video...</Text>
    </View>
  );
}
