import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import styled from "styled-components";

interface Props {
  className?: string;
  disabled: boolean;
  handleSubmit: () => void;
  //   handleCancel: () => void;
}

interface ImplProps extends Props {}

const AddSpellButtonsImpl: React.SFC<ImplProps> = ({
  className,
  disabled,
  handleSubmit
  //   handleCancel
}) => {
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
              handleSubmit();
            }
          }}
          style={{ marginRight: "1rem" }}
          variant={disabled ? "secondary" : "primary"}
          type="submit"
        >
          Add Spell
        </Button>
        <Button onClick={() => {}} variant="danger" type="submit">
          Cancel
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

export default AddSpellButtonsImpl;
