import React from "react";
import styled from "styled-components";
import { characterClasses } from "../../characterData/classes";
import { characterSkillsLookUp } from "../../utils/characterSkillsLookUp";
import { createMarkup } from "../../utils/createMarkup";

interface Props {
  classSelection: string;
  skillsTable?: any;
}

/**
 * Generic component for Character skills including Ranger Tracking and Wild Surges.
 * It contains any associated Table imgs and the skills string.
 */
const CharacterSkills: React.SFC<Props> = ({ classSelection, skillsTable }) => {
  const skillsString = characterSkillsLookUp(classSelection);

  return (
    <SkillsContainer>
      {skillsTable}
      {skillsTable && classSelection === "ranger" ? (
        <Skill
          dangerouslySetInnerHTML={createMarkup(
            characterClasses[classSelection][skillsString]!
          )}
        />
      ) : (
        <Skill
          dangerouslySetInnerHTML={createMarkup(
            characterClasses[classSelection][skillsString]!.join("\n")
          )}
        />
      )}
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div`
  display: block;
  text-align: center;
  padding: 0.5rem;
`;

const Skill = styled.div`
  padding: 0.5rem;
  white-space: pre-line;
`;

export default CharacterSkills;
