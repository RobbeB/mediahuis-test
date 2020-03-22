import * as React from "react";
import { useQuery } from "react-apollo";
import { GET_POKEMONS } from "../../config/apollo/queries/pokemons";
import { SearchInput, PokemonListWrapper, Title, List } from "./styles";
import PokemonListItem from "./PokemonListItem";

const PokemonList = ({ setSelectedPokemon }) => {
  const { data, loading, error } = useQuery(GET_POKEMONS);
  const [search, setSearch] = React.useState("");

  if (loading) return <div>loading...</div>;
  if (error) return <div>error!</div>;

  return (
    <PokemonListWrapper>
      <Title>Select a pokemon</Title>
      <SearchInput
        placeholder="type to filter"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <List>
        {data &&
          data.Pokemons.filter(
            pokemon => !search || pokemon.name.startsWith(search)
          ).map(pokemon => (
            <PokemonListItem
              key={pokemon.id}
              name={pokemon.name}
              setSelectedPokemon={setSelectedPokemon}
            />
          ))}
      </List>
    </PokemonListWrapper>
  );
};

export default PokemonList;
