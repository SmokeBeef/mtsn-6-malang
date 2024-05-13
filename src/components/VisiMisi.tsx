import { Card, CardBody, CardHeader, Container, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function VisiMisi() {
    return (
        <Container id='visimisi' maxW={'7xl'}  flex={1} gap={40} alignItems={'center'} justifyContent={'center'} minH={'70vh'}>
            <Text fontSize={{ base: '2xl', md: '4xl' }} textAlign={'center'} as={'h1'} fontWeight={'semibold'}>Visi & Misi</Text>
            <Text fontSize={{ base: 'sm', md: 'md' }} textAlign={'center'} as={'h1'} >berikut merupakan beberapa visi dan misi dari MTSN 3 Malang</Text>
            <Flex justifyContent={'center'} alignItems={{ base: 'center', md: 'stretch' }} gap={{ base: 10, md: 40 }} direction={{ base: 'column', md: 'row' }} pt={{ base: 5, md: 20 }}>
                <Card maxW={80} bg={'blue.100'} border={'solid'} borderWidth={'1px'} borderColor={'blue.200'} >
                    <CardHeader fontSize={'20px'} fontWeight={'semibold'}>Visi</CardHeader>
                    <CardBody>
                        <Text>
                            Terwujudnya Madrasah yang berkualitas tinggi, insan unggul komprehensif, menjadi teladan terbaik dalam kehidupan dan berwawasan Internasional.
                        </Text>
                    </CardBody>
                </Card>
                <Card maxW={80} bg={'blue.100'} border={'solid'} borderWidth={'1px'} borderColor={'blue.200'}>
                <CardHeader fontSize={'20px'} fontWeight={'semibold'}>Misi</CardHeader>
                    <CardBody>
                        <UnorderedList>
                            <ListItem> Mewujudkan terpenuhinya SKL MTs plus X</ListItem>
                            <ListItem>Mewujudkan terpenuhinya Standar Isi plus X</ListItem>
                            <ListItem> Mewujudkan terpenuhinya SKL MTs plus X</ListItem>
                            <ListItem _hover={{ color: 'blue.600' }} textDecoration={'underline'}> <Link to={'/visi-misi'}> Lihat sepenuhnya ... </Link></ListItem>
                        </UnorderedList>
                    </CardBody>
                </Card>
            </Flex>
        </Container>
    )
}
