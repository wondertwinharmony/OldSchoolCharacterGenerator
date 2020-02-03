import React from "react";
import styled from "styled-components";
import { Items } from "../../../characterData/items";
import InventoryItemImpl from "./inventoryItemComponents/inventoryItem";

interface Props {
  className?: string;
  inventory?: Items;
}

interface ImplProps extends Props {}

const InventoryImpl: React.SFC<ImplProps> = ({ className, inventory }) => {
  return (
    <div className={className}>
      <InventoryItemImpl addNewItem />
      <Divider />
      {inventory &&
        Object.keys(inventory).map(inventoryItem => (
          <div key={inventoryItem}>
            <InventoryItemImpl
              addNewItem={false}
              inventoryItemKey={inventoryItem}
              inventoryItem={inventory[inventoryItem]}
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
