/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import NavigationContainers from './Adapter/Navigation/NavigationContainers';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  const backgroundStyle = {
    backgroundColor: 'white',
    flex: 1,
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <SafeAreaProvider style={backgroundStyle}>
        <NavigationContainers />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
