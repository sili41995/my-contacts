import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import interMedium from './src/fonts/Inter/Inter-Medium.ttf';
import interSemiBold from './src/fonts/Inter/Inter-SemiBold.ttf';
import juaRegular from './src/fonts/Jua/Jua-Regular.ttf';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Text, StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import 'react-native-gesture-handler';
import React from 'react';
import store, { persistor } from './src/redux/store';
import theme from './src/constants/theme';
import AppRouter from './src/components/AppRouter/AppRouter';

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
            <AppRouter />
            <Toast />
            <StatusBar hidden={true} />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
