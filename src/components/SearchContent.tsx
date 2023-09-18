"use client";

import LikeButton from "./Buttons/LikeButton";
import MediaItem from "./MediaItem";
import React from "react";
import { Song } from "../../types";
import useOnPlay from "@/hooks/useOnPlay";

export type SearchContentProps = {
  songs: Song[];
};

const SearchContent: React.FunctionComponent<SearchContentProps> = ({
  songs,
}) => {
  const onPlay = useOnPlay(songs);
  if (songs.length === 0)
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No songs found
      </div>
    );

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div className="flex-1" key={song.id}>
          <div className="flex items-center gap-x-4 w-full">
            <MediaItem song={song} onClick={(id: string) => onPlay(id)} />
            <LikeButton songId={song.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
