import React from 'react';
import Navigation from './components/NavBar/Navigation';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <>
      <ChakraProvider>
        <Navigation />
      </ChakraProvider>
    </>
  )
}

export default App;
