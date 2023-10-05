import { Song } from "@/types";

import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

const useOnPlay = (songs: Song[]) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const { subscription, user } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return authModal.onOpen();
    }

    //クリックさせた特定の曲だけをactiveにする
    player.setId(id);

    //次や前のボタンの実装のためidを配列に格納する
    player.setIds(songs.map((song) => song.id));
  }

  return onPlay;
};

export default useOnPlay;
