import {
  ActionIcon,
  Box, createStyles, CSSObject,
  Header, Image, MantineTheme, useMantineColorScheme,
} from '@mantine/core';
import {NextLink} from '@mantine/next';
import {Sun, Moon} from 'tabler-icons-react';

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
    darkmodeToggle: {
      position: 'relative',
      transformOrigin: 'center center',
      overflow: 'hidden',
    },
    dial: {
      position: 'absolute',
      height: '230%',
      width: '100%',
      transformOrigin: 'center center',
      left: '50%',
      top: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'all 80ms ease',
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
  const {colorScheme, toggleColorScheme} = useMantineColorScheme();
  return (
    <Box component={'header'} className={classes.root}>
      <Header px={'md'} height={72} className={classes.nav}>
        <Box>
          <NextLink href="/">
            <Image
              width={200}
              src={
                colorScheme === 'dark' ?
                  '/logo-dark.svg' :
                  '/logo-light.svg'
              }
            />
          </NextLink>
        </Box>
        <Box>
          <ActionIcon
            variant='filled'
            color={'gray'}
            className={classes.darkmodeToggle}
            onClick={() => toggleColorScheme()}>
            <Box sx={{
              transform: colorScheme === 'dark' ?
                'rotate(0deg) translateX(-50%)' :
                'rotate(180deg) translateX(50%)',
            }} className={classes.dial}>
              <Sun />
              <Moon style={{transform: 'rotate(180deg)'}}/>
            </Box>
          </ActionIcon>
        </Box>
      </Header>
    </Box>
  );
}
