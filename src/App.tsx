import { HStack, Grid, GridItem, Box } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import GenreSelector from "./components/GenreSelector";
import SortSelector from "./components/SortSelector";

function App() {
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
        <Box position="sticky" top="80px" height="calc(100vh - 100px)">
          <GenreList />
        </Box>
      </GridItem>

      <GridItem area="main">
        <HStack gap={5} paddingLeft={2} marginBottom={5} flexWrap="wrap">
          {/* Genre selector for mobile only */}
          <Box display={{ base: "block", lg: "none" }}>
            <GenreSelector />
          </Box>

          {/* Platform selector */}
          <PlatformSelector />

          {/* Sort selector */}
          <SortSelector />
        </HStack>

        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;