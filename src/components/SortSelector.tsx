import { SORT_CONFIG } from "@/models/SortParams";
import MenuSelector from "./MenuSelector";
import useGameQueryStore from "../store/useGameQueryStore";

const SortSelector = () => {
  const sortOrder = useGameQueryStore((s) => s.ordering);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const options = SORT_CONFIG.sortOptions;

  return (
    <MenuSelector
      data={options}
      selectedItem={options.find((o) => o.value === sortOrder)}
      onSelect={(o) => setSortOrder(o.value || null)}
      labelPrefix="Ordering by:"
      defaultLabel="Relevance"
      getLabel={(o) => o.label}
      getValue={(o) => o.value}
    />
  );
};

export default SortSelector;