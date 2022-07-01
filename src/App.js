import React, { useState } from 'react'
import './App.css';
import { ChakraProvider, Text, SkeletonText, Center, useDisclosure, Box, Grid, GridItem, Stack, Skeleton, Button, FormControl, FormLabel, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Heading, SkeletonCircle } from '@chakra-ui/react'

const Navigator = () => {
  return <div>
    <Box>
      <Skeleton m={5} height="2rem" />
    </Box>
  </div>
}

const Fold = () => {
  // the fold have visuals on the right, Grid Design from Medium screen | Pic of Forum in Action
  const [headline, setHeadline] = useState("Forum Headline and Main Goal")
  const [subtitle, setSubtitle] = useState("subtitle of the application, How we deliver gooal in headline, not more than 3 lines")

  return <div>
    <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontWeight="bold" fontSize="6xl">{headline}</Text>
    <Box>
      <Grid gap={2} borderRadius={2} templateColumns="repeat(4, 1fr)" m={2}>
        <GridItem colSpan={2}>
          <Stack >
            <Skeleton height="600px" shadow="sm" />

          </Stack>
        </GridItem>
        <GridItem colSpan={2}>
          <Stack >
            <Text align="center">Explanation and Visuals for The Fold</Text>
            <Skeleton height="500px" m="auto" />
          </Stack>
        </GridItem>
      </Grid>
      <Stack>
        <Skeleton height="30px" />
        <Skeleton height="30px" />
      </Stack>
    </Box>
    <Box >
      <p>{subtitle}</p>
      <Skeleton height="12px" />
      <Skeleton height="12px" />
    </Box>
    <br />
    <p>The Call To Action Buttons Group</p>
  </div>
}

const OurServices = () => {
  return <div>
    <Box m={5}>
      <Center m={5} bg="teal.200" p={5} border="1px" borderRadius={5}>
        <Heading>Our Services To The Society For development</Heading>
      </Center>
      <p>The List and Point for Services To The Society</p>
      <br />
      <Grid templateColumns="repeat(2, 1fr)" gap={2} m={5}>
        <GridItem colSpan={1}>
          <Stack >
            <Skeleton height="300px" />
          </Stack>
        </GridItem>
        <GridItem colSpan={1}>
          <Box marginY="auto">
            <Center>
              <Heading as="h4">Proffessional Training</Heading>
            </Center>
            <Text fontWeight="400" m={5}>We are providing proffessional trainings to both members of Our Forum and Non members of the Forum, like Cv writings, Presentation preparing, skills explaining and Interview skills to proffesions</Text>
            <Center><Button>See More Information</Button></Center>
          </Box>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(5, 1fr)" gap={2} maxWidth="300px" marginX="auto" marginY="2px">
        <GridItem colSpan={1}>
          <Skeleton height="2px" />
        </GridItem>
        <GridItem colSpan={1}>
          <Skeleton height="2px" />
        </GridItem>
        <GridItem colSpan={1}>
          <Skeleton height="5px" />
        </GridItem>
        <GridItem colSpan={1}>
          <Skeleton height="2px" />
        </GridItem>
        <GridItem colSpan={1}>
          <Skeleton height="2px" />
        </GridItem>
      </Grid>
      <Skeleton height='200px' />
      <p>We shall also have The Explaining Newsletter for New Memebers To Read about The Forum</p>
    </Box>
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
    <Box borderWidth={1} borderRadius="md" m={5} p={2}>
      <Box>
        <Heading as="h4">Meet Our Active Team</Heading>
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
            <Center><Heading as="h5">Dr. Colman T. Msoka</Heading></Center>
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
      <Box maxWidth="1200px" align="center" m="auto">
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
      </Box>
    </ChakraProvider>
  );
}

export default App;