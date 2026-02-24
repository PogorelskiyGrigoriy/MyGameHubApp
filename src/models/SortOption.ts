export type SortOption = {
  value: string;
  label: string;
};

export const SORT_CONFIG: { sortOptions: SortOption[] } = {
  sortOptions: [
    { value: "", label: "No Ordering" },
    { value: "-released", label: "Release Date" },
    { value: "-added", label: "Added Date" },
    { value: "-updated", label: "Updated Date" },
    { value: "-created", label: "Created Date" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Critic Score" },
    { value: "name", label: "Name" },
  ]
};