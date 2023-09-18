import { useEffect, useState } from "react";

import { Song } from "../../types";
import { toast } from "react-hot-toast";
import { useSessionContext } from "@supabase/auth-helpers-react";

const useLoadSongUrl = (song: Song) => {
  const { supabaseClient } = useSessionContext();

  if (!song) {
    return "";
  }

  const { data: songData } = supabaseClient.storage
    .from("songs")
    .getPublicUrl(song.song_path);

  return songData.publicUrl;
};

export default useLoadSongUrl;
