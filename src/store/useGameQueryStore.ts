import { create } from "zustand";
import type { GameQueryParams } from "../models/GameQueryParams";

/**
 * Interface representing the shape of the Game Query Store.
 * Defines both the state (data) and the actions (functions) to modify that state.
 */
interface GameQueryStore {
  gameQuery: GameQueryParams;
  setSearchText: (searchText: string) => void;
  setGenreSlug: (genreSlug: string | null) => void;
  setPlatformId: (platformId: number | null) => void;
  setSortOrder: (sortOrder: string | null) => void;
}

/**
 * Custom hook managed by Zustand for global state management.
 * This store centralizes all game filtering, sorting, and searching logic.
 */
const useGameQueryStore = create<GameQueryStore>((set) => ({
  /**
   * 1. Initial State
   * Default values for all filters when the application starts.
   */
  gameQuery: {
    genreSlug: null,
    parentPlatformId: null,
    ordering: null,
    searchText: null,
  },

  /**
   * 2. Actions (State Modifiers)
   */

  /**
   * Updates the search text.
   * Logic: When a user performs a manual search, we clear genre and platform filters 
   * to ensure the search is performed globally across the entire database.
   */
  setSearchText: (searchText) =>
    set((store) => ({
      gameQuery: { 
        ...store.gameQuery, 
        searchText, 
        genreSlug: null, 
        parentPlatformId: null 
      },
    })),

  /**
   * Updates the selected genre.
   * Logic: When a specific genre is selected, we clear the search text 
   * to prevent conflicting filter results.
   */
  setGenreSlug: (genreSlug) =>
    set((store) => ({
      gameQuery: { 
        ...store.gameQuery, 
        genreSlug,
        searchText: null 
      },
    })),

  /**
   * Updates the selected parent platform (e.g., PC, Xbox, PlayStation).
   */
  setPlatformId: (parentPlatformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, parentPlatformId },
    })),

  /**
   * Updates the sorting order (e.g., by name, release date, or rating).
   */
  setSortOrder: (ordering) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, ordering },
    })),
}));

export default useGameQueryStore;