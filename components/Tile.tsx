import React from 'react';
import type {Node} from 'react';
import {TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const Tile: () => Node = ({state, onPress}: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.tile, state ? styles.active : styles.inactive]}
    />
  );
};

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').height;

const styles = StyleSheet.create({
  tile: {
    height: ScreenHeight / 11,
    width: ScreenWidth / 11,
    borderWidth: 1,
    margin: 3,
  },
  active: {
    backgroundColor: '#ffffff',
  },
  inactive: {
    backgroundColor: '#ffffff55',
  },
});

export default Tile;
