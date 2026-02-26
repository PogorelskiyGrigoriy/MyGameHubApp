import { create } from "zustand";

type GameQueryStore = {
  genreSlug: string | null;
  parentPlatformId: number | null;
  ordering: string | null;
  searchText: string | null;
  setSearchText: (searchText: string) => void;
  setGenreSlug: (genreSlug: string | null) => void;
  setPlatformId: (platformId: number | null) => void;
  setSortOrder: (ordering: string | null) => void;
};

const useGameQueryStore = create<GameQueryStore>((set) => ({
  genreSlug: null,
  parentPlatformId: null,
  ordering: null,
  searchText: null,

  setSearchText: (searchText) =>
    set((state) => (state.searchText === searchText ? state : { searchText })),

  setGenreSlug: (genreSlug) =>
    set((state) => (state.genreSlug === genreSlug ? state : { genreSlug })),

  setPlatformId: (parentPlatformId) =>
    set((state) => (state.parentPlatformId === parentPlatformId ? state : { parentPlatformId })),

  setSortOrder: (ordering) =>
    set((state) => (state.ordering === ordering ? state : { ordering })),
}));

export default useGameQueryStore;