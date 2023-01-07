import React, {FC} from 'react';
import {Link} from 'react-router-dom'

interface props {
    to: string,
    text: string
}

const FooterLink:FC<props> = ({to, text}) => {
    return (
        <Link to={to} className='link hover:underline'>
            {text}
        </Link>
    );
};

export default FooterLink;