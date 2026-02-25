import { Input, IconButton } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  // Общая функция для запуска поиска
  const handleSearch = () => {
    if (ref.current) {
      onSearch(ref.current.value);
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSearch();
      }}
      style={{ width: "100%", maxWidth: "600px" }}
    >
      <InputGroup
        width="full"
        // Используем startElement, но делаем его интерактивным
        startElement={
          <IconButton
            variant="ghost"
            aria-label="Search games"
            size="sm"
            onClick={handleSearch} // Теперь клик по кнопке вызовет поиск
            // Важно: в Chakra v3 иногда нужно явно разрешить кнопке "ловить" клики
            pointerEvents="auto" 
            css={{
                zIndex: 1, // Поднимаем кнопку над инпутом
            }}
          >
            <BsSearch color="gray.500" />
          </IconButton>
        }
      >
        <Input
          ref={ref}
          placeholder="Search games..."
          variant="subtle"
          borderRadius={20}
          // Добавляем небольшой отступ слева, чтобы текст не наезжал на кнопку-лупу
          ps="12" 
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;