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
  const [show, setShow] = useState(false);

  const handleItemClick = (item: MockItem) => {
    /**
     * lambda call to update should probably go here
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

  const filteredItems = Object.keys(items).filter(item =>
    items[item].description.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <Dropdown
      className={className}
      onToggle={() => {
        setInputValue("");
        setShow(!show);
      }}
    >
      <Dropdown.Toggle as={CustomToggle} id="add-new-item-dropdown">
        <FontAwesomeIcon
          icon={"plus"}
          size={"sm"}
          style={{ margin: "0 0.5rem" }}
        />
        Add Item
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
              {filteredItems.length === 0 && (
                <NoMatchText>No items match search!</NoMatchText>
              )}
              {filteredItems.map((item, index) => (
                <div key={item}>
                  <Item
                    onClick={() => {
                      handleItemClick(items[item]);
                    }}
                  >
                    {items[item].description}
                  </Item>
                  {filteredItems.length === index + 1 ? null : (
                    <Dropdown.Divider />
                  )}
                </div>
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
  max-height: 100px;
`;

const NoMatchText = styled.div`
  font-weight: 400;
  margin-left: 10px;
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
