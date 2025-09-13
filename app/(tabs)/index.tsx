import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Main scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.logo}>🌐 GIGALOGIC AI</Text>
        <Text style={styles.tagline}>
          Redefining Intelligence, Powering the Future
        </Text>

        <Text style={styles.paragraph}>
          At GIGALOGIC AI, we are building next-generation artificial intelligence 
          solutions to help businesses and individuals harness the true potential 
          of data and automation. As a fast-growing startup, our mission is simple:
        </Text>

        <Text style={styles.highlight}>
          🚀 Innovate, Simplify, and Scale with AI.
        </Text>

        {/* AI Solutions We Provide */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>AI Solutions We Provide</Text>

          <Text style={styles.item}>
            🤖 <Text style={styles.bold}>Custom AI Models</Text> – We create smart AI 
            tools designed specifically for your needs. From chatbots to prediction 
            systems, we build solutions that help your business work faster and smarter.
          </Text>

          <Text style={styles.item}>
            📊 <Text style={styles.bold}>Smart Data Analytics</Text> – We help you make 
            sense of your data. By turning raw numbers into easy-to-understand insights, 
            we give you the knowledge to make better decisions.
          </Text>

          <Text style={styles.item}>
            🔗 <Text style={styles.bold}>AI-Powered Integrations</Text> – We connect AI 
            into your existing apps, websites, or systems so everything works smoothly 
            together, saving you time and reducing errors.
          </Text>

          <Text style={styles.item}>
            🌍 <Text style={styles.bold}>Scalable Cloud AI</Text> – Our AI solutions are 
            built to grow with you. Whether you’re a small startup or a big enterprise, 
            our cloud-based AI adapts as your business expands.
          </Text>
        </View>

        {/* Closing inside scroll */}
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
    paddingBottom: 120, // ensures scroll content doesn't overlap footer
  },
  logo: {
    fontSize: 28,
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
    marginBottom: 10,
  },
  highlight: {
    fontSize: 15,
    fontWeight: '600',
    color: '#e53935',
    textAlign: 'center',
    marginBottom: 20,
  },
  footer: {
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // Android shadow
  },
  footerText: {
    fontSize: 16,
    color: '#444',
  },
  footerHighlight: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a237e',
    marginTop: 4,
    textAlign: 'center',
  },
  button: {
    marginTop: 12,
    backgroundColor: '#3949ab',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  section: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 15,
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
});
