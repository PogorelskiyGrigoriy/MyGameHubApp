import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

interface Props<T> {
  data: T[];
  selectedItem: T | undefined;
  onSelect: (item: T) => void;
  labelPrefix?: string;
  defaultLabel: string;
  getLabel: (item: T) => string;
  getValue: (item: T) => string | number;
}

const MenuSelector = <T,>({
  data,
  selectedItem,
  onSelect,
  labelPrefix,
  defaultLabel,
  getLabel,
  getValue,
}: Props<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuRoot onOpenChange={(e) => setIsOpen(e.open)} unmountOnExit>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {labelPrefix} {selectedItem ? getLabel(selectedItem) : defaultLabel}
          {isOpen ? <LuChevronUp /> : <LuChevronDown />}
        </Button>
      </MenuTrigger>

      <MenuContent portalled maxH="400px" overflowY="auto">
        {data.map((item) => (
          <MenuItem
            key={getValue(item)}
            value={getValue(item).toString()}
            onClick={() => onSelect(item)}
          >
            {getLabel(item)}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default MenuSelector;