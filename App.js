import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AboutAppScreen from './screens/AboutAppScreen';
import theme from './constants/theme';
import { useFonts } from 'expo-font';
import interMedium from './assets/fonts/Inter/Inter-Medium.ttf';
import interSemiBold from './assets/fonts/Inter/Inter-SemiBold.ttf';
import juaRegular from './assets/fonts/Jua/Jua-Regular.ttf';
import { ThemeProvider } from 'styled-components/native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import { Provider } from 'react-redux';
import store from './redux/store';
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Text } from 'react-native';
import Toast from 'react-native-toast-message';
import ContactsScreen from './screens/ContactsScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';
import AddContactScreen from './screens/AddContactScreen';
import 'react-native-gesture-handler';

const fonts = {
  'Inter-Medium': interMedium,
  'Inter-SemiBold': interSemiBold,
  Jua: juaRegular,
};

const authScreenOptions = { headerShown: false };

const App = () => {
  const [fontsLoaded] = useFonts(fonts);

  const AuthStack = createStackNavigator();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <NavigationContainer>
            <AuthStack.Navigator initialRouteName='Login'>
              <AuthStack.Screen
                name='Login'
                component={LoginScreen}
                options={authScreenOptions}
              />
              <AuthStack.Screen
                name='Register'
                component={RegisterScreen}
                options={authScreenOptions}
              />
            </AuthStack.Navigator>
            {/* <AboutAppScreen /> */}

            {/* <UserProfileScreen /> */}
            {/* <ContactsScreen /> */}
            {/* <ContactDetailsScreen /> */}
            {/* <AddContactScreen /> */}
            {/* <Toast /> */}
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
