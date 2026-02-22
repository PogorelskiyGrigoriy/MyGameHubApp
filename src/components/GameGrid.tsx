import React from "react";
import { type FetchResponse, type Game } from "@/models/fetch-types";
import apiClient from "@/services/api-client";

const GameGrid = () => {
    const [games, setGames] = React.useState<Game[]>([]);
    React.useEffect(() => {
        apiClient.get<FetchResponse>("games").then((res) => setGames(res.data.results));
    }, []);
    

  return (
    <ul>
       {games.map((game) => (
        <li key={game.id}>{game.name}</li>
       ))}
        </ul>
        )
    }

export default GameGrid;