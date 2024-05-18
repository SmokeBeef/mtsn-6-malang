
import { Box, Card, CardBody, CardHeader, Container, Flex, ListItem, OrderedList, Text } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function VisiMisiPage() {
  return (
    <>
      <Navbar />
      <Text fontSize={{ base: '2xl' }} fontWeight={'semibold'} textAlign={'center'} mt={'10'}>Visi Misi MTSN 3 Malang</Text>
      <Box minH={'85vh'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
        <Container maxW={'7xl'} mt={'10'} mb={{ base: '4', md: '0' }}>
          <Flex px={'4'} justifyContent={'center'} direction={{ base: 'column', md: 'row' }} gap={'4'}>
            <Card bg={'blue.100'} flex='1'>
              <CardHeader pb={'0'}>
                <Text fontSize={'xl'} fontWeight={'semibold'} >Visi</Text>
              </CardHeader>
              <CardBody>
                <Text>
                  Terwujudnya madrasah religius, berakhlak dan berbudi, menjadi Rahmatan Lil Alamin dan Berwawasan Global
                </Text>
              </CardBody>
            </Card>
            <Card bg={'blue.100'} flex='1'>
              <CardHeader pb={'0'}>
                <Text fontSize={'xl'} fontWeight={'semibold'} >Misi</Text>
              </CardHeader>
              <CardBody>
                <OrderedList>
                  <ListItem>
                    Terwujudnya peserta didik yang beriman, bertakwa, dan memiliki kesadaran yang tinggi dalam menjalankan
                    syariat agamanya.
                  </ListItem>
                  <ListItem>
                    Terwujudnya peserta didik yang berakhlak dan berbudi pada Tuhan, sesama, alam, dan negerinya
                  </ListItem>
                  <ListItem>
                    Terwujudnya peserta didik yang unggul dalam bidang akademik dan non-akademik, berpikir kritis, dan kreatif.
                  </ListItem>
                  <ListItem>
                    Terwujudnya peserta didik yang cinta ilmu dalam komunitas belajar sepanjang hayat, yakni Madrasah ramah yang aman, nyaman sebagai
                    tempat belajar dan berkembang bagi guru sebagai ahli, peserta didik, serta orang tua, dan masyarakat
                  </ListItem>
                  <ListItem>
                    Terwujudnya pendidikan berwawasan global, mengikuti informasi mutakhir, perkembangan teknologi, dan menghargai bangsa lain.
                  </ListItem>
                  <ListItem>
                    Terwujudnya pendidikan yang mengembangkan keterampilan abad 21
                  </ListItem>
                  <ListItem>
                    Terwujudnya satuan pendidikan ramah anak (SRA) di MTsN 3 Malang
                  </ListItem>
                </OrderedList>
              </CardBody>
            </Card>
          </Flex>
        </Container>

        <Footer />
      </Box>
    </>
  )
}
