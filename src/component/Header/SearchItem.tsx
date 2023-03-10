import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IRanobe } from '../../types/IRanobe';

interface props {
    item: IRanobe
}

const SearchItem:FC<props> = ({item}) => {
    const scoreStyle = ['']

    if(Number(item.score) < 5) {
        scoreStyle.push('text-secondary')
    }
    if(Number(item.score) > 5) {
        scoreStyle.push('text-[#3bb33b]')
    }

    return (
        <Link to={`/${item.id}`} className='list-item ranobe-list-item gap-[12px]'>
            <img className='max-w-[50px] min-w-[50px] w-[50px] min-h-[70px] max-h-[70px] h-[70px]' src={`https://moe.shikimori.one${item.image.original}`} alt={item.name} />
            <div className='ranobe-list-item-body gap-[5px] text-left'>
                <div className='ranobe-list-item-name w-[100%]'>
                    {item.russian}
                    <span>
                        {item.name}
                    </span>
                </div>
                <div className='text-[13px]'>
                    <span className={scoreStyle.join(' ')}>{item.score}</span>
                </div>
            </div>
        </Link>
    );
};

export default SearchItem;