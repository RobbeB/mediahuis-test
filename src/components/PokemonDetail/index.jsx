import * as React from "react";
import {
  DetailWrapper,
  Info,
  SaveButton,
  Image,
  Name,
  StatsAndMoves
} from "./styles";
import { useQuery } from "react-apollo";
import { GET_POKEMON } from "../../config/apollo/queries/pokemon";
import Stats from "./Stats";
import MovesMenu from "./MovesMenu";
import SelectedMoves from "./SelectedMoves";

const isMoveEqual = (move1, move2) => move1.name === move2.name;

const PokemonDetail = ({ name, addToSquad }) => {
  const { data, error, loading } = useQuery(GET_POKEMON, {
    variables: { name }
  });
  const [selectedMoves, setSelectedMoves] = React.useState([]);

  const toggleMove = React.useCallback(
    move => {
      const moveOfSameMethod = selectedMoves.find(
        selectedMove => move.learnMethod === selectedMove.learnMethod
      );
      if (!moveOfSameMethod) {
        setSelectedMoves(moves => [...moves, move]);
      }
      if (moveOfSameMethod && isMoveEqual(move, moveOfSameMethod)) {
        setSelectedMoves(moves =>
          moves.filter(selectedMove => selectedMove.name !== move.name)
        );
      }
    },
    [selectedMoves]
  );

  const { image, stats, moves, types } = data ? data.Pokemon : {};

  if (loading) return <div>loading...</div>;
  if (error) return <div>error!</div>;

  return (
    <DetailWrapper>
      <Info>
        <Image src={image} alt={name} />
        <Name>{name}</Name>
        <SaveButton
          onClick={() => {
            addToSquad(
              { ...data.Pokemon, name, type: types[0] },
              selectedMoves
            );
            setSelectedMoves([]);
          }}
        >
          save pokemon
        </SaveButton>
      </Info>
      <StatsAndMoves>
        <Stats stats={stats} />
        <SelectedMoves selectedMoves={selectedMoves} />
      </StatsAndMoves>
      <MovesMenu moves={moves} toggleMove={toggleMove} />
    </DetailWrapper>
  );
};

export default PokemonDetail;
