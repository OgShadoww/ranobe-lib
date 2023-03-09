import React, { FC, ReactChild } from 'react';

interface props {
    visible: boolean,
    setVisible: any,
    children: ReactChild
}

const ForumDropdownCategories:FC<props> = ({visible, setVisible, children}) => {
    return (
        <div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default ForumDropdownCategories;