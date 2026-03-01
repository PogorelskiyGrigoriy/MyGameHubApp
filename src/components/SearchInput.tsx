import { Input, IconButton } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store/useGameQueryStore"; 

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (ref.current) {
      setSearchText(ref.current.value);
      // Опционально: убираем фокус после нажатия Enter
      ref.current.blur();
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
        startElement={
          <IconButton
            variant="ghost"
            aria-label="Search games"
            size="sm"
            onClick={handleSearch}
            pointerEvents="auto"
            css={{ zIndex: 1 }}
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
          ps="12"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;