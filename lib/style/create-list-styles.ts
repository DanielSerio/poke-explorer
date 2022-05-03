import {CSSObject, MantineTheme} from '@mantine/core';

/**
 * Create global list styles
 * @param {MantineTheme} t - Theme
 * @return {Record<string, CSSObject>} Record
 */
export function createListStyles(t: MantineTheme): Record<string, CSSObject> {
  return ({
    item: {
      '&:not(:last-of-type)': {
        borderBottom: '1px solid',
        borderBottomColor: t.colorScheme === 'dark' ?
        t.colors.gray[8] :
        t.colors.gray[3],
      },
      'a': {
        'textDecoration': 'none',
        'display': 'block',
        'padding': `0 ${t.spacing.sm}px`,
        '&:hover': {
          background: t.colorScheme === 'dark' ?
          t.colors.gray[8] :
          t.colors.gray[1],
        },
      },
    },
  });
}
