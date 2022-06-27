import React, { useState } from 'react'
import './App.css';
import { ChakraProvider, useDisclosure, Skeleton, Button, FormControl, FormLabel, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Heading } from '@chakra-ui/react'

const Navigator = () => {
  return <div>
    The Navigation Header for the system
  </div>
}

const Fold = () => {
  // the fold have visuals on the right, Grid Design from Medium screen | Pic of Forum in Action
  const [headline, setHeadline] = useState("Forum Headline and Main Goal")
  const [subtitle, setSubtitle] = useState("subtitle of the application, How we deliver gooal in headline, not more than 3 lines")

  return <div>
    <h1>{headline}</h1>
    <p>{subtitle}</p>
    <br />
    <p>The Call To Action Buttons Group</p>
  </div>
}

const OurServices = () => {
  return <div>
    <Heading>Our Services To The Society For development</Heading>
    <p>The List and Point for Services To The Society</p>
    <br />
    <Skeleton height='40px' />
    <p>We shall also have The Explaining Newsletter for New Memebers To Read about The Forum</p>
  </div>
}

const Upcoming = () => {
  return <div>
    <Heading>Upcoming Events and Ongoing Chances</Heading>
    <p>Here goes a list of all the events upcoming and ongoing projects <br />Calling people to join or share them</p>
    <p>There will be two rows, ONGOING, and Upcoming Events</p>
  </div>
}

const OurTeam = () => {
  return <div>
    <Heading>Meet Our Active Team</Heading>
    <p>This explains Our Team with Their Different Roles to The Society</p>
  </div>
}

const Impact = () => {
  return <div>
    <Heading>Impact To The Society</Heading>
    <p>This is some of the people who have been impacted but our work</p>
    <p>Use the slider To show people impacted with their Testimonials</p>
  </div>
}

const FounderNote = () => {
  <div>
    <Heading>Meet Godfrey Mondi, Our Founder</Heading>
    <b>The Work Of inspiring Others Have Always been my first priority ever since i knew we have a lot to hold on our own</b>
  </div>
}

const JoinUs = () => {
  return <div>
    <Heading>Join Maendeleo Talk Forum </Heading>
    <FormLabel>
      Email Address
    </FormLabel>
    <Input type="email" />
    <Button colorScheme="red">Sbscribe To Newsletter</Button>
  </div>
}

const PageFooter = () => {
  return <div>
    <Heading>Important Information</Heading>
    <p>Here goes The Following, links, address, our major partner, so on</p>
  </div>
}



function InitialFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button onClick={onOpen} colorScheme="green">Open Modal</Button>
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
      <div>
        <Navigator />
        <Fold />
        <p>maendeleo talk forum official page under construction</p>
        <OurServices />
        <Upcoming />
        <OurTeam />
        <Impact />
        <FounderNote />
        <JoinUs />
        <InitialFocus />
        <PageFooter />
      </div>
    </ChakraProvider>
  );
}

export default App;



