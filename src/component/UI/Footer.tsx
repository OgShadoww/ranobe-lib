import React from 'react';
import { useTheme } from '../../app/hook/useTheme';
import FooterLink from '../FooterLink';

const Footer = () => {
    const {setTheme} = useTheme()
    
    return (
        <div className='w-full relative footer flex flex-col lg:items-start md:items-start sm:items-center items-center gap-[10px] justify-around'>
            <ul className="lightrope">
                <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
            </ul>
            <div className='flex gap-[10px] justify-between'>
                <p className='font-semibold text-[18px]'>Тема сайта</p>
                <div onClick={() => setTheme('light')} className='bg-white border-[#e5e5e5] border-[1.5px]  pt-[1px] pr-[4px] w-[22px] h-[22px] rounded-[2px] text-black cursor-pointer'>А</div>
                <div onClick={() => setTheme('dark')} className='bg-[#1c1c1e] border-[#38383a] border-[1.5px]  pt-[1px] pr-[4px] w-[22px] h-[22px] rounded-[2px] text-[#ddd] cursor-pointer'>А</div>
            </div>
            <div className='text-[16px]'>
                В випадку порушення авторських прав - звертайтесь на пошту galenzao@gmail.com
            </div>
            <div className='flex flex-col items-center gap-[10px] whitespace-nowrap lg:flex-row-reverse md:flex-row-reverse sm:flex-col lg:gap-[50px] md:gap-[50px]'>
                <div className='flex gap-[5px] text-[15px]'>
                    © 2023 <FooterLink to='/main' text='RanobeLib'/>
                </div>
                <div className='flex gap-[10px] text-[15px] items-center justify-center flex-wrap'>
                    <FooterLink to='/feedback' text="Зворотній зв'язок"/>
                    <FooterLink to='/catalog' text="Каталог ранобе"/>
                    <FooterLink to='/feedback' text="Зворотній зв'язок"/>
                </div>
            </div>
        </div>
    );
};

export default Footer;