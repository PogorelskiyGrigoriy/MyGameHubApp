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

      {/* Боковая панель (Aside) */}
      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingX={5}
      >
        {/* Sticky позволяет списку жанров "залипать" при скролле основной страницы */}
        <Box position="sticky" top="80px" height="calc(100vh - 100px)" overflowY="auto">
          <GenreList />
        </Box>
      </GridItem>

      {/* Основной контент (Main) */}
      <GridItem area="main">
        <Box paddingX={4}>
          <HStack gap={5} marginBottom={5} flexWrap="wrap">
            {/* Селектор жанров только для мобильной версии */}
            <Box display={{ base: "block", lg: "none" }}>
              <GenreSelector />
            </Box>

            <PlatformSelector />
            <SortSelector />
          </HStack>

          <GameGrid />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;