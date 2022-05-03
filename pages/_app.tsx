import {ColorScheme, ColorSchemeProvider, MantineProvider} from '@mantine/core';
import {useHotkeys, useLocalStorage} from '@mantine/hooks';
import type {AppProps} from 'next/app';
import {useCallback, useState} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {getVersionColor} from '../lib/color';
import {VersionName} from '../services/types';
import {store} from '../store';
/**
 * Root Component
 * @param {any} props - Root component props
 * @return {ReactElement} - Root Component
 */
function MyApp({Component, pageProps}: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const [version, setVersion] = useState<VersionName>('red');

  const changeVersion = useCallback(
      (ver: VersionName) => setVersion(ver),
      [setVersion],
  );

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      toggleColorScheme={toggleColorScheme}
      colorScheme={colorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          primaryColor: getVersionColor(version),
          white: 'hsl(265,6%,97%)',
          black: 'hsl(265,6%,6%)'}}>
        <ReduxProvider store={store}>
          <Component {...{version, changeVersion, ...pageProps}} />
        </ReduxProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
