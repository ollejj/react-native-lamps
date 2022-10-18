import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, Text} from 'react-native';
import BaseView from './components/BaseView';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <BaseView />
    </SafeAreaView>
  );
};

export default App;
