import styled from 'styled-components';

export const VerticalContainer = styled.div<{ splitPercentage: number }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  > div:first-child {
    flex-basis: ${(props) => props.splitPercentage}%;
  }

  > div:last-child {
    flex-basis: ${(props) => 100 - props.splitPercentage}%;
  }
`;

export const HorizontalContainer = styled.div<{ splitPercentage: number }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  > div:first-child {
    flex-basis: ${(props) => props.splitPercentage}%;
  }

  > div:last-child {
    flex-basis: ${(props) => 100 - props.splitPercentage}%;
  }
`;
