export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  rating: number;
  parent_platforms: ParentPlatform[];
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number,
  image_background: string
}

export interface Platform {
  id: number;
  name: string;
  slug: string | null;
}

export interface ParentPlatform {
  platform: Platform;
}

export interface FetchResponse<T> {
  count: number;
  results: T[]; 
}

