import React from 'react';
import { Container, GridItem, Image, SimpleGrid } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib


export default function Galery() {

    // These are the images used in the slide
    const cards = [
        'https://i0.wp.com/mtsn3malang.sch.id/wp-content/uploads/2016/05/IMG_7937.jpg?ssl=1',
        'https://i2.wp.com/mtsn3malang.sch.id/wp-content/uploads/2016/05/IMG_7876.jpg?ssl=1',
        'https://i0.wp.com/mtsn3malang.sch.id/wp-content/uploads/2016/05/IMG_6265.jpg?ssl=1',
        'https://i1.wp.com/mtsn3malang.sch.id/wp-content/uploads/2016/05/IMG_7753.jpg?ssl=1',
        'https://i0.wp.com/mtsn3malang.sch.id/wp-content/uploads/2016/05/1cover-depan-mei-juni.jpg?zoom=2&resize=150%2C150&ssl=1',
        'https://i0.wp.com/mtsn3malang.sch.id/wp-content/uploads/2016/05/IMG_1202.jpg?zoom=2&resize=150%2C150&ssl=1',
        'https://i1.wp.com/mtsn3malang.sch.id/wp-content/uploads/2016/05/GOPR1325.jpg?zoom=2&resize=150%2C150&ssl=1',
        'https://i1.wp.com/mtsn3malang.sch.id/wp-content/uploads/2016/05/IMG_5138.jpg?resize=150%2C150&ssl=1'
    ];

    return (
        <Container
            id='galery'
            position={'relative'}
            maxWidth={'6xl'}
        >


            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
                {cards.map(card => (
                    <GridItem>
                        <Image src={card} />
                    </GridItem>
                ))}
            </SimpleGrid>

        </Container>
    );
}