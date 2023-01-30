import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { IRanobeRelatedAnime } from '../../../types/IRelatedAnime';
import { IRanobeRelatedManga } from '../../../types/IRelatedManga';
import SimilarRanobeItem from '../SimilarRanobeItem';

interface props {
    title: string,
    items: [IRanobeRelatedManga] | [IRanobeRelatedAnime]
}

const DecstopSimilarRanobe:FC<props> = ({title, items}) => {
    const [width, setWidth] = useState<number>(0)
    const [translate, setTranslate] = useState(0)
    const divRef = useRef<HTMLDivElement>(document.createElement("div"))
    const mainRef = useRef<HTMLDivElement>(document.createElement("div"))

    useEffect(() => {
        setWidth(divRef.current.offsetWidth)
    }, [])

    const prev = () => {
        if(translate === 0 || translate > 0) {
            setTranslate(0)
            return
        }
        else {
            setTranslate((translate + width / 4) - mainRef.current.offsetWidth / 4)
            return
        }
    }
    const next = () => {
        if(translate === -width + mainRef.current.offsetWidth) {
            setTranslate(-width + mainRef.current.offsetWidth)
            return
        }
        if(width < 850) {
            setTranslate(0)
            return
        }
        else {
            setTranslate((translate - width / 4) + mainRef.current.offsetWidth / 4)
            return
        }
    }

    return (
        <div className='text-left'>
            <div className='flex justify-between mb-[5px]'>
                <h2 className='font-semibold'>{title}</h2>
                <div className='flex gap-[10px]'>
                    <div onClick={() => prev()} className='background-fill-4 w-[22px] h-[22px] flex justify-center items-center cursor-pointer background-fill-3-hover'>
                        <BsChevronLeft className='text-primary'/>
                    </div>
                    <div onClick={() => next()} className='background-fill-4 w-[22px] h-[22px] flex justify-center items-center cursor-pointer background-fill-3-hover'>
                        <BsChevronRight className='text-primary'/>
                    </div>
                </div>
            </div>
            <div 
                ref={mainRef}
                className='overflow-hidden box-border'
            >
                <div 
                    ref={divRef}
                    style={{
                        transform:`translateX(${translate}px)`
                    }}
                    className=' w-fit flex duration-[0.4s] translate-x-[0px] box-border'>
                    {items?.map(item => 
                        <SimilarRanobeItem key={item.anime === null ? item.manga.id : item.anime.id} item={item}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DecstopSimilarRanobe;