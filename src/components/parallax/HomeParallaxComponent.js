import React from 'react';
import { Parallax, Background } from 'react-parallax';

const MyComponent = () => (
    <div>
        {/* -----dynamic blur-----*/}
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('./kilimanjaro.jpg')}
            bgImageAlt="the dog"
            strength={-300}
        >
            <div style={{ height: '200px' }} />
        </Parallax>

        {/* -----renderProp: "renderLayer"-----*/}
    </div>
);
export default MyComponent;
