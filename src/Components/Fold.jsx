import { useState } from "react"
import { Box, Grid, GridItem, Stack, Skeleton, Heading, Text, Button, WrapItem, ButtonGroup } from "@chakra-ui/react"

const Fold = (props) => {
    // the fold have visuals on the right, Grid Design from Medium screen | Pic of Forum in Action
    const [headline, setHeadline] = useState("Forum Headline and Main Goal")
    const [subtitle, setSubtitle] = useState("subtitle of the application, How we deliver gooal in headline, not more than 3 lines")

    return <div>
        <Box>
            <Grid gap={2} borderRadius={2} templateColumns="repeat(4, 1fr)" m={2}>
                <GridItem colSpan={2}>
                    <Stack >
                        <Skeleton height="600px" shadow="sm" />

                    </Stack>
                </GridItem>
                <GridItem colSpan={2}>
                    <Stack marginY="auto">

                        <Heading bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" align="left" fontWeight="bold" fontSize="6xl" mt="auto">{headline}</Heading>
                        <Text align="center" as="bold">Explanation and Visuals for The Fold</Text>
                        <Box>
                            This shows diff social prrofs, like user num, projects, seminars, etc
                        </Box>
                        <Box >
                            <ButtonGroup>
                                <WrapItem width="100%">
                                    <Button colorScheme="teal" variant="solid" width="100%" p={5}>Join Us</Button>
                                </WrapItem>
                                <WrapItem width="100%">
                                    <Button colorScheme="teal" variant="outline" width="100%">More Information</Button>
                                </WrapItem>
                            </ButtonGroup>
                        </Box>
                    </Stack>
                </GridItem>
            </Grid>
            <Box>
                The people we have worked with so far
                <Stack>
                    <Skeleton height="30px" />
                    <Skeleton height="30px" />
                </Stack>
            </Box>
        </Box>
    </div>
}

export default Fold;