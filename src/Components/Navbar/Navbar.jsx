import { Box,Flex,Spacer } from "@chakra-ui/react"
import "./Navbar.css"
export default function  Navbar(){
    return(
        <>
        <Box className="nav">
        <Flex>
           <Box  className="nav-text">
             PK
          </Box>
          <Spacer />
         <Box className="nav-text1" >
            Home
         </Box>
         <Box className="nav-text1">
            About
         </Box>
         <Box className="nav-text1" >
            Skills
         </Box>
         <Box className="nav-text1" >
            Projects
         </Box>
         <Box className="nav-text1" >
            Contacts
         </Box>
        </Flex>
        </Box>
        </>
        
    )
}


