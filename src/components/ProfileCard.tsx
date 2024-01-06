import { Center, HStack, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Card, CardBody } from '@chakra-ui/react'
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoDocumentTextOutline } from "react-icons/io5";


import { IconButton} from '@chakra-ui/react'
import LogoButton from './LogoButton';


const ProfileCard = () => {
    return (
            <Card>
                <CardBody>
                    <Center>
                        <Image src = '/profile.png'
                               alt = 'dummy profile pic'
                               borderRadius='full'/>
                    </Center>
                    

                    <Text> Institution: Northwestern University <br></br>
                        Degree(s): Computer Science (MS), Mathematics (BA) <br></br>
                        Professional Interests: Machine Learning and AI, Quantitative Finance, Software Engineering
                    </Text>
                    <Center>
                        <HStack>
                            <LogoButton to = "http://github.com/mnath12" isExternal>
                                <IconButton aria-label='GitHub' icon={<FaGithub/>}/>
                            </LogoButton>

                            <LogoButton to = "https://www.linkedin.com/in/moinak-nath23/" isExternal>
                                <IconButton aria-label='Linkedin' icon={<FaLinkedin/>}/>
                            </LogoButton>
                            
                            <LogoButton to="mailto:moinaknath2025@u.northwestern.edu" isExternal>
                                <IconButton aria-label='Mail' icon={<SiGmail/>}/>
                            </LogoButton>

                            <LogoButton to="https://docs.google.com/document/d/1nVh9fIzt2EZJj-HYqLNnStl2sDyUfFZ82K1pyphlN-c/edit?usp=sharing" isExternal>
                                <IconButton aria-label='Resume' icon={<IoDocumentTextOutline/>}/>
                            </LogoButton>
                            
                            
                        </HStack>
                        </Center>
                </CardBody>
            </Card>
    )
}

export default ProfileCard