import { SelectProvider } from '@mobile-reality/react-native-select-pro';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Footer from './src/components/footer/Footer.js';
import Header from './src/components/header/Header.js';
import Main from './src/components/main/Main.js';
import { store } from './src/redux/redux-store';

export default function App() {
  return (
    <SelectProvider>
      <Provider store={store}>
        <View style={styles.container}>
          <View style={styles.mainFooter}>
            <StatusBar style="auto" />
            <Header />
            <Main />
          </View>
          <Footer />
        </View>
      </Provider>
    </SelectProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 30,
    height: '100%',
    // backgroundColor: "#05001f"
  },
  mainFooter: {
    flex: 1
  }
})
