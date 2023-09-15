"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import React, { useEffect, useState } from "react";

import { Song } from "../../../types";
import { toast } from "react-hot-toast";
import useAuthModal from "@/hooks/useAuthModal";
import { useRouter } from "next/navigation";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";

export type LikeButtonProps = {
  songId: string;
};

const LikeButton: React.FunctionComponent<LikeButtonProps> = ({ songId }) => {
  const router = useRouter();
  const { supabaseClient } = useSessionContext();
  const authModal = useAuthModal();
  const { user } = useUser();

  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from("liked_songs")
        .select("*")
        .eq("user_id", user.id)
        .eq("song_id", songId)
        .single();

      if (!error && data) {
        setIsLiked(true);
      }
    };

    fetchData();
  }, [songId, user?.id, supabaseClient]);

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  const handleLike = async () => {
    if (!user) {
      return authModal.onOpen();
    }

    if (isLiked) {
      try {
        setIsLoading(true);

        await supabaseClient
          .from("liked_songs")
          .delete()
          .eq("user_id", user.id)
          .eq("song_id", songId);

        setIsLiked(false);
        toast.success("Disliked!");
      } catch (error) {
        toast.error("Error adding dislike");
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        await supabaseClient
          .from("liked_songs")
          .insert({ user_id: user.id, song_id: songId })
          .eq("user_id", user.id)
          .eq("song_id", songId);

        setIsLiked(true);
        toast.success("Liked!");
      } catch (error) {
        toast.error("Error on liking");
      } finally {
        setIsLoading(false);
      }
    }

    router.refresh();
  };

  return (
    <button
      className="hover:opacity-75 transition cursor-pointer disabled:cursor-not-allowed"
      onClick={handleLike}
      disabled={isLoading}
    >
      <Icon color={isLiked ? "#22c55e" : "white"} size={25} />
    </button>
  );
};

export default LikeButton;
