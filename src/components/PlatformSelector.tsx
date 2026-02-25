import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import React, { useState } from "react";
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
  // Хук теперь сам возвращает массив с добавленным "All" благодаря mapper в useData
  const { data: platforms, error } = useParentPlatform();
  const [isOpen, setIsOpen] = useState(false);

  // Ищем выбранную платформу сразу в полученных данных
  const selectedPlatform = platforms.find((p) => p.id === parentPlatformId);

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
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.id.toString()}
            onClick={() =>
              // Если выбрано "All" (id: -1), передаем null в родительский App
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