import { SimpleGrid, Spinner, Text, Button, Box } from "@chakra-ui/react";
import React from "react";
import GameCard from "./GameCard";
import useGame from "@/services/hooks/useGame";
import useGameQueryStore from "../store/useGameQueryStore";

const GameGrid = () => {
  // Достаем все параметры фильтрации из Zustand
  const gameQuery = useGameQueryStore();

  const { 
    data, 
    isLoading, 
    error, 
    fetchNextPage, 
    hasNextPage, 
    isFetchingNextPage 
  } = useGame(gameQuery);

  if (error) {
    return (
      <Text color="red.500" fontSize="xl" fontWeight="bold">
        {error.message}
      </Text>
    );
  }

  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        gap={6}
        paddingY="10px"
      >
        {/* Первичная загрузка */}
        {isLoading && <Spinner color="blue.500" size="xl" />}
        
        {/* Отрисовка страниц данных */}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>

      {/* Кнопка "Load More" появляется только если есть следующая страница */}
      {hasNextPage && (
        <Box display="flex" justifyContent="center" mt={10} pb={10}>
          <Button 
            onClick={() => fetchNextPage()} 
            loading={isFetchingNextPage}
            size="lg"
            variant="outline"
            px={10}
          >
            {isFetchingNextPage ? "Loading more..." : "Load More"}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default GameGrid;