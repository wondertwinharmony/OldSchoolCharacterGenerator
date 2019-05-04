import { sampleSize } from "lodash";
import React from "react";
import Roll from "roll";
import styled from "styled-components";
import { gear } from "./characterData/gear";

interface Props {
  className?: string;
}

interface ImplProps extends Props {}

const AppImpl: React.SFC<ImplProps> = ({ className }) => {
  const roller = new Roll();
  const str = roller.roll("3d6").result;
  const dex = roller.roll("3d6").result;
  const con = roller.roll("3d6").result;
  const int = roller.roll("3d6").result;
  const wis = roller.roll("3d6").result;
  const cha = roller.roll("3d6").result;
  return (
    <div className={className}>
      <div>{str}</div>
      <div>{dex}</div>
      <div>{con}</div>
      <div>{int}</div>
      <div>{wis}</div>
      <div>{cha}</div>
      <div>{`Two random items: ${sampleSize(gear, 2)}`}</div>
    </div>
  );
};

const StyledApp = styled(AppImpl)`
  color: red;
`;

export default StyledApp;
