import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

/**
 * Props interface using a Generic type (T).
 * This allows the component to handle any data type (Genre, Platform, etc.)
 * while maintaining strict type safety.
 */
interface Props<T> {
  data: T[]; // Array of items to display in the dropdown
  selectedItem: T | undefined; // The currently active/selected item
  onSelect: (item: T) => void; // Callback function triggered when an item is clicked
  labelPrefix?: string; // Optional prefix for the button text (e.g., "Sort by:")
  defaultLabel: string; // Placeholder text when no item is selected
  getLabel: (item: T) => string; // Helper function to extract the display name from object T
  getValue: (item: T) => string | number; // Helper function to extract a unique key (id/slug) from object T
}

/**
 * A reusable, generic dropdown selector component built with Chakra UI.
 * The <T,> syntax tells TypeScript this is a Generic component.
 */
const MenuSelector = <T,>({
  data,
  selectedItem,
  onSelect,
  labelPrefix,
  defaultLabel,
  getLabel,
  getValue,
}: Props<T>) => {
  // Local state to manage the chevron icon orientation (up/down)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuRoot 
      // Synchronize internal open state with the menu component
      onOpenChange={(e) => setIsOpen(e.open)} 
      // Improve performance by removing hidden menu items from the DOM
      unmountOnExit 
    >
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {/* Renders: [Prefix] [Selected Item Name OR Default Label] 
            Example: "Ordering by: Relevance"
          */}
          {labelPrefix} {selectedItem ? getLabel(selectedItem) : defaultLabel}
          
          {/* Dynamic icon feedback based on menu state */}
          {isOpen ? <LuChevronUp /> : <LuChevronDown />}
        </Button>
      </MenuTrigger>

      <MenuContent 
        portalled // Renders in a React Portal to prevent clipping by parent containers with overflow:hidden
        maxH="400px" // Limits height and enables scrolling for long lists
        overflowY="auto"
      >
        {data.map((item) => (
          <MenuItem
            // Unique key for React reconciliation
            key={getValue(item)}
            // Chakra UI expects a string for the value prop
            value={getValue(item).toString()}
            // Returns the entire object T to the parent component upon selection
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