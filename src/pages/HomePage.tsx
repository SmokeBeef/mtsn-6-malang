
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import VisiMisi from '../components/VisiMisi'
import Galery from '../components/Galery'
import { Flex, Text } from '@chakra-ui/react'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />
      <VisiMisi />
      <Flex direction={'column'}  alignItems={'center'} minH={'80vh'} pt={10}>
        <Text fontSize={'4xl'}>Galery</Text>
        <Galery />
      </Flex>
      <Footer />
    </>
  )
}

export default HomePage
