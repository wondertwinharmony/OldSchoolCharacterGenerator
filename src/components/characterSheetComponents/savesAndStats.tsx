import React from 'react';
import styled from 'styled-components';
import { characterClasses, saves } from '../../characterData/classes';
import { createMarkup } from '../../utils/createMarkup';

interface Props {
  hitPoints: number;
  classSelection: string;
  armorClass: number;
  experienceAdjustment: string;
  characterLevel: number;
}

/**
 * Component for the Character's Saves and Stats.
 */
const SavesAndStats: React.SFC<Props> = ({
  hitPoints,
  classSelection,
  armorClass,
  experienceAdjustment,
  characterLevel
}) => {
  console.log(characterLevel);
  return (
    <div>
      <SavesAndStatsGrid>
        <StatsContainer>
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>HP:</strong> ${hitPoints}`
            )}
          />
          {/* <div>{`HP: ${hitPoints}`}</div> */}
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>HD:</strong> ${characterClasses[classSelection].hitDice}`
            )}
          />
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>AC:</strong> ${armorClass}`
            )}
          />
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>ATK Bonus:</strong> ${characterClasses[classSelection].attackBonus[0]}`
            )}
          />
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>${
                experienceAdjustment === '+0% XP'
                  ? ''
                  : `${experienceAdjustment}`
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
              {characterClasses[classSelection].saves.poison[0]}
            </SaveScore>
          </Save>
          <Save>
            <div
              dangerouslySetInnerHTML={createMarkup(
                `<strong>${saves.wands}</strong>`
              )}
            />
            <SaveScore>
              {characterClasses[classSelection].saves.wands[0]}
            </SaveScore>
          </Save>
          <Save>
            <div
              dangerouslySetInnerHTML={createMarkup(
                `<strong>${saves.stone}</strong>`
              )}
            />
            <SaveScore>
              {characterClasses[classSelection].saves.stone[0]}
            </SaveScore>
          </Save>
          <Save>
            <div
              dangerouslySetInnerHTML={createMarkup(
                `<strong>${saves.breath}</strong>`
              )}
            />
            <SaveScore>
              {characterClasses[classSelection].saves.breath[0]}
            </SaveScore>
          </Save>
          <Save>
            <div
              dangerouslySetInnerHTML={createMarkup(
                `<strong>${saves.magic}</strong>`
              )}
            />
            <SaveScore>
              {characterClasses[classSelection].saves.magic[0]}
            </SaveScore>
          </Save>
        </SavesContainer>
      </SavesAndStatsGrid>
    </div>
  );
};

const SavesAndStatsGrid = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
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
  padding-right: 1rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export default SavesAndStats;
