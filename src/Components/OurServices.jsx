import { Box, Center, Grid, GridItem, Stack, Skeleton, Heading, Text, Button, WrapItem, ButtonGroup } from "@chakra-ui/react"


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


export default OurServices;