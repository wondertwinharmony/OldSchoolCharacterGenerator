import React from "react";
import styled from "styled-components";
import { characterClasses } from "../../characterData/classes";

interface Props {
  characterName: string;
  classSelection: string;
}

/**
 * Component for Character Name and Class Title.
 */
const CharacterNameAndClass: React.SFC<Props> = ({
  characterName,
  classSelection
}) => {
  return (
    <div>
      <CharacterName>{characterName}</CharacterName>
      <ClassTitle>
        {`Level 1 ${characterClasses[classSelection].name}`}
        {/* <FormControl
          style={{ width: "60px" }}
          onClick={(e: any) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onChange={(e: any) => {
            e.preventDefault();
            e.stopPropagation();
            // setSlotValue(e.target.value);
          }}
          // value={slotValue}
          type="number"
        /> */}
      </ClassTitle>
    </div>
  );
};

const CharacterName = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Sancreek", cursive;
  font-size: 2rem;
`;

const ClassTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  border-bottom: 1px solid black;
`;

export default CharacterNameAndClass;
