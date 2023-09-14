"use client";

import MediaItem from "./MediaItem";
import React from "react";
import { Song } from "../../types";

export type SearchContentProps = {
  songs: Song[];
};

const SearchContent: React.FunctionComponent<SearchContentProps> = ({
  songs,
}) => {
  if (songs.length === 0)
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No songs found
      </div>
    );
  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div className="flex items-center gap-x-4 w-full" key={song.id}>
          <MediaItem song={song} onClick={() => {}} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
