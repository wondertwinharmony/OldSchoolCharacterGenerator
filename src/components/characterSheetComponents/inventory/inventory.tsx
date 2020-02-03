import React from "react";
import shortid from "shortid";
import styled from "styled-components";
import { Items } from "../../../characterData/items";
import InventoryItemImpl from "./itemComponents/inventoryItem";

interface Props {
  className?: string;
}

interface ImplProps extends Props {}

const mockInventory: Items = {
  leatherArmor: {
    description: "Leather Armor AC 12",
    slots: "1"
  },
  cudgel: {
    description: "Cudgel 1d4 (Blunt, Melee)",
    slots: "1"
  },
  dagger: {
    description: "Dagger 1d4 (Melee, Missile 5’–10’ / 11’–20’ / 21’–30’)",
    slots: "1"
  },
  buckler: {
    description:
      "Buckler (+1 AC melee only. May be used when wielding two weapons, if doing so may either attack with off-hand or gain benefit of shield.)",
    slots: "1"
  },
  potion: { description: "Potion", slots: "1" }
};

const InventoryImpl: React.SFC<ImplProps> = ({ className }) => {
  console.log(shortid.generate());
  return (
    <div className={className}>
      <InventoryItemImpl addNewItem />
      <Divider />
      {mockInventory &&
        Object.keys(mockInventory).map(mockInventoryItem => (
          <div key={mockInventoryItem}>
            <InventoryItemImpl
              addNewItem={false}
              mockInventoryItem={mockInventory[mockInventoryItem]}
            />
            <Divider />
          </div>
        ))}
    </div>
  );
};

const Divider = styled.div`
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
`;

export default InventoryImpl;
