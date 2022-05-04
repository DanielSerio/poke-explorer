import {
  Box, createStyles, List, MantineTheme, ScrollArea, SimpleGrid, Text,
} from '@mantine/core';
import {NextLink} from '@mantine/next';
import type {NextPage} from 'next';
import {useMemo} from 'react';
import Loader from '../components/Loader';
import PageBlock from '../components/Page/Block';
import BlockCard from '../components/Page/BlockCard';
import Page from '../components/Page/Page';
import {titlecase} from '../lib/string';
import {createListStyles} from '../lib/style';
import {
  useGetGenerationDetailsQuery,
  useGetVersionDetailsQuery,
} from '../services/pokemon';
import {NamedItem, VersionName} from '../services/types';

interface HomePageProps {
  version: VersionName
  changeVersion: (version: VersionName) => void
}

const useListStyles = createStyles(createListStyles);
// TODO: Create region page
const Home: NextPage<HomePageProps> = ({...props}: HomePageProps) => {
  const {data, isLoading} = useGetVersionDetailsQuery(props.version, {
    refetchOnMountOrArgChange: true,
  });

  const id = useMemo(() => `${data?.id || 1}`, [data]);

  const {data: details, error: detailsError, isLoading: detailsIsLoading} =
    useGetGenerationDetailsQuery(id, {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
    });
  const {classes: listClasses} = useListStyles();
  return (
    <Page
      title="PokeExplorer | Home"
      description='Explore Pokemon data'
      {...props}>
      <PageBlock>
        <Text size={'xl'} sx={(t: MantineTheme) => ({
          color: t.colors[t.primaryColor][t.colorScheme === 'dark'? 3 : 8],
        })}>Version {titlecase(props.version)}</Text>
        {(isLoading || detailsIsLoading) && (
          <Loader />
        )}
      </PageBlock>
      {Boolean(detailsError) && (
        <PageBlock>
          <Text size='xl' color={'dimmed'}>
            Nothing New introduced in version {titlecase(props.version)}
          </Text>
        </PageBlock>
      )}
      {!Boolean(detailsError) &&
            <PageBlock>
              <SimpleGrid
                sx={{alignItems: 'flex-start'}}
                cols={1}
                breakpoints={[
                  {
                    spacing: 'md',
                    minWidth: 640,
                    cols: 2,
                  },
                  {
                    spacing: 'md',
                    minWidth: 960,
                    cols: 3,
                  },
                ]}>
                {Boolean(details?.species) && (
                  <BlockCard title="Species">
                    <Box>
                      <ScrollArea style={{height: 280}}>
                        <List listStyleType={'none'} classNames={listClasses}>
                          {details?.species.map((species: NamedItem) => {
                            return (
                              <List.Item key={species.name}>
                                <NextLink href={`/species/${species.name}`}>
                                  {species.name}
                                </NextLink>
                              </List.Item>
                            );
                          })}
                        </List>
                      </ScrollArea>
                    </Box>
                  </BlockCard>
                )}
                {Boolean(details?.types) && Boolean(details?.types?.length) && (
                  <BlockCard title="Types">
                    <Box>
                      <List listStyleType={'none'} classNames={listClasses}>
                        {details?.types.map((type: NamedItem) => {
                          return (
                            <List.Item key={type.name}>
                              <NextLink href={`/type/${type.name}`}>
                                {type.name}
                              </NextLink>
                            </List.Item>
                          );
                        })}
                      </List>
                    </Box>
                  </BlockCard>
                )}
                {Boolean(details?.region) && (
                  <BlockCard title="Region">
                    <Box>
                      <Text px={'sm'}>
                        <NextLink href={`region/${details?.region.name}`}>
                          {details?.region.name}
                        </NextLink>
                      </Text>
                    </Box>
                  </BlockCard>
                )}
              </SimpleGrid>
            </PageBlock>
      }
    </Page>
  );
};

export default Home;
