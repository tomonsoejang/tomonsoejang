import { Box } from '@material-ui/core';
import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children }) => {
  return <Box py={10}>{children}</Box>;
};

export default SectionContainer;
