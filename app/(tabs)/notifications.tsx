import React, { useState } from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Notifications() {
  const [readStatus, setReadStatus] = useState([false, false, false, false]);

  const markAsRead = (index: number) => {
    const updated = [...readStatus];
    updated[index] = true;
    setReadStatus(updated);
  };

  const notifications = [
    {
      title: "🚀 Product Update",
      message:
        "Our new AI-powered analytics dashboard is now live. Explore deeper insights and make smarter decisions faster.",
      time: "2 hours ago",
    },
    {
      title: "📢 Company Announcement",
      message:
        "GIGALOGIC AI has secured a new strategic partnership to expand cloud-based AI solutions worldwide.",
      time: "1 day ago",
    },
    {
      title: "⚡ System Alert",
      message:
        "Scheduled maintenance on our AI cloud servers will occur on Sept 20th, 2:00 AM – 5:00 AM IST. Services may be temporarily unavailable.",
      time: "3 days ago",
    },
    {
      title: "🎉 Milestone",
      message:
        "We’ve reached 10,000 active users! Thank you for trusting GIGALOGIC AI as your innovation partner.",
      time: "1 week ago",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.logo}>🔔 Notifications</Text>
      <Text style={styles.tagline}>Stay updated with the latest from GIGALOGIC AI</Text>

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {notifications.map((note, index) => (
          <View
            key={index}
            style={[styles.card, readStatus[index] && styles.cardRead]}
          >
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.message}>{note.message}</Text>
            <Text style={styles.time}>{note.time}</Text>

            <TouchableOpacity
              style={[styles.readButton, readStatus[index] && styles.readButtonDone]}
              onPress={() => markAsRead(index)}
              disabled={readStatus[index]}
            >
              <Text style={styles.readButtonText}>
                {readStatus[index] ? "✅ Read" : "Mark as Read"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>We’re not just building AI.</Text>
        <Text style={styles.footerHighlight}>We’re building the logic for tomorrow.</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL("yavanika.v@gigalogicai.com")}
        >
          <Text style={styles.buttonText}>📧 EMAIL: yavanika.v@gigalogicai.com</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
    paddingTop: 40,
  },
  scrollContent: {
    padding: 15,
    paddingBottom: 120,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a237e",
    textAlign: "center",
  },
  tagline: {
    fontSize: 14,
    color: "#3949ab",
    textAlign: "center",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardRead: {
    opacity: 0.6, // 👈 makes read cards look dimmed
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1a237e",
    marginBottom: 6,
  },
  message: {
    fontSize: 14,
    color: "#444",
    marginBottom: 8,
    lineHeight: 20,
  },
  time: {
    fontSize: 12,
    color: "#777",
    marginBottom: 10,
    textAlign: "right",
  },
  readButton: {
    alignSelf: "flex-end",
    backgroundColor: "#3949ab",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  readButtonDone: {
    backgroundColor: "gray",
  },
  readButtonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
  footer: {
    padding: 15,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: "#444",
  },
  footerHighlight: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a237e",
    marginTop: 4,
    textAlign: "center",
  },
  button: {
    marginTop: 12,
    backgroundColor: "#3949ab",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
