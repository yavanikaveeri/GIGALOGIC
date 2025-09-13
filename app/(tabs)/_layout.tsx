import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

// ✅ Import icons
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

// Create Material Top Tabs
const { Navigator } = createMaterialTopTabNavigator();
const Tabs = withLayoutContext(Navigator);

export default function TabLayout() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>GIGALOGIC AI</Text>
      </View>

      {/* Tabs under header */}
      <Tabs
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: '#007AFF', height: 3 },
          tabBarStyle: { backgroundColor: '#fff' },
          tabBarShowIcon: true,
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#999',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            // ✅ Example with Ionicons
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
            tabBarLabel: ({ focused }) => (focused ? 'Home' : null),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            // ✅ Example with MaterialIcons
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="explore" size={size} color={color} />
            ),
            tabBarLabel: ({ focused }) => (focused ? 'Explore' : null),
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            // ✅ Example with Ionicons
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="notifications" size={size} color={color} />
            ),
            tabBarLabel: ({ focused }) => (focused ? 'Alerts' : null),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            // ✅ Example with FontAwesome
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
            tabBarLabel: ({ focused }) => (focused ? 'Profile' : null),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 70,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
  },
});
