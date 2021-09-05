import React from 'react';
import Dashboard from './src/screens/Dashboard';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
