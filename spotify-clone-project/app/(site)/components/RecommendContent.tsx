"use client"

import SongItem from '@/components/SongItem'
import useOnPlay from '@/hooks/useOnPlay'
import { Song } from '@/types'
import React, { useEffect, useState } from 'react'

interface RecommendContentProps {
  songs: Song[]
}

export const RecommendContent: React.FC<RecommendContentProps> = ({
  songs
}) => {
  
  const onPlay = useOnPlay(songs)

  const [recommendSongs, setRecommendSongs] = useState<Song[]>([])
  
  const randomRecommendSelected = (array: Song[], count: number) => {
    const newArray = [...array];
    const randomArray = [...Array(count)].map(() => {
      const randomStartIndex = Math.floor(Math.random() * newArray.length);
      return newArray.splice(randomStartIndex, 1)[0];
    });
    return randomArray;
  }

  useEffect(() => {
    randomRecommendSelected(songs, 3)
  },[recommendSongs])

  return (
    <div 
      className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-4 
        mt-4
      "
    >
      {recommendSongs.map((item) =>(
        <SongItem data={item} onClick={(id: string) => {onPlay(id)}} key={item.id}/>
      ))}
    </div>
  )
}
