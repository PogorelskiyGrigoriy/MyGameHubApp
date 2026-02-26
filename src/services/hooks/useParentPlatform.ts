import { type Platform } from "@/models/fetch-types";
import useData from "./useData";

const useParentPlatform = () => {
  return useData<Platform>(
    "platforms/lists/parents", 
    undefined, // config
    [],        // deps
    (data) => [{ id: -1, name: "All", slug: null } as Platform, ...data] // mapper
  ); 
};

export default useParentPlatform;