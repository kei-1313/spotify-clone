import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Song } from "@/types";

import getSongs from "./getSongs";

//検索バーで入力した値をtitleとして受け取り、データベースからマッチするものを検索して返す関数
const getSongsByTitle = async (title: string): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  if (!title) {
    const allSongs = await getSongs();
    return allSongs;
  }

  //タイトルからデータベースを検索
  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .ilike('title', `%${title}%`)
    .order('created_at', { ascending: false })

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getSongsByTitle;
