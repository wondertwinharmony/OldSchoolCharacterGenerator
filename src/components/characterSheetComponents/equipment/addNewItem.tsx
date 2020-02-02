import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Dropdown, FormControl } from "react-bootstrap";
import styled from "styled-components";
import { items } from "../../../characterData/items";

interface MockItem {
  description: string;
  slots: number;
}

interface Props {
  className?: string;
}

interface ImplProps extends Props {}

const AddNewItemImpl: React.SFC<ImplProps> = ({ className }) => {
  const [inputValue, setInputValue] = useState("");
  const [slotValue, setSlotValue] = useState("1");

  /**
   * Clicking on another inventory item while one is open
   * causes bad behavior - multiple can be opened. Need to
   * address this somehow.
   */
  const [show, setShow] = useState(false);

  const handleItemClick = (item: MockItem) => {
    /**
     * lambda call to update should probably go here
     * - [] needs hook state to track loading of new equipment,
     * with spinner while resolving updating of equipment
     *
     * ??? how to handle custom input, I suppose it just won't be
     * on equipment list for dropdown menu items => Need a button
     * to trigger this click next to the toggle probably which will
     * close dropdown and make call to lambda
     */
    /**
     * NOTE!!!
     * Clicking on item, instead of submitting, it would
     * probably be better UX experience to populate the
     * inputValue with it, then someone can update a sword
     * for example to say +2 without having to write out a
     * bunch.
     */
    setInputValue(item.description);
  };

  const handleItemSubmit = () => {
    console.log("add new item click");
    // setShow(false);
  };

  const handleItemCancel = () => {
    // setShow(false);
  };

  return (
    <Dropdown
      className={className}
      onToggle={() => {
        setInputValue("");
        setShow(!show);
      }}
    >
      <Dropdown.Toggle as={CustomToggle} id="equipment-dropdown">
        Add Item
        <FontAwesomeIcon
          icon={!show ? "caret-up" : "caret-down"}
          size="lg"
          style={{ margin: "0 0.5rem" }}
        />
      </Dropdown.Toggle>

      {show && (
        <Dropdown.Menu>
          <InputContainer>
            <InputText>Item</InputText>
            <FormControl
              style={{ marginRight: "1rem" }}
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
              style={{ width: "40px", marginRight: "1rem" }}
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
            />
          </InputContainer>
          <ButtonItem>
            <ButtonContainer>
              <Button
                onClick={(e: any) => {
                  /**
                   * If no input value or slot value, we
                   * stop event propagation here.
                   */
                  if (inputValue === "" || slotValue === "") {
                    e.preventDefault();
                    e.stopPropagation();
                  } else {
                    handleItemSubmit();
                  }
                }}
                style={{ marginRight: "1rem" }}
                variant={
                  inputValue === "" || slotValue === ""
                    ? "secondary"
                    : "primary"
                }
                type="submit"
              >
                Add
              </Button>
              <Button
                onClick={() => {
                  handleItemCancel();
                }}
                variant="danger"
                type="submit"
              >
                Cancel
              </Button>
            </ButtonContainer>
          </ButtonItem>
          <Dropdown.Divider />
          {/* iterate over equipment as dropdown.items */}
          {items && (
            <ItemsContainer>
              {Object.keys(items)
                .filter(item =>
                  items[item].description
                    .toLowerCase()
                    .includes(inputValue.toLowerCase())
                )
                .map(item => (
                  <Item
                    key={item}
                    onClick={() => {
                      handleItemClick(items[item]);
                    }}
                  >
                    {items[item].description}
                  </Item>
                ))}
            </ItemsContainer>
          )}
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
};

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef<any, any>(
  ({ children, onClick }, ref) => (
    <Button
      ref={ref}
      onClick={(e: any) => {
        e.preventDefault();
        onClick(e);
      }}
      variant="info"
    >
      {children}
    </Button>
  )
);

const InputContainer = styled.div`
  margin: 0px 10px;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-gap: 10px;
`;

const InputText = styled.div`
  align-self: center;
`;

const ButtonContainer = styled.div`
  margin: 10px 10px 0px 10px;
  display: flex;
  justify-content: space-between;
  .btn {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ButtonItem = styled(Dropdown.Item)`
  padding: 0px;
  /* override active styling of dropdown item */
  background-color: transparent !important;
`;

const ItemsContainer = styled.div`
  overflow: scroll;
  height: 100px;
`;

const Item = styled.div`
  width: 100%;
  padding: 0.25rem 1.5rem;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    background-color: #f8f9fa;
  }
`;

export default AddNewItemImpl;
