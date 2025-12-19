import {
    Box,
    Container,
    Heading,
    Button,
    VStack,
    HStack,
    IconButton,
    useColorModeValue
  } from '@chakra-ui/react'
  import { ArrowBackIcon } from '@chakra-ui/icons'
  import { useNavigate } from 'react-router-dom'
  
  const StudyGuideViewer = () => {
    const navigate = useNavigate()
    const bgColor = useColorModeValue('white', 'gray.800')
  
    return (
      <Container maxW="container.xl" py={8}>
        <VStack spacing={6} align="stretch">
          {/* Header row */}
          <HStack justify="space-between" align="center">
            <HStack>
              <IconButton
                aria-label="Go back"
                icon={<ArrowBackIcon />}
                onClick={() => navigate('/coursework')}
                variant="ghost"
              />
              <Heading size="lg">
                MATH 311-3 Study Guide
              </Heading>
            </HStack>
            <Button
              onClick={() => navigate('/coursework')}
              variant="outline"
            >
              Back to Coursework
            </Button>
          </HStack>
  
          {/* PDF Viewer container */}
          <Box
            bg={bgColor}
            borderRadius="lg"
            p={4}
            boxShadow="lg"
            minH="80vh"
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            pt={8}
          >
            <Box
              width="100%"
              maxW="1400px"
              height="75vh"
              borderRadius="md"
              border="1px"
              borderColor="gray.200"
              overflow="hidden"
              mx="auto"
            >
              <iframe
                src="/Final_Study_Guide_311_3.pdf#toolbar=1&navpanes=1&scrollbar=1&view=FitH"
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                title="MATH 311-3 Study Guide"
              />
            </Box>
          </Box>
        </VStack>
      </Container>
    )
  }
  
  export default StudyGuideViewer
  