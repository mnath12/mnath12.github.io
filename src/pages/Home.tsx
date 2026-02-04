import { Text, Box, Card, CardBody, Center, HStack, Heading } from "@chakra-ui/react";
import ProfileCard from "../components/ProfileCard";

export default function Home() {
    return (
        <> 
        <Box  w = 'calc(100vw)' h = 'calc(88vh)' p={50}> 
            <HStack spacing={10}>
                <ProfileCard></ProfileCard> 
                <Card w ='70vw'>
                    <CardBody>
                    <Center><Heading> About Me </Heading> </Center>
                    <Text textAlign='left'>
                         <p> My name is Moinak and I'm an aspiring quantitative researcher. I'm currently a Master's student in Financial Mathematics at The University of Chicago.
                            I'm also interested in Machine Learning and Artificial Intelligence. I am passionate about applying 
                            mathematical theories towards practical ends, such as the use of mathematical optimization techhniquesa in portfolio managemenrt, 
                            and the use of calculus, linear algebra, and regression in Machine Learning. I also greatly value intellectual puzzles, both in coding
                            and otherwise. Finally, I value collaboration with other talented people. </p>  
      
                    </Text>
                    </CardBody>
                </Card>
            </HStack>
        </Box>
        </>
    )
}