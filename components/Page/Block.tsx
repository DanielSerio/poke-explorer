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
    <Box m={0} p={'md'} component="section" sx={{
      width: '100%',
      overflow: 'hidden',
      wordWrap: 'break-word',
    }}>
      <Container mx={'auto'}>
        {children}
      </Container>
    </Box>
  );
}
