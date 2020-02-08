import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import { CastingMethod } from "../../../../characterData/classes";
import SpellImpl from "./spell";

interface Props {
  className?: string;
  spellsByLevel: any;
  spellLevel?: number;
  castingMethod?: CastingMethod;
}

interface ImplProps extends Props {}

const SpellsByLevelImpl: React.SFC<ImplProps> = ({
  className,
  spellsByLevel,
  spellLevel,
  castingMethod
}) => {
  const [showSpells, setShowSpells] = useState(true);
  return (
    <div className={className}>
      <LevelHeader onClick={() => setShowSpells(!showSpells)}>
        <PreparedText>{`0/3`}</PreparedText>
        <LevelText>{`Level ${spellLevel} Spells`}</LevelText>
        <FontAwesomeIcon
          icon={showSpells ? "caret-up" : "caret-down"}
          size="2x"
          style={{ margin: "0 0.5rem" }}
        />
      </LevelHeader>
      <Divider />
      {showSpells &&
        spellsByLevel.map((spellByLevel: any) => {
          /**
           * While iterating here we'll want to check a
           * property on each spell that is client state tracked
           * and add them. Then put them in header.
           */
          return (
            <div key={spellByLevel.name}>
              <SpellImpl
                spellKey={spellByLevel}
                spell={spellByLevel}
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
  cursor: pointer;
`;

const PreparedText = styled.div`
  width: 55px;
  margin-left: 10px;
  font-size: 20px;
`;

const LevelText = styled.div`
  font-size: 20px;
  width: 120px;
`;

const Divider = styled.div`
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
`;

export default SpellsByLevelImpl;
