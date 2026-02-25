import React from "react";
import { SORT_CONFIG } from "@/models/SortParams";
import MenuSelector from "./MenuSelector";

type Props = {
  sortOrder: string | null;
  onSelectSortOrder: (sortOrder: string | null) => void;
};

const SortSelector: React.FC<Props> = ({ sortOrder, onSelectSortOrder }) => {
  const options = SORT_CONFIG.sortOptions;

  return (
    <MenuSelector
      data={options}
      selectedItem={options.find((o) => o.value === sortOrder)}
      onSelect={(o) => onSelectSortOrder(o.value || null)}
      labelPrefix="Ordering by:"
      defaultLabel="Relevance"
      getLabel={(o) => o.label}
      getValue={(o) => o.value}
    />
  );
};

export default SortSelector;