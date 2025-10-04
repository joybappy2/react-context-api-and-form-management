import React, { useContext } from 'react';
import { Asset2Context } from './FamilyTree';

const Special = ({asset}) => {
    const asset2 = useContext(Asset2Context)
    return (
        <div>
            <h1>Special { asset } { asset2 }</h1>
        </div>
    );
};

export default Special;