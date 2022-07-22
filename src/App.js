import React, { useState } from 'react'
import './App.css';
import { ChakraProvider, Text, SkeletonText, Center, useDisclosure, Box, Grid, GridItem, Stack, Skeleton, Button, FormControl, FormLabel, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Heading, SkeletonCircle, Container, ButtonGroup, WrapItem } from '@chakra-ui/react'

// import individual components, apply moduluarity

import NavigationBar from './Components/NavigationBar'
import Fold from './Components/Fold'
import OurServices from './Components/OurServices'
import SiteFooter from './Components/SiteFooter'


const Upcoming = () => {
  return <div>
    <Heading>Upcoming Events and Ongoing Chances</Heading>
    <p>Here goes a list of all the events upcoming and ongoing projects <br />Calling people to join or share them</p>
    <p>There will be two rows, ONGOING, and Upcoming Events</p>
  </div>
}

const OurTeam = () => {
  return <div>
    <Box borderWidth={1} borderRadius="md" m={5} p={2}>
      <Box>
        <Heading as="lg">Meet Our Active Team</Heading>
      </Box>
      <Text fontWeight="bold" mb={5}>This explains Our Team with Their Different Roles to The Society</Text>
      <hr maxWidth="95%" ma={5} />
      <Grid templateColumns="repeat(3, 1fr)" gap="2" m={2}>
        <GridItem colSpan={1}>
          <Stack>
            <SkeletonCircle size="200px" m="auto" />
          </Stack>
        </GridItem>
        <GridItem colSpan={2}>
          <Box>
            <Center><Heading as="h4" size="md">Dr. Colman T. Msoka</Heading></Center>
            <Box>
              <SkeletonText mt="5" noOfLines={5} spacing={4} />
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  </div>
}

const Impact = () => {
  return <Box><div>
    <Heading as="h3" size="lg">Impact To The Society</Heading>
    <Text as='i'>This is some of the people who have been impacted but our work</Text>
    <Grid templateColumns="repeat(3, 1fr)" gap="2px">
      <GridItem colSpan={1} m="2" p="2" borderRadius="md" borderWidth="1px">
        <Box><Skeleton height="150px" borderRadius="md" borderWidth="1px" /></Box>
        <Heading as="h5" size="md">
          Developement Masterclasses
        </Heading>
        <Text>Done On: 17th Jan 2022, 07:00PM</Text>
        <SkeletonText noOfLines="4" mt="4" gap="2" />
        <Center m="2px" p="2px"><Button>See Event</Button></Center>
      </GridItem>
      <GridItem colSpan={1} m="2" p="2" borderRadius="1px" borderWidth="1px">
        <Box><Skeleton height="150px" borderRadius="md" borderWidth="1px" /></Box>
        <Heading as="h5" size="md">
          Self Employement And Business Seminars
        </Heading>
        <Text>Done On: 17th Jan 2022, 07:00PM</Text>
        <SkeletonText noOfLines="4" mt="4" gap="2" />
        <Center m="2px" p="2px"><Button>See Event</Button></Center>
      </GridItem>
      <GridItem colSpan={1} m="2" p="2" borderRadius="1px" borderWidth="1px">
        <Box><Skeleton height="150px" borderRadius="md" borderWidth="1px" /></Box>
        <Heading as="h5" size="md">
          Innterview Skills Classes
        </Heading>
        <Text>Done On: 17th Jan 2022, 07:00PM</Text>
        <SkeletonText noOfLines="4" mt="4" gap="2" />
        <Center m="2px" p="2px"><Button>See Event</Button></Center>
      </GridItem>
    </Grid>
  </div>
  </Box>
}


const FounderNote = () => {
  <div>
    <Box m="5px" p="3px">
      <Heading>Meet Godfrey Mondi, Our Founder</Heading>
      <b>The Work Of inspiring Others Have Always been my first priority ever since i knew we have a lot to hold on our own</b>
    </Box>
  </div>
}

const JoinUs = () => {
  return <div>
    <Box mt="5px">
      <Heading>Join Maendeleo Talk Forum </Heading>
      <Skeleton m="2px" height="8px" />
      <hr mt="3" />
      <Grid templateColumns="repeat(2, 1fr)" gap="2px" mt="5px">
        <GridItem colSpan={1} p="2px">
          <Box m="5">
            <Heading as="i" size="sm">
              Benefits of Being a Member of MTF
            </Heading>
            <SkeletonText noOfLines="5" mt="5px" gap="2px" />
            <Button colorScheme="blue .600" marginX="auto" marginY="2px">Learn More</Button>
          </Box>
        </GridItem>
        <GridItem colSpan={1} p="2px">
          <Box m="5px">
            <FormLabel>
              Email Address
            </FormLabel>
            <Input type="email" />
            <Button colorScheme="red" m="2px">Subscribe To Newsletter</Button>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  </div>
}




function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button onClick={onOpen} colorScheme="twitter">Provide Your Suggestions</Button>
      <Button ml={4} ref={finalRef} colorScheme="blue.60">
        I'll receive focus on close
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function App() {
  return (
    <ChakraProvider >
      <Box maxWidth="1200px" align="center" m="auto">
        <div>
          <NavigationBar />
          <Fold />
          <p>maendeleo talk forum official page under construction</p>
          <OurServices />
          <Upcoming />
          <OurTeam />
          <Impact />
          <FounderNote />
          <JoinUs />
          <InitialFocus />
          <SiteFooter />
        </div>
      </Box>
    </ChakraProvider>
  );
}

export default App;