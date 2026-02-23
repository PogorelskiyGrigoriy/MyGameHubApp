import { Box, Grid, GridItem } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";

function App() {
  const [genre, setGenre] = useState<string | null>(null);

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
           onGenreSelect={(genre: string | null) => setGenre(genre)}
           selectedGenre={genre}
           />
        </Box>
      </GridItem>

      <GridItem area="main">
        <GameGrid genre={genre} />
      </GridItem>
    </Grid>
  );
}

export default App;