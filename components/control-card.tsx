import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface ControlCardProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  iconBackgroundColor?: string;
  iconColor?: string;
  onPress?: () => void;
}

export function ControlCard({ 
  icon, 
  title, 
  subtitle, 
  iconBackgroundColor = "#fef3c7", 
  iconColor = "#f59e0b",
  onPress 
}: ControlCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        borderRadius: 24,
        marginHorizontal: 24,
        marginVertical: 16,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 8,
      }}
    >
      <View 
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        {/* Left side - Circular icon background */}
        <View 
          style={{ 
            backgroundColor: iconBackgroundColor,
            width: 64,
            height: 64,
            borderRadius: 32,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 16
          }}
        >
          <Ionicons name={icon} size={32} color={iconColor} />
        </View>
        
        {/* Right side - Text content */}
        <View 
          style={{
            flex: 1
          }}
        >
          <Text 
            style={{
              color: '#111827',
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 4
            }}
          >
            {title}
          </Text>
          <Text 
            style={{
              color: '#6b7280',
              fontSize: 14
            }}
          >
            {subtitle}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export function MainControlSection() {
  return (
    <View 
      style={{
        flex: 1,
        justifyContent: 'center'
      }}
    >
      <ControlCard
        icon="bulb-outline"
        title="Living Room Light"
        subtitle="Tap to turn on/off"
        iconBackgroundColor="#fef3c7"
        iconColor="#f59e0b"
        onPress={() => console.log('Light toggle pressed')}
      />
      
      <ControlCard
        icon="thermometer-outline"
        title="Temperature Control"
        subtitle="Currently 24°C"
        iconBackgroundColor="#dbeafe"
        iconColor="#3b82f6"
        onPress={() => console.log('Temperature pressed')}
      />
    </View>
  );
}