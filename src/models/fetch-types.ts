export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  rating: number;
  parent_platforms: ParentPlatform[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface ParentPlatform {
  platform: Platform;
}

export type FetchResponse = {          
  results: Game[];
};