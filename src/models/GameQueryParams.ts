export type GameQueryParams = {
  genreSlug: string | null;
  parentPlatformId: number | null;
  ordering: string | null;
  searchText: string | null;
};

/*You might wonder if we still need the GameQueryParams interface now that the store is flat.
The answer is yes. We keep it as a Data Contract for our API services. It acts as a bridge:
the Store manages the state, while GameQueryParams defines the payload we send to the server.
This separation of concerns makes our API calls predictable and type-safe. */
