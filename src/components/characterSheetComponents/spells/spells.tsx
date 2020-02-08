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

// [
//     [1, 0, 0, 0, 0, 0],
//     [2, 0, 0, 0, 0, 0],
//     [2, 1, 0, 0, 0, 0],
//     [2, 2, 0, 0, 0, 0],
//     [2, 2, 1, 0, 0, 0],
//     [2, 2, 2, 0, 0, 0],
//     [3, 2, 2, 1, 0, 0],
//     [3, 3, 2, 2, 0, 0],
//     [3, 3, 3, 2, 1, 0],
//     [3, 3, 3, 3, 2, 0],
//     [4, 3, 3, 3, 2, 1],
//     [4, 4, 3, 3, 3, 2],
//     [4, 4, 4, 3, 3, 3],
//     [4, 4, 4, 4, 3, 3]
//   ],

interface ImplProps extends Props {}

/**
 * Next steps:
 * - [] mockup cleric data to test Drow and Cleric
 * - [] use the spellsMatrix to iterate over spell headers - and whether
 * to show the spell segment (simple do a level check for the position in the
 * array, 0 means its not there, this will work for even half-elf eg at
 * level 3 they get their first level one spell, therefore the segment should
 * always just check presence of level one spell)
 * - [] implement HARDCODED FOR NOW level tracking using matrix above for
 * classes to determine how many spell headers to display
 * as well as number of spells available to prepare/level
 * - [] mockup magic user data to test same as previous
 * - [] MU vs Divine -> if Divine should show all spells all the time
 *
 * - [x] should levels be collapsible? Makes showing divine ALL
 * the time make more sense
 * - [x] MU level headers determined by levels of known spells
 * - [x] add new item only appears for MUs (filters over arcane class' spells,
 * with checkbox next to that toggles including Knave spells in list
 * - [x] knave spells have editable level field -> same as slots field but is display only
 * for non-Knave spells --- Knave spells default to empty and spell cannot be
 * added if no level given). Add new item spell when clicked displays name for
 * spell only. "Include non-b/x spells"
 * - [x] every spell item has a radio button next to it for memorizing, give this
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
        spellsOrganizedByLevel[spells[spellsByLevel[i]].level] = [
          {
            name: spells[spellsByLevel[i]].name,
            description: spells[spellsByLevel[i]].description,
            level: spells[spellsByLevel[i]].level
          }
        ];
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
