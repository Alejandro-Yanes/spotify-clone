"use client";

import Image from "next/image";
import PlayButton from "../Buttons/PlayButton";
import React from "react";
import { Song } from "../../../types";
import useLoadImage from "@/hooks/useLoadImage";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export type SongItemProps = {
  song: Song;
  onClick: (id: string) => void;
};

const SongItem: React.FunctionComponent<SongItemProps> = ({
  song,
  onClick,
}) => {
  const publicUrl = useLoadImage(song);
  return (
    <div
      className="relative group flex flex-col items-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
      onClick={() => onClick(song.id)}
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          className="object-cover"
          src={publicUrl || "/images/liked.png"}
          fill
          alt="image"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{song.title}</p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">
          By {song.author}
        </p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
};

export default SongItem;
