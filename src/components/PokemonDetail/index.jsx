import * as React from "react";
import { DetailWrapper, Info, SaveButton, Image, Name } from "./styles";
import { useQuery } from "react-apollo";
import { GET_POKEMON } from "../../config/apollo/queries/pokemon";
import Stats from "./Stats";
import MovesMenu from "./MovesMenu";

const PokemonDetail = ({ name }) => {
  const { data, error, loading } = useQuery(GET_POKEMON, {
    variables: { name }
  });

  if (loading) return <div>loading...</div>;
  if (error) return <div>error!</div>;

  const { image, stats, types, moves } = data ? data.Pokemon : {};

  console.log("test", image, stats, types);

  return (
    <DetailWrapper>
      <Info>
        <Image src={image} alt={name} />
        <Name>{name}</Name>
        <SaveButton>save pokemon</SaveButton>
      </Info>
      <Stats stats={stats} />
      <MovesMenu moves={moves} />
    </DetailWrapper>
  );
};

export default PokemonDetail;
