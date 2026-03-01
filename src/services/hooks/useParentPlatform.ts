import { useQuery } from "@tanstack/react-query";
import apiClient from "../api-client";
import { type FetchResponse, type Platform } from "@/models/fetch-types";

const useParentPlatform = () => {
  return useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data.results),

    select: (data) => [
      { id: -1, name: "All", slug: null } as unknown as Platform,
      ...data,
    ],

    staleTime: 1000 * 60 * 60 * 24,
  });
};

export default useParentPlatform;