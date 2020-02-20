import React from 'react';
import styled from 'styled-components';
import { characterClasses } from '../../characterData/classes';

interface Props {
  characterName: string;
  classSelection: string;
  characterXP: number;
  characterLevel: number;
}

/**
 * Component for Character Name and Class Title.
 */
const CharacterNameAndClass: React.SFC<Props> = ({
  characterName,
  classSelection,
  characterXP,
  characterLevel
}) => {
  return (
    <NameAndClassContainer>
      <CharacterName>{characterName}</CharacterName>
      <LevelText>{`Level ${characterLevel} ${characterClasses[classSelection].name}`}</LevelText>
      {characterLevel ===
      parseInt(characterClasses[classSelection].maximumLevel) ? (
        <XPText>Max Level</XPText>
      ) : (
        <>
          <XPText>{`${characterXP.toLocaleString()}/${
            characterClasses[classSelection].experienceLevel[characterLevel - 1]
          }`}</XPText>
          <XPText>{`XP to Level ${characterLevel + 1}`}</XPText>
        </>
      )}
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
