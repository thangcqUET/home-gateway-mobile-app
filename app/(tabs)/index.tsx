import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform, View } from 'react-native';

import { BottomNavigation } from '@/components/bottom-navigation';
import { MainControlSection } from '@/components/control-card';
import { SmartHomeBackground } from '@/components/smart-home-background';
import { StatusSection } from '@/components/status-section';
import { TopNavigation } from '@/components/top-navigation';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState(0);

  const requestNotificationPermission = async () => {
    if (Platform.OS === 'android' && Platform.Version >= 33) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          {
            title: 'Smart Home Notifications',
            message: 'Allow notifications to receive alerts from your smart home devices',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Notification permission granted');
        } else {
          console.log('Notification permission denied');
        }
      } catch (err) {
        console.warn('Error requesting notification permission:', err);
      }
    }
  };

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <SmartHomeBackground>
      <View 
        style={{
          flex: 1
        }}
      >
        {/* Top Navigation */}
        <TopNavigation
          title="Smart Home"
          onBackPress={() => console.log('Back pressed')}
          onPlusPress={() => console.log('Add device pressed')}
          onMenuPress={() => console.log('Menu pressed')}
        />

        {/* Status Section */}
        {/* <StatusSection /> */}

        {/* Main Control Cards */}
        <MainControlSection />

        {/* Bottom Navigation */}
        <BottomNavigation
          activeIndex={activeTab}
          onTabPress={setActiveTab}
        />
      </View>
    </SmartHomeBackground>
  );
}
