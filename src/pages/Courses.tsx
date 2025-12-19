import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Divider,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Icon,
  useColorModeValue,
  Button,
  Link
} from '@chakra-ui/react'
import { FaGraduationCap, FaCode, FaChartLine, FaDatabase, FaRobot } from 'react-icons/fa'
import { useState } from 'react'

const Coursework = () => {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const textColor = useColorModeValue('gray.700', 'gray.300')

  const computerScienceCourses = [
    {
      title: "Machine Learning",
      code: "CS 349",
      description: "",
      topics: ["Linear Regression", "Neural Networks", "Support Vector Machines", "Clustering", "Deep Learning"],
      icon: FaRobot,
      semester: "Fall 2023",
      grade: "A"
    },
    {
      title: "Deep Learning",
      code: "CS 449",
      description: "",
      topics: ["Linear Regression", "Neural Networks", "Support Vector Machines", "Clustering", "Deep Learning"],
      icon: FaRobot,
      semester: "Fall 2023",
      grade: "A"
    },
    {
      title: "Machine Learning: Foundations, Applications, and Algorithms",
      code: "ELEC_ENG 475",
      description: "",
      topics: ["Linear Regression", "Neural Networks", "Support Vector Machines", "Clustering", "Deep Learning"],
      icon: FaRobot,
      semester: "Fall 2024",
      grade: "A"
    },
    {
      title: "Introduction to Artificial Intelligence",
      code: "COMP_SCI 348",
      description: "",
      topics: ["Linear Regression", "Neural Networks", "Support Vector Machines", "Clustering", "Deep Learning"],
      icon: FaRobot,
      semester: "Spring 2024",
      grade: "A"
    },
    {
      title: "Regression",
      code: "STAT 350",
      description: "",
      topics: ["Linear Regression", "Neural Networks", "Support Vector Machines", "Clustering", "Deep Learning"],
      icon: FaRobot,
      semester: "Fall 2024",
      grade: "B"
    },
    {
      title: "Nonparametric Statistical Methods",
      code: "STAT 352",
      description: "",
      topics: ["Linear Regression", "Neural Networks", "Support Vector Machines", "Clustering", "Deep Learning"],
      icon: FaRobot,
      semester: "Fall 2024",
      grade: "A"
    },
    {
      title: "Data Structures and Algorithms",
      code: "CS 214",
      description: "Fundamental data structures, algorithm design and analysis, complexity theory, and problem-solving techniques.",
      topics: ["Binary Trees", "Graph Algorithms", "Dynamic Programming", "Sorting Algorithms", "Complexity Analysis"],
      icon: FaCode,
      semester: "Fall 2023",
      grade: "A"
    },
    
    {
      title: "Computer Systems",
      code: "CS 213",
      description: "TO-DO.",
      topics: ["Computer Architecture", "Operating Systems", "Memory Management", "Process Scheduling", "System Calls"],
      icon: FaGraduationCap,
      semester: "Winter 2024",
      grade: "A"
    }
  ]

  const mathPhysicsCourses = [
    {
      title: "Mathematical Models in Finance",
      code: "MATH 366-0",
      description: "Cash flow computations. Basic financial concepts (stocks, bonds, options, arbitrage, hedging) and put-call parity. Binomial tree models. Risk-neutral valuation. Random walk and Brownian motion as a tool for modeling fluctuations. Options pricing. The Black-Scholes formula and partial differential equation. Course details available at Northwestern's Mathematics catalog.",
      topics: ["Cash Flow Computations", "Options Pricing", "Binomial Tree Models", "Black-Scholes Formula", "Brownian Motion", "Risk-Neutral Valuation", "Arbitrage Theory"],
      icon: FaChartLine,
      semester: "Winter 2025",
      grade: "TBD",
      catalogLink: "https://catalogs.northwestern.edu/undergraduate/arts-sciences/mathematics/#coursestext",
      studyGuideLink: "/Cheat Sheet Math 366.pdf"
    },
    {
      title: "Advanced Probability and Stochastic Processes III",
      code: "MATH 311-3",
      description: "Advanced topics in probability theory, stochastic processes, martingales, and applications to mathematical finance.",
      topics: ["Martingale Theory", "Stochastic Processes", "Brownian Motion"],
      icon: FaChartLine,
      semester: "Spring 2025",
      grade: "A"
    },
    {
      title: "Probability and Statistics for Econometrics",
      code: "Math 314",
      description: "Probability theory, statistical inference, hypothesis testing",
      topics: ["Probability Distributions", "Hypothesis Testing", "Regression Analysis", "Bayesian Statistics", "Statistical Computing"],
      icon: FaChartLine,
      semester: "Fall 2023",
      grade: "A"
    },
    {
      title: "Linear Algebra",
      code: "MATH 334",
      description: "Vector spaces, linear transformations, eigenvalues, eigenvectors.",
      topics: ["Vector Spaces", "Linear Transformations", "Eigenvalues", "Matrix Operations", "Applications"],
      icon: FaChartLine,
      semester: "Spring 2021",
      grade: "A"
    },
    {
      title: "Calculus III",
      code: "MATH 51",
      description: "Multivariable calculus, vector calculus, partial derivatives, and applications in optimization.",
      topics: ["Partial Derivatives", "Multiple Integrals", "Vector Fields", "Line Integrals", "Optimization"],
      icon: FaChartLine,
      semester: "Fall 2020",
      grade: "A-"
    },
    {
      title: "Partial Differential Equations",
      code: "ES_APPM 311",
      description: "Multivariable calculus, vector calculus, partial derivatives, and applications in optimization.",
      topics: ["Partial Derivatives", "Multiple Integrals", "Vector Fields", "Line Integrals", "Optimization"],
      icon: FaChartLine,
      semester: "Fall 2020",
      grade: "A-"
    },
    {
      title: "Classical Mechanics",
      code: "PHYS 330-1,2",
      description: "Classical mechanics, Newton's laws, energy, momentum, and rotational motion.",
      topics: ["Newton's Laws", "Kinematics", "Energy Conservation", "Momentum", "Rotational Motion"],
      icon: FaGraduationCap,
      semester: "Spring 2020",
      grade: "B+"
    }, 
    {
      title: "Graph Theory",
      code: "Math 308",
      description: "Classical mechanics, Newton's laws, energy, momentum, and rotational motion.",
      topics: ["Newton's Laws", "Kinematics", "Energy Conservation", "Momentum", "Rotational Motion"],
      icon: FaGraduationCap,
      semester: "Spring 2020",
      grade: "B+"
    }
  ]

  const financialMathCourses = [
    {
      title: "Foreign Exchange: Markets, Products & Pricing",
      code: "FINM 37301",
      description: "Advanced topics in quantitative finance including arbitrage theory, martingale methods, and exotic derivatives.",
      topics: ["Arbitrage Theory", "Martingales", "Exotic Options", "Interest Rate Models", "Credit Risk"],
      icon: FaChartLine,
      semester: "Winter 2026",
      grade: "TBD"
    },
    {
      title: "Probability and Stochastic Processes",
      code: "FINM 34000",
      description: "Probability theory for continuous-time processes, Brownian motion, and applications to financial modeling.",
      topics: ["Brownian Motion", "Ito Calculus", "Stochastic Differential Equations", "Martingale Theory", "Financial Applications"],
      icon: FaChartLine,
      semester: "Winter 2026",
      grade: "TBD"
    },
    {
      title: "Computing for Finance in Python",
      code: "FINM 32500",
      description: "Multivariable calculus, vector calculus, partial derivatives, and applications in optimization.",
      topics: ["Partial Derivatives", "Multiple Integrals", "Vector Fields", "Line Integrals", "Optimization"],
      icon: FaChartLine,
      semester: "Fall 2020",
      grade: "A-"
    },
    {
      title: "Portfolio and Risk Management",
      code: "FINM 36700",
      description: "Multivariable calculus, vector calculus, partial derivatives, and applications in optimization.",
      topics: ["Partial Derivatives", "Multiple Integrals", "Vector Fields", "Line Integrals", "Optimization"],
      icon: FaChartLine,
      semester: "Fall 2020",
      grade: "A-"
    },
  ]

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'green'
      case 'A-': return 'green'
      case 'B+': return 'blue'
      case 'B': return 'blue'
      case 'TBD': return 'gray'
      default: return 'gray'
    }
  }

  const FlipCard = ({ course, index }: { course: any, index: number }) => {
    const [isFlipped, setIsFlipped] = useState(false)
    
    return (
      <Box
        position="relative"
        width="100%"
        height="300px"
        cursor="pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        perspective="1000px"
        style={{
          transformStyle: 'preserve-3d'
        }}
      >
        <Box
          width="100%"
          height="100%"
          position="relative"
          transform={isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)'}
          transition="transform 0.6s ease-in-out"
          style={{
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Front of card - Course Description */}
          <Card
            width="100%"
            height="100%"
            bg={cardBg}
            border="1px"
            borderColor={borderColor}
            _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
            transition="all 0.2s"
            position="absolute"
            top={0}
            left={0}
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(0deg)'
            }}
          >
            <CardHeader pb={2}>
              <HStack justify="space-between" align="flex-start">
                <VStack align="flex-start" spacing={1}>
                  <HStack>
                    <Icon as={course.icon} color="blue.500" />
                    <Text fontWeight="bold" fontSize="sm" color="blue.600">
                      {course.code}
                    </Text>
                  </HStack>
                  <Heading size="sm">{course.title}</Heading>
                </VStack>
                <VStack align="flex-end" spacing={1}>
                  <Badge colorScheme={getGradeColor(course.grade)}>
                    {course.grade}
                  </Badge>
                  <Text fontSize="xs" color="gray.500">
                    {course.semester}
                  </Text>
                </VStack>
              </HStack>
            </CardHeader>
            
            <CardBody pt={0} display="flex" flexDirection="column" height="100%">
              <Text fontSize="sm" color={textColor} mb={4} flex="1">
                {course.description}
              </Text>
              
              <VStack align="stretch" spacing={2} mt="auto">
                <Text fontSize="xs" fontWeight="semibold" color="gray.700">
                  Key Topics:
                </Text>
                <HStack wrap="wrap" spacing={1}>
                  {course.topics.map((topic: string, topicIndex: number) => (
                    <Badge 
                      key={topicIndex} 
                      size="sm" 
                      variant="subtle" 
                      colorScheme="gray"
                    >
                      {topic}
                    </Badge>
                  ))}
                </HStack>
                
                <Text fontSize="xs" color="gray.500" mt={2} textAlign="center">
                  Click to view study materials
                </Text>
              </VStack>
            </CardBody>
          </Card>

          {/* Back of card - Study Guide Button */}
          <Card
            width="100%"
            height="100%"
            bg={cardBg}
            border="1px"
            borderColor={borderColor}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="absolute"
            top={0}
            left={0}
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <CardBody textAlign="center" display="flex" alignItems="center" justifyContent="center">
              <VStack spacing={4}>
                <VStack spacing={2}>
                  <Heading size="sm" color="blue.600">
                    Study Materials
                  </Heading>
                  <Text fontSize="sm" color={textColor} maxW="280px">
                    Access comprehensive study guides, practice problems, and detailed notes 
                    to help you master the course material and excel in your studies.
                  </Text>
                </VStack>
                <Link href={course.studyGuideLink || "/#/study-guide-311-3"}>
                  <Button 
                    colorScheme="blue" 
                    size="lg"
                    fontSize="lg"
                    px={8}
                    py={6}
                    borderRadius="xl"
                    _hover={{ transform: 'scale(1.05)' }}
                    transition="all 0.2s"
                  >
                    View Study Guide
                  </Button>
                </Link>
                <Text fontSize="xs" color="gray.500">
                  Click anywhere to flip back
                </Text>
              </VStack>
            </CardBody>
          </Card>
        </Box>
      </Box>
    )
  }

  const CourseCard = ({ course, index }: { course: any, index: number }) => (
    <Card 
      key={index} 
      bg={cardBg} 
      border="1px" 
      borderColor={borderColor}
      _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
      transition="all 0.2s"
    >
      <CardHeader pb={2}>
        <HStack justify="space-between" align="flex-start">
          <VStack align="flex-start" spacing={1}>
            <HStack>
              <Icon as={course.icon} color="blue.500" />
              <Text fontWeight="bold" fontSize="sm" color="blue.600">
                {course.code}
              </Text>
            </HStack>
            <Heading size="sm">{course.title}</Heading>
          </VStack>
          <VStack align="flex-end" spacing={1}>
            <Badge colorScheme={getGradeColor(course.grade)}>
              {course.grade}
            </Badge>
            <Text fontSize="xs" color="gray.500">
              {course.semester}
            </Text>
          </VStack>
        </HStack>
      </CardHeader>
      
      <CardBody pt={0}>
        <Text fontSize="sm" color={textColor} mb={4}>
          {course.description}
        </Text>
        
        <VStack align="stretch" spacing={2}>
          <Text fontSize="xs" fontWeight="semibold" color="gray.700">
            Key Topics:
          </Text>
          <HStack wrap="wrap" spacing={1}>
            {course.topics.map((topic: string, topicIndex: number) => (
              <Badge 
                key={topicIndex} 
                size="sm" 
                variant="subtle" 
                colorScheme="gray"
              >
                {topic}
              </Badge>
            ))}
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  )

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={12} align="stretch">
        <Box textAlign="center">
          <Heading size="xl" mb={4}>
            Coursework
          </Heading>
          <Text fontSize="lg" color={textColor} maxW="2xl" mx="auto">
            A comprehensive overview of my academic journey in computer science, 
            mathematics, and related fields.
          </Text>
        </Box>

        {/* Financial Math Section */}
        <VStack spacing={6} align="stretch">
          <Box textAlign="center">
            <Heading size="lg" mb={2} color="green.500">
              Financial Mathematics
            </Heading>
            <Text fontSize="md" color={textColor} maxW="4xl" mx="auto">
              Planned specialized coursework in quantitative finance from the University of Chicago, beginning January 2026. 
              These courses will cover mathematical modeling of financial markets, derivatives pricing, risk management, 
              and stochastic processes, providing the mathematical foundation for careers in quantitative finance and algorithmic trading.
            </Text>
          </Box>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {financialMathCourses.map((course, index) => (
              <CourseCard key={index} course={course} index={index} />
            ))}
          </SimpleGrid>
        </VStack>

        {/* Computer Science Section */}
        <VStack spacing={6} align="stretch">
          <Box textAlign="center">
            <Heading size="lg" mb={2} color="blue.500">
              Computer Science
            </Heading>
            <Text fontSize="md" color={textColor} maxW="4xl" mx="auto">
              Core computer science courses from Northwestern covering algorithms, data structures, machine learning, 
              and systems programming. These courses provide the foundation for software development, 
              data analysis, and artificial intelligence applications.
            </Text>
          </Box>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={6}>
            {computerScienceCourses.map((course, index) => (
              <CourseCard key={index} course={course} index={index} />
            ))}
          </SimpleGrid>
        </VStack>

        {/* Math & Physics Section */}
        <VStack spacing={6} align="stretch">
          <Box textAlign="center">
            <Heading size="lg" mb={2} color="purple.500">
              Mathematics & Physics
            </Heading>
            <Text fontSize="md" color={textColor} maxW="4xl" mx="auto">
              Mathematical foundations from Northwestern including linear algebra, calculus, statistics, and probability theory. 
              Physics courses provide understanding of classical mechanics and mathematical modeling principles 
              essential for computational work and data science applications.
            </Text>
          </Box>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={6}>
            {mathPhysicsCourses.map((course, index) => (
              (course.code === "MATH 311-3" || course.code === "MATH 366-0") ? (
                <FlipCard key={index} course={course} index={index} />
              ) : (
                <CourseCard key={index} course={course} index={index} />
              )
            ))}
          </SimpleGrid>
        </VStack>

        <Divider />

        <Box textAlign="center" py={8}>
          <Heading size="md" mb={4}>
            Academic Focus Areas
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} maxW="4xl" mx="auto">
            <VStack>
              <Icon as={FaRobot} boxSize={8} color="blue.500" />
              <Text fontWeight="semibold">Machine Learning</Text>
              <Text fontSize="sm" color={textColor} textAlign="center">
                Deep learning, neural networks, and AI applications
              </Text>
            </VStack>
            <VStack>
              <Icon as={FaCode} boxSize={8} color="green.500" />
              <Text fontWeight="semibold">Software Engineering</Text>
              <Text fontSize="sm" color={textColor} textAlign="center">
                Algorithms, data structures, and system design
              </Text>
            </VStack>
            <VStack>
              <Icon as={FaChartLine} boxSize={8} color="purple.500" />
              <Text fontWeight="semibold">Data Science</Text>
              <Text fontSize="sm" color={textColor} textAlign="center">
                Statistics, probability, and data analysis
              </Text>
            </VStack>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  )
}

export default Coursework
