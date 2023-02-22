import React, { FC, useState } from 'react';
import { genresApi } from '../../../app/services/services';
import GenresItem from '../GenresItem';
import {BiArrowBack} from 'react-icons/bi'

interface props {
    setGenre: any,
    isVisible: boolean,
    setIsVislble: any
}

const MobileGenreMenu:FC<props> = ({setGenre, setIsVislble, isVisible}) => {
    const {data: genres} = genresApi.useFetchAllRanobeQuery('')
    let genreList: number[] = []
    const [cast, setCast] = useState<boolean>(false)

    const handleClick = (id: number, cheked: boolean) => {
        if(!cheked) {
            genreList.push(id)
        }
        else {
            genreList = genreList.filter(genre => genre !== id)
        }
    }   
    const handleGenre = () => {
        setGenre(genreList)
        setIsVislble(false)
    }
    const handleRemove = () => {
        setGenre('')
        setCast(true)
    }

    return (
        <div style={{transform: isVisible ? 'translateX(0)' : 'translateX(100%)', inset: isVisible ? '0' : '0', pointerEvents: isVisible ? 'all' : 'none'}} className='fixed w-full flex flex-col items-center justify-center transition-all duration-[0.3s] main-wrapper-padding-out z-50'>
            <div className='main-wrapper-padding-out absolute w-full overflow-scroll h-full transition-all duration-[0.3s] z-50'>
                <div className='px-[14px] py-[12px] flex justify-between items-center cursor-pointer rounded-[3px] border-bottom-base'>
                    <div className='font-[600] text-[16px] flex items-center gap-[5px]'>
                        <BiArrowBack onClick={() => setIsVislble(false)}/>
                        Жанри
                    </div>
                    <div className='text-secondary text-[14px]'>
                        Скинути
                    </div>
                </div>  
                <input placeholder='Фільтр по жанрам' type="text" className='border-bottom-base text-[14px] outline-none placeholder:text-secondary text-primary px-[14px] py-[12px] h-[40px] input-background w-full' />
                <div className='flex flex-col pt-[10px]'>
                    {genres?.filter(genre => genre.kind === 'manga' && genre.name !== 'Yuri' && genre.name !== 'Hentai' && genre.name !== 'Yaoi' && genre.name !== 'Etti').map(genre => 
                        <GenresItem key={genre.id} cast={cast} setCast={setCast} id={genre.id} handleClick={handleClick} text={genre.russian}/>    
                    )}
                </div>
                <div className='sticky bottom-0 left-0 right-0 z-20 foreground px-[13px] py-[6px] flex gap-[8px] w-full'>
                    <button onClick={() => handleRemove()} className='button-default-bg rounded-[4px] w-full inline-block min-h-[16px] h-[32px] m-0 px-[16px] leading-[32px] text-[14px] font-[600] outline-0 cursor-pointer'>
                        Скинути
                    </button>
                    <button onClick={() => handleGenre()} className='bg-[#3cce7b] text-[#fff] rounded-[4px] w-full inline-block min-h-[16px] h-[32px] m-0 px-[16px] leading-[32px] text-[14px] font-[600] outline-0 cursor-pointer'>
                        Показати
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobileGenreMenu;