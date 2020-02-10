import React, { useContext } from "react";
import shortid from "shortid";
import styled from "styled-components";
import AppContext from "../../../AppContext";
import { CastingMethod } from "../../../characterData/classes";
import { Spells } from "../../../characterData/spells";
import AddSpellImpl from "./spellComponents/addSpell";
import SpellsByLevelImpl from "./spellComponents/spellsByLevel";

interface Props {
  className?: string;
  classSelection: string;
  spells?: Spells;
  spellsMatrix: number[];
  castingMethod?: CastingMethod;
  characterLevel: number;
  levelHeadersVisible: { [key: string]: boolean };
  setLevelHeadersVisible: (value: { [key: string]: boolean }) => void;
}

interface ImplProps extends Props {}

/**
 * Next steps:
 * - [] MOAR spell data
 * - [] add OU player's guide spells to non-Old-School spell list
 */
const SpellsImpl: React.SFC<ImplProps> = ({
  className,
  classSelection,
  castingMethod,
  characterLevel,
  spells,
  spellsMatrix,
  levelHeadersVisible,
  setLevelHeadersVisible
}) => {
  const {
    savedCharacterData,
    savedCharacterSpells,
    setSavedCharacterSpells
  } = useContext(AppContext);
  if (!spellsMatrix || !spells) return null;
  if (!savedCharacterSpells) {
    setSavedCharacterSpells(spells);
  }

  return (
    <div className={className}>
      {/**
       * We will never™️ submit divine spell caster
       * lists to db, since the spells available to
       * them never fluctuate like a class with
       * a spellbook will.
       */}
      {castingMethod === "arcane" && savedCharacterData && (
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
        return spellsKnown >= 1 ? (
          <SpellsByLevelImpl
            key={shortid.generate()}
            spellsForLevelKeys={spellsForLevelKeys}
            spells={spells}
            spellLevel={index + 1}
            spellsKnown={spellsKnown}
            castingMethod={castingMethod}
            levelHeadersVisible={levelHeadersVisible}
            setLevelHeadersVisible={setLevelHeadersVisible}
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
