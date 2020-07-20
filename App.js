/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View} from 'react-native';

// import StyleAndFlexbox from './screens/1 Style and Flexbox';
// import GettingUserText from './screens/2 Getting user Text';
// import UncontrolledAndControlled from './screens/3 Uncontrolled and Controlled components';
import Calculator from './screens/Calculator';

const App = () => {
  return (
    <>
      <View style={style.container}>
        <Calculator />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
