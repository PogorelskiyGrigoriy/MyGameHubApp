import { Box, Grid, GridItem } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        md: '"nav nav" "aside main"',
      }}
      templateColumns={{
        base: "1fr",
        md: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Nav />
      </GridItem>

      <GridItem area="aside" paddingX={5} hideBelow="md">
        <Box
          height="calc(100vh - 80px)"
          overflowY="auto"
          overflowX="hidden" // Убираем горизонтальный скролл полностью
          position="sticky"
          top="80px"
          pr={2}
        >
          <GenreList />
        </Box>
      </GridItem>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;