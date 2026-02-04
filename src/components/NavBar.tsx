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
        w="100vw"
        maxW="100vw"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        mb={8}
        px={8}
        py={4}>
            <HStack align='center' spacing={2}>
                <FaRegSquare  />
                <Text fontSize ={25} fontFamily = 'Roboto' p ={1}>Moinak Nath</Text>
            </HStack>
            <HStack spacing={2} align='center'>
                <Link href = "/#">
                    <Button 
                        variant = 'ghost'
                        aria-label='about'>
                        About Me
                    </Button>
                </Link>

                <Link href = '/#/projects'>
                    <Button 
                        variant = 'ghost'
                        aria-label='projects'>
                        Projects
                    </Button>
                </Link>

                <Link href = '/#/research'>
                    <Button 
                        variant = 'ghost'
                        aria-label='research'>
                        Research
                    </Button>
                </Link>

                <Link href = '/#/coursework'>
                    <Button 
                        variant = 'ghost'
                        aria-label='coursework'>
                        Coursework
                    </Button>
                </Link>

                <Link href = '/#/experience'>
                    <Button 
                        variant = 'ghost'
                        aria-label='experience'>
                        Experience
                    </Button>
                </Link>
                
                <Switch 
                    color = 'green'
                    isChecked = {isDark}
                    onChange={toggleColorMode}/>
            </HStack>
        </Flex>

        

       
    )
}

export default NavBar


