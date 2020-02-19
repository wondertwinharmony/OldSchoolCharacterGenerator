/**
 * button that converts character details [name, level, ability scores, hp, ac, traits, languages editable fields
 */

import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

interface Props {
  isEditable: boolean;
  setIsEditable: (setIsEditable: boolean) => void;
}

interface ImplProps extends Props {}

const EditCharacterButtonsImpl: React.SFC<ImplProps> = ({
  isEditable,
  setIsEditable
}) => {
  return (
    <ButtonContainer>
      {isEditable ? null : (
        <Button
          onClick={(e: any) => {
            e.preventDefault();
            e.stopPropagation();
            setIsEditable(true);
          }}
          style={{ width: '275px' }}
          variant={'outline-secondary'}
          type="submit"
        >
          Edit Character
        </Button>
      )}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 1rem 0 0.5rem 0;
`;

export default EditCharacterButtonsImpl;
