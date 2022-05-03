import {
  Box, createStyles, CSSObject,
  Header, Image, MantineTheme, useMantineColorScheme,
} from '@mantine/core';

const createHeaderStyles = (t: MantineTheme): Record<string, CSSObject> => {
  return ({
    root: {
      position: 'relative',
    },
    nav: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
};

const useHeaderStyles = createStyles(createHeaderStyles);

/**
 * PageHeader Component
 * @return {ReactElement} PageHeader Component
 */
export default function PageHeader() {
  const {classes} = useHeaderStyles();
  const {colorScheme} = useMantineColorScheme();
  return (
    <Box component={'header'} className={classes.root}>
      <Header px={'md'} height={72} className={classes.nav}>
        <Box>
          <Image
            width={200}
            src={colorScheme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'}
          />
        </Box>
        <Box>Right</Box>
      </Header>
    </Box>
  );
}
