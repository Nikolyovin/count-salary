import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Footer from './src/components/footer/Footer';
import Header from './src/components/header/Header';
import Main from './src/components/main/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Main/>
      <Footer/>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
})
