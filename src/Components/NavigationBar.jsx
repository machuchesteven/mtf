import { Tabs, TabList, Tab, Container } from "@chakra-ui/react"


const NavigationBar = () => {
    return (
        <Container marginBottom={2}>
            <Tabs>
                <TabList>
                    <Tab>Home</Tab>
                    <Tab>About</Tab>
                    <Tab>Contact</Tab>
                </TabList>
            </Tabs>
        </Container>
    )
}


export default NavigationBar;