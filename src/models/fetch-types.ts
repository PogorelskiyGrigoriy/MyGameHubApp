export type Game = {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  rating: number;
  parent_platforms: ParentPlatform[];
};

export type Genre = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

export type Platform = {
  id: number;
  name: string;
  slug: string | null;
};

export type ParentPlatform = {
  platform: Platform;
};

export type FetchResponse<T> = {
  count: number;
  results: T[]; 
};