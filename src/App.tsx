import { HStack, Grid, GridItem, Box } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { GameQueryParams } from "./models/GameQueryParams";
import PlatformSelector from "./components/PlatformSelector";
import GenreSelector from "./components/GenreSelector";
import SortSelector from "./components/SortSelector"; 

function App() {
  // Инициализируем состояние явно для безопасности типов
  const [gameQuery, setGameQuery] = useState<GameQueryParams>({
    genreSlug: null,
    parentPlatformId: null,
    searchStr: null,
    ordering: null
  } as GameQueryParams);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr", 
      }}
    >
      <GridItem area="nav">
        <Nav />
      </GridItem>

      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingX={5}
      >
        <Box
          position="sticky"
          top="80px"
          height="calc(100vh - 100px)"
        >
          <GenreList
            selectedGenreSlug={gameQuery.genreSlug}
            onGenreSelect={(slug) =>
              setGameQuery({ ...gameQuery, genreSlug: slug })
            }
          />
        </Box>
      </GridItem>

      <GridItem area="main">
        <HStack gap={5} paddingLeft={2} marginBottom={5} flexWrap="wrap">
          {/* Селектор жанров для мобильных */}
          <Box display={{ base: "block", lg: "none" }}>
            <GenreSelector 
              selectedGenreSlug={gameQuery.genreSlug}
              onSelectGenre={(slug) => setGameQuery({ ...gameQuery, genreSlug: slug })}
            />
          </Box>

          {/* Селектор платформ */}
          <PlatformSelector
            parentPlatformId={gameQuery.parentPlatformId}
            onSelectPlatform={(id) => {
              setGameQuery({ ...gameQuery, parentPlatformId: id });
            }}
          />

          {/* Cелектор сортировки */}
          <SortSelector 
            sortOrder={gameQuery.ordering}
            onSelectSortOrder={(sortOrder) => 
              setGameQuery({ ...gameQuery, ordering: sortOrder })
            }
          />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;