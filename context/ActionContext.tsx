import React, {createContext, useContext, useState} from 'react';

const ActionContext = createContext(null);

export const useActionContext = () => useContext(ActionContext);

const init = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, true, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
];

export const ActionContextProvider = ({children}: any) => {
  const [count, setCount] = useState(0);
  const [board, setBoard] = useState(init);

  const resetBoard = () => {
    setBoard([
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, false, true, false, false],
      [false, false, false, false, false],
      [false, false, false, false, false],
    ]);
    setCount(0);
  };

  return (
    <ActionContext.Provider
      value={{count, setCount, board, setBoard, resetBoard}}>
      {children}
    </ActionContext.Provider>
  );
};
