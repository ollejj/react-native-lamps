import React from 'react';
import type {Node} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Board from './Board';
import Counter from './Counter';
import {ActionContextProvider} from '../context/ActionContext';

const BaseView: () => Node = () => {
  return (
    <View style={styles.container}>
      <ActionContextProvider>
        <Board />
        <Counter />
      </ActionContextProvider>
    </View>
  );
};

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#646464',
    height: ScreenHeight,
    width: ScreenWidth,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default BaseView;
