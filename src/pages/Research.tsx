import {
  Box,
  Heading,
  Text,
  HStack,
  Card,
  CardBody,
  VStack,
  Link,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { useState } from 'react'
import ResearchSidebar from '../components/ResearchSidebar'
import { FaFilePdf, FaImage } from 'react-icons/fa'
import { MdCheckCircle } from 'react-icons/md'
import { Icon } from '@chakra-ui/react'

export default function Research() {
    const [activeSection, setActiveSection] = useState('academic')
    const cardBg = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('gray.200', 'gray.600')
    const textColor = useColorModeValue('gray.700', 'gray.300')

    // Research data - you can populate this with your actual research content
    const researchData: { [key: string]: { title: string; description?: string; sections?: Array<{ title: string; bullets: string[] }>; deliverables?: Array<{ name: string; type: 'pdf' | 'image'; url: string }> } } = {
        academic: {
            title: 'Academic Research',
            description: 'Research conducted in academic settings, including university-based projects and collaborations.',
            sections: [
                {
                    title: 'Volatility Smile Research - STAT 352-0',
                    bullets: [
                        'Bullet point 1',
                        'Bullet point 2',
                        'Bullet point 3'
                    ]
                },
                {
                    title: 'Bitcoin RL',
                    bullets: [
                        'Bullet point 1',
                        'Bullet point 2'
                    ]
                }
            ],
            deliverables: [
                {
                    name: 'STAT 352-0 Project Write-up',
                    type: 'pdf',
                    url: '/Project.pdf'
                }
            ]
        },
        fermilab: {
            title: 'Fermilab Research',
            description: 'Research work at Fermi National Accelerator Laboratory.',
            sections: [
                {
                    title: 'Physics Research Intern - BREAD Project | Batavia, IL | June 2023 – August 2023',
                    bullets: [
                        'Implemented mathematical algorithm in Python using NumPy and SciPy to convert S-parameter data to relative permittivity, achieving an error of 2%; conducted statistical analysis of measurement data to ensure precision',
                        'Built device to measure permittivity of materials, allowing group to build 10-500 GHz range dark matter detector'
                    ]
                }
            ],
            deliverables: [
                {
                    name: 'SULI Final Report',
                    type: 'pdf',
                    url: '/Fermilab Deliverables/SULI_Final_Report.pdf'
                },
                {
                    name: 'Fermilab Poster',
                    type: 'pdf',
                    url: '/Fermilab Deliverables/Fermilab Poster.pdf'
                },
                {
                    name: 'Paper Abstract',
                    type: 'pdf',
                    url: '/Fermilab Deliverables/Paper Abstract.pdf'
                },
                {
                    name: 'General Audience Abstract',
                    type: 'pdf',
                    url: '/Fermilab Deliverables/General Audience Abstract.pdf'
                }
            ]
        },
        lab: {
            title: 'Lab Work',
            description: 'Laboratory-based research and experimental work.',
            sections: [
                {
                    title: 'Quantum Computing Researcher - Koch Research Group | Evanston, IL | October 2022 – June 2023',
                    bullets: [
                        'Improved runtime of scQubits, a Python package for simulating qubits, by optimizing matrix diagonalization options in SciPy and testing PRIMME, a SciPy alternative for diagonalization, yielding a 26% speed improvement',
                        'Developed library to perform runtime benchmarks and plot results using MatPlotLib, boosting team\'s research output by 13%; presented results of quantitative research project to 10 leading quantum computing researchers'
                    ]
                },
                {
                    title: 'Undergraduate Researcher, MAGIS-100 Project - Kovachy Research Group | Evanston, IL | October 2022 – Present',
                    bullets: [
                        'Worked in a particle physics research group with members from Northwestern and Stanford on a project to capture accurate images of a strontium cloud and perform data analysis using machine learning techniques',
                        'Created a CAD model of magneto-optical strontium trap to aid camera placement',
                        'Advised graduate student on camera and mount selection and camera placement based on CAD model',
                        'Designed and constructed camera assembly with graduate student',
                        'Tested camera focal length and capabilities in preparation for imaging of strontium cloud'
                    ]
                }
            ]
        }
    }

    const currentResearch = researchData[activeSection]

    return (
        <Box w='calc(100vw)'>
            <HStack spacing={20} align="flex-start">
                <ResearchSidebar 
                    activeSection={activeSection} 
                    onSectionChange={setActiveSection}
                />

                <HStack spacing={6} align="flex-start" flex={1} pr={20}>
                    {/* Main Card with Title */}
                    <Card bg={cardBg} border="1px" borderColor={borderColor} flex={1}>
                        <CardBody>
                            <Heading size="lg" mb={4} color={
                                activeSection === 'academic' ? 'blue.500' :
                                activeSection === 'fermilab' ? 'green.500' : 'purple.500'
                            }>
                                {currentResearch.title}
                            </Heading>
                            
                            {currentResearch.description && (
                                <Text fontSize="md" color={textColor} mb={4}>
                                    {currentResearch.description}
                                </Text>
                            )}

                            {currentResearch.sections && currentResearch.sections.length > 0 && (
                                <VStack spacing={6} align="stretch">
                                    {currentResearch.sections.map((section, sectionIndex) => (
                                        <Box key={sectionIndex}>
                                            <Heading size="sm" mb={3} color={textColor}>
                                                {section.title}
                                            </Heading>
                                            <List spacing={2}>
                                                {section.bullets.map((bullet, bulletIndex) => (
                                                    <ListItem key={bulletIndex} fontSize="md" color={textColor}>
                                                        <ListIcon as={MdCheckCircle} color={
                                                            activeSection === 'academic' ? 'blue.500' :
                                                            activeSection === 'fermilab' ? 'green.500' : 'purple.500'
                                                        } />
                                                        {bullet}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Box>
                                    ))}
                                </VStack>
                            )}
                        </CardBody>
                    </Card>

                    {/* Deliverables Card - Only show for academic and fermilab sections */}
                    {(activeSection === 'academic' || activeSection === 'fermilab') && currentResearch.deliverables !== undefined && (
                        <Card bg={cardBg} border="1px" borderColor={borderColor} maxW="400px">
                            <CardBody>
                                <Heading size="md" mb={4}>
                                    Deliverables
                                </Heading>
                                <VStack spacing={3} align="stretch">
                                    {currentResearch.deliverables.length > 0 ? (
                                        currentResearch.deliverables.map((item, index) => (
                                            <Link 
                                                key={index} 
                                                href={item.url} 
                                                isExternal
                                                _hover={{ textDecoration: 'none' }}
                                            >
                                                <HStack 
                                                    p={2} 
                                                    borderRadius="md" 
                                                    _hover={{ bg: 'gray.100' }}
                                                    spacing={3}
                                                >
                                                    <Icon 
                                                        as={item.type === 'pdf' ? FaFilePdf : FaImage} 
                                                        color={item.type === 'pdf' ? 'red.500' : 'blue.500'}
                                                        boxSize={5}
                                                    />
                                                    <Text fontSize="sm">{item.name}</Text>
                                                </HStack>
                                            </Link>
                                        ))
                                    ) : (
                                        <Text fontSize="sm" color="gray.500" fontStyle="italic">
                                            No deliverables yet. Add PDFs and images here.
                                        </Text>
                                    )}
                                </VStack>
                            </CardBody>
                        </Card>
                    )}
                </HStack>
            </HStack>
        </Box>
    )
}