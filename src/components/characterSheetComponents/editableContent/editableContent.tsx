import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import { put } from "../../../api/put";
import AppContext from "../../../AppContext";

interface Props {
  content: string;
  contentType: "Traits" | "Languages" | "Notes";
}

/**
 * Component for rendering simple editable text fields. Used
 * in Traits, Languages, and Notes segments. Can be extended to support
 * other segments that need a similar pattern.
 */
const EditableContent: React.SFC<Props> = ({ content, contentType }) => {
  const homeURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://oldschoolknave.surge.sh";
  const URL = window.location.href;
  const characterId = URL.replace(homeURL.concat("/permalinked/"), "");

  const {
    setSavedCharacterTraits,
    setSavedCharacterLanguages,
    setSavedCharacterNotes
  } = useContext(AppContext);
  const [inputValue, setInputValue] = useState(content);
  const [isEditable, setIsEditable] = useState(false);

  const handleSave = () => {
    if (contentType === "Traits") setSavedCharacterTraits(inputValue);
    if (contentType === "Languages") setSavedCharacterLanguages(inputValue);
    if (contentType === "Notes") setSavedCharacterNotes(inputValue);

    let data = { characterId, httpMethod: "PUT" };
    data = { ...data, [contentType.toLowerCase()]: inputValue };
    put(characterId, data).catch(err => alert(err));
  };

  const isModified = content !== inputValue;

  return (
    <Container>
      {!isEditable && (
        <EditButton
          variant="outline-secondary"
          onClick={() => setIsEditable(true)}
        >
          {`Edit ${contentType}`}
        </EditButton>
      )}
      {!isEditable ? (
        content
      ) : (
        <>
          <div style={{ width: "450px" }}>
            <ButtonContainer>
              <StyledButton
                onClick={() => {
                  handleSave();
                  setIsEditable(false);
                }}
                variant={isModified ? "primary" : "secondary"}
                type="submit"
                disabled={!isModified}
              >
                Save
              </StyledButton>
              <StyledButton
                onClick={() => {
                  setIsEditable(false);
                }}
                variant={"danger"}
                type="submit"
              >
                Cancel
              </StyledButton>
            </ButtonContainer>
          </div>
          <Form.Control
            as="textarea"
            onChange={(e: any) => {
              setInputValue(e.target.value);
            }}
            value={inputValue}
            rows={
              contentType === "Traits" || contentType === "Notes" ? "5" : "2"
            }
          />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
`;

const EditButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 11rem;
  margin-bottom: 0.5rem;
`;

const StyledButton = styled(Button)`
  width: 150px;
`;

const ButtonContainer = styled.div`
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-bottom: 0.5rem;
`;

export default EditableContent;
