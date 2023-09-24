import AboutAppScreen from './screens/AboutAppScreen';
import theme from './constants/theme';
import { useFonts } from 'expo-font';
import interMedium from './assets/fonts/Inter/Inter-Medium.ttf';
import interSemiBold from './assets/fonts/Inter/Inter-SemiBold.ttf';
import juaRegular from './assets/fonts/Jua/Jua-Regular.ttf';
import { ThemeProvider } from 'styled-components/native';
import LoginScreen from './screens/LoginScreen';

const fonts = {
  'Inter-Medium': interMedium,
  'Inter-SemiBold': interSemiBold,
  'Jua-Regular': juaRegular,
};

const App = () => {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <AboutAppScreen /> */}
      <LoginScreen />
    </ThemeProvider>
  );
};

export default App;
