import { Card, Text, Heading, CardBody, Center, Box, HStack, Button, Link, Image } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

export default function MLStockPredict () {
    return (
        <Box w = 'calc(100vw)'> 

            <HStack spacing={20}>
                <Sidebar activeButton="stocks"></Sidebar>

                <Center>
                    <Card>
                        <CardBody>
                            <Center>
                                <Heading> MLStockPredict </Heading> 
                            </Center>
                            <Text> Language(s): Python, TypeScript, HTML, CSS
                                <br></br> Libraries: TensorFlow, Pandas, Numpy, React, Chakra UI
                            </Text>
                        </CardBody>
                    </Card>
                </Center>

                <Card mr = {75}>
                    <CardBody>
                        <Center>
                            <Heading> Details </Heading> 
                        </Center>
                        <Text> 
                            <p> This summer, I designed and trained a Long-Short Term Memory (LSTM) neural network to predict stock prices, drawing on my extensive experience in training neural networks from my Deep Learning class. I preprocessed
time-series data from the Polygon.io API, trained and tested the model, and integrated it into a Flask
backend with a React frontend to visualize predictions and actual stock performance. My model
successfully predicted prices for several stocks, providing an effective tool for traders. </p>
                        </Text>
                        <Link href = 'https://github.com/mnath12/MLStockPredict/'>
                            <Button>LINK</Button>
                        </Link>
                        <Image  p ={5}
                                src = '/uber_prediction.png'
                               alt = 'dummy profile pic'
                            />
                    </CardBody>
                </Card>

            </HStack>
            
        </Box>

     
        
       

    )

}