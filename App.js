import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Footer from './src/components/footer/Footer.jsx';
import Header from './src/components/header/Header.jsx';
import Main from './src/components/main/Main.jsx';
import { store } from './src/redux/redux-store';

export default function App() {
  return (
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
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    height: '100%',
  },
  mainFooter: {
    flex: 1
  }
})
