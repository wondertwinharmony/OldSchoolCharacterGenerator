import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    segmentIcon: any;
    segmentName: any;
    segmentData?: any;
    collapse: boolean;
    setCollapse: (param: boolean) => void;
}

const Segment: React.SFC<Props> = ({ segmentIcon, segmentName, segmentData, collapse, setCollapse }) => {
    
    return (
        <>
            <SegmentContainer>
                <SegmentHeader
                    onClick={() => {
                        setCollapse(!collapse);
                    }}>
                    <HeaderIcon>
                        {segmentIcon}
                    </HeaderIcon>
                    {segmentName}
                    <FontAwesomeIcon
                        icon={collapse ? "caret-up" : "caret-down"}
                        size="lg"
                        style={{ margin: "0 0.5rem" }}
                    />
                </SegmentHeader>
                {collapse && <div>{segmentData}</div>}
            </SegmentContainer>
        </>
    )
};

const HeaderIcon = styled.div`
  margin: 0 0.5rem;
`;

const SegmentContainer = styled.div`
  padding: 0.5rem;
`;

const SegmentHeader = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Sancreek", cursive;
  font-size: 1.5rem;
`;

export default Segment;
