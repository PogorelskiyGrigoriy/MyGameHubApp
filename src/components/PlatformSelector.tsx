import useParentPlatform from "@/services/hooks/useParentPlatform";
import MenuSelector from "./MenuSelector";
import useGameQueryStore from "../store/useGameQueryStore"; // Импортируем стор

const PlatformSelector = () => {
  // Достаем ID платформы и функцию его установки
  const selectedPlatformId = useGameQueryStore((s) => s.parentPlatformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const { data: platforms, error } = useParentPlatform();

  if (error) return null;

  return (
    <MenuSelector
      data={platforms}
      // Находим текущую платформу в списке для отображения названия
      selectedItem={platforms.find((p) => p.id === selectedPlatformId)}
      // Вызываем экшен стора. Если ID -1 (наш "All"), шлем null
      onSelect={(p) => setPlatformId(p.id === -1 ? null : p.id)}
      defaultLabel="Platforms"
      getLabel={(p) => p.name}
      getValue={(p) => p.id}
    />
  );
};

export default PlatformSelector;