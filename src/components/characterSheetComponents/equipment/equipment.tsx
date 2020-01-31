import React, { useState } from "react";
import { Button, Dropdown, FormControl } from "react-bootstrap";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import styled from "styled-components";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
// const CustomToggle = React.forwardRef<any, any>(
//   ({ children, onClick }, ref) => {
//     return (
//       <a
//         href="https://www.oldschoolknave.surge.sh"
//         ref={ref}
//         onClick={e => {
//           e.preventDefault();
//           onClick(e);
//         }}
//       >
//         {children}
//         {/* up/down arrow svg here */}
//       </a>
//     );
//   }
// );

interface Props {
  className?: string;
}

interface ImplProps extends Props {}

const EquipmentImpl: React.SFC<ImplProps> = ({ className }) => {
  const [inputValue, setInputValue] = useState("");
  const [slotValue, setSlotValue] = useState("1");

  /**
   * Clicking on another inventory item while one is open
   * causes bad behavior - multiple can be opened. Need to
   * address this somehow.
   */
  const [show, setShow] = useState(false);

  const handleItemClick = (item: Item, parentItem: Item) => {
    /**
     * NOTE!!!
     * - [] Need way to add items even if there are none
     * already present! Maybe just display a toggle always
     * that says Add Item?
     */

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
    console.log("item click: ", item, " and parent item: ", parentItem);
  };

  const handleItemSubmit = () => {
    // setShow(false);
  };

  const handleItemRemove = () => {
    // setShow(false);
  };

  return (
    <div className={className}>
      {mockInventory &&
        Object.keys(mockInventory).map(mockInventoryItem => (
          <Dropdown
            drop="down"
            className={className}
            key={mockInventoryItem}
            onToggle={() => {
              setInputValue("");
              setShow(!show);
            }}
          >
            <Dropdown.Toggle id="equipment-dropdown">
              {mockInventory[mockInventoryItem].name}
            </Dropdown.Toggle>

            {show && (
              <Dropdown.Menu>
                {/* <Dropdown.Item active={false} eventKey="0"> */}
                <ControlContainer>
                  <FormControl
                    style={{ marginRight: "1rem" }}
                    autoFocus
                    // className="mx-3 my-2 w-auto"
                    placeholder="Filter or add item..."
                    onClick={(e: any) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onChange={(e: any) => {
                      console.log(e, e.target.value);
                      e.preventDefault();
                      e.stopPropagation();
                      setInputValue(e.target.value);
                    }}
                    value={inputValue}
                  />
                  <FormControl
                    style={{ width: "40px", marginRight: "1rem" }}
                    //   className="mx-3 my-2 w-auto"
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
                </ControlContainer>
                <Dropdown.Item>
                  <ControlContainer>
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
                      Add Item <AiOutlineCheckCircle />
                    </Button>
                    <Button
                      onClick={() => {
                        handleItemRemove();
                      }}
                      style={{ marginRight: "1rem" }}
                      variant="danger"
                      type="submit"
                    >
                      Delete Item <AiOutlineCloseCircle />
                    </Button>
                  </ControlContainer>
                </Dropdown.Item>
                <Dropdown.Divider />
                {/* </Dropdown.Item> */}
                {/* iterate over equipment as dropdown.items */}
                {mockItems &&
                  Object.keys(mockItems)
                    .filter(item =>
                      mockItems[item].name
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                    )
                    .map(item => (
                      <Dropdown.Item
                        key={item}
                        eventKey="1"
                        onClick={() =>
                          handleItemClick(
                            mockItems[item],
                            mockInventory[mockInventoryItem]
                          )
                        }
                        active={false}
                      >
                        {mockItems[item].name}
                      </Dropdown.Item>
                    ))}
              </Dropdown.Menu>
            )}
          </Dropdown>
        ))}
    </div>
  );
};

const ControlContainer = styled.div`
  display: flex;
`;

interface Item {
  name: string;
  slots: number;
}

interface MockItems {
  [key: string]: { name: string; slots: number };
}

const mockItems: MockItems = {
  sword: { name: "Sword", slots: 2 },
  shortSword: { name: "Short Sword", slots: 2 },
  dagger: { name: "Dagger", slots: 1 },
  shield: { name: "Shield", slots: 1 }
};

const mockInventory: MockItems = {
  potion: { name: "Potion", slots: 1 },
  gem: { name: "Gem", slots: 1 },
  plateMail: { name: "Plate Mail", slots: 3 },
  shortBow: { name: "Short Bow", slots: 2 }
};

export default EquipmentImpl;
