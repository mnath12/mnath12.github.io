import {useColorMode, Switch, Flex, Button, Link, Text, HStack } from '@chakra-ui/react'
import { FaRegSquare } from "react-icons/fa6";


function NavBar () {
    const {colorMode, toggleColorMode} = useColorMode()
    const isDark = colorMode == 'dark'
    return (
        <Flex 
        id='navBar'
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={8}>
            <Flex>
            <Flex pos = 'fixed' top = '1rem' left = '1rem' align='center'>
                <HStack align='center'>
                    <FaRegSquare  />
                    
                    <Text fontSize ={25} fontFamily = 'Roboto' p ={1}>Moinak Nath</Text>
                    
                  
                   
                </HStack>

            </Flex>
            <Flex pos = 'fixed' top = '1rem' right = '1rem' align='center'>
                <Flex>
                    <Link href = "/#">
                        <Button 
                         
                            variant = 'ghost'
                            aria-label='about'
                            w = '100%'>
                            About Me
                        </Button>
                    </Link>

                    <Link href = '/#/projects'>
                        <Button 
                      
                            variant = 'ghost'
                            aria-label='projects'
                            w = '100%'>
                            Projects
                        </Button>
                    </Link>

                    <Link href = '/#/research'>
                        <Button 
                      
                            variant = 'ghost'
                            aria-label='research'
                            w = '100%'>
                            Research
                        </Button>
                    </Link>
                    
                </Flex>
                <Switch 
                    color = 'green'
                    isChecked = {isDark}
                    onChange={toggleColorMode}/>
            </Flex>
            
            </Flex>
            
        </Flex>

        

       
    )
}

export default NavBar


