"use client";

import { create } from "zustand";
import { Profile, profiles } from "@/lib/mock-data";

type DatingState = {
  currentIndex: number;
  likedIds: number[];
  skippedIds: number[];
  activeProfile: Profile;
  like: () => void;
  skip: () => void;
};

export const useDatingStore = create<DatingState>((set, get) => ({
  currentIndex: 0,
  likedIds: [],
  skippedIds: [],
  activeProfile: profiles[0],
  like: () => {
    const { activeProfile, currentIndex, likedIds } = get();
    const nextIndex = (currentIndex + 1) % profiles.length;

    set({
      likedIds: [...likedIds, activeProfile.id],
      currentIndex: nextIndex,
      activeProfile: profiles[nextIndex]
    });
  },
  skip: () => {
    const { activeProfile, currentIndex, skippedIds } = get();
    const nextIndex = (currentIndex + 1) % profiles.length;

    set({
      skippedIds: [...skippedIds, activeProfile.id],
      currentIndex: nextIndex,
      activeProfile: profiles[nextIndex]
    });
  }
}));
