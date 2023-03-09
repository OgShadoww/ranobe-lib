import React from 'react';
import DecstopCatalog from './Decstop/DecstopCatalog';
import MobileCatalog from './Mobile/MobileCatalog';

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