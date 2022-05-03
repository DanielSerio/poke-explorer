import {ColorScheme, ColorSchemeProvider, MantineProvider} from '@mantine/core';
import {useHotkeys, useLocalStorage} from '@mantine/hooks';
import type {AppProps} from 'next/app';
import {Provider as ReduxProvider} from 'react-redux';
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
        theme={{colorScheme}}>
        <ReduxProvider store={store}>
          <Component {...pageProps} />
        </ReduxProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
