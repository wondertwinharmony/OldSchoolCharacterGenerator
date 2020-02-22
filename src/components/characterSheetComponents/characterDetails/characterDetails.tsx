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
import { raiseDeadChance } from "../../../constants/raiseDeadChance";
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
  maxResurrections: number;
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
  maxResurrections,
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
  const [
    characterMaxResurrectionsInput,
    setCharacterMaxResurrectionsInput
  ] = useState("");
  const [characterXPInput, setCharacterXPInput] = useState("");
  const [hitDiceInput, setHitDiceInput] = useState(
    characterClasses[classSelection].hitDiceCount[characterLevel - 1]
  );

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
      maxResurrections: characterMaxResurrectionsInput
        ? parseInt(characterMaxResurrectionsInput)
        : maxResurrections,
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
      <StyledFormLabel>{getAbilityString(ability)}</StyledFormLabel>
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
          {/* ROW #1: Character Name */}
          <Form.Row>
            <Form.Group as={Col}>
              <StyledFormLabel>Name</StyledFormLabel>
              <NameFormControl
                placeholder={characterName}
                onChange={(e: any) => {
                  setCharacterNameInput(e.target.value);
                }}
              />
            </Form.Group>
          </Form.Row>

          {/* ROW: #2 Character HP, AC, and Resurrections */}
          <Form.Row style={{ alignItems: "flex-end" }}>
            <Form.Group as={Col}>
              <StyledFormLabel>HP</StyledFormLabel>
              <SmallFormControl
                placeholder={hitPoints.toString()}
                onChange={(e: any) => {
                  setCharacterHPInput(e.target.value);
                }}
                type="number"
                min={0}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <StyledFormLabel>AC</StyledFormLabel>
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
              <SmallFormLabel>Resurrections</SmallFormLabel>
              <SmallFormLabel>Remaining</SmallFormLabel>
              <SmallFormControl
                placeholder={maxResurrections}
                onChange={(e: any) => {
                  setCharacterMaxResurrectionsInput(e.target.value);
                }}
                type="number"
                min={0}
                max={maxResurrections}
              />
            </Form.Group>
          </Form.Row>

          {/* ROW #3: Character Level, XP, and Next Level */}
          <Form.Row>
            <Form.Group as={Col}>
              <StyledFormLabel>Level</StyledFormLabel>
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
              <StyledFormLabel>XP</StyledFormLabel>
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
              <SmallFormLabel>Next Level</SmallFormLabel>
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

          {/* ROW #4: Ability Scores STR, DEX, CON */}
          <Form.Row>
            {[STR, DEX, CON].map(ability => getFormGroup(ability))}
          </Form.Row>

          {/* ROW #5: Ability Scores INT, WIS, CHA */}
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
      hitDiceInput={hitDiceInput}
      setHitDiceInput={setHitDiceInput}
      maxResurrections={maxResurrections}
      raiseDeadChance={raiseDeadChance[abilityScores[CON]]}
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

const StyledFormLabel = styled(Form.Label)`
  margin-bottom: 0;
`;

const SmallFormLabel = styled(Form.Label)`
  font-size: 0.75rem;
  margin-bottom: 0;
`;

const LargeFormControl = styled(Form.Control)`
  width: 6.8rem;
`;

const NameFormControl = styled(Form.Control)`
  width: 16rem;
`;

const EditFormContainer = styled.div`
  justify-content: center;
  display: flex;
`;

export default CharacterDetails;
