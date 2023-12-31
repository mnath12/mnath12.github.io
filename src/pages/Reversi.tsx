import { Link, HStack, Center, Card, CardBody, Heading, Button, Box, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

export default function Reversi () {
    return (
            <Box  w = 'calc(100vw)'> 

<HStack spacing = {20}>
<Sidebar activeButton = "reversi"></Sidebar>
        
        <Card minWidth='calc(15vw)'>
            <CardBody>
                <Center>
                    <Heading> Reversi </Heading> 
                </Center>
                <Text  textAlign='left'> Language: C++ <br></br>
                        Techniques: Game Design, Unit Testing, Object-Oriented Programming
                </Text>
            </CardBody>
        </Card>
     
    

    <Card mr ={75}>
        <CardBody>
            <Center>
                <Heading> Details </Heading> 
            </Center>
            <Text textAlign='left'> 
                    I improved my interactive UI design skills by making the game Reversi. 
                    My 2 player version features turns, hints, and a game over screen. While 
                    coding the game, I implemented C++ algorithms to calculate available
                    moves based on player position and wrote classes representing player sprites, 
                    the board, and move hints. Because so many things can go wrong when designing 
                    a highly interactive game, I thoroughly unit tested all aspects of the game. 
            </Text>
            <Link href = 'https://github.com/mnath12/Reversi'>
                <Button>Code Here</Button>
            </Link>
        </CardBody>
    </Card>

</HStack>

</Box>

        
    )
}