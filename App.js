import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import interMedium from 'fonts/Inter/Inter-Medium.ttf';
import interSemiBold from 'fonts/Inter/Inter-SemiBold.ttf';
import juaRegular from 'fonts/Jua/Jua-Regular.ttf';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Text, StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import 'react-native-gesture-handler';
import React from 'react';
import store, { persistor } from 'redux/store';
import theme from 'constants/theme';
import AppNavigation from 'navigation/AppNavigation';

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
            <AppNavigation />
            <Toast />
            <StatusBar hidden={true} />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
