import React from "react";
import shortid from "shortid";
import styled from "styled-components";
import { CastingMethod } from "../../../characterData/classes";
import { Spells } from "../../../characterData/spells";
import AddSpellImpl from "./spellComponents/addSpell";
import SpellsByLevelImpl from "./spellComponents/spellsByLevel";

interface Props {
  className?: string;
  classSelection: string;
  spells: Spells;
  spellsMatrix?: number[];
  castingMethod?: CastingMethod;
  characterLevel: number;
}

interface ImplProps extends Props {}

/**
 * Next steps:
 * - [x] mockup cleric data to test Drow and Cleric
 * - [x] technicall drow start with light at level one,
 * this changes to be all cleric spells as they level - don't care, just yell at player
 * - [x] use the spellsMatrix to iterate over spell headers - and whether
 * to show the spell segment (simple do a level check for the position in the
 * array, 0 means its not there, this will work for even half-elf eg at
 * level 3 they get their first level one spell, therefore the segment should
 * always just check presence of level one spell)
 * - [x] implement HARDCODED FOR NOW level tracking using matrix above for
 * classes to determine how many spell headers to display
 * as well as number of spells available to prepare/level
 * - [x] mockup magic user data to test same as previous
 * - [] handle permalink of set client state for spells -> this will NOT push
 * arcane spells yet, but will store both arcane and divine user spells in a client
 * side object (we will handle push later). Once that is done then we will update number prepared
 * on the spells in that list.
 * - [] figure out why non trad spells checkbox is misbehaving and closing toggle
 * now, it wasn't before -> possibly occurring because we are updaing app context
 * instead of local state?
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
  characterLevel,
  spells,
  spellsMatrix
}) => {
  if (!spellsMatrix) return null;
  //   const {
  //     savedCharacterData,
  //     savedCharacterInventory,
  //     setSavedCharacterInventory
  //   } = useContext(AppContext);

  //   if (!savedCharacterData && !savedCharacterInventory) {
  //     setSavedCharacterInventory(inventory);
  //   }

  const MIN_SPELLS_KNOWN_REQUIRED = 1;
  return (
    <div className={className}>
      {castingMethod === "arcane" && (
        <AddSpellImpl classSelection={classSelection} />
      )}
      {classSelection === "drow" && characterLevel === 1 && (
        <DrowSpellText>
          At 1st level, a drow may only pray for the "Light (Darkness)" spell,
          but from 2nd level, the character may pray for any spell on the spell
          list.
        </DrowSpellText>
      )}
      <Divider />
      {spellsMatrix.map((spellsKnown: number, index: number) => {
        const spellsForLevelKeys = Object.keys(spells).filter(
          spell => parseInt(spells[spell].level) === index + 1
        );
        return spellsKnown >= MIN_SPELLS_KNOWN_REQUIRED ? (
          <SpellsByLevelImpl
            key={shortid.generate()}
            spellsForLevelKeys={spellsForLevelKeys}
            spells={spells}
            spellLevel={index + 1}
            spellsKnown={spellsKnown}
            castingMethod={castingMethod}
          />
        ) : null;
      })}
    </div>
  );
};

const DrowSpellText = styled.div`
  color: red;
`;

const Divider = styled.div`
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
`;

export default SpellsImpl;
