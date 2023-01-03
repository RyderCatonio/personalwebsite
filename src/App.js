import React from 'react';
import Navigation from './components/NavBar/Navigation';
import Header from './components/Header/Header';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <>
      <ChakraProvider>
        <Navigation />
        <Header />
      </ChakraProvider>
    </>
  )
}

export default App;
