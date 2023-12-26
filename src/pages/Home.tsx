import { Text, Box, Card, CardBody, Center, HStack, Heading } from "@chakra-ui/react";
import ProfileCard from "../components/ProfileCard";
import Sidebar from "../components/Sidebar";


export default function Home() {
    return (
        <> 
        <Box  w = 'calc(100vw)' h = 'calc(88vh)' p={50}> 
            <HStack>
                <ProfileCard></ProfileCard> 
                <Card w ='70vw'>
                    <CardBody>
                    <Center><Heading> About Me </Heading> </Center>
                    <Text textAlign='left'>
                         <p> My name is Moinak and I'm a junior at Northwestern currently pursuing a BA/MS 
                            in Math and Computer Science with a minor in Physics. 
                            I'm interested in Machine Learning, AI, Software Engineering, and Algorithm Design. I am passionate about applying 
                            mathematical theories towards practical ends, such as the use of linear algebra and linear
                            regression in Machine Learning. I also greatly value intellectual puzzles, both in coding
                            and otherwise. Finally, I value collaboration with other talented people. </p>  
                         <br></br>
                         <p>Over the past two years, I've worked for several physics research groups and 
                            interned at Fermilab. At these research experiences, I had to independently learn 
                            Python and various data science libraries like NumPy, SciPy, and MatPlotLib. As I
                            learned more, I became more interested in Computer Science, which is why I pivoted 
                            towards a Master's in Computer Science focused on Machine Learning and AI. </p>
                    </Text>
                    </CardBody>
                </Card>
            </HStack>
        </Box>
        </>
    )
}