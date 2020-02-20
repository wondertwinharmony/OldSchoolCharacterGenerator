import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { createMarkup } from '../../../utils/createMarkup';

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
    <>
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
      <SaveMessageContainer>
        <SaveHeader>
          <FontAwesomeIcon
            icon={'exclamation-triangle'}
            size="sm"
            style={{ margin: '0.5rem' }}
          />
          IMPORTANT
          <FontAwesomeIcon
            icon={'exclamation-triangle'}
            size="sm"
            style={{ margin: '0.5rem' }}
          />
        </SaveHeader>
        <SaveMessage
          dangerouslySetInnerHTML={createMarkup(
            '<strong>Bookmark this page. Save the results!\n</strong>'
          )}
        />
      </SaveMessageContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 1rem 0 0.5rem 0;
`;
const SaveMessage = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  white-space: pre-line;
`;

const SaveHeader = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Sancreek', cursive;
  font-size: 2rem;
`;

const SaveMessageContainer = styled.div`
  @keyframes fadeOut {
    0% {
      opacity: 1;
      height: 73px;
    }
    25% {
      opacity: 0.75;
      height: 73x;
    }
    50% {
      opacity: 0.5;
      height: 73px;
    }
    75% {
      opacity: 0.25;
      height: 73px;
    }
    95% {
      opacity: 0;
      height: 73px;
    }
    100% {
      opacity: 0;
      height: 0px;
      visibility: hidden;
    }
  }
  -webkit-animation: fadeOut 8s;
  animation: fadeOut 8s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
`;

export default EditCharacterButtonsImpl;
