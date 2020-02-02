import React from "react";
import styled from "styled-components";
import { Items } from "../../../characterData/items";
import AddNewItemImpl from "./addNewItem";
import InventoryItemImpl from "./inventoryItem";

interface Props {
  className?: string;
}

interface ImplProps extends Props {}

const mockInventory: Items = {
  potion: { description: "Potion", slots: 1 },
  gem: { description: "Gem", slots: 1 },
  plateMail: { description: "Plate Mail", slots: 3 },
  shortBow: { description: "Short Bow", slots: 2 }
};

const EquipmentImpl: React.SFC<ImplProps> = ({ className }) => {
  return (
    <div className={className}>
      <AddNewItemImpl />
      {mockInventory &&
        Object.keys(mockInventory).map(mockInventoryItem => (
          <InventoryItemImpl
            key={mockInventoryItem}
            mockInventoryItem={mockInventory[mockInventoryItem]}
          />
        ))}
    </div>
  );
};

const StyledEquipmentImpl = styled(EquipmentImpl)`
  & > div {
    padding: 0.5rem;
  }
`;

export default StyledEquipmentImpl;
