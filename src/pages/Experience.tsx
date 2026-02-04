import {
  Box,
  Heading,
  Text,
  HStack,
  Card,
  CardBody,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Badge,
} from '@chakra-ui/react'
import { useState } from 'react'
import ExperienceSidebar from '../components/ExperienceSidebar'
import { FaBriefcase, FaChartLine } from 'react-icons/fa'
import { MdCheckCircle } from 'react-icons/md'
import { Icon } from '@chakra-ui/react'

export default function Experience() {
    const [activeSection, setActiveSection] = useState('internships')
    const cardBg = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('gray.200', 'gray.600')
    const textColor = useColorModeValue('gray.700', 'gray.300')

    // Experience data organized by sections
    const experienceData: { [key: string]: { 
        title: string; 
        description?: string; 
        experiences: Array<{
            company: string;
            role: string;
            period: string;
            location: string;
            icon: any;
            description?: string;
            achievements: Array<string | { main: string; subBullets: string[] }>;
            technologies: string[];
            color: string;
        }>
    } } = {
        internships: {
            title: 'Internships',
            description: 'Summer internships and co-op experiences in software engineering and technology.',
            experiences: [
                {
                    company: 'Amazon',
                    role: 'Software Development Engineer Intern',
                    period: 'June 2025 - August 2025',
                    location: 'Seattle, WA',
                    icon: FaBriefcase,
                    description: 'Developed and deployed critical database infrastructure improvements for Amazon\'s Employee Benefit Elections service, leading technical design decisions and contributing 5,000+ lines of production code.',
                    achievements: [
                        'Overhauled Amazon\'s Employee Benefit Elections database for strong consistency by designing a new DynamoDB schema that combined 2 derived tables using a clever composite sort key (pID:benefit_code)',
                        'Investigated the service\'s bitemporal ledger implementation and authored a design paper encompassing the ideal solution of converting the service to use graph database (Amazon Neptune), 2 DynamoDB schemata, and advanced system optimizations, including multithreaded latency improvements',
                        'Achieved unanimous design alignment on a committee of 3 people',
                        'Deployed AppConfig feature gate to enable phased dial-up and created new table (MaterializedEmployeeElections) to production after thorough unit testing',
                        'Migrated all 3 write APIs to use the new table and eliminated stale reads by refactoring materializations algorithm for write-time graph traversal, contributing 5,000+ lines of Java code across 10 packages while incorporating iterative peer feedback',
                        'Authored comprehensive documentation spanning 12 packages, 8 APIs, and 4 DynamoDB tables, converting a sparsely documented service into a reference backbone used by the team',
                        'Designed and documented a standardized Git workflow (worktree-based branching, rebase/squash before CRs, recovery procedures), which became the team\'s reference guide and improved reliability of code submissions; trained junior developers to use this new workflow',
                        {
                            main: 'Pioneered AI-powered development workflows at the benefits team by building a custom IDE augmentation stack, achieving a 20% increase in lines of code written over the average developer',
                            subBullets: [
                                'Integrated Roo Code (debugging, documentation, codebase exploration) and Cline (fast code generation) and developed a memory bank system for extra context storage',
                                'Deployed a cloud-based codebase indexing pipeline using Ollama (nomic-embed-code text embedding model) and Qdrant (vector database) to enable semantic search over the codebase',
                                'Applied Amazon Q for context-aware debugging and incremental fixes'
                            ]
                        }
                    ],
                    technologies: ['Java', 'SQL', 'PartiQL', 'ECS/Fargate', 'Lambda', 'DynamoDB', 'Amazon Neptune', 'AppConfig', 'Git'],
                    color: 'blue'
                }
            ]
        },
        clubs: {
            title: 'Student Organizations',
            description: 'Leadership and technical roles in student organizations and clubs.',
            experiences: [
                {
                    company: 'Institute of Electrical and Electronics Engineers (IEEE), Technical Program',
                    role: 'Machine Learning Engineer',
                    period: 'February 2024 – May 2024',
                    location: 'Evanston, IL',
                    icon: FaChartLine,
                    description: 'Led development of machine learning applications and managed a team of engineers in the IEEE Technical Program.',
                    achievements: [
                        'Spearheaded the development of ScriptScribe, a machine learning based React web app to correct grammar and spelling errors in handwritten text while preserving the author\'s style, resulting in a 95% accuracy rate',
                        'Led a team of 10 engineers; organized weekly meetings, provided ideas, and assisted team with technical issues',
                        'Introduced cutting-edge tool to Citadel and GrubHub engineers; showcased its potential to revolutionize education and increase user productivity by 40%, leading to endorsements and partnership discussions for future collaboration',
                        'Constructed an innovative neural network made of 2 RNNs and a CNN using TensorFlow to learn authors\' handwriting and generate corrected text; developed OCR system using PyTesseract and TrOCR to scan handwriting'
                    ],
                    technologies: ['Python', 'React', 'TensorFlow', 'PyTesseract', 'TrOCR', 'Machine Learning', 'Neural Networks', 'OCR'],
                    color: 'purple'
                }
            ]
        }
    }

    const currentSection = experienceData[activeSection]

    return (
        <Box w='calc(100vw)'>
            <HStack spacing={20} align="flex-start">
                <ExperienceSidebar 
                    activeSection={activeSection} 
                    onSectionChange={setActiveSection}
                />

                <VStack spacing={6} align="stretch" flex={1} pr={20}>
                    {/* Section Title Card */}
                    <Card bg={cardBg} border="1px" borderColor={borderColor}>
                        <CardBody textAlign="left">
                            <Heading size="lg" mb={4} color={
                                activeSection === 'internships' ? 'blue.500' :
                                activeSection === 'fulltime' ? 'green.500' : 'purple.500'
                            } textAlign="left">
                                {currentSection.title}
                            </Heading>
                            
                            {currentSection.description && (
                                <Text fontSize="md" color={textColor} mb={4} textAlign="left">
                                    {currentSection.description}
                                </Text>
                            )}
                        </CardBody>
                    </Card>

                    {/* Experience Cards */}
                    {currentSection.experiences.map((experience, index) => (
                        <Card key={index} bg={cardBg} border="1px" borderColor={borderColor}>
                            <CardBody textAlign="left">
                                <HStack justify="space-between" align="flex-start" flexWrap="wrap" mb={4}>
                                    <HStack spacing={4} flex="1" minW="200px">
                                        <Icon
                                            as={experience.icon}
                                            boxSize={8}
                                            color={`${experience.color}.500`}
                                        />
                                        <VStack align="flex-start" spacing={1}>
                                            <Heading size="md" textAlign="left">{experience.role}</Heading>
                                            <HStack spacing={2} flexWrap="wrap">
                                                <Text fontWeight="semibold" color={`${experience.color}.600`}>
                                                    {experience.company}
                                                </Text>
                                                <Text color="gray.500">•</Text>
                                                <Text fontSize="sm" color={textColor}>
                                                    {experience.location}
                                                </Text>
                                            </HStack>
                                        </VStack>
                                    </HStack>
                                    <Badge
                                        colorScheme={experience.color}
                                        fontSize="sm"
                                        px={3}
                                        py={1}
                                        borderRadius="full"
                                    >
                                        {experience.period}
                                    </Badge>
                                </HStack>

                                {experience.description && (
                                    <Text fontSize="md" color={textColor} mb={6} textAlign="left">
                                        {experience.description}
                                    </Text>
                                )}

                                <VStack align="stretch" spacing={4}>
                                    <Box textAlign="left">
                                        <Heading size="sm" mb={3} color={textColor} textAlign="left">
                                            Key Achievements
                                        </Heading>
                                        <List spacing={2} textAlign="left">
                                            {experience.achievements.map((achievement, achievementIndex) => {
                                                if (typeof achievement === 'string') {
                                                    return (
                                                        <ListItem key={achievementIndex} fontSize="md" color={textColor} textAlign="left">
                                                            <ListIcon
                                                                as={MdCheckCircle}
                                                                color={`${experience.color}.500`}
                                                            />
                                                            {achievement}
                                                        </ListItem>
                                                    )
                                                } else {
                                                    return (
                                                        <Box key={achievementIndex} mb={2} textAlign="left">
                                                            <ListItem fontSize="md" color={textColor} mb={1} textAlign="left">
                                                                <ListIcon
                                                                    as={MdCheckCircle}
                                                                    color={`${experience.color}.500`}
                                                                />
                                                                {achievement.main}
                                                            </ListItem>
                                                            <List spacing={1} ml={8} mt={1} textAlign="left">
                                                                {achievement.subBullets.map((subBullet, subIndex) => (
                                                                    <ListItem key={subIndex} fontSize="sm" color={textColor} opacity={0.9} textAlign="left">
                                                                        <ListIcon
                                                                            as={MdCheckCircle}
                                                                            color={`${experience.color}.400`}
                                                                            boxSize={3}
                                                                        />
                                                                        {subBullet}
                                                                    </ListItem>
                                                                ))}
                                                            </List>
                                                        </Box>
                                                    )
                                                }
                                            })}
                                        </List>
                                    </Box>

                                    <Box textAlign="left">
                                        <Heading size="sm" mb={3} color={textColor} textAlign="left">
                                            Technologies Used
                                        </Heading>
                                        <HStack wrap="wrap" spacing={2}>
                                            {experience.technologies.map((tech, techIndex) => (
                                                <Badge
                                                    key={techIndex}
                                                    colorScheme={experience.color}
                                                    variant="subtle"
                                                    fontSize="sm"
                                                    px={3}
                                                    py={1}
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </HStack>
                                    </Box>
                                </VStack>
                            </CardBody>
                        </Card>
                    ))}
                </VStack>
            </HStack>
        </Box>
    )
}

