import { Flex, IconButton, Box, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaGraduationCap, FaAtom, FaFlask } from "react-icons/fa";

function ResearchSidebar({ activeSection, onSectionChange }: { activeSection: string, onSectionChange: (section: string) => void }) {
    const [size, changeSize] = useState('large')

    const sections = [
        { id: 'academic', icon: FaGraduationCap, title: 'Academic Research' },
        { id: 'fermilab', icon: FaAtom, title: 'Fermilab' },
        { id: 'lab', icon: FaFlask, title: 'Lab Work' }
    ]

    return (
        <Flex
            pos='sticky'
            h='95vh'
            boxShadow='0 4px 12 px 0 rgba(0,0,0,0.05)'
            w={size == 'small' ? '75px' : "200px"}
            flexDir='column'
            justifyContent='space-between'>
            <Flex 
                flexDir='column'
                alignItems='flex-start'
                borderRadius={size=='small'? '15px': '30px'}
                as='nav'>
                <IconButton 
                    background='none'
                    _hover={{background: 'none'}}
                    icon={<FiMenu/>}
                    onClick={() => {
                        if (size == 'small') 
                            changeSize('large')
                        else
                            changeSize('small')
                    }}
                    aria-label="Size Toggle">
                </IconButton>
                {sections.map((section) => (
                    <Box
                        key={section.id}
                        mt={30}
                        w='100%'
                        as='button'
                        onClick={() => onSectionChange(section.id)}
                        backgroundColor={activeSection === section.id ? '#AEC8CA' : 'transparent'}
                        p={3}
                        borderRadius={8}
                        _hover={{ backgroundColor: '#AEC8CA' }}
                        cursor='pointer'
                    >
                        <Flex alignItems={size == 'small' ? 'center' : 'flex-start'}>
                            <Icon 
                                as={section.icon} 
                                fontSize='xl' 
                                color={activeSection === section.id ? '#82AAAD' : 'gray.500'}
                            />
                            {size === 'large' && (
                                <Text ml={5} display='flex'>{section.title}</Text>
                            )}
                        </Flex>
                    </Box>
                ))}
            </Flex>
        </Flex>
    )
}

export default ResearchSidebar

