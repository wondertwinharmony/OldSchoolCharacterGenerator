import React from 'react';
import styled from 'styled-components';
import { createMarkup } from '../utils/createMarkup';
import { characterClasses } from '../characterData/classes';
import { characterSkillsLookUp } from '../utils/characterSkillsLookUp';

interface Props {
    classSelection: string;
    isSkillVisible: string;
    skillsTable?: any;
}

const CharacterSkills: React.SFC<Props> = ({classSelection, isSkillVisible, skillsTable}) => {
    const lookup = characterSkillsLookUp(classSelection);
    
    return (
        <SkillsContainer>
            {isSkillVisible && skillsTable}
            {isSkillVisible && (classSelection === 'ranger') ? 
                    <Skill dangerouslySetInnerHTML={createMarkup(characterClasses[classSelection][lookup]!)}/> :
                    <Skill dangerouslySetInnerHTML={createMarkup(characterClasses[classSelection][lookup]!.join("\n"))}/>
            }
        </SkillsContainer>
    )
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
