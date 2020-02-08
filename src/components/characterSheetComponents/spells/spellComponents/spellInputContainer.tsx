import React, { useContext } from "react";
import { FormControl } from "react-bootstrap";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styled from "styled-components";
import AppContext from "../../../../AppContext";

interface Props {
  className?: string;
  inputValue: string;
  setInputValue: (value: string) => void;
  levelValue: string;
  setLevelValue: (value: string) => void;
  levelDisabled: boolean;
}

interface ImplProps extends Props {}

const SpellInputContainerImpl: React.SFC<ImplProps> = ({
  className,
  inputValue,
  setInputValue,
  levelValue,
  setLevelValue,
  levelDisabled
}) => {
  const {
    nonTraditionalSpells,
    setNonTraditionalSpells
    // savedCharacterInventory,
    // setSavedCharacterInventory
  } = useContext(AppContext);
  return (
    <InputContainer className={className}>
      <InputText>Item</InputText>
      <FormControl
        autoFocus
        placeholder="Filter..."
        onClick={(e: any) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onChange={(e: any) => {
          e.preventDefault();
          e.stopPropagation();
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
      <InputText>Level</InputText>
      <FormControl
        style={{ width: "60px" }}
        onClick={(e: any) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onChange={(e: any) => {
          e.preventDefault();
          e.stopPropagation();
          setLevelValue(e.target.value);
        }}
        disabled={levelDisabled}
        value={levelValue}
        type="number"
      />
      <div>
        {nonTraditionalSpells ? (
          <MdCheckBox
            style={{ cursor: "pointer" }}
            onClick={() => setNonTraditionalSpells(false)}
            size="2.5em"
          />
        ) : (
          <MdCheckBoxOutlineBlank
            style={{ cursor: "pointer" }}
            onClick={() => setNonTraditionalSpells(true)}
            size="2.5em"
          />
        )}
      </div>
      <NonStandardText>Include Non-Traditional Spells</NonStandardText>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  margin: 0px 10px;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-gap: 10px;
`;

const InputText = styled.div`
  align-self: center;
`;

const NonStandardText = styled.div`
  display: flex;
  align-items: center;
`;

export default SpellInputContainerImpl;
