// app/_layout.tsx
import { Tabs } from "expo-router";
import { MaterialIcons, Feather, FontAwesome } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 5,
        },
        tabBarActiveTintColor: "#149777", // Active icon & label color
        tabBarInactiveTintColor: "#9ca3af", // Gray for inactive
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />

      {/* Search Tab */}
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />

      {/* Center Plus Button */}
      <Tabs.Screen
        name="post"
        options={{
          title: "post ad",
          tabBarIcon: ({ color, size }) => (
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              {/* Outer Circle */}
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 35,
                  backgroundColor: "#FFD700",
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 5 },
                  shadowOpacity: 0.3,
                  shadowRadius: 5,
                  elevation: 5,
                }}
              >
                {/* Inner Circle */}
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 25,
                    backgroundColor: "#654321",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* Plus Icon */}
                  <Feather name="plus" size={30} color="white" />
                </View>
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      {/* Chat Tab */}
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="chat" size={size} color={color} />
          ),
        }}
      />

      {/* Account Tab */}
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
