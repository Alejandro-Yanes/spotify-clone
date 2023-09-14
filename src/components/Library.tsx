"use client";

import { AiOutlinePlus } from "react-icons/ai";
import MediaItem from "./MediaItem";
import React from "react";
import { Song } from "../../types";
import { TbPlaylist } from "react-icons/tb";
import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";

export type LibraryProps = {
  songs: Song[];
};

const Library: React.FunctionComponent<LibraryProps> = ({ songs }) => {
  const { onOpen } = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();
  const onClick = () => {
    if (!user) {
      onOpen();
      return;
    }

    uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {songs.map((song) => (
          <MediaItem onClick={() => {}} key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;
