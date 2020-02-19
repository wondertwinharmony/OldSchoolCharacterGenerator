import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import styled from 'styled-components';
import {
  CHA,
  CON,
  DEX,
  INT,
  STR,
  WIS
} from '../../../constants/abilityScoreConstants';
import CharacterDetailsDisplay from './characterDetailsDisplay';

interface Props {
  characterName: string;
  classSelection: string;
  abilityScores: number[];
  strMod: string;
  dexMod: string;
  conMod: string;
  intMod: string;
  wisMod: string;
  chaMod: string;
  hitPoints: number;
  armorClass: number;
  experienceAdjustment: string;
  isEditable: boolean;
  setIsEditable: (isEditable: boolean) => void;
}

/**
 * Generic component that renders pertinent Character Sheet details
 * such as Character Name, Class, Class Icon, Ability Scores, Saves and Stats.
 */
const CharacterDetails: React.SFC<Props> = ({
  characterName,
  classSelection,
  abilityScores,
  strMod,
  dexMod,
  conMod,
  intMod,
  wisMod,
  chaMod,
  hitPoints,
  armorClass,
  experienceAdjustment,
  isEditable,
  setIsEditable
}) => {
  const [characterNameInput, setCharacterNameInput] = useState('');
  //character level determined by experienceLevel array index, +1
  const [characterLevelInput, setCharacterLevelInput] = useState('');
  const [
    characterAbilityScoresInput,
    setCharacterAbilityScoresInput
  ] = useState(['', '', '', '', '', '']);
  const [characterHPInput, setCharacterHPInput] = useState('');
  const [characterACInput, setCharacterACInput] = useState('');
  const [characterXPInput, setCharacterXPInput] = useState('');

  const stringifiedAbilityScores = abilityScores.map(score => score.toString());

  return isEditable ? (
    <>
      <ButtonContainer>
        <Button
          onClick={(e: any) => {
            e.preventDefault();
            e.stopPropagation();
            setIsEditable(false);
          }}
          style={{ width: '150px' }}
          variant={'primary'}
          type="submit"
        >
          Save
        </Button>
        <Button
          onClick={(e: any) => {
            e.preventDefault();
            e.stopPropagation();
            setIsEditable(false);
          }}
          style={{ width: '150px' }}
          variant={'danger'}
          type="submit"
        >
          Cancel
        </Button>
      </ButtonContainer>
      <InputContainer>
        <Form>
          {/* ROW #1: Character Name, Level and XP */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder={characterName}
                onClick={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onChange={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCharacterNameInput(e.target.value);
                }}
                value={characterNameInput}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Level</Form.Label>
              <Form.Control
                placeholder={'1'}
                onClick={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onChange={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCharacterLevelInput(e.target.value);
                }}
                value={characterLevelInput}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>HP</Form.Label>
              <Form.Control
                placeholder={hitPoints.toString()}
                onClick={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onChange={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCharacterHPInput(e.target.value);
                }}
                value={characterHPInput}
              />
            </Form.Group>
          </Form.Row>

          {/* ROW #2: Character HP and AC */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>AC</Form.Label>
              <Form.Control
                placeholder={armorClass.toString()}
                onClick={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onChange={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCharacterACInput(e.target.value);
                }}
                value={characterACInput}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>XP</Form.Label>
              <Form.Control
                placeholder={'0'}
                onClick={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onChange={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCharacterXPInput(e.target.value);
                }}
                value={characterXPInput}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Next Level</Form.Label>
              <Form.Control plaintext readOnly defaultValue={`/1,200,000 XP`} />
            </Form.Group>
          </Form.Row>

          {/* ROW #3: Ability Scores STR, DEX, CON */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>STR</Form.Label>
              <Form.Control
                placeholder={abilityScores[STR].toString()}
                onClick={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onChange={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                  let updatedAbilityScores = [...stringifiedAbilityScores];
                  updatedAbilityScores[STR] = e.target.value;
                  setCharacterAbilityScoresInput(updatedAbilityScores);
                }}
                value={characterAbilityScoresInput[STR]}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>DEX</Form.Label>
              <Form.Control
                placeholder={abilityScores[DEX].toString()}
                onClick={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onChange={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                  let updatedAbilityScores = [...stringifiedAbilityScores];
                  updatedAbilityScores[DEX] = e.target.value;
                  setCharacterAbilityScoresInput(updatedAbilityScores);
                }}
                value={characterAbilityScoresInput[DEX]}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>CON</Form.Label>
              <Form.Control
                placeholder={abilityScores[CON].toString()}
                onClick={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onChange={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                  let updatedAbilityScores = [...stringifiedAbilityScores];
                  updatedAbilityScores[CON] = e.target.value;
                  setCharacterAbilityScoresInput(updatedAbilityScores);
                }}
                value={characterAbilityScoresInput[CON]}
              />
            </Form.Group>
          </Form.Row>

          {/* ROW #4: Ability Scores INT, WIS, CHA */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>INT</Form.Label>
              <Form.Control
                placeholder={abilityScores[INT].toString()}
                onClick={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onChange={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                  let updatedAbilityScores = [...stringifiedAbilityScores];
                  updatedAbilityScores[INT] = e.target.value;
                  setCharacterAbilityScoresInput(updatedAbilityScores);
                }}
                value={characterAbilityScoresInput[INT]}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>WIS</Form.Label>
              <Form.Control
                placeholder={abilityScores[WIS].toString()}
                onClick={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onChange={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                  let updatedAbilityScores = [...stringifiedAbilityScores];
                  updatedAbilityScores[WIS] = e.target.value;
                  setCharacterAbilityScoresInput(updatedAbilityScores);
                }}
                value={characterAbilityScoresInput[WIS]}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>CHA</Form.Label>
              <Form.Control
                placeholder={abilityScores[CHA].toString()}
                onClick={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onChange={(e: any) => {
                  e.preventDefault();
                  e.stopPropagation();
                  let updatedAbilityScores = [...stringifiedAbilityScores];
                  updatedAbilityScores[CHA] = e.target.value;
                  setCharacterAbilityScoresInput(updatedAbilityScores);
                }}
                value={characterAbilityScoresInput[CHA]}
              />
            </Form.Group>
          </Form.Row>
        </Form>
      </InputContainer>
    </>
  ) : (
    <CharacterDetailsDisplay
      characterName={characterName}
      classSelection={classSelection}
      abilityScores={abilityScores}
      strMod={strMod}
      dexMod={dexMod}
      conMod={conMod}
      intMod={intMod}
      wisMod={wisMod}
      chaMod={chaMod}
      hitPoints={hitPoints}
      armorClass={armorClass}
      experienceAdjustment={experienceAdjustment}
    />
  );
};

const InputContainer = styled.div`
  margin: 0px 10px;
`;

const ButtonContainer = styled.div`
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 1rem 0 0.5rem 0;
`;

export default CharacterDetails;
