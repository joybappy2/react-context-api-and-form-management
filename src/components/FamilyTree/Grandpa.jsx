import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Grandpa = ({asset}) => {
    return (
        <div>
            <h1>Grandpa</h1>
            <div className='flex gap-5'>
                <Dad asset={asset}></Dad>
                <Uncle asset={asset}></Uncle>
                <Aunt></Aunt>
            </div>
        </div>
    );
};

export default Grandpa;