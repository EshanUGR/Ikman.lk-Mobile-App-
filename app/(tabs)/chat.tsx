import { SafeAreaView, View, Text } from "react-native";
import React from "react";
import ChatComponent from "@/components/ChatComponent";

import CustomButton from "@/components/chatbutton";

const Chat = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 15 }}>
      <View style={{ backgroundColor: "#fff", marginBottom: 0, marginTop: 0 }}>
        <View
          style={{
            backgroundColor: "#00FF7F",
            padding: 15,
            marginBottom: 0,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 0,
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
              My Chats
            </Text>
          </View>
        </View>
        <View style={{ marginBottom: 0, marginTop: 8 }}>
          <ChatComponent
            title="No Conversations Yet!"
            iconName="chat-bubble-outline"
            iconColor="#FFD700"
            iconSize={100}
            paragraph='Click "/Chat/" on an ad or post your own ad to start chatting'
          />
        </View>

        <CustomButton
          text="Browse ads"
          backgroundColor="white" // LimeGreen button
          textColor="gray" // White text
        />

        <CustomButton
          text="Post an ad!"
          backgroundColor="#FFCC33" // LimeGreen button
          textColor="#B8860B" // White text
        />
      </View>
    </SafeAreaView>
  );
};

export default Chat;
