import {Box, BoxProps, Container} from '@mantine/core';

export interface PageBlockProps extends BoxProps<'section'> {

}

/**
 * Page Block Component
 * @param {PageBlockProps} - PageBlockProps
 * @return {ReactElement} - Page Block Component
 */
export default function PageBlock({children}: PageBlockProps) {
  return (
    <Box m={0} p={0} component="section" sx={{width: '100%'}}>
      <Container my={'md'} mx={'auto'}>
        {children}
      </Container>
    </Box>
  );
}
