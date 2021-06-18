import React, { ReactElement } from 'react';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import * as Constants from '../constants';

const StyledText = styled.p`
  font-family: baskerville;
`;

const Header = styled.th`
  color: white;
  font-size: 5vmin;
  text-align: center;
`;

const StyledList = styled(StyledText)`
  padding: 0;
  margin-left: 3vw;
`;

const StyledRow = styled.tr`
  font-size: 4.5vmin;
  font-family: baskerville;
  font-weight: 600;
  color: white;
`;

const EvenRow = styled(StyledRow)`
  // background: #6600ff;
  background: #1a1a65;
`;

const OddRow = styled(StyledRow)`
  background: ${Constants.BLUE};
  // background: #4dffff;
  // background: #00b3b3;
  // color: black;
`;

export default function StyledTable(): ReactElement {
  return (
    <Table bordered responsive >
      <thead>
        <EvenRow>
          <Header>Features</Header>
          <Header>Benefits</Header>
        </EvenRow>
      </thead>
      <tbody>
        <OddRow>
          <td>Streamlined Ruleset</td>
          <td>
            <StyledList>
              <li>Teach it in minutes. Even to people who never played TTRPGs before.</li>
              <li>Get ready to GM in half an hour or less.</li>
              <li>Quickly and decisively settle rule disputes.</li>
            </StyledList>
          </td>
        </OddRow>
        <EvenRow>
          <td>Tarot Card System</td>
          <td>
            <StyledList>
              <li>Thousands of unique and memorable characters to create. 4,000 possibilities by level 4.</li>
              <li>Greater control over character progression. Decide which cards to unlock and upgrade.</li>
              <li>Players never read a rulebook. Everything they need to know is in the reference cards.</li>
            </StyledList>
          </td>
        </EvenRow>
        <OddRow>
          <td>Guides to Making Monsters and Rewarding Players</td>
          <td>
            <StyledList>
              <li>Give rewards to your players with confidence. Know that you're keeping the balance of the game.</li>
              <li>Balance custom monsters on the fly.</li>
              <li>Easily adjust monster difficulty as players weave in and out of sessions.</li>
            </StyledList>
          </td>
        </OddRow>
        {/* <EvenRow>
          <td>Free Starter Set includes everythign you need to play through levels 1 and 2 or Roleplay Revolution.</td>
          <td>
            <StyledList>
              <li>The perfect experience for new players getting into the genre. Get them started with our custom experience!</li>
              <li>Test out a simplified version of the Roleplay Revolution system. See if its for you!</li>
            </StyledList>
          </td>
        </EvenRow> */}
      </tbody>
    </Table>
  );
}
