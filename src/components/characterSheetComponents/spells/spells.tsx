import React from "react";
import styled from "styled-components";
import { CastingMethod } from "../../../characterData/classes";
import { Spells } from "../../../characterData/spells";
import AddSpellImpl from "./spellComponents/addSpell";
import SpellsByLevelImpl from "./spellComponents/spellsByLevel";

interface Props {
  className?: string;
  classSelection: string;
  spells: Spells;
  castingMethod?: CastingMethod;
}

interface ImplProps extends Props {}

/**
 * - [] MU vs Divine -> if Divine show all spells all the time?
 * - [x] should levels be collapsible? Makes showing divine ALL
 * the time make more sense
 * - [x] MU level headers determined by levels of known spells
 * - [] add new item only appears for MUs (filters over arcane class' spells,
 * with checkbox next to that toggles including Knave spells in list
 * - [] knave spells have editable level field -> same as slots field but is display only
 * for non-Knave spells --- Knave spells default to empty and spell cannot be
 * added if no level given). Add new item spell when clicked displays name for
 * spell only. "Include non-b/x spells"
 * - [] every spell item has a radio button next to it for memorizing, give this
 * a header
 *
 *
 * - [] add OU player's guide spells to non-Old-School spell list
 */
const SpellsImpl: React.SFC<ImplProps> = ({
  className,
  classSelection,
  castingMethod,
  spells
}) => {
  //   const {
  //     savedCharacterData,
  //     savedCharacterInventory,
  //     setSavedCharacterInventory
  //   } = useContext(AppContext);

  //   if (!savedCharacterData && !savedCharacterInventory) {
  //     setSavedCharacterInventory(inventory);
  //   }

  const spellsByLevel = Object.keys(spells).sort((itemA, itemB) => {
    if (spells[itemA].level < spells[itemB].level) {
      return -1;
    }
    if (spells[itemA].level > spells[itemB].level) {
      return 1;
    }
    // Names equal
    return 0;
  });

  const getSpellsOrganizedByLevel = () => {
    const spellsOrganizedByLevel: any = {};

    for (var i = 0; i < spellsByLevel.length; i++) {
      if (spellsOrganizedByLevel[spells[spellsByLevel[i]].level]) {
        spellsOrganizedByLevel[spells[spellsByLevel[i]].level].push({
          name: spells[spellsByLevel[i]].name,
          description: spells[spellsByLevel[i]].description,
          level: spells[spellsByLevel[i]].level
        });
      } else {
        spellsOrganizedByLevel[spells[spellsByLevel[i]].level] = [];
      }
    }
    return spellsOrganizedByLevel;
  };

  const spellsOrganizedByLevel = getSpellsOrganizedByLevel();

  return (
    <div className={className}>
      {castingMethod === "arcane" && (
        <AddSpellImpl classSelection={classSelection} />
      )}
      <Divider />
      {spellsOrganizedByLevel &&
        Object.keys(
          spellsOrganizedByLevel
        ).map((spellsByLevel: string, index: number) => (
          <SpellsByLevelImpl
            key={spellsByLevel}
            spellsByLevel={spellsOrganizedByLevel[spellsByLevel]}
            spellLevel={index + 1}
            castingMethod={castingMethod}
          />
        ))}
    </div>
  );
};

const Divider = styled.div`
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
`;

export default SpellsImpl;
