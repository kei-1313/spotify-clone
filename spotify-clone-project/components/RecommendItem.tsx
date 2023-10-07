import React, { useEffect, useState } from 'react'
import { Song } from "@/types";
import Image from 'next/image';
import useLoadImage from '@/hooks/useLoadImage';
import PlayButton from './PlayButton';
import formatDate  from '@/utils/formatDate'
interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}

const RecommendItem: React.FC<SongItemProps> = ({
  data,
  onClick
}) => {
  const imagePath = useLoadImage(data);

  const [isNew, setIsNew] = useState(false)
  const date = formatDate(data.created_at)
  
  useEffect(() => {
    const createdDate = new Date(data.created_at)
    const threeDayAgoDate = new Date()
    threeDayAgoDate.setDate(threeDayAgoDate.getDate() - 3)
    
    if(createdDate >= threeDayAgoDate) {
      setIsNew(true)
    } else {
      setIsNew(false)
    }
    
  }, [])
  
  
  return ( 
    <div
      onClick={() => onClick(data.id)} 
      className="
        relative 
        group 
        flex 
        flex-col 
        items-center 
        justify-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-400/5 
        cursor-pointer 
        hover:bg-neutral-400/10 
        transition 
        p-3
      "
    >
      <div 
        className="
          relative 
          aspect-square 
          w-full
          h-full 
          rounded-md 
          overflow-hidden
        "
      >
        <Image
          className="object-cover"
          src={imagePath || '/images/music-placeholder.png'}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">
          {data.title}
        </p>
        <p 
          className="
            text-neutral-400 
            text-sm 
            pb-4 
            w-full 
            truncate
          "
        >
          By {data.author}
        </p>
        <div className='flex justify-between w-full'>
          <p className='text-neutral-400 text-sm'>{ date }</p>
          {isNew ? <p className='text-green-500 text-sm font-bold'>NEW</p> : ''}
        </div>
      </div>
      <div 
        className="
          absolute 
          bottom-24 
          right-5
        "
      >
        <PlayButton/>
      </div>
    </div>
   );
}

export default RecommendItem