import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import styled from "styled-components";
import { CastingMethod } from "../../../../characterData/classes";

interface Props {
  className?: string;
  spell: {
    name: string;
    description: string;
    level: string;
  };
  spellKey?: string;
  castingMethod?: CastingMethod;
}

interface ImplProps extends Props {}

const SpellImpl: React.SFC<ImplProps> = ({
  className,
  spell,
  castingMethod
}) => {
  //   const homeURL =
  //     process.env.NODE_ENV === "development"
  //       ? "http://localhost:3000"
  //       : "https://oldschoolknave.surge.sh";
  //   const URL = window.location.href;
  //   const characterId = URL.replace(homeURL.concat("/permalinked/"), "");

  //   const {
  //     savedCharacterData,
  //     savedCharacterInventory,
  //     setSavedCharacterInventory
  //   } = useContext(AppContext);
  // const [inputValue, setInputValue] = useState("");
  // const [levelValue, setLevelValue] = useState("1");
  const [prepared, setPrepared] = useState("0");
  const [show, setShow] = useState(false);

  // const handleItemSubmit = () => {
  //   // const itemId = shortid.generate();
  //   // setSavedCharacterInventory({
  //   //   ...savedCharacterInventory,
  //   //   [itemId]: { description: inputValue, slots: slotValue }
  //   // });
  //   // const data = {
  //   //   characterId,
  //   //   inventory: {
  //   //     ...savedCharacterInventory,
  //   //     [itemId]: { description: inputValue, slots: slotValue }
  //   //   },
  //   //   httpMethod: "PUT"
  //   // };
  //   // put(characterId, data).catch(err => alert(err));
  // };

  const handleItemRemove = () => {
    setShow(false);
    // if (inventoryItem && inventoryItemKey && savedCharacterInventory) {
    //   /**
    //    * Using es7 obj spread to omit a property.
    //    * @see https://github.com/airbnb/javascript/blob/master/README.md#objects--rest-spread
    //    */
    //   const {
    //     [inventoryItemKey]: inventoryItem,
    //     ...updatedInventory
    //   } = savedCharacterInventory;
    //   setSavedCharacterInventory(updatedInventory);
    //   const data = {
    //     characterId,
    //     inventory: updatedInventory,
    //     httpMethod: "PUT"
    //   };
    //   put(characterId, data).catch(err => alert(err));
    // }
  };

  // const filteredAndSortedItems = Object.keys(classSpells)
  //   .filter(spellKey =>
  //     classSpells[spellKey].description
  //       .toLowerCase()
  //       .includes(inputValue.toLowerCase())
  //   )
  //   .sort((spellA, spellB) => {
  //     if (classSpells[spellA].description < classSpells[spellB].description) {
  //       return -1;
  //     }
  //     if (classSpells[spellA].description > classSpells[spellB].description) {
  //       return 1;
  //     }
  //     // Names equal
  //     return 0;
  //   });

  return (
    <>
      <div
        className={className}
        style={{ display: "flex", alignItems: "center" }}
      >
        <FormControl
          style={{ width: "60px" }}
          onClick={(e: any) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onChange={(e: any) => {
            e.preventDefault();
            e.stopPropagation();
            /**
             * Make call to update our client side stored
             * spells here, call spell by key, update number
             * prepared.
             */
            setPrepared(e.target.value);
          }}
          value={prepared}
          type="number"
        />
        <div onClick={() => setShow(!show)} style={{ cursor: "pointer" }}>
          <FontAwesomeIcon
            icon={!show ? "caret-up" : "caret-down"}
            size="lg"
            style={{ margin: "0 0.5rem" }}
          />
          {spell && spell.name}
        </div>
      </div>
      {show && (
        <SpellDescription>
          {spell && spell.description}
          {castingMethod === "arcane" && (
            <RemoveButtonContainer>
              <RemoveButton
                onClick={() => {
                  handleItemRemove();
                }}
                variant="danger"
                type="submit"
              >
                Remove Spell
              </RemoveButton>
            </RemoveButtonContainer>
          )}
        </SpellDescription>
      )}
    </>
  );
};

const SpellDescription = styled.div`
  padding-left: 70px;
`;

const RemoveButtonContainer = styled.div`
  display: flex;
`;

const RemoveButton = styled(Button)`
  margin-top: 1rem;
  margin-left: auto;
`;

export default SpellImpl;
