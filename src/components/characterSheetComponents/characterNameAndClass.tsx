import React from 'react';
import styled from 'styled-components';
import { characterClasses } from '../../characterData/classes';

interface Props {
  characterName: string;
  classSelection: string;
}

/**
 * Component for Character Name and Class Title.
 */
const CharacterNameAndClass: React.SFC<Props> = ({
  characterName,
  classSelection
}) => {
  return (
    <NameAndClassContainer>
      <CharacterName>{characterName}</CharacterName>
      <LevelText>{`Level 1 ${characterClasses[classSelection].name}`}</LevelText>
      <XPText>{`1,201,000/2,400,000 XP`}</XPText>
    </NameAndClassContainer>
  );
};

const NameAndClassContainer = styled.div`
  border-bottom: 1px solid black;
`;

const CharacterName = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Sancreek', cursive;
  font-size: 2rem;
`;

const LevelText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
`;

const XPText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.25rem;
`;

export default CharacterNameAndClass;
