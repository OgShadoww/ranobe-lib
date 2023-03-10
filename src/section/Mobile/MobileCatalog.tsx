import React, { useEffect, useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import { useDebounce } from '../../app/hook/useDebounse';
import { ranobeFillterApi } from '../../app/services/services';
import CatalogItem from '../../component/Catalog/CatalogItem';
import MobileGenreMenu from '../../component/Catalog/Mobile/MobileGenreMenu';
import MobileSortMenu from '../../component/Catalog/Mobile/MobileSortMenu';
import MobileTopModal from '../../component/Catalog/Mobile/MobileTopModal';

const MobileCatalog = () => {
    const [order, setOrder] = useState<string>('ranked')
    const [sortVisible, setSortVisible] = useState<boolean>(false)
    const [filterVisible, setFilterVisible] = useState<boolean>(false)
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const [visible, setVisible] = useState<number>()
    const [genre, setGenre] = useState()
    const {data: ranobe} = ranobeFillterApi.useFetchAllRanobeQuery({order: order, limit: 30, genre: genre, search: debouncedSearchTerm})

    useEffect(() => {
        if(filterVisible) {
            document.body.classList.add('overwflow-hidden')
        }
        else {
            document.body.classList.remove('overwflow-hidden')
        }
    }, [filterVisible])

    return (
        <div className='max-w-[1200px] container overflow-hidden'>
            <div className='page-wrappe relative main-wrapper mr-0 float-left'>
                    <div className='mb-[14px]'>
                        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type="text" className='w-full h-[36px] px-[12px] py-[5px] input-border input-background outline-none rounded-[3px] text-[14px] mb-[10px]' placeholder='Пошук по назві' />
                        <div className='flex flex-wrap'>
                            {ranobe?.map(ranobe =>
                                <CatalogItem visible={visible} setVisible={setVisible} type='mobile' key={ranobe.id} item={ranobe}/>    
                            )}
                        </div>
                    </div>
            </div>
            <div className='fixed bottom-0 left-0 right-0 z-20 foreground px-[13px] py-[6px]'>
                <div className='flex gap-[8px] w-full'>
                    <button onClick={() => setSortVisible(!sortVisible)} className='button-default-bg rounded-[4px] w-full inline-block min-h-[16px] h-[32px] m-0 px-[16px] leading-[32px] text-[14px] font-[600] outline-0 cursor-pointer'>
                        Сортувати
                    </button>
                    <button onClick={() => setFilterVisible(!filterVisible)} className='button-default-bg rounded-[4px] w-full inline-block min-h-[16px] h-[32px] m-0 px-[16px] leading-[32px] text-[14px] font-[600] outline-0 cursor-pointer'>
                        Фільтрувати
                    </button>
                </div>
            </div>
            <MobileTopModal setIsVisible={setSortVisible} isVisible={sortVisible}>
                <div className='px-[15px] py-[12px] flex justify-between items-center w-full'>
                    <span className='font-[600]'>Сортувати</span>
                    <TfiClose/>
                </div>
                <MobileSortMenu order={order} setOrder={setOrder}/>
            </MobileTopModal>
            <MobileGenreMenu setGenre={setGenre} isVisible={filterVisible} setIsVislble={setFilterVisible}/>
        </div>
    );
};

export default MobileCatalog;