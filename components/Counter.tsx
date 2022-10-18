import React from 'react';
import type {Node} from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import {useActionContext} from '../context/ActionContext';

const Counter: () => Node = () => {
  const {count, resetBoard} = useActionContext();

  return (
    <TouchableOpacity onPress={resetBoard} style={styles.counter}>
      <Text style={styles.text}>{count}</Text>
    </TouchableOpacity>
  );
};

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  counter: {
    height: ScreenHeight / 2,
    width: ScreenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 100,
  },
});

export default Counter;
