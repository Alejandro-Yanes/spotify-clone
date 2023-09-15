"use client";

import React, { useEffect } from "react";

import LikeButton from "./Buttons/LikeButton";
import MediaItem from "./MediaItem";
import { Song } from "../../types";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";

export type LikedContentProps = {
  songs: Song[];
};

const LikedContent: React.FunctionComponent<LikedContentProps> = ({
  songs,
}) => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No liked songs
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-y-2 w-full p-6">
        {songs.map((song) => (
          <div key={song.id} className="flex items-center gap-x-4 w-full">
            <div className="flex-1">
              <MediaItem onClick={() => {}} song={song} />
            </div>
            <LikeButton songId={song.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedContent;
