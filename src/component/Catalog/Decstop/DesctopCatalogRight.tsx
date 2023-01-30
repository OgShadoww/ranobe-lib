import React, { FC, useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { genresApi } from '../../../app/services/services'; 
import GenresItem from '../GenresItem';

interface props {
    setGenre: any
}

const DecstopCatalogRight:FC<props> = ({setGenre}) => {
    const {data: genres} = genresApi.useFetchAllRanobeQuery('')
    let genreList: number[] = []

    const handleClick = (id: number, cheked: boolean) => {
        if(!cheked) {
            genreList.push(id)
        }
        else {
            genreList = genreList.filter(genre => genre !== id)
        }
    }   

    return (
       <div className='search-filter'>
            <div className='h-full foreground'>
                <div className='search-filter-wrap'>
                    <div className='main-wrapper-padding-out relative'>
                        <div className='px-[14px] py-[12px] flex justify-between items-center cursor-pointer rounded-[3px] border-bottom-base'>
                            <div className='font-[600] text-[14px]'>
                                Жанри
                            </div>
                            <div className='text-secondary text-[14px]'>
                                Скинути
                            </div>
                        </div>  
                        <input placeholder='Фільтр по жанрам' type="text" className='border-bottom-base text-[14px] outline-none placeholder:text-secondary text-primary px-[14px] py-[12px] h-[40px] input-background w-full' />
                        <div className='flex flex-col pt-[10px]'>
                            {genres?.filter(genre => genre.kind === 'manga' && genre.name !== 'Yuri' && genre.name !== 'Hentai' && genre.name !== 'Yaoi' && genre.name !== 'Etti').map(genre => 
                                <GenresItem key={genre.id} id={genre.id} handleClick={handleClick} text={genre.russian}/>    
                            )}
                        </div>
                    </div>
                    <div className='absolute bottom-0 left-0 right-0 z-40 px-[13px] py-[6px] gap-[10px] flex'>
                        <button className='button-default-color button-default-bg min-h-[16px] text-[14px] font-[600] h-[36px] px-[16px] rounded-[3px] outline-none flex-1'>
                            Скинути
                        </button>
                        <button onClick={() => setGenre(genreList)} className='min-h-[16px] text-[14px] font-[600] h-[36px] px-[16px] bg-[#3cce7b] text-[#fff] rounded-[3px] flex-1'>
                            Показати
                        </button>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default DecstopCatalogRight;