import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import shortid from "shortid";
import styled from "styled-components";
import { put } from "../../../../api/put";
import AppContext from "../../../../AppContext";
import { items } from "../../../../characterData/items";
import ButtonDropdownItemImpl from "./buttonDropdownItem";
import InputContainerImpl from "./inputContainer";

interface Item {
  description: string;
  slots: string;
}

interface Props {
  className?: string;
  addNewItem: boolean;
  inventoryItem?: Item;
  inventoryItemKey?: string;
}

interface ImplProps extends Props {}

const InventoryItemImpl: React.SFC<ImplProps> = ({
  className,
  addNewItem,
  inventoryItem,
  inventoryItemKey
}) => {
  const homeURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://oldschoolknave.surge.sh";
  const URL = window.location.href;
  const characterId = URL.replace(homeURL.concat("/permalinked/"), "");

  const {
    savedCharacterData,
    savedCharacterInventory,
    setSavedCharacterInventory
  } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");
  const [slotValue, setSlotValue] = useState("1");
  const [show, setShow] = useState(false);

  const handleItemClick = (item: Item) => {
    setInputValue(item.description);
    setSlotValue(item.slots);
  };

  const handleItemSubmit = () => {
    const itemId = shortid.generate();
    setSavedCharacterInventory({
      ...savedCharacterInventory,
      [itemId]: { description: inputValue, slots: slotValue }
    });
    const data = {
      characterId,
      inventory: {
        ...savedCharacterInventory,
        [itemId]: { description: inputValue, slots: slotValue }
      },
      httpMethod: "PUT"
    };

    put(characterId, data).catch(err => alert(err));
  };

  const handleItemUpdate = () => {
    if (inventoryItem && inventoryItemKey) {
      setSavedCharacterInventory({
        ...savedCharacterInventory,
        [inventoryItemKey]: { description: inputValue, slots: slotValue }
      });

      const data = {
        characterId,
        inventory: {
          ...savedCharacterInventory,
          [inventoryItemKey]: { description: inputValue, slots: slotValue }
        },
        httpMethod: "PUT"
      };

      put(characterId, data).catch(err => alert(err));
    }
  };

  const handleItemRemove = () => {
    if (inventoryItem && inventoryItemKey && savedCharacterInventory) {
      /**
       * Using es7 obj spread to omit a property.
       * @see https://github.com/airbnb/javascript/blob/master/README.md#objects--rest-spread
       */
      const {
        [inventoryItemKey]: inventoryItem,
        ...updatedInventory
      } = savedCharacterInventory;
      setSavedCharacterInventory(updatedInventory);

      const data = {
        characterId,
        inventory: updatedInventory,
        httpMethod: "PUT"
      };

      put(characterId, data).catch(err => alert(err));
    }
  };

  const filteredAndSortedItems = Object.keys(items)
    .filter(item =>
      items[item].description.toLowerCase().includes(inputValue.toLowerCase())
    )
    .sort((itemA, itemB) => {
      if (items[itemA].description < items[itemB].description) {
        return -1;
      }
      if (items[itemA].description > items[itemB].description) {
        return 1;
      }
      // Names equal
      return 0;
    });

  return (
    <Dropdown
      className={className}
      onToggle={() => {
        if (savedCharacterData) {
          setInputValue(inventoryItem ? inventoryItem.description : "");
          setSlotValue(inventoryItem ? inventoryItem.slots : "1");
          setShow(!show);
        }
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
            {savedCharacterData && (
              <FontAwesomeIcon
                icon={!show ? "caret-up" : "caret-down"}
                size="lg"
                style={{ margin: "0 0.5rem" }}
              />
            )}
            {inventoryItem && inventoryItem.description}
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
            handleItemSubmit={addNewItem ? handleItemSubmit : handleItemUpdate}
            handleItemCancel={addNewItem ? () => {} : handleItemRemove}
          />
          <Dropdown.Divider />
          {/* iterate over equipment as dropdown.items */}
          {items && (
            <ItemsContainer>
              {filteredAndSortedItems.length === 0 && (
                <NoMatchText>Nothing matches search!</NoMatchText>
              )}
              {filteredAndSortedItems.map((item, index) => (
                <div key={item}>
                  <Item
                    onClick={() => {
                      handleItemClick(items[item]);
                    }}
                  >
                    {items[item].description}
                  </Item>
                  {filteredAndSortedItems.length === index + 1 ? null : (
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
  ({ children, onClick }, ref) => {
    const { savedCharacterData } = useContext(AppContext);
    return (
      <div
        style={savedCharacterData ? { cursor: "pointer" } : {}}
        ref={ref}
        onClick={e => {
          e.preventDefault();
          onClick(e);
        }}
      >
        {children}
      </div>
    );
  }
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
