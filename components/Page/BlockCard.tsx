import {Card, CardSectionProps, Title, Text, MantineTheme} from '@mantine/core';

interface BlockCardProps extends CardSectionProps<'div'> {
  title: string
}

/**
 * BlockCard Component
 * @param {BlockCardProps} props = BlockCardProps
 * @return {Reactelement} BlockCard Component
 */
export default function BlockCard(
    {title, children, ...props}: BlockCardProps,
) {
  return (
    <Card sx={(t: MantineTheme) => ({
      boxShadow: t.shadows.md,
      background: t.colorScheme === 'dark' ?
        t.colors.dark[6] :
        '#ffffff',
    })}>
      <Card.Section p={'sm'}>
        <Title order={1}>
          <Text>
            {title}
          </Text>
        </Title>
      </Card.Section>
      <Card.Section pb={'sm'} {...props}>{children}</Card.Section>
    </Card>
  );
}
