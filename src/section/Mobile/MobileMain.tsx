import React, { FC, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import BigListRanobe from '../../component/Main/BigListRanobe';
import MainGenresItem from '../../component/Main/MainGenresItem';
import MainGenresList from '../../component/Main/MainGenresList';
import MainRandomList from '../../component/Main/MainRandomList';
import MainRightWrapper from '../../component/Main/MainRightWrapper';
import MainForumBlock from '../../component/Main/MainTopicsBlock';
import PopularRanobeList from '../../component/Main/PopularRanobeList';

const MobileMain = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className='lg:px-[10%] md:px-[5%] sm:px-0 px-0 mb-[20px] lg:mt-[15px] md:mt-[15px] sm:mt-0 mt-0 w-full flex lg:justify-around justify-center gap-[20px]'>
            <div className='flex flex-col gap-[10px] page-wrraper'>
                <div className='flex flex-col items-start gap-[10px] main-wrapper'>
                    <h3 className='font-semibold text-[17px]'>Випадкове ранобе</h3>
                    <MainRandomList/>
                </div>
                <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col gap-[10px]'>
                    <MainForumBlock title='Остальні новини' type='news'/>
                    <MainForumBlock title='Остальні теми форума' type='all'/>
                </div>
                <BigListRanobe/>
            </div>
        </div>
    );
};

export default MobileMain;