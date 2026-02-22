export type Game = {
  id: number;
  name: string;
  background_image: string; 
  rating: number;           
  metacritic: number;       
};

export type FetchResponse = {          
  results: Game[];
};