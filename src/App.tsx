import { Grid, GridItem, Stack } from "@chakra-ui/react";
import "./App.css";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        md: '"nav nav" "aside main"',
      }}
    >
      <GridItem area="nav">
        <Nav />
      </GridItem>

      <Stack hideBelow={"md"} bg="gray.500">
        <GridItem area="aside">ASIDE</GridItem>
      </Stack>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
export default App;
