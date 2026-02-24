import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import React, { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { SORT_CONFIG } from "@/models/SortOption"; // Импорт конфига

type Props = {
  sortOrder: string | null;
  onSelectSortOrder: (sortOrder: string | null) => void;
};

const SortSelector: React.FC<Props> = ({ sortOrder, onSelectSortOrder }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Ищем текущую опцию внутри массива из конфигурации
  const currentSortOption = SORT_CONFIG.sortOptions.find(
    (o) => o.value === sortOrder
  );

  return (
    <MenuRoot onOpenChange={(e) => setIsOpen(e.open)} unmountOnExit>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {/* Если ничего не выбрано, пишем "Relevance" или "Sort by" */}
          Ordering by: {currentSortOption?.label || "Relevance"}
          {isOpen ? <LuChevronUp /> : <LuChevronDown />}
        </Button>
      </MenuTrigger>

      <MenuContent>
        {SORT_CONFIG.sortOptions.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            onClick={() => onSelectSortOrder(option.value || null)}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;