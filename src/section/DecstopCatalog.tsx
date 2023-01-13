import React, { useEffect, useState } from 'react';
import { BsChevronDown, BsChevronRight, BsSortDown } from 'react-icons/bs';
import { useDebounce } from '../app/hook/useDebounse';
import { ranobeFillterApi } from '../app/services/services';
import CatalogItem from '../component/Catalog/CatalogItem';
import DecstopCatalogRight from '../component/Catalog/DesctopCatalogRight';
import MobileCatalogRight from '../component/Catalog/DesctopCatalogRight';
import DropDownList from '../component/HeaderComponents/DropDownList'
import DropDownListItem from '../component/HeaderComponents/DropDownListItem';

const DecstopCatalog = () => {
    const [order, setOrder] = useState<string>('rate')
    const {data: ranobe} = ranobeFillterApi.useFetchAllRanobeQuery({order: order, limit: 30})
    const [visible, setVisible] = useState<boolean>(false)
    const [value, setValue] = useState('рейтингу')
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        setValue('рейтингу')
        setOrder('ranked')
    }, [])

    const handleClick = (num: number) => {
        if(num === 1) {
            setOrder('ranked')
            setValue('рейтингу')
        }
        if(num === 2) {
            setOrder('popularity')
            setValue('популярності')
        }
        if(num === 3) {
            setOrder('name')
            setValue('алфавіту')
        }
        if(num === 4) {
            setOrder('aired_on')
            setValue('даті релізу')
        }
        if(num === 5) {
            setOrder('chapters')
            setValue('кількості глав')
        }
        if(num === 6) {
            setOrder('random')
            setValue('випадково')
        }
    }
    return (
        <div className='max-w-[1200px] container flex gap-[10px]'>
            <div className='max-w-[790px] page-wrappe relative main-wrapper mr-0 float-left'>
                    <div className='mb-[14px]'>
                        <div className='flex justify-between items-center w-full mb-[10px]'>
                            <h2 className='text-[22px] font-[600] leading-[1.3]'>Каталог</h2>
                            <div className='relative'>
                                <button onClick={() => setVisible(!visible)} className='manga-search-sort-button flex items-center gap-[3px] light-hover text-[14px]'>
                                    <BsSortDown className='text-[16px]'/>
                                    По {value}
                                    <BsChevronDown className=' place-items-start'/>
                                </button>
                                <DropDownList isVisible={visible}>
                                    <div className='text-secondary text-[12px] mx-[10px] my-[5px]'>
                                        Сортувати по
                                    </div>
                                    <label className='py-[7px] px-[12px] text-[13px] flex gap-[8px] items-center cursor-pointer light-hover'>
                                        <input checked={value === 'рейтингу' ? true : false} value='check' onChange={() => handleClick(1)} type="radio" className='control-input' />
                                        <span className='rounded-[50%] input-border control-indicator'></span>
                                        <span>Рейтингу</span>
                                    </label>
                                    <label className='py-[7px] px-[12px] text-[13px] flex gap-[8px] items-center cursor-pointer light-hover'>
                                        <input checked={value === 'популярності' ? true : false} onChange={() => handleClick(2)} type="radio" className='control-input' />
                                        <span className='rounded-[50%] input-border control-indicator'></span>
                                        <span>Популярності</span>
                                    </label>
                                    <label className='py-[7px] px-[12px] text-[13px] flex gap-[8px] items-center cursor-pointer light-hover'>
                                        <input checked={value === 'алфавіту' ? true : false}  onChange={() => handleClick(3)} type="radio" className='control-input' />
                                        <span className='rounded-[50%] input-border control-indicator'></span>
                                        <span>Алфавіту</span>
                                    </label>
                                    <label className='py-[7px] px-[12px] text-[13px] flex gap-[8px] items-center cursor-pointer light-hover'>
                                        <input checked={value === 'даті релізу' ? true : false}  onChange={() => handleClick(4)} type="radio" className='control-input' />
                                        <span className='rounded-[50%] input-border control-indicator'></span>
                                        <span>Даті релізу</span>
                                    </label>
                                    <label className='py-[7px] px-[12px] text-[13px] flex gap-[8px] items-center cursor-pointer light-hover'>
                                        <input checked={value === 'кількості глав' ? true : false}  onChange={() => handleClick(5)} type="radio" className='control-input' />
                                        <span className='rounded-[50%] input-border control-indicator'></span>
                                        <span>Кількості глав</span>
                                    </label>
                                    <label className='py-[7px] px-[12px] text-[13px] flex gap-[8px] items-center cursor-pointer light-hover'>
                                        <input checked={value === 'випадково' ? true : false}  onChange={() => handleClick(6)} type="radio" className='control-input' />
                                        <span className='rounded-[50%] input-border control-indicator'></span>
                                        <span>Випадково</span>
                                    </label>
                                </DropDownList>
                            </div>
                        </div>
                        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="text" className='w-full h-[36px] px-[12px] py-[5px] input-border input-background outline-none rounded-[3px] text-[14px]' placeholder='Пошук по назві' />
                        <div className='flex flex-wrap'>
                            {ranobe?.map(ranobe =>
                                <CatalogItem key={ranobe.id} items={ranobe}/>    
                            )}
                        </div>
                    </div>
            </div>
            <DecstopCatalogRight/>
        </div>
    );
};

export default DecstopCatalog;