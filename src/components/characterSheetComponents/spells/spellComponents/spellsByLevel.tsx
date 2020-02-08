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
      <div onClick={() => setShowSpells(!showSpells)}>
        {`Level ${spellLevel} Spells`}
        <FontAwesomeIcon
          icon={showSpells ? "caret-up" : "caret-down"}
          size="lg"
          style={{ margin: "0 0.5rem" }}
        />
      </div>
      <Divider />
      {showSpells &&
        spellsByLevel.map((spellByLevel: any) => {
          return (
            <div key={spellByLevel.name}>
              <SpellImpl
                addNewItem={false}
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

const Divider = styled.div`
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
`;

export default SpellsByLevelImpl;
