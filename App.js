import { NavigationContainer } from '@react-navigation/native';

import theme from './constants/theme';
import { useFonts } from 'expo-font';
import interMedium from './assets/fonts/Inter/Inter-Medium.ttf';
import interSemiBold from './assets/fonts/Inter/Inter-SemiBold.ttf';
import juaRegular from './assets/fonts/Jua/Jua-Regular.ttf';
import { ThemeProvider } from 'styled-components/native';

import UserProfileScreen from './screens/UserProfileScreen';
import { Provider } from 'react-redux';
import store from './redux/store';
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Text } from 'react-native';
import Toast from 'react-native-toast-message';

import ContactDetailsScreen from './screens/ContactDetailsScreen';

import 'react-native-gesture-handler';
import React from 'react';
import PrivateLinks from './components/PrivateLinks/PrivateLinks';
import Router from './components/Router/Router';
import { StatusBar } from 'react-native';

const fonts = {
  'Inter-Medium': interMedium,
  'Inter-SemiBold': interSemiBold,
  Jua: juaRegular,
};

const App = () => {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <NavigationContainer>
            <Router />
            <Toast />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
