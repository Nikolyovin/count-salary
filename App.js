import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Footer from './src/components/footer/Footer';
import Header from './src/components/header/Header';
import Main from './src/components/main/Main';
import { store } from './src/redux/redux-store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header/>
        <Main/>
        <Footer/>
        <StatusBar style="auto" />
      </View>
    </Provider>
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
