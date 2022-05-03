import {Box, createStyles, SimpleGrid} from '@mantine/core';
import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import Loader from '../../components/Loader';
import PageBlock from '../../components/Page/Block';
import BlockCard from '../../components/Page/BlockCard';
import Page from '../../components/Page/Page';
import SpriteViewer from '../../components/SpriteViewer';
import {cleanKabob} from '../../lib/string';
import {createVerticalTableStyles} from '../../lib/style';
import {useGetPokemonByNameQuery} from '../../services/pokemon';
import {
  NamedItem,
  Sprites,
  VersionName,
} from '../../services/types';

interface NamePageProps {
  name: string
  version: VersionName
  changeVersion: (version: VersionName) => void
}

// const useListStyles = createStyles(createListStyles);
const useVerticalTableStyles = createStyles(createVerticalTableStyles);

const NamePage: NextPage<NamePageProps> = ({name, ...props}: NamePageProps) => {
  const {isLoading, data} = useGetPokemonByNameQuery(name);
  // const {classes: listClasses} = useListStyles();
  const {classes: vTableClasses} = useVerticalTableStyles();
  return (
    <Page
      title={`PokeExplorer | ${name}`}
      description={`Pokemon Species ${name}`}
      {...props}>
      <PageBlock>
        {isLoading && <Loader />}
        {Boolean(data) && (
          <SimpleGrid cols={1}
            breakpoints={[
              {
                minWidth: 620,
                cols: 2,
              },
              {
                minWidth: 960,
                cols: 3,
              },
            ]}>
            <BlockCard title={cleanKabob(name)}>
              <Box className={vTableClasses.root}>
                <span className="name">ID:</span>
                <span>{data?.id}</span>
                <span className="name">Base Exp:</span>
                <span>{data?.base_experience}</span>
                {Boolean(data?.held_items.length) && (
                  <>
                    <span className="name">Held Items:</span>
                    <span>
                      {data?.held_items
                          .map((item: NamedItem) => cleanKabob(item.name))
                          .join(', ')}
                    </span>
                  </>
                )}
                <span className="name">Weight:</span>
                <span>{data?.weight}</span>
                <span className="name">Height:</span>
                <span>{data?.height}</span>
              </Box>
            </BlockCard>
            <BlockCard title={'Sprites'}>
              <SpriteViewer
                sprites={data?.sprites as Sprites} />
            </BlockCard>
          </SimpleGrid>
        )}
      </PageBlock>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000`);
  const data = await res.json();

  const paths = data.results.map((item: NamedItem) => {
    return {
      params: {name: item.name},
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  return {
    props: {
      name: context.params?.name,
    },
  };
};

export default NamePage;
