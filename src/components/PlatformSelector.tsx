import React from "react";
import useParentPlatform from "@/services/hooks/useParentPlatform";
import MenuSelector from "./MenuSelector";

type Props = {
  parentPlatformId: number | null;
  onSelectPlatform: (id: number | null) => void;
};

const PlatformSelector: React.FC<Props> = ({
  parentPlatformId,
  onSelectPlatform,
}) => {
  const { data: platforms, error } = useParentPlatform();

  if (error) return null;

  return (
    <MenuSelector
      data={platforms}
      selectedItem={platforms.find((p) => p.id === parentPlatformId)}
      onSelect={(p) => onSelectPlatform(p.id === -1 ? null : p.id)}
      defaultLabel="Platforms"
      getLabel={(p) => p.name}
      getValue={(p) => p.id}
    />
  );
};

export default PlatformSelector;