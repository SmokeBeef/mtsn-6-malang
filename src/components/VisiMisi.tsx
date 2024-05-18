import { Card, CardBody, CardHeader, Container, Flex, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function VisiMisi() {
    return (
        <Container id='visimisi' maxW={'8xl'} flex={1} gap={40} alignItems={'center'} justifyContent={'center'} minH={'70vh'}>
            <Text fontSize={{ base: '2xl', md: '4xl' }} textAlign={'center'} as={'h1'} fontWeight={'semibold'}>Visi & Misi</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }} textAlign={'center'} as={'h1'} >berikut merupakan beberapa visi dan misi dari MTSN 3 Malang</Text>
            <Flex justifyContent={'center'} alignItems={{ base: 'center', md: 'stretch' }} gap={{ base: 10, md: 12 }} direction={{ base: 'column', md: 'row' }} pt={{ base: 5, md: 20 }}>
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
    )
}
