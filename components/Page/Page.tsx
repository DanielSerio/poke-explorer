import {AppShell, AppShellProps} from '@mantine/core';
import Head from 'next/head';

export interface PageProps extends AppShellProps {
  title: string
  description: string
}

/**
 * Main Page Component
 * @param {PageProps} props - Page Props
 * @return {ReactElement} Main Page Component
 */
export default function Page(
    {title, description, children, ...props}: PageProps,
) {
  return (
    <AppShell {...props}>
      <Head>
        <title key={0}>{title}</title>
        <meta key={1} name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </AppShell>
  );
}
