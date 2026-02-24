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
  parentPlatformSlug: string | null;
  onSelectPlatform: (slug: string | null) => void;
};

const PlatformSelector: React.FC<Props> = ({
  parentPlatformSlug,
  onSelectPlatform,
}) => {
  const { data: platforms, error } = useParentPlatform(); 
  const [open, setOpen] = useState(false);

  const platformOptions = useMemo(() => {
    if (platforms.length === 0) return [];
    const allOption = { id: -1, name: "All", slug: null } as Platform;
    return [allOption, ...platforms];
  }, [platforms]);

  const selectedPlatform = platformOptions.find(
    (p) => p.slug === parentPlatformSlug
  );

  if (error) return null;

  return (
    <MenuRoot 
      onOpenChange={(e) => setOpen(e.open)} 
      unmountOnExit
    >
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || "Platforms"}
          {open ? <LuChevronUp /> : <LuChevronDown />}
        </Button>
      </MenuTrigger>

      <MenuContent>
        {platformOptions.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.slug || "all"} // value нужен для Chakra
            onClick={() => onSelectPlatform(platform.slug)}
            closeOnSelect
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;