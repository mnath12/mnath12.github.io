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
import { FaGraduationCap, FaCode, FaChartLine, FaRobot } from 'react-icons/fa'
import { useState } from 'react'

const Coursework = () => {
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const textColor = useColorModeValue('gray.700', 'gray.300')

  const computerScienceCourses = [
    {
      title: "Deep Learning for Natural Language Processing",
      code: "CS 461",
      description: "In the first half of this course, we will explore the evolution of deep neural network language models, starting with n-gram models and proceeding through feed-forward neural networks, recurrent neural networks and transformer-based models. In the second half of the course we will apply these models to natural language processing tasks, including question answering, text classification (including fakes detection), text summarization, text generation (including dialogue, neural machine translation and program synthesis) and natural language inference, among others.",
      topics: ["N-gram Models", "Feed-forward Neural Networks", "Recurrent Neural Networks", "Transformer-based Models", "Natural Language Processing Tasks", "Question Answering", "Text Classification", "Text Summarization", "Text Generation", "Dialogue", "Neural Machine Translation", "Program Synthesis", "Natural Language Inference"],
      icon: FaRobot,
      semester: "Fall 2025",
      grade: "A"
    },
    {
      title: "Machine Learning",
      code: "CS 349",
      description: "Study of algorithms that improve through experience. Topics typically include Bayesian learning, decision trees, genetic algorithms, neural networks, Markov models, and reinforcement learning. Assignments include programming projects and written work.",
      topics: ["Linear Regression", "Neural Networks", "Support Vector Machines", "Clustering", "Deep Learning"],
      icon: FaRobot,
      semester: "Fall 2023",
      grade: "A"
    },
    {
      title: "Deep Learning",
      code: "CS 449",
      description: "Perceptrons & gradient desceent, Multilayer Perceptrons & nonlinear activation functions, Convolutional networks + residual networks, Embeddings, latent spaces & control, Recurrent networks, LSTMs and GRUs, Attention Networks, Auto Encoders,Variational Auto Encoders (VAEs), Generative Adversarial Networks",
      topics: ["Perceptrons", "Gradient Descent", "Multilayer Perceptrons", "Nonlinear Activation Functions", "Convolutional Networks", "Residual Networks", "Embeddings", "Latent Spaces", "Control", "Recurrent Networks", "LSTMs", "GRUs", "Attention Networks", "Auto Encoders", "Variational Auto Encoders (VAEs)", "Generative Adversarial Networks"],
      icon: FaRobot,
      semester: "Spring 2024",
      grade: "A"
    },
    {
      title: "Machine Learning: Foundations, Applications, and Algorithms",
      code: "ELEC_ENG 475",
      description: "Brings students from diverse disciplines up to speed on machine learning. Equips students with modeling and optimization tools to formulate and solve problems in a machine learning framework. Covers predictive models, feature design, numerical optimization, regression, classification, probabilistic formulations, and feature learning including neural networks and deep learning.",
      topics: ["Numerical Optimization", "Gradient Descent", "Newton's Method", "Linear Regression", "Nonlinear Regression", "L-2 Regularization", "Perceptron", "Logistic Regression", "Support Vector Machines", "Multiclass Classification", "Bayesian Regression", "Bayesian Logistic Regression", "Boosting", "Neural Networks", "Deep Learning", "Kernels", "Cross-Validation", "Stochastic Gradient Descent", "K-means Clustering", "Principal Component Analysis"],
      icon: FaRobot,
      semester: "Fall 2024",
      grade: "A"
    },
    {
      title: "Introduction to Artificial Intelligence",
      code: "COMP_SCI 348",
      description: "Core techniques and applications of AI. Representing, retrieving, and applying knowledge for problem solving. Hypothesis exploration. Theorem proving. Vision and neural networks.",
      topics: ["Knowledge Representation", "Knowledge Retrieval", "Knowledge Application", "Hypothesis Exploration", "Theorem Proving", "Vision", "Neural Networks"],
      icon: FaRobot,
      semester: "Spring 2024",
      grade: "A"
    },
    {
      title: "Scalable Software Architectures",
      code: "COMP_SCI 310",
      description: "Teaches software design principles for building high-scale Internet services. Focuses on challenges arising when assembling software services that run on many machines in parallel and which require the coordination of multiple software applications.",
      topics: ["3-tiered architecture", "SQL and NoSQL databases", "Distributed file systems", "Message queues", "Caches", "Content delivery networks", "Load balancers", "Serverless functions", "CI/CD", "Release staging", "Virtual machines", "Containers", "Centralized logging", "Performance monitoring"],
      icon: FaRobot,
      semester: "Winter 2025",
      grade: "A"
    },
    {
      title: "Blockchain & Decentralization",
      code: "COMP_ENG 334",
      description: "This course is partly an introduction to the fundamentals of blockchains and decentralized applications and partly a springboard toward deeper understanding and further exploration. The course explains how blockchains work; teaches the underlying fundamentals of distributed consensus; provides hands-on experience through computer assignments; and also touches upon economic and policy issues.",
      topics: ["Blockchains", "Decentralization", "Distributed Consensus", "Reinforcement Learning", "Economic and Policy Issues"],
      icon: FaRobot,
      semester: "Spring 2025",
      grade: "A"
    },
    {
      title: "Stochastic Models",
      code: "IEMS 315",
      description: "Fundamental concepts of probability theory; modeling and analysis of systems having random dynamics, and in particular, queueing systems",
      topics: ["Probability theory", "Limit Laws", "Stochastic Processes", "Markov chains", "Poisson process", "Queueing theory"],
      icon: FaRobot,
      semester: "Spring 2024",
      grade: "B+"
    },
    {
      title: "Design &Analysis of Algorithms",
      code: "CS 336",
      description: "Analysis techniques: solving recurrence equations. Algorithm design techniques: divide and conquer, the greedy method, backtracking, branch-and-bound, and dynamic programming. Sorting and selection algorithms, order statistics, heaps, and priority queues.",
      topics: ["Recurrence Equations", "Divide and Conquer", "Greedy Method", "Backtracking", "Branch-and-Bound", "Dynamic Programming", "Sorting Algorithms", "Selection Algorithms", "Heaps", "Priority Queues"],
      icon: FaRobot,
      semester: "Winter 2024",
      grade: "B+"
    },
    {
      title: "Regression",
      code: "STAT 350",
      description: "Simple linear regression and correlation, multiple regression, residual analysis, model building, variable selection, multi-collinearity and shrinkage estimation, nonlinear regression.",
      topics: ["Linear Regression", "Correlation", "Multiple Regression", "Residual Analysis", "Model Building", "Variable Selection", "Multi-collinearity", "Shrinkage Estimation", "Nonlinear Regression"],
      icon: FaRobot,
      semester: "Fall 2024",
      grade: "B"
    },
    {
      title: "Nonparametric Statistical Methods",
      code: "STAT 352",
      description: "Survey of nonparametric methods, with emphasis on understanding their application. Estimation of a distribution function, density estimation, and nonparametric regression.",
      topics: ["Distribution Function Estimation", "Density Estimation", "Nonparametric Regression"],
      icon: FaRobot,
      semester: "Spring 2025",
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
      description: "The hierarchy of abstractions and implementations that make up a modern computer system; demystifying the machine and the tools used to program it; systems programming in C in the UNIX environment. ",
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
      grade: "B",
      catalogLink: "https://catalogs.northwestern.edu/undergraduate/arts-sciences/mathematics/#coursestext",
      studyGuideLink: "/Cheat Sheet Math 366.pdf"
    },
    {
      title: "Advanced Probability and Stochastic Processes II, III",
      code: "MATH 311-2,3",
      description: "Markov chains, convergence theorems for Markov chains, random walk, branching processes. Reversibility. Markov chain Monte Carlo algorithms. Advanced topics in probability theory, stochastic processes, martingales, and applications to mathematical finance.",
      topics: ["Markov Chains", "Random Walk", "Branching Processes", "Reversibility", "Markov Chain Monte Carlo Algorithms", "Martingale Theory", "Brownian Motion"],
      icon: FaChartLine,
      semester: "Spring 2025",
      grade: "A",
      catalogLink: "https://catalogs.northwestern.edu/undergraduate/arts-sciences/mathematics/#coursestext",
      studyGuideLink: "/Final_Study_Guide_311_3.pdf"
    },
    {
      title: "Probability and Statistics for Econometrics",
      code: "Math 314",
      description: "Introduction to probability theory and statistical methods, including properties of probability distributions, sampling distributions, parameter estimation, confidence intervals and hypothesis testing.",
      topics: ["Probability Distributions", "Hypothesis Testing", "Regression Analysis", "Bayesian Statistics"],
      icon: FaChartLine,
      semester: "Fall 2023",
      grade: "A"
    },
    {
      title: "Linear Algebra",
      code: "MATH 334",
      description: "Proof-based linear algebra. Vector spaces. Linear maps. Eigenvalues, eigenvectors and invariant subspaces. Inner product spaces. Canonical forms of operators on real and complex vector spaces.",
      topics: ["Vector Spaces", "Linear Transformations", "Eigenvalues", "Matrix Operations", "Applications"],
      icon: FaChartLine,
      semester: "Winter 2023",
      grade: "A"
    },
    {
      title: "Linear Algebra and Multivariable Calculus",
      code: "MATH 290-2,3",
      description: "Linear algebra: orthogonality, symmetric matrices, and quadratic forms. Multivariable differential calculus: vectors, differentiation, vector-valued functions, and optimization. Multivariable integral calculus: multiple integration, line integrals, surface integrals, and vector analysis. ",
      topics: ["Linear Algebra", "Multivariable Calculus", "Orthogonality", "Symmetric Matrices", "Quadratic Forms", "Vectors", "Differentiation", "Vector-valued Functions", "Optimization", "Multiple Integration", "Line Integrals", "Surface Integrals", "Vector Analysis"],
      icon: FaChartLine,
      semester: "Winter 2022, Spring 2022",
      grade: "A"
    },
    {
      title: "Partial Differential Equations",
      code: "ES_APPM 311",
      description: "Ordinary differential equations: review of elementary ODEs, initial and boundary value problems, Fredholm Alternative Theorem, Power series solution of ODEs, Special functions, Sturm-Liouville eigenvalue problems, Eigenfunction expansions, Fourier series. Partial Differential Equations: Classification, Heat, Wave and Laplace equations and their applications, Solution by separation of variables, Series solutions, Full and partial eigenfunction expansions.",
      topics: ["Ordinary Differential Equations", "Partial Differential Equations", "Classification", "Heat", "Wave", "Laplace Equations", "Solution by Separation of Variables", "Series Solutions", "Full and Partial Eigenfunction Expansions"],
      icon: FaChartLine,
      semester: "Fall 2024",
      grade: "A"
    },
    {
      title: "Classical Mechanics",
      code: "PHYS 330-1,2",
      description: "Classical mechanics, Newton's laws, energy, momentum, and rotational motion.",
      topics: ["Newton's Laws", "Kinematics", "Energy Conservation", "Momentum", "Rotational Motion"],
      icon: FaGraduationCap,
      semester: "Fall 2023, Winter 2024",
      grade: "A"
    },
    {
      title: "Complex Analysis",
      code: "Math 334",
      description: "    Complex numbers. Analytic functions. Complex integration. Cauchy's theorem and the Cauchy integral formula. Series. Residues. ",
      topics: ["Complex Numbers", "Analytic Functions", "Complex Integration", "Cauchy's Theorem", "Cauchy's Integral Formula", "Series", "Residues"],
      icon: FaGraduationCap,
      semester: "Spring 2023",
      grade: "A"
    }, 
    {
      title: "Graph Theory",
      code: "Math 308",
      description: "Introduction to graph theory: graphs, trees, matchings, planar graphs, and colorings. Additional topics as time permits",
      topics: ["Graphs", "Trees", "Matchings", "Planar Graphs", "Colorings"],
      icon: FaGraduationCap,
      semester: "Spring 2024",
      grade: "A"
    }
  ]

  const financialMathCourses = [
    {
      title: "Foreign Exchange: Markets, Products & Pricing",
      code: "FINM 37301",
      description: "This course will examine international currency markets, financial products, and applications of quantitative models with an emphasis on the quantitative methods and derivative products in common use today. Topics will include a) pricing for FX products in theory and in practice, specifically spot, forward, futures, deposits, cross-currency swaps, non-deliverable contracts, and FX options, b) FX markets in practice, exchange rate regimes, international monetary systems, FX modeling and forecasting, and c) practical market applications of FX options, exotic options, and hybrid products.",
      topics: ["Pricing for FX Products", "FX Markets in Practice", "Exchange Rate Regimes", "International Monetary Systems", "FX Modeling and Forecasting", "Practical Market Applications of FX Options", "Exotic Options", "Hybrid Products"],
      icon: FaChartLine,
      semester: "Winter 2026",
      grade: "TBD"
    },
    {
      title: "Probability and Stochastic Processes",
      code: "FINM 34000",
      description: "This course provides a mathematical introduction to probability and stochastic processes. While the main focus is discrete probability and combinatorial analysis, some continuous probability is discussed.",
      topics: ["Conditional Expectation", "Random Walk", "Markov Chains", "Martingales", "Jump Processes", "Brownian Motion"],
      icon: FaChartLine,
      semester: "Winter 2026",
      grade: "TBD"
    },
    {
      title: "Computing for Finance in Python",
      code: "FINM 32500",
      description: "Master core and advanced Python features—decorators, context managers, type hints, async I/O—so your code stays clean, readable, and reliable.Profile and optimize performance with tools like cProfile, py-spy, and by understanding algorithm complexity  and memory management. Build a full-featured backtester to simulate and refine trading strategies using historical data with pandas and NumPy. Develop a real-time trading system that ingests live market feeds, applies your strategy logic, and sends orders through the Alpaca API.",
      topics: ["Python", "Decorators", "Context Managers", "Type Hints", "Async I/O", "Performance Optimization", "Algorithm Complexity", "Memory Management", "Backtesting", "Real-Time Trading", "Alpaca API"],
      icon: FaChartLine,
      semester: "Winter 2026",
      grade: "TBD"
    },
    {
      title: "Portfolio and Risk Management",
      code: "FINM 36700",
      description: "The course begins by covering the classic foundations of portfolio theory, including meanvariance mathematics and the standard equity factor models used in attribution, risk management, and pricing. Other fundamental topics include tail-risk, long-run returns, and forecasting returns.Advanced topics include advanced pricing models, allocation beyond mean-variance optimization, multivariate forecasting strategies, and cross-assess carry.",
      topics: ["Portfolio Theory", "Mean-Variance Optimization", "Tail-Risk", "Long-Run Returns", "Forecasting Returns", "Advanced Pricing Models", "Allocation Beyond Mean-Variance Optimization", "Multivariate Forecasting Strategies", "Cross-Assess Carry"],
      icon: FaChartLine,
      semester: "Winter 2026",
      grade: "TBD"
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

  const FlipCard = ({ course }: { course: any }) => {
    const [isFlipped, setIsFlipped] = useState(false)
    
    return (
      <Box
        position="relative"
        width="100%"
        height="300px"
        cursor="pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px'
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
                
                {course.studyGuideLink && (
                  <Box mt={2} textAlign="center">
                    <Badge 
                      colorScheme="blue" 
                      variant="solid" 
                      fontSize="xs"
                      py={1}
                      px={3}
                      borderRadius="md"
                    >
                      Click to view study materials
                    </Badge>
                  </Box>
                )}
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
              Computer Science MS
            </Heading>
            <Text fontSize="md" color={textColor} maxW="4xl" mx="auto">
              Master's courses taken alongside my undergraduate coursework at Northwestern.
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
              Undergraduate courses taken at Northwestern as a Math major and Physics minor.
            </Text>
          </Box>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={6}>
            {mathPhysicsCourses.map((course, index) => (
              (course.code === "MATH 311-2,3" || course.code === "MATH 366-0") ? (
                <FlipCard key={index} course={course} />
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
