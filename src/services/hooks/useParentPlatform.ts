import { type Platform } from "@/models/fetch-types";
import useData from "./useData";

const useParentPlatform = () => {
  return useData<Platform>("platforms/lists/parents"); 
};

export default useParentPlatform;
