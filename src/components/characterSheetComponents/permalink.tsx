import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import UUID5 from "uuid/v5";
import { postURL } from "../../api/postURL";
import AppContext from "../../AppContext";
import { createMarkup } from "../../utils/createMarkup";
import { SavedCharacterData } from "../../utils/getSavedCharacterData";
import { saveCharacterData } from "../../utils/saveCharacterData";

interface Props {
  savedCharacterData?: SavedCharacterData;
  characterName: string;
  classSelection: string;
  traits: string;
  abilityScores: number[];
  hitPoints: number;
  languages: string;
  spells: string[];
  equipment?: any;
  includeKnaveSpells: boolean;
}

/**
 * Component for the Permalink button and the Saved Character Message after bookmarking the link.
 */
const Permalink: React.SFC<Props> = ({
  savedCharacterData,
  characterName,
  classSelection,
  traits,
  abilityScores,
  hitPoints,
  languages,
  spells,
  // equipment,
  includeKnaveSpells
}) => {
  const { savedCharacterInventory } = useContext(AppContext);
  let history = useHistory();
  let match = useRouteMatch("/generatedCharacter/:character/");

  const handleClick = () => {
    let URL = saveCharacterData(
      characterName,
      classSelection,
      traits,
      abilityScores,
      hitPoints,
      languages,
      spells,
      // equipment.characterEquipmentString,
      // equipment.slotsToFill,
      includeKnaveSpells
    );

    const longLink =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://oldschoolknave.surge.sh";
    const permaLink = longLink.concat("/savedCharacter/1&", URL);
    const characterUUID = UUID5(permaLink, UUID5.URL);
    console.log("savedCharacterInventory: ", savedCharacterInventory);
    const data = {
      characterId: characterUUID,
      permaLink: permaLink,
      inventory: savedCharacterInventory,
      httpMethod: "POST"
    };

    const postCharacter = async () => {
      await postURL(data).then(() =>
        history.push(`/permalinked/${characterUUID}`)
      );
    };
    postCharacter();
  };

  return !savedCharacterData ? (
    <PermalinkButtonContainer>
      <PermalinkButton
        style={{ width: "275px" }}
        variant="outline-secondary"
        onClick={() => {
          handleClick();
        }}
      >
        Permalink
      </PermalinkButton>
      <div>
        (Only permalinked characters can be edited. Or hit back to see other
        class options for current ability scores.)
      </div>
    </PermalinkButtonContainer>
  ) : //The ternary below checks if savedCharacterData exists and if the route is "generatedCharacter/:character/", if both conditions are true it will not render the <SaveMessageContainer>. We don't want the <SaveMessageContainer> to be rendered when people navigate back after permalinking a character.
  savedCharacterData && match ? null : (
    <SaveMessageContainer>
      <SaveHeader>
        <FontAwesomeIcon
          icon={"exclamation-triangle"}
          size="sm"
          style={{ margin: "0.5rem" }}
        />
        IMPORTANT
        <FontAwesomeIcon
          icon={"exclamation-triangle"}
          size="sm"
          style={{ margin: "0.5rem" }}
        />
      </SaveHeader>
      <SaveMessage
        dangerouslySetInnerHTML={createMarkup(
          "<strong>Bookmark this page. Save the results!\n</strong>"
        )}
      />
    </SaveMessageContainer>
  );
};

const PermalinkButton = styled(Button)`
  color: black;
`;

const PermalinkButtonContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
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
  font-family: "Sancreek", cursive;
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
    }
  }
  -webkit-animation: fadeOut 8s;
  animation: fadeOut 8s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
`;

export default Permalink;
