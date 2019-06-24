import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        src:'/images/dance2.jpg',
        altText: 'The Ngoni Tribe Performin',
        caption: 'The Ngoni Tribe Performing'
    },
    {
        src:'/images/dance2.jpg',
        altText: 'The Wahehe Tribe Performing',
        caption: 'The Wahehe Tribe Performing'
    },
    {
        src:'/images/dance2.jpg',
        altText: 'The Chagga Tribe Performing',
        caption: 'The Wahehe Tribe Performing'
    }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
