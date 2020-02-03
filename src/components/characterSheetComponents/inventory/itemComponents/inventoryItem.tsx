import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import styled from "styled-components";
import { items } from "../../../../characterData/items";
import ButtonDropdownItemImpl from "./buttonDropdownItem";
import InputContainerImpl from "./inputContainer";

interface MockItem {
  description: string;
  slots: string;
}

interface Props {
  className?: string;
  addNewItem: boolean;
  mockInventoryItem?: MockItem;
}

interface ImplProps extends Props {}

const InventoryItemImpl: React.SFC<ImplProps> = ({
  className,
  addNewItem,
  mockInventoryItem
}) => {
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

  const handleItemRemove = () => {
    // setShow(false);
  };

  const filteredItems = Object.keys(items).filter(item =>
    items[item].description.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <Dropdown
      className={className}
      onToggle={() => {
        setInputValue(mockInventoryItem ? mockInventoryItem.description : "");
        setShow(!show);
      }}
    >
      <Dropdown.Toggle
        as={addNewItem ? AddNewItemToggle : UpdateItemToggle}
        id="item-dropdown"
      >
        {addNewItem ? (
          <>
            <FontAwesomeIcon
              icon={"plus"}
              size={"sm"}
              style={{ margin: "0 0.5rem" }}
            />
            Add Item
          </>
        ) : (
          <>
            <FontAwesomeIcon
              icon={!show ? "caret-up" : "caret-down"}
              size="lg"
              style={{ margin: "0 0.5rem" }}
            />
            {mockInventoryItem && mockInventoryItem.description}
          </>
        )}
      </Dropdown.Toggle>

      {show && (
        <DropdownMenu>
          <InputContainerImpl
            inputValue={inputValue}
            setInputValue={setInputValue}
            slotValue={slotValue}
            setSlotValue={setSlotValue}
          />
          <ButtonDropdownItemImpl
            inputValue={inputValue}
            slotValue={slotValue}
            addNewItem={addNewItem}
            handleItemSubmit={handleItemSubmit}
            handleItemCancel={addNewItem ? handleItemCancel : handleItemRemove}
          />
          <Dropdown.Divider />
          {/* iterate over equipment as dropdown.items */}
          {items && (
            <ItemsContainer>
              {filteredItems.length === 0 && (
                <NoMatchText>Nothing matches search!</NoMatchText>
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
        </DropdownMenu>
      )}
    </Dropdown>
  );
};

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const AddNewItemToggle = React.forwardRef<any, any>(
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

const UpdateItemToggle = React.forwardRef<any, any>(
  ({ children, onClick }, ref) => (
    <div
      style={{ cursor: "pointer" }}
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </div>
  )
);

const DropdownMenu = styled(Dropdown.Menu)`
  background-color: ghostwhite;
  width: 100%;
`;

const ItemsContainer = styled.div`
  overflow: scroll;
  max-height: 150px;
`;

const NoMatchText = styled.div`
  font-weight: 400;
  padding: 0.25rem 1.5rem;
`;

const Item = styled.div`
  width: 100%;
  padding: 0.25rem 1.5rem;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    background-color: #dadbdc;
  }
`;

export default InventoryItemImpl;
