import React, { FC } from 'react';
import { IRanobe } from '../../types/RanobeType';

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
        <div className='list-item ranobe-list-item'>
            <img className='w-[50px]' src={`https://moe.shikimori.one${item.image.original}`} alt={item.name} />
            <div className='ranobe-list-item-body gap-[5px] text-left'>
                <div className='ranobe-list-item-name '>
                    {item.russian}
                    <span>
                        {item.name}
                    </span>
                </div>
                <div className='text-[13px]'>
                    <span className={scoreStyle.join(' ')}>{item.score}</span>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;