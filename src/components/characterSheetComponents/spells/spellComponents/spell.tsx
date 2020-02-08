import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { CastingMethod } from "../../../../characterData/classes";

interface Props {
  className?: string;
  addNewItem?: boolean;
  spell: {
    name: string;
    description: string;
    level: string;
  };
  spellKey?: string;
  castingMethod?: CastingMethod;
  // classSpells: Spells;
}

interface ImplProps extends Props {}

const SpellImpl: React.SFC<ImplProps> = ({
  className,
  // addNewItem,
  spell,
  // spellKey,
  castingMethod
  // classSpells
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
  const [active, setActive] = useState(false);
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
        <StyledInput
          type="radio"
          onClick={() => setActive(!active)}
          onChange={() => {}}
          checked={active}
        />
        <div onClick={() => setShow(!show)}>
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

const StyledInput = styled.input`
  width: 3rem;
  height: 25px;
`;

const SpellDescription = styled.div`
  padding-left: 3rem;
`;

const RemoveButtonContainer = styled.div`
  display: flex;
`;

const RemoveButton = styled(Button)`
  margin-top: 1rem;
  margin-left: auto;
`;

export default SpellImpl;
