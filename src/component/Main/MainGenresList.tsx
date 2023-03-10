import React, { FC, useState } from 'react';
import { genresApi } from '../../app/services/services';
import MainGenresItem from './MainGenresItem';
import {AiFillCaretDown} from 'react-icons/ai'

interface props {
    minHeight: boolean
}

const MainGenresList:FC<props> = ({minHeight}) => {
    const {data: genres} = genresApi.useFetchAllRanobeQuery('')

    const baseStyle = ['overflow-hidden genres-conteiner', 'h-[135px]']

    if(minHeight === true) {
        baseStyle.pop()
        baseStyle.push('h-[735px]')
    }
    else {
        baseStyle.pop()
        baseStyle.push('h-[135px]')
    }

    return (
        <div className={baseStyle.join(' ')}>
            {genres?.slice(30)?.filter(genre => genre.name !== 'Yuri' && genre.name !== 'Hentai' && genre.name !== 'Yaoi' && genre.name !== 'Etti').map(genre =>
                <MainGenresItem key={genre.id} text={genre.russian}/>    
            )}
        </div>
    );
};

export default MainGenresList;