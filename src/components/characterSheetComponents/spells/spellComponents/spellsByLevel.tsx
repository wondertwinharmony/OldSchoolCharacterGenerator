import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import { CastingMethod } from "../../../../characterData/classes";
import SpellImpl from "./spell";

interface Props {
  className?: string;
  spellsForLevelKeys: string[];
  spells: any;
  spellLevel?: number;
  spellsKnown: number;
  castingMethod?: CastingMethod;
}

interface ImplProps extends Props {}

const SpellsByLevelImpl: React.SFC<ImplProps> = ({
  className,
  spellsForLevelKeys,
  spells,
  spellLevel,
  spellsKnown,
  castingMethod
}) => {
  const [showSpells, setShowSpells] = useState(true);
  let preparedCount = 0;
  spellsForLevelKeys.forEach((spellKey: string) => {
    preparedCount = preparedCount + spells[spellKey].preparedCount;
  });
  const hasSpellsForThisLevel = spellsForLevelKeys.length > 0;
  return (
    <div className={className}>
      <LevelHeader
        style={hasSpellsForThisLevel ? { cursor: "pointer" } : {}}
        onClick={() => {
          hasSpellsForThisLevel && setShowSpells(!showSpells);
        }}
      >
        <PreparedText>{`0/${spellsKnown}`}</PreparedText>
        <LevelText>{`Level ${spellLevel} Spells`}</LevelText>
        {hasSpellsForThisLevel && (
          <FontAwesomeIcon
            icon={showSpells ? "caret-up" : "caret-down"}
            size="2x"
            style={{ margin: "0 0.5rem" }}
          />
        )}
      </LevelHeader>
      <Divider />
      {showSpells &&
        spellsForLevelKeys.map((spellKey: string) => {
          /**
           * While iterating here we'll want to check a
           * property on each spell that is client state tracked
           * and add them. Then put them in header.
           */
          return (
            <div key={spells[spellKey].name}>
              <SpellImpl
                spellKey={spellKey}
                spell={spells[spellKey]}
                castingMethod={castingMethod}
              />
              <Divider />
            </div>
          );
        })}
    </div>
  );
};

const LevelHeader = styled.div`
  display: flex;
  font-family: "Sancreek", cursive;
  align-items: center;
`;

const PreparedText = styled.div`
  width: 55px;
  margin-left: 10px;
  font-size: 20px;
`;

const LevelText = styled.div`
  font-size: 20px;
  width: 130px;
`;

const Divider = styled.div`
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
`;

export default SpellsByLevelImpl;
