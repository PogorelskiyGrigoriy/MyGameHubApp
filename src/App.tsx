import { Box, Grid, GridItem } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { GameQueryParams } from "./models/GameQueryParams";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQueryParams>(
    {} as GameQueryParams,
  );

  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        md: '"nav nav" "aside main"',
      }}
      templateColumns={{
        base: "1fr",
        md: "220px 1fr",
      }}
    >
      <GridItem area="nav">
        <Nav />
      </GridItem>

      <GridItem area="aside" paddingX={5} hideBelow="md">
        <Box
          height="calc(100vh - 80px)"
          overflowY="auto"
          position="sticky"
          top="80px"
          pr={2}
        >
          <GenreList

            onGenreSelect={(slug) => setGameQuery({ ...gameQuery, genreSlug: slug })}
            selectedGenre={gameQuery.genreSlug}
          />
        </Box>
      </GridItem>

      <GridItem area="main">
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
