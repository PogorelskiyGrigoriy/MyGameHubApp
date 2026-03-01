import useParentPlatform from "@/services/hooks/useParentPlatform";
import MenuSelector from "./MenuSelector";
import useGameQueryStore from "../store/useGameQueryStore"; 

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.parentPlatformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const { data: platforms, error } = useParentPlatform();

  if (error) return null;

  return (
    <MenuSelector
      // Передаем пустой массив по умолчанию
      data={platforms || []}
      // Безопасный поиск через опциональную цепочку
      selectedItem={platforms?.find((p) => p.id === selectedPlatformId)}
      onSelect={(p) => setPlatformId(p.id === -1 ? null : p.id)}
      defaultLabel="Platforms"
      getLabel={(p) => p.name}
      getValue={(p) => p.id}
    />
  );
};

export default PlatformSelector;