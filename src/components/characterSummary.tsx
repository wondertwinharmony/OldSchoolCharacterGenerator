import React, { useState } from "react";
import { FaInfo } from "react-icons/fa";
import styled from "styled-components";
import { characterClasses } from "../characterData/classes";
import { createMarkup } from "../utils/createMarkup";

interface Props {
  className?: string;
  classOption: string;
}

interface ImplProps extends Props {}

const CharacterSummaryImpl: React.SFC<ImplProps> = ({
  className,
  classOption
}) => {
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  return (
    <div
      className={className}
      onClick={() => {
        setIsSummaryVisible(!isSummaryVisible);
      }}
      style={{ border: `${isSummaryVisible ? "1px dashed black" : ""}` }}
    >
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          padding: `${isSummaryVisible ? "0.25rem" : ""}`
        }}
      >
        <FaInfo size={"1.25em"} style={{ marginRight: "0.5rem" }} />
        {!isSummaryVisible && "Show Class Info"}
        {isSummaryVisible && "Hide Class Info"}
      </div>
      {isSummaryVisible && (
        <div style={{ marginRight: "auto", padding: "0.25rem" }}>
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>Hit Dice:</strong> ${characterClasses[classOption].hitDice}`
            )}
          />
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>Requisite:</strong> ${characterClasses[classOption].primeRequisite}`
            )}
          />
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>XP to 2nd Level:</strong> ${characterClasses[classOption].xpToSecondLevel}`
            )}
          />
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>Weapons:</strong> ${characterClasses[classOption].allowedWeapons}`
            )}
          />
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>Armor:</strong> ${characterClasses[classOption].allowedArmor}`
            )}
          />
          <div
            dangerouslySetInnerHTML={createMarkup(
              `<strong>Abilities:</strong> ${characterClasses[classOption].abilitiesSummary}`
            )}
          />
        </div>
      )}
    </div>
  );
};

const StyledCharacterSummary = styled(CharacterSummaryImpl)`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0.75rem;
`;

export default StyledCharacterSummary;
