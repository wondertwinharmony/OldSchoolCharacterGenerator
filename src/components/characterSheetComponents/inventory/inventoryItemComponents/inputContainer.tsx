import React from "react";
import { FormControl } from "react-bootstrap";
import styled from "styled-components";

interface Props {
  className?: string;
  inputValue: string;
  setInputValue: (value: string) => void;
  slotValue: string;
  setSlotValue: (value: string) => void;
}

interface ImplProps extends Props {}

const InputContainerImpl: React.SFC<ImplProps> = ({
  className,
  inputValue,
  setInputValue,
  slotValue,
  setSlotValue
}) => {
  return (
    <InputContainer className={className}>
      <InputText>Item</InputText>
      <FormControl
        autoFocus
        placeholder="Filter or add custom..."
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
      <InputText>Slots</InputText>
      <FormControl
        style={{ width: "60px" }}
        onClick={(e: any) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onChange={(e: any) => {
          e.preventDefault();
          e.stopPropagation();
          setSlotValue(e.target.value);
        }}
        value={slotValue}
        type="number"
      />
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

export default InputContainerImpl;
