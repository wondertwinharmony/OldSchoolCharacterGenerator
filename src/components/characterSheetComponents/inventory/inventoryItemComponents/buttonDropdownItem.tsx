import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import styled from "styled-components";

interface Props {
  className?: string;
  inputValue: string;
  slotValue: string;
  addNewItem: boolean;
  handleItemSubmit: () => void;
  handleItemCancel: () => void;
}

interface ImplProps extends Props {}

const ButtonDropdownItemImpl: React.SFC<ImplProps> = ({
  className,
  inputValue,
  slotValue,
  addNewItem,
  handleItemSubmit,
  handleItemCancel
}) => {
  const disabled = inputValue === "" || parseInt(slotValue) < 0;
  return (
    <ButtonDropdownItem className={className}>
      <ButtonContainer>
        <Button
          onClick={(e: any) => {
            /**
             * If no input value or slot value, we
             * stop event propagation here.
             */
            if (disabled) {
              e.preventDefault();
              e.stopPropagation();
            } else {
              handleItemSubmit();
            }
          }}
          style={{ marginRight: "1rem" }}
          variant={disabled ? "secondary" : "primary"}
          type="submit"
        >
          {addNewItem ? "Add" : "Update Item"}
        </Button>
        <Button
          onClick={() => {
            handleItemCancel();
          }}
          variant="danger"
          type="submit"
        >
          {addNewItem ? "Cancel" : "Delete Item"}
        </Button>
      </ButtonContainer>
    </ButtonDropdownItem>
  );
};

const ButtonContainer = styled.div`
  margin: 10px 10px 0px 10px;
  display: flex;
  justify-content: space-between;
  .btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ButtonDropdownItem = styled(Dropdown.Item)`
  padding: 0px;
  /* override active styling of dropdown item */
  background-color: transparent !important;
`;

export default ButtonDropdownItemImpl;
