import { sampleSize } from "lodash";
import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { gear } from "./characterData/gear";
import { checkContainsDemihumans } from "./utils/checkContainsDemihumans";
import { getAbilityScores } from "./utils/getAbilityScores";
import { getClassOptionsToDisplay } from "./utils/getClassOptionsToDisplay";
import { getClassPrimeRequisites } from "./utils/getClassPrimeRequisites";
import { getExperienceAdjustment } from "./utils/getExperienceAdjustment";
// import { getEquipment } from "./utils/getEquipment";
// import { getTraits } from "./utils/getTraits";

interface Props {
  className?: string;
}

interface ImplProps extends Props {}

const AppImpl: React.SFC<ImplProps> = ({ className }) => {
  const abilityScores = getAbilityScores();
  const classOptions = getClassOptionsToDisplay(abilityScores);
  return (
    <div className={className}>
      <AbilityScoresContainer>
        <AbilityScore>STR</AbilityScore>
        <AbilityScore>DEX</AbilityScore>
        <AbilityScore>CON</AbilityScore>
        <AbilityScore>INT</AbilityScore>
        <AbilityScore>WIS</AbilityScore>
        <AbilityScore>CHA</AbilityScore>
      </AbilityScoresContainer>
      <AbilityScoresContainer>
        {abilityScores.map((abilityScore, index) => (
          <AbilityScore key={index}>{abilityScore}</AbilityScore>
        ))}
      </AbilityScoresContainer>
      <ClassButtonsContainer>
        {checkContainsDemihumans(classOptions) && "b/x you silly"}
        {Object.keys(classOptions).map(classOptionKey => (
          <ClassOptionContainer key={classOptionKey}>
            <ButtonContainer>
              <ClassButton variant="outline-secondary">
                {classOptions[classOptionKey]}
              </ClassButton>
            </ButtonContainer>
            <ClassPrimeRequisites>
              {getClassPrimeRequisites(classOptionKey)}
              {getExperienceAdjustment(
                abilityScores,
                getClassPrimeRequisites(classOptionKey)
              )}
            </ClassPrimeRequisites>
          </ClassOptionContainer>
        ))}
      </ClassButtonsContainer>
      <div>{`Two random items: ${sampleSize(gear, 2)}`}</div>
    </div>
  );
};

const AbilityScore = styled.div`
  color: white;
  font-size: 1rem;
  background-color: black;
  border-right: 1px solid white;
  border-left: 1px solid white;
  padding: 0.5rem;
  width: 3rem;
  text-align: center;
`;

const AbilityScoresContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ClassButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

const ButtonContainer = styled.div`
  padding: 0.75rem;
`;

const ClassOptionContainer = styled.div``;

const ClassButton = styled(Button)``;

const ClassPrimeRequisites = styled.div``;

const StyledApp = styled(AppImpl)`
  .btn {
    width: 100%;
  }
  /* display: flex;
  justify-content: center; */
`;

export default StyledApp;
