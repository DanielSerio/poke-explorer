import {
  AppShell, AppShellProps, createStyles,
  CSSObject, MantineTheme,
} from '@mantine/core';
import Head from 'next/head';
import {VersionName} from '../../services/types';
import PageHeader from './Header';
import VersionDrawer from './VersionDrawer';

export interface PageProps extends AppShellProps {
  title: string
  description: string
  version: VersionName
  changeVersion: (version: VersionName) => void
}

const createPageStyles = (t: MantineTheme): Record<string, CSSObject> => {
  return ({
    main: {
      'padding': 0,
      'a': {
        textDecoration: 'none',
        color: t.colorScheme === 'dark' ?
          t.colors.blue[3] :
          t.colors.blue[9],
      },
    },
  });
};

const usePageStyles = createStyles(createPageStyles);

/**
 * Main Page Component
 * @param {PageProps} props - Page Props
 * @return {ReactElement} Main Page Component
 */
export default function Page(
    {title, description, children, version, changeVersion, ...props}: PageProps,
) {
  const {classes} = usePageStyles();


  return (
    <AppShell classNames={classes} header={<PageHeader />} {...props}>
      <Head>
        <title key={0}>{title}</title>
        <meta key={1} name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <VersionDrawer version={version} changeVersion={changeVersion}/>
    </AppShell>
  );
}
