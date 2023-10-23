import React from 'react';
import { VerticalContainer, HorizontalContainer } from './styles';

interface LayoutSpliterProps {
  direction: 'vertical' | 'horizontal';
  splitPercentage: number;
  backgroundColor1: string;
  backgroundColor2: string;
  textColor1: string;
  textColor2: string;
  children1: React.ReactNode;
  children2: React.ReactNode;
}

const LayoutSpliter: React.FC<LayoutSpliterProps> = ({
  direction,
  splitPercentage,
  backgroundColor1,
  backgroundColor2,
  textColor1,
  textColor2,
  children1,
  children2,
}) => {
  if (direction === 'vertical') {
    return (
      <VerticalContainer splitPercentage={splitPercentage}>
        <div style={{ backgroundColor: backgroundColor1, color: textColor1 }}>
          {children1}
        </div>
        <div style={{ backgroundColor: backgroundColor2, color: textColor2 }}>
          {children2}
        </div>
      </VerticalContainer>
    );
  } else {
    return (
      <HorizontalContainer splitPercentage={splitPercentage}>
        <div style={{ backgroundColor: backgroundColor1, color: textColor1 }}>
          {children1}
        </div>
        <div style={{ backgroundColor: backgroundColor2, color: textColor2 }}>
          {children2}
        </div>
      </HorizontalContainer>
    );
  }
};

export default LayoutSpliter;
