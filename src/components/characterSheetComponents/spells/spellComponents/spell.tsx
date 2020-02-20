import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaRegMinusSquare, FaRegPlusSquare } from 'react-icons/fa';
import styled from 'styled-components';
import { put } from '../../../../api/put';
import AppContext from '../../../../AppContext';
import { CastingMethod } from '../../../../characterData/classes';
import { getSpells } from '../../../../utils/getSpells';

interface Props {
  className?: string;
  spell: {
    name: string;
    description: string;
    level: string;
    levelVariable: boolean;
    preparedCount: number;
  };
  spellKey: string;
  castingMethod?: CastingMethod;
}

interface ImplProps extends Props {}

const SpellImpl: React.SFC<ImplProps> = ({
  className,
  spell,
  spellKey,
  castingMethod
}) => {
  const homeURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://oldschoolknave.surge.sh';
  const URL = window.location.href;
  const characterId = URL.replace(homeURL.concat('/permalinked/'), '');

  const {
    savedCharacterData,
    savedCharacterSpells,
    setSavedCharacterSpells
  } = useContext(AppContext);
  const [show, setShow] = useState(false);

  const handleItemRemove = () => {
    setShow(false);
    if (spell && spellKey && savedCharacterSpells) {
      /**
       * Using es7 obj spread to omit a property.
       * @see https://github.com/airbnb/javascript/blob/master/README.md#objects--rest-spread
       */
      const { [spellKey]: spell, ...updatedSpells } = savedCharacterSpells;
      setSavedCharacterSpells(updatedSpells);
      const data = {
        characterId,
        spells: updatedSpells,
        httpMethod: 'PUT'
      };
      put(characterId, data).catch(err => alert(err));
    }
  };

  const divineSpells =
    castingMethod === 'divine' && savedCharacterData && !savedCharacterSpells
      ? getSpells(savedCharacterData.knave, savedCharacterData.class)
      : undefined;

  return (
    <>
      <div
        className={className}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        {savedCharacterData && (
          <>
            <PreparedCountText>{spell.preparedCount}</PreparedCountText>
            <IncrementButton>
              <FaRegMinusSquare
                onClick={(e: any) => {
                  e.stopPropagation();
                  e.preventDefault();
                  if (spell.preparedCount !== 0)
                    setSavedCharacterSpells({
                      ...savedCharacterSpells,
                      [spellKey]: {
                        ...spell,
                        preparedCount: spell.preparedCount - 1
                      }
                    });
                }}
              />
            </IncrementButton>
            <IncrementButton>
              <FaRegPlusSquare
                onClick={(e: any) => {
                  e.stopPropagation();
                  e.preventDefault();
                  divineSpells
                    ? setSavedCharacterSpells({
                        ...divineSpells,
                        [spellKey]: {
                          ...spell,
                          preparedCount: spell.preparedCount + 1
                        }
                      })
                    : setSavedCharacterSpells({
                        ...savedCharacterSpells,
                        [spellKey]: {
                          ...spell,
                          preparedCount: spell.preparedCount + 1
                        }
                      });
                }}
              />
            </IncrementButton>
          </>
        )}
        <div onClick={() => setShow(!show)} style={{ cursor: 'pointer' }}>
          <FontAwesomeIcon
            icon={!show ? 'caret-up' : 'caret-down'}
            size="lg"
            style={{ margin: '0 0.5rem' }}
          />
          {spell && spell.name}
        </div>
      </div>
      {show && (
        <div
          style={
            savedCharacterData
              ? { paddingLeft: '110px' }
              : { paddingLeft: '0.5rem' }
          }
        >
          {spell && spell.description}
          {castingMethod === 'arcane' && savedCharacterData && (
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
        </div>
      )}
    </>
  );
};

const PreparedCountText = styled.div`
  font-size: 20px;
  margin-left: 10px;
  padding-right: 0.5rem;
`;

const IncrementButton = styled.div`
  cursor: pointer;
  display: flex;
  padding-right: 0.5rem;
  font-size: 30px;
`;

const RemoveButtonContainer = styled.div`
  display: flex;
`;

const RemoveButton = styled(Button)`
  margin-top: 1rem;
  margin-left: auto;
`;

export default SpellImpl;
