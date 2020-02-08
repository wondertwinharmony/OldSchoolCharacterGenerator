import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import styled from "styled-components";
import AppContext from "../../../../AppContext";
import { characterClasses } from "../../../../characterData/classes";
import { knaveSpells } from "../../../../characterData/knaveSpells";
import { newAllSpells } from "../../../../characterData/spells";
import AddSpellButtonsImpl from "./addSpellButtons";
import SpellInputContainerImpl from "./spellInputContainer";

export interface Spell {
  name: string;
  description: string;
  level: string;
  levelVariable?: boolean;
}

interface Props {
  className?: string;
  classSelection: string;
}

interface ImplProps extends Props {}

const AddSpellImpl: React.SFC<ImplProps> = ({ className, classSelection }) => {
  //   const homeURL =
  //     process.env.NODE_ENV === "development"
  //       ? "http://localhost:3000"
  //       : "https://oldschoolknave.surge.sh";
  //   const URL = window.location.href;
  //   const characterId = URL.replace(homeURL.concat("/permalinked/"), "");

  const {
    nonTraditionalSpells,
    savedCharacterData
    // savedCharacterInventory,
    // setSavedCharacterInventory
  } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");
  const [levelValue, setLevelValue] = useState("1");
  const [levelDisabled, setLevelDisabled] = useState(true);
  const [show, setShow] = useState(false);

  const handleItemClick = (spell: Spell) => {
    setInputValue(spell.name);
    setLevelValue(spell.level);
    if (spell.levelVariable) {
      setLevelDisabled(false);
    } else {
      setLevelDisabled(true);
    }
  };

  const handleSubmit = () => {
    /**
     * We will never™️ submit divine spell caster
     * lists to db, since the spells available to
     * them never fluctuate like a wizard with
     * a spellbook will.
     */
    // const itemId = shortid.generate();
    // setSavedCharacterInventory({
    //   ...savedCharacterInventory,
    //   [itemId]: { description: inputValue, slots: levelValue }
    // });
    // const data = {
    //   characterId,
    //   inventory: {
    //     ...savedCharacterInventory,
    //     [itemId]: { description: inputValue, slots: levelValue }
    //   },
    //   httpMethod: "PUT"
    // };
    // put(characterId, data).catch(err => alert(err));
  };

  const classSelectionSpellList = characterClasses[classSelection].spellList;

  if (!classSelectionSpellList) return null;

  let classSpells = newAllSpells[classSelectionSpellList];

  if (nonTraditionalSpells) {
    classSpells = { ...classSpells, ...knaveSpells };
  }

  /**
   * @todo
   * Could be good to filter available spells in this list by
   * the levels of spells available to the characte depending
   * on their current level.
   */
  const filteredAndClassSpells = Object.keys(classSpells)
    .filter(spell =>
      classSpells[spell].name.toLowerCase().includes(inputValue.toLowerCase())
    )
    .sort((spellA, spellB) => {
      if (classSpells[spellA].name < classSpells[spellB].name) {
        return -1;
      }
      if (classSpells[spellA].name > classSpells[spellB].name) {
        return 1;
      }
      // Names equal
      return 0;
    });

  const inputMatchesValidSpell = Object.keys(classSpells).find(
    spell => classSpells[spell].name === inputValue
  );
  console.log("savedCharacterData? ", savedCharacterData);
  return (
    <Dropdown
      className={className}
      onToggle={() => {
        /**
         * If we are renabling this, we need to make sure
         * we hide all the other checks required for managing
         * state etc. that NEED the character to be permalinked first,
         * think like how we handled inventory, we don't do anything
         * to modify inventory until that character is saved FIRST.
         */
        // if (savedCharacterData) {
        setInputValue("");
        setLevelValue("1");
        setShow(!show);
        // }
      }}
    >
      <Dropdown.Toggle as={AddNewSpellToggle} id="spell-dropdown">
        <>
          <FontAwesomeIcon
            icon={"plus"}
            size={"sm"}
            style={{ margin: "0 0.5rem" }}
          />
          Add Spell
        </>
      </Dropdown.Toggle>

      {show && (
        <DropdownMenu>
          <SpellInputContainerImpl
            inputValue={inputValue}
            setInputValue={setInputValue}
            levelValue={levelValue}
            setLevelValue={setLevelValue}
            levelDisabled={levelDisabled}
          />
          <AddSpellButtonsImpl
            disabled={
              !inputMatchesValidSpell ||
              inputValue === "" ||
              parseInt(levelValue) < 0 ||
              parseInt(levelValue) > 6
            }
            handleSubmit={handleSubmit}
          />
          <Dropdown.Divider />
          {/* iterate over equipment as dropdown.items */}
          {classSpells && (
            <ItemsContainer>
              {filteredAndClassSpells.length === 0 && (
                <NoMatchText>Nothing matches search!</NoMatchText>
              )}
              {filteredAndClassSpells.map((spell, index) => (
                <div key={spell}>
                  <Item
                    onClick={() => {
                      handleItemClick(classSpells[spell]);
                    }}
                  >
                    {classSpells[spell].name}
                  </Item>
                  {filteredAndClassSpells.length === index + 1 ? null : (
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
const AddNewSpellToggle = React.forwardRef<any, any>(
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

export default AddSpellImpl;
