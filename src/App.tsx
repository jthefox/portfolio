import { Flex, Box, Stack } from "@chakra-ui/react";
import { Header, About, Skills, Work, Contact, Footer } from "./components";

const sections: Array<string> = [
  'About',
  'Skills',
  'My Work',
  'Contact Me'
]


function App() {
  return (
    <>
      <Header sections={sections} />
      {/* Left Nav */}
      {/* Right Nav */}
      <Stack as='main' direction='column' w='auto'>
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </Stack>
    </>
  )
}

export default App
