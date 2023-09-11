import React from 'react';
import TodoHome from '../pages/TodoHome';
import { ContextProvider } from './Providers';

function App() {
  return (
    <ContextProvider>
      <TodoHome />
    </ContextProvider>
  );
}

export default App;
