import React from 'react';
import Navigation from './components/NavBar/Navigation';
import Header from './components/Header/Header';
import { ChakraProvider } from '@chakra-ui/react';
import "./appstyles.css"


function App() {
  return (
    <>
      <ChakraProvider>
        <div className="background-image">
          <Navigation />
          <Header />
        </div>
      </ChakraProvider>
    </>
  )
}

export default App;
