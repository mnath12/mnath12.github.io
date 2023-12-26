import { Center, HStack, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import {Icon, IconButton} from '@chakra-ui/react'
import LogoButton from './LogoButton';


const ProfileCard = () => {
    return (
            <Card>
                <CardBody>
                    <Center>
                        <Image src = 'http://winkeyecare.com/wp-content/uploads/2013/03/Empty-Profile-Picture-e1485925353755.jpg'
                               alt = 'dummy profile pic'
                               borderRadius='full'/>
                    </Center>
                    

                    <Text>CS + Math @ Northwestern </Text>
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
                            
                        </HStack>
                        </Center>
                </CardBody>
            </Card>
    )
}

export default ProfileCard