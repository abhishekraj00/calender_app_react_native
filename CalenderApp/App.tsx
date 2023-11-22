import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from './src/screens/Auth/Login';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Login />
      </View>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
