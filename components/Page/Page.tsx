import {
  AppShell, AppShellProps, createStyles,
  CSSObject, MantineTheme,
} from '@mantine/core';
import Head from 'next/head';

export interface PageProps extends AppShellProps {
  title: string
  description: string
}

const createPageStyles = (t: MantineTheme): Record<string, CSSObject> => {
  return ({
    main: {
      padding: 0,
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
    {title, description, children, ...props}: PageProps,
) {
  const {classes} = usePageStyles();
  return (
    <AppShell classNames={classes} {...props}>
      <Head>
        <title key={0}>{title}</title>
        <meta key={1} name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </AppShell>
  );
}
