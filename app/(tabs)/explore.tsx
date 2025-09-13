import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Explore() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Page Title */}
        <Text style={styles.logo}>✈️ Explore with GIGALOGIC AI</Text>
        <Text style={styles.tagline}>
          Discover how our software solutions are shaping the future.
        </Text>

        {/* Intro */}
        <Text style={styles.paragraph}>
          At GIGALOGIC AI, we don’t just build software — we create intelligent 
          systems designed to make businesses smarter, faster, and future-ready.  
        </Text>

        {/* Sections */}
        <Text style={styles.sectionTitle}>🌟 Our Focus Areas</Text>
        <Text style={styles.item}>
          💻 <Text style={styles.bold}>Enterprise Software</Text> – Scalable, reliable, and efficient 
          systems tailored for modern businesses.
        </Text>
        <Text style={styles.item}>
          🔒 <Text style={styles.bold}>Secure Cloud Platforms</Text> – Protecting your data while 
          ensuring high performance across industries.
        </Text>
        <Text style={styles.item}>
          📈 <Text style={styles.bold}>Data-Driven Insights</Text> – Transforming complex data into 
          strategies that accelerate growth.
        </Text>
        <Text style={styles.item}>
          🌍 <Text style={styles.bold}>Global-Ready Solutions</Text> – Building applications that 
          scale seamlessly across borders.
        </Text>

        {/* Closing */}
        <Text style={styles.highlight}>
          🚀 Explore innovation. Explore transformation. Explore with GIGALOGIC AI.
        </Text>
      </ScrollView>

      {/* Footer (fixed bottom) */}
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
    backgroundColor: '#f5f7fa',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 120, // leave room for footer
  },
  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a237e',
    textAlign: 'center',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3949ab',
    textAlign: 'center',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 12,
    textAlign: 'center',
  },
  item: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
    marginBottom: 12,
  },
  bold: {
    fontWeight: '700',
    color: '#000',
  },
  highlight: {
    fontSize: 15,
    fontWeight: '700',
    color: '#e53935',
    textAlign: 'center',
    marginTop: 20,
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
