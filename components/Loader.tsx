import {Box, createStyles, CSSObject, MantineTheme} from '@mantine/core';
import React from 'react';

const createLoaderStyles = (t: MantineTheme): Record<string, CSSObject> => {
  return ({
    container: {
      margin: '0 auto',
      padding: t.spacing.xl,
    },
    ball: {
      'height': 64,
      'width': 64,
      'transformOrigin': 'center center',
      'margin': '0 auto',
      'borderRadius': 65,
      'position': 'relative',
      'overflow': 'hidden',
      'outlineWidth': 2,
      'outlineStyle': 'solid',
      'outlineColor': t.colors.red[7],
      'animation': 'load 800ms linear infinite',
      'boxShadow': t.shadows.xs,
      '.top': {
        position: 'absolute',
        height: '50%',
        width: '100%',
        background: t.colors.red[7],
      },
      '.center': {
        position: 'absolute',
        height: 16,
        width: 16,
        borderRadius: 17,
        zIndex: 999999,
        left: 'calc(50% - 8px)',
        top: 'calc(50% - 8px)',
        background: t.colors.dark[4],
      },
      '.bottom': {
        position: 'absolute',
        top: '50%',
        height: '50%',
        width: '100%',
        background: '#ffffff',
      },
    },
  });
};

const useLoaderStyles = createStyles(createLoaderStyles);

/**
 * Loader Component
 * @return {ReactElement} Loader Component
 */
export default function Loader() {
  const {classes} = useLoaderStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.ball}>
        <div className="top"></div>
        <div className="center"></div>
        <div className="bottom"></div>
      </Box>
    </Box>
  );
}
