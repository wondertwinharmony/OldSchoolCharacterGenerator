import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { CharacterSheetSegments } from "../../constants/characterSheetSegments";

interface Props {
  segmentIcon: any;
  segmentDisplayName: any;
  segmentName?: string;
  segmentData?: any;
  collapse: CharacterSheetSegments;
  setCollapse: (value: () => CharacterSheetSegments) => void;
}

/**
 *  Generic Character Sheet component for collapsable segments.
 */
const Segment: React.SFC<Props> = ({
  segmentIcon,
  segmentDisplayName,
  segmentName,
  segmentData,
  collapse,
  setCollapse
}) => {
  const segmentLookup = segmentName
    ? `is${segmentName}Visible`
    : `is${segmentDisplayName}Visible`;

  return (
    <SegmentContainer>
      <SegmentHeader
        onClick={() => {
          const segmentNewState = {
            [segmentLookup]: !collapse[segmentLookup]
          };
          setCollapse(() => ({ ...collapse, ...segmentNewState }));
        }}
      >
        <HeaderIcon>{segmentIcon}</HeaderIcon>
        {segmentDisplayName}
        <FontAwesomeIcon
          icon={collapse[segmentLookup] ? "caret-up" : "caret-down"}
          size="lg"
          style={{ margin: "0 0.5rem" }}
        />
      </SegmentHeader>
      {collapse[segmentLookup] && <div>{segmentData}</div>}
    </SegmentContainer>
  );
};

const HeaderIcon = styled.div`
  margin: 0 0.5rem;
`;

const SegmentContainer = styled.div`
  padding: 0.5rem;
`;

const SegmentHeader = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-family: "Sancreek", cursive;
  font-size: 1.5rem;
`;

export default Segment;
