/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import ThemeProvider from './src/theme/ThemeProvider';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
  // return (
  //   <SafeAreaProvider>
  //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //   </SafeAreaProvider>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default App;
