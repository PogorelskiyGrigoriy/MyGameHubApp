import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { type Platform } from "@/models/fetch-types";
import React, { useMemo, useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import useParentPlatform from "@/services/hooks/useParentPlatform";

type Props = {
  parentPlatformId: number | null;
  onSelectPlatform: (id: number | null) => void;
};

const PlatformSelector: React.FC<Props> = ({
  parentPlatformId,
  onSelectPlatform,
}) => {
  const { data: platforms, error } = useParentPlatform();
  const [isOpen, setIsOpen] = useState(false);

  const platformOptions = useMemo(() => {
    if (platforms.length === 0) return [];
    const allOption = { id: -1, name: "All", slug: null } as Platform;
    return [allOption, ...platforms];
  }, [platforms]);

  const selectedPlatform = platformOptions.find(
    (p) => p.id === parentPlatformId,
  );

  if (error) return null;

  return (
    <MenuRoot onOpenChange={(e) => setIsOpen(e.open)} unmountOnExit>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || "Platforms"}
          {isOpen ? <LuChevronUp /> : <LuChevronDown />}
        </Button>
      </MenuTrigger>

      <MenuContent>
        {platformOptions.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.id.toString()} // Chakra просит строку для value
            onClick={() =>
              onSelectPlatform(platform.id === -1 ? null : platform.id)
            }
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
