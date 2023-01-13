import React from 'react';
import DecstopCatalog from './DecstopCatalog';
import MobileCatalog from './MobileCatalog';

const Catalog = () => {

    if(window.innerWidth >= 1024) {
        return (
            <DecstopCatalog/>
        )
    }
    if(window.innerWidth < 1024) {
        return (
            <MobileCatalog/>
        )
    }

    return (
        <>
        </>
    );
};

export default Catalog;