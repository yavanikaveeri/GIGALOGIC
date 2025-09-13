import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* 🔝 Fixed Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with your logo
          style={styles.avatar}
        />
        <Text style={styles.headerTitle}>🚀 Company Profile</Text>
      </View>

      {/* 📜 Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent} style={{ flex: 1 }}>
        {/* Vision Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>🌐 Vision</Text>
          <Text style={styles.paragraph}>
            To become a global leader in AI-powered solutions, shaping the future
            with technology that is accessible, scalable, and human-centered.
          </Text>
        </View>

        {/* Mission Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>🎯 Mission</Text>
          <Text style={styles.paragraph}>• Empower businesses and individuals through AI automation & intelligence</Text>
          <Text style={styles.paragraph}>• Deliver cost-effective, scalable, and innovative tech solutions</Text>
          <Text style={styles.paragraph}>• Build a future where AI enhances human creativity and productivity</Text>
        </View>

        {/* Contact Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>📞 Contact</Text>

          {/* Website Link */}
          <Text
            style={[styles.paragraph, styles.link]}
            onPress={() => Linking.openURL('https://www.gigalogic.com')}
          >
            🌍 Website: www.gigalogic.com
          </Text>

          {/* Email Link */}
          <Text
            style={[styles.paragraph, styles.link]}
            onPress={() => Linking.openURL('mailto:info@gigalogic.com')}
          >
            📧 Email: info@gigalogic.com
          </Text>

          {/* Full Address (Clickable) */}
          <Text
            style={[styles.paragraph, styles.link]}
            onPress={() =>
              Linking.openURL(
                'https://www.google.com/maps/search/?api=1&query=YMS+Residency,+Opp+Sri+Sai+Balaji+Residency,+Mythri+Nagar,+Vignanapuri+Colony,+Kukatpally,+500072'
              )
            }
          >
            📍 Location: YMS Residency, Opp Sri Sai Balaji Residency, Mythri Nagar,  
            Vignanapuri Colony, Kukatpally, 500072
          </Text>

          <Text style={styles.paragraph}>
            🕒 Business Hours: Monday – Saturday | 9:00 AM – 7:00 PM (IST)
          </Text>
        </View>
      </ScrollView>

      {/* 📌 Fixed Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>We’re not just building AI.</Text>
        <Text style={styles.footerHighlight}>We’re building the logic for tomorrow.</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL('yavanika.v@gigalogicai.com')}
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
    backgroundColor: '#f9f9f9',
  },
  header: {
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    elevation: 1, // Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
    color: '#444',
    marginBottom: 6,
    lineHeight: 20,
  },
  link: {
    color: '#2563eb',
    textDecorationLine: 'underline',
  },
  footer: {
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 15,
    color: '#444',
  },
  footerHighlight: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1a237e',
    marginTop: 4,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1a237e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});