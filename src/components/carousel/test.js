import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        src:'/images/1.jpg',
        altText: 'The Tanzanian President',
        caption: 'The Tanzanian President'
    },
    {
        src:'/images/4.jpg',
        altText: 'Dance',
        caption: 'Dance'
    },
    {
        src:'/images/5.jpg',
        altText: 'The Chagga Tribe Performing',
        caption: 'The Wahehe Tribe Performing'
    },
    {
        src:'/images/2.jpg',
        altText: 'Tribe Performing',
        caption: 'Tribe Performing'
    },
    {
        src:'/images/6.jpg',
        altText: 'Cultural display',
        caption: 'Cultural Display'
    }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
