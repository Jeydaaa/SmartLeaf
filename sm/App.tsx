import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/icon.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>SmartLeaf</Text>
        <Text style={styles.subtitle}>Mango Leaf Disease Detection</Text>
      </View>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.desc}>Detect Early, Protect Naturally.</Text>
      </View>
      <TouchableOpacity style={styles.arrowButton}>
        <Text style={styles.arrow}>&#8594;</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFF6E3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4B6C2A',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#4B6C2A',
    marginTop: 2,
    marginBottom: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B6C2A',
    marginBottom: 6,
  },
  desc: {
    fontSize: 14,
    color: '#4B6C2A',
  },
  arrowButton: {
    backgroundColor: '#4B6C2A',
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 'auto',
  },
  arrow: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
