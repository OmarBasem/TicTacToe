import React from 'react';
import {HomeScreen} from "./app/screens";


// Normally the main App component would render a NavigationContainer wrapped in a Provider, but for the purpose of
// this app a HomeScreen component is enough
const App = () => {
  return (
      <HomeScreen />
  )
}

export default App;
