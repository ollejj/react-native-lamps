import React from 'react';
import type {Node} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {useActionContext} from '../context/ActionContext';

import Tile from './Tile';

const Board: () => Node = () => {
  const {count, setCount, board, setBoard} = useActionContext();

  const handlePress = (x, y) => {
    board[y][x] = !board[y][x];

    if (y !== 0) board[y - 1][x] = !board[y - 1][x];
    if (y !== 4) board[y + 1][x] = !board[y + 1][x];
    if (x !== 0) board[y][x - 1] = !board[y][x - 1];
    if (x !== 4) board[y][x + 1] = !board[y][x + 1];

    setBoard(board);
    setCount(count + 1);
  };

  return (
    <View style={styles.board}>
      {board.map((row, y) => {
        return row.map((tile, x) => (
          <Tile onPress={() => handlePress(x, y)} key={[x, y]} state={tile} />
        ));
      })}
    </View>
  );
};

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  board: {
    height: ScreenHeight / 2,
    width: ScreenWidth,
    flex: 5,
    flexDirection: 'row',
    marginHorizontal: 'auto',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Board;
