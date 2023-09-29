import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image } from 'react-native';

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarActiveTintColor: "red",
          tabBarIcon: ({ color }) => (
            <FontAwesome
              size={28}
              // style={{ marginBottom: -3 }}
              name="home"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="second"
        options={{
          headerShown: false,
          tabBarActiveTintColor: "red",
          tabBarIcon: ({ color }) => (
            <FontAwesome
              size={28}
              // style={{ marginBottom: -3 }}
              name="heart"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="fourth11"
        options={{
          headerShown: false,
          tabBarActiveTintColor: "red",
          tabBarIcon: ({ color }) => (
            <FontAwesome
              size={28}
              // style={{ marginBottom: -3 }}
              name="user"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="product"
        options={{
          headerShown: false,
          tabBarActiveTintColor: "red",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../asset/images/facebook.png')
                  : require('../asset/images/instagram.png')
              }
              style={{
                width: size,
                height: size,
                // borderRadius: size,
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
