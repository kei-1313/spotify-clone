import React from 'react'
import { Song } from "@/types";

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({
  data,
  onClick
}) => {
  return (
    <div>
      song
    </div>
  )
}

export default SongItem