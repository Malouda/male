import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        src:'/images/chiluga.jpg',
        altText: 'The Ngoni Tribe Performin',
        caption: 'Fire Eating'
    },
    {
        src:'/images/ruka.jpg',
        altText: 'Traditional Dance',
        caption: 'Traditional Dance'
    },
    {
        src:'/images/dance2.jpg',
        altText: 'The Chagga Tribe Performing',
        caption: 'The Wahehe Tribe Performing'
    }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
