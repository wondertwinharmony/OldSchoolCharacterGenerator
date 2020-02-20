import React, { useContext, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import styled from "styled-components";
import { put } from "../../../api/put";
import AppContext, { SavedCharacterDetails } from "../../../AppContext";
import { characterClasses } from "../../../characterData/classes";
import {
  CHA,
  CON,
  DEX,
  INT,
  STR,
  WIS
} from "../../../constants/abilityScoreConstants";
import { getAbilityString } from "../../../utils/getAbilityString";
import CharacterDetailsDisplay from "./characterDetailsDisplay";

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
  characterLevel: number;
  characterXP: number;
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
  characterLevel,
  characterXP,
  isEditable,
  setIsEditable
}) => {
  const { setSavedCharacterDetails, savedCharacterDetails } = useContext(
    AppContext
  );
  const [characterNameInput, setCharacterNameInput] = useState("");
  const [characterLevelInput, setCharacterLevelInput] = useState(
    characterLevel
  );
  const [
    characterAbilityScoresInput,
    setCharacterAbilityScoresInput
  ] = useState([...abilityScores]);
  const [characterHPInput, setCharacterHPInput] = useState("");
  const [characterACInput, setCharacterACInput] = useState("");
  const [characterXPInput, setCharacterXPInput] = useState("");

  const isValid =
    characterLevelInput <=
      parseInt(characterClasses[classSelection].maximumLevel) &&
    characterLevelInput > 0 &&
    !characterAbilityScoresInput.some(
      abilityScore => abilityScore < 3 || abilityScore > 18
    );

  const handleSave = () => {
    const updatedCharacterDetails: SavedCharacterDetails = {
      hp: characterHPInput ? parseInt(characterHPInput) : hitPoints,
      ac: characterACInput ? parseInt(characterACInput) : armorClass,
      xp: characterXPInput ? parseInt(characterXPInput) : characterXP,
      level: characterLevelInput,
      abilityScores: characterAbilityScoresInput,
      characterName: characterNameInput ? characterNameInput : characterName
    };

    const homeURL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://oldschoolknave.surge.sh";
    const URL = window.location.href;
    const characterId = URL.replace(homeURL.concat("/permalinked/"), "");

    const data = {
      characterId,
      characterDetails: updatedCharacterDetails,
      httpMethod: "PUT"
    };

    put(characterId, data).catch(err => alert(err));
    setSavedCharacterDetails({
      ...savedCharacterDetails,
      ...updatedCharacterDetails
    });
  };

  const getFormGroup = (ability: number) => (
    <Form.Group as={Col} key={ability}>
      <Form.Label>{getAbilityString(ability)}</Form.Label>
      <SmallFormControl
        placeholder={abilityScores[ability].toString()}
        onChange={(e: any) => {
          let updatedAbilityScores = [...characterAbilityScoresInput];
          updatedAbilityScores[ability] = e.target.value
            ? parseInt(e.target.value)
            : abilityScores[ability];
          setCharacterAbilityScoresInput(updatedAbilityScores);
        }}
        type="number"
        min={3}
        max={18}
        isInvalid={
          characterAbilityScoresInput[ability] < 3 ||
          characterAbilityScoresInput[ability] > 18
        }
      />
      <Form.Control.Feedback type="invalid">
        Enter 3 - 18.
      </Form.Control.Feedback>
    </Form.Group>
  );

  return isEditable ? (
    <EditFormContainer>
      <Container>
        <ButtonContainer>
          <Button
            onClick={(e: any) => {
              e.preventDefault();
              e.stopPropagation();
              handleSave();
              setIsEditable(false);
            }}
            style={{ width: "150px" }}
            variant={!isValid ? "secondary" : "primary"}
            type="submit"
            disabled={!isValid}
          >
            Save
          </Button>
          <Button
            onClick={(e: any) => {
              e.preventDefault();
              e.stopPropagation();
              setIsEditable(false);
            }}
            style={{ width: "150px" }}
            variant={"danger"}
            type="submit"
          >
            Cancel
          </Button>
        </ButtonContainer>
        <StyledForm>
          {/* ROW #1: Character Name, Level and XP */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder={characterName}
                onChange={(e: any) => {
                  setCharacterNameInput(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Level</Form.Label>
              <SmallFormControl
                placeholder={characterLevel.toString()}
                onChange={(e: any) => {
                  let updatedLevel = e.target.value
                    ? parseInt(e.target.value)
                    : characterLevel;
                  setCharacterLevelInput(updatedLevel);
                }}
                max={parseInt(characterClasses[classSelection].maximumLevel)}
                min={1}
                type="number"
                isInvalid={
                  characterLevelInput < 1 ||
                  characterLevelInput >
                    parseInt(characterClasses[classSelection].maximumLevel)
                }
              />
              <Form.Control.Feedback type="invalid">
                {`Enter 1 - ${characterClasses[classSelection].maximumLevel}`}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>HP</Form.Label>
              <SmallFormControl
                placeholder={hitPoints.toString()}
                onChange={(e: any) => {
                  setCharacterHPInput(e.target.value);
                }}
                type="number"
                min={0}
              />
            </Form.Group>
          </Form.Row>

          {/* ROW #2: Character HP and AC */}
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>AC</Form.Label>
              <SmallFormControl
                placeholder={armorClass.toString()}
                onChange={(e: any) => {
                  setCharacterACInput(e.target.value);
                }}
                type="number"
                min={0}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>XP</Form.Label>
              <LargeFormControl
                placeholder={characterXP.toLocaleString()}
                onChange={(e: any) => {
                  setCharacterXPInput(e.target.value);
                }}
                type="number"
                min={0}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Next Level</Form.Label>
              <Form.Control
                plaintext
                readOnly
                defaultValue={`${
                  characterClasses[classSelection].experienceLevel[
                    characterLevel - 1
                  ]
                } ${
                  parseInt(characterClasses[classSelection].maximumLevel) ===
                  characterLevel
                    ? ""
                    : "XP"
                }`}
              />
            </Form.Group>
          </Form.Row>

          {/* ROW #3: Ability Scores STR, DEX, CON */}
          <Form.Row>
            {[STR, DEX, CON].map(ability => getFormGroup(ability))}
          </Form.Row>

          {/* ROW #4: Ability Scores INT, WIS, CHA */}
          <Form.Row>
            {[INT, WIS, CHA].map(ability => getFormGroup(ability))}
          </Form.Row>
        </StyledForm>
      </Container>
    </EditFormContainer>
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
      characterXP={characterXP}
      characterLevel={characterLevel}
    />
  );
};

const Container = styled.div`
  max-width: 500px;
`;

const StyledForm = styled(Form)`
  margin-left: 1.5rem;
`;

const ButtonContainer = styled.div`
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 1rem 0 0.5rem 0;
`;

const SmallFormControl = styled(Form.Control)`
  width: 5.6rem;
`;

const LargeFormControl = styled(Form.Control)`
  width: 6.8rem;
`;

const EditFormContainer = styled.div`
  justify-content: center;
  display: flex;
`;

export default CharacterDetails;
