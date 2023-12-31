import { Card, Text, Heading, CardBody, Center, Box, HStack, Button, Link } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

export default function Sudoku () {
    return (
        <Box w = 'calc(100vw)'> 

            <HStack spacing={20}>
                <Sidebar activeButton="sudoku"></Sidebar>

                <Center>
                    <Card>
                        <CardBody>
                            <Center>
                                <Heading> Sudoku </Heading> 
                            </Center>
                            <Text> Language(s): TypeScript, HTML, CSS 
                                <br></br> Libraries: React, Chakra UI
                            </Text>
                        </CardBody>
                    </Card>
                </Center>

                <Card mr = {75}>
                    <CardBody>
                        <Center>
                            <Heading> Details </Heading> 
                        </Center>
                        <Text> 
                            <p>I built a version of the classic game 
                                using React, TypeScript, and Chakra UI. 
                                The game will display the user's mistake 
                                in real time. The website is coded with
                                thousands of Sudoku games.  </p>
                        </Text>
                        <Link href = 'https://mnath12.github.io/Sudoku-Web/'>
                            <Button>PLAY</Button>
                        </Link>
                    </CardBody>
                </Card>

            </HStack>
            
        </Box>

     
        
       

    )

}