import React, { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IScoreStats } from '../../../types/IScore';
import { IStatusStats } from '../../../types/IStatus';
import MediaStatsItem from '../MediaStatsItem';

interface props {
    title: string,
    stats: [IStatusStats] | [IScoreStats] | undefined,
    allStats: number | undefined,
    type: string,
    score?: string
}

const DecstopMediaStats:FC<props> = ({title, stats, allStats, type, score}) => {
    if(type === 'status') {
        return (
            <div className='w-[50%] flex flex-col gap-[10px]'>
                <h2 className='text-[15px] font-[600] text-left'>{title}</h2>
                <div className='box-border'>
                    <div className='w-full table'>
                        {stats?.map((stats, id) => 
                            <MediaStatsItem type={type} key={id} name={stats.name} value={stats.value} width={Number(stats.value * 100 / Number(allStats)).toFixed(1)}/>      
                        )}
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='w-[50%] flex flex-col gap-[10px]'>
                <div className='w-full flex justify-between items-end'>
                    <h2 className='text-[15px] font-[600] text-left'>{title}</h2>
                    <div className='flex items-baseline gap-[4px]'>
                        <AiFillStar className='text-[#ffb656] '/>
                        <p className='text-white text-[14px] font-[600]'>{score}</p>
                        <p className='opacity-[0.7] text-[12px]'>{allStats}</p>
                    </div>
                </div>
                <div className='box-border'>
                    <div className='w-full table'>
                        {stats?.map(stats => 
                            <MediaStatsItem type={type} key={stats.name} name={stats.name} value={stats.value} width={Number(stats.value * 100 / Number(allStats)).toFixed(1)}/>      
                        )}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <></>
    );
};

export default DecstopMediaStats;