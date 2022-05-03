import {CSSObject, MantineTheme} from '@mantine/core';

/**
 * Create global vertical table styles
 * @param {MantineTheme} t - Theme
 * @return {Record<string, CSSObject>} Record
 */
export function createVerticalTableStyles(
    t: MantineTheme,
): Record<string, CSSObject> {
  return ({
    root: {
      'padding': '12px',
      'display': 'grid',
      'gridTemplateColumns': 'auto 1fr',
      'gap': '12px',

      '.name': {
        fontWeight: 700,
        textAlign: 'right',
      },

      'span a': {
        display: 'block',
      },
    },
  });
}
