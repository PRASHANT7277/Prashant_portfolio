
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from "./Components/Navbar/Navbar.jsx" 
function App() {
  return (
   <ChakraProvider>
   <Navbar/>
   </ChakraProvider>
      
    
  );
}

export default App;
