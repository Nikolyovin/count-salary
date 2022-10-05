import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import Footer from './src/components/footer/Footer';
import Header from './src/components/header/Header';
import Main from './src/components/main/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mainFooter}>
        <StatusBar style="auto" />
        <Header />
        <Main />
      </View>
      <Footer />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 30,

    height: '100%',
    // backgroundColor: 'green'
    // justifyContent: 'space-around'
  },
  mainFooter: {
    flex: 1
  }
})
