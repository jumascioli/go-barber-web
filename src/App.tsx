import React from 'react';

import AppProvider from './hooks';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';

const App: React.FC = () => (
  <>
    <GlobalStyle />

    <AppProvider>
      <SignIn />
    </AppProvider>
  </>
);

export default App;
