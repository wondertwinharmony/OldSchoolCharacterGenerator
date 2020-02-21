import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { characterClasses, saves } from "../../characterData/classes";
import { createMarkup } from "../../utils/createMarkup";

interface Props {
  hitPoints: number;
  classSelection: string;
  armorClass: number;
  experienceAdjustment: string;
  characterLevel: number;
  hitDiceInput: string;
  setHitDiceInput: (hitDiceCount: string) => void;
}

/**
 * Component for the Character's Saves and Stats.
 */
const SavesAndStats: React.SFC<Props> = ({
  hitPoints,
  classSelection,
  armorClass,
  experienceAdjustment,
  characterLevel,
  hitDiceInput,
  setHitDiceInput
}) => (
  <div>
    <SavesAndStatsGrid>
      <StatsContainer>
        <div
          dangerouslySetInnerHTML={createMarkup(
            `<strong>HP:</strong> ${hitPoints}`
          )}
        />
        <div
          dangerouslySetInnerHTML={createMarkup(
            `<strong>AC:</strong> ${armorClass}`
          )}
        />
        <div
          dangerouslySetInnerHTML={createMarkup(
            `<strong>ATK Bonus:</strong> ${
              characterClasses[classSelection].attackBonus[characterLevel - 1]
            }`
          )}
        />
        <div
          dangerouslySetInnerHTML={createMarkup(
            `<strong>HD:</strong> ${characterClasses[classSelection].hitDice}`
          )}
        />
        <HDCount>
          <div
            dangerouslySetInnerHTML={createMarkup("<strong>HD Count:</strong>")}
          />
          <HDCountFormGroup>
            <HDCountFormControl
              onChange={(e: any) => {
                setHitDiceInput(e.target.value);
              }}
              value={hitDiceInput}
              type="number"
              min={0}
              max={
                characterClasses[classSelection].hitDiceCount[
                  characterLevel - 1
                ]
              }
            />
          </HDCountFormGroup>
        </HDCount>
        <div
          dangerouslySetInnerHTML={createMarkup(
            `<strong>${
              experienceAdjustment === "+0% XP" ? "" : `${experienceAdjustment}`
            }</strong>`
          )}
        />
      </StatsContainer>
      <SavesContainer>
        <Save>
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>${saves.poison}</strong>`
            )}
          />
          <SaveScore>
            {characterClasses[classSelection].saves.poison[characterLevel - 1]}
          </SaveScore>
        </Save>
        <Save>
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>${saves.wands}</strong>`
            )}
          />
          <SaveScore>
            {characterClasses[classSelection].saves.wands[characterLevel - 1]}
          </SaveScore>
        </Save>
        <Save>
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>${saves.stone}</strong>`
            )}
          />
          <SaveScore>
            {characterClasses[classSelection].saves.stone[characterLevel - 1]}
          </SaveScore>
        </Save>
        <Save>
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>${saves.breath}</strong>`
            )}
          />
          <SaveScore>
            {characterClasses[classSelection].saves.breath[characterLevel - 1]}
          </SaveScore>
        </Save>
        <Save>
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>${saves.magic}</strong>`
            )}
          />
          <SaveScore>
            {characterClasses[classSelection].saves.magic[characterLevel - 1]}
          </SaveScore>
        </Save>
      </SavesContainer>
    </SavesAndStatsGrid>
  </div>
);

const SavesAndStatsGrid = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1.75fr;
  justify-content: center;
`;

const SavesContainer = styled.div`
  display: grid;
  grid-gap: 0.25rem;
  justify-content: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const Save = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SaveScore = styled.div`
  padding: 0 0.75rem;
`;

const StatsContainer = styled.div`
  display: grid;
  justify-content: flex-end;
  align-content: baseline;
  grid-gap: 0.25rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const HDCount = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
`;

const HDCountFormGroup = styled(Form.Group)`
  margin-bottom: 0px;
`;

const HDCountFormControl = styled(Form.Control)`
  font-size: 0.75rem;
  width: 45px;
  height: 30px;
  padding: 0.375rem 0.5rem;
`;

export default SavesAndStats;
