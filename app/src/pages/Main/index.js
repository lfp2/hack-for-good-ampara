import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default function Main() {
  return (
    <View style={styles.container}>
      <Text>Hugs</Text>
    </View>
  );
}
