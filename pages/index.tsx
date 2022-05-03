import {Box, createStyles, List, SimpleGrid, Text} from '@mantine/core';
import {NextLink} from '@mantine/next';
import type {NextPage} from 'next';
import PageBlock from '../components/Page/Block';
import BlockCard from '../components/Page/BlockCard';
import Page from '../components/Page/Page';
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

const Home: NextPage<HomePageProps> = ({...props}: HomePageProps) => {
  const {data} = useGetVersionDetailsQuery(props.version);
  const {data: details} =
    useGetGenerationDetailsQuery(data?.id + '' || '1', {
      refetchOnMountOrArgChange: true,
    });
  const {classes: listClasses} = useListStyles();
  return (
    <Page
      title="PokeExplorer | Home"
      description='Explore Pokemon data'
      {...props}>
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
          <BlockCard title="Species">
            <Box>
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
            </Box>
          </BlockCard>
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
          <BlockCard title="Region">
            <Box>
              <Text px={'sm'}>
                <NextLink href={`region/${details?.region.name}`}>
                  {details?.region.name}
                </NextLink>
              </Text>
            </Box>
          </BlockCard>
        </SimpleGrid>
      </PageBlock>
    </Page>
  );
};

export default Home;
