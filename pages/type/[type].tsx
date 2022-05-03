import {Box, createStyles, List, ScrollArea, SimpleGrid} from '@mantine/core';
import {NextLink} from '@mantine/next';
import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import Loader from '../../components/Loader';
import PageBlock from '../../components/Page/Block';
import BlockCard from '../../components/Page/BlockCard';
import Page from '../../components/Page/Page';
import {cleanKabob, titlecase} from '../../lib/string';
import {createListStyles, createVerticalTableStyles} from '../../lib/style';
import {useGetTypeDetailsQuery} from '../../services/pokemon';
import {
  NamedItem,
  PokemonTypeData,
  VersionName,
} from '../../services/types';

interface TypePageProps {
  type: string
  version: VersionName
  changeVersion: (version: VersionName) => void
}

const useListStyles = createStyles(createListStyles);
const useVerticalTableStyles = createStyles(createVerticalTableStyles);
// TODO: add loading states
const TypePage: NextPage<TypePageProps> = ({type, ...props}: TypePageProps) => {
  const {data: typeData, isLoading} = useGetTypeDetailsQuery(type);
  const {classes: listClasses} = useListStyles();
  const {classes: vTableClasses} = useVerticalTableStyles();
  return (
    <Page
      title={`PokeExplorer | ${type}`}
      description={`Pokemon Species ${type}`}
      {...props}>
      <PageBlock>
        {isLoading && <Loader />}
        {Boolean(typeData) && <SimpleGrid cols={1} spacing={'md'}
          breakpoints={[
            {
              minWidth: 640,
              cols: 2,
            },
            {
              minWidth: 1200,
              cols: 4,
            },
          ]}
          sx={{alignItems: 'flex-start'}}>
          <BlockCard title={titlecase(type) + ' Type'}>
            <Box className={vTableClasses.root}>
              <span className="name">Generation:</span>
              <span>{typeData?.generation.name}</span>
              <span className="name">ID:</span>
              <span>{typeData?.id}</span>
            </Box>
          </BlockCard>
          <BlockCard title={'Moves'}>
            <Box>
              <ScrollArea style={{height: 280}}>
                <List
                  listStyleType={'none'}
                  classNames={listClasses}>
                  {
                    (typeData as PokemonTypeData).moves?.length > 0 &&
                  (typeData as PokemonTypeData).moves.map((move: NamedItem) => {
                    return (
                      <List.Item px={'sm'} key={move.name}>
                        {cleanKabob(move.name)}
                      </List.Item>
                    );
                  })}
                </List>
              </ScrollArea>
            </Box>
          </BlockCard>
          <BlockCard title="Damage From">
            {
              Boolean(typeData?.damage_relations) && (
                <Box className={vTableClasses.root}>
                  <span className="name">2x DMG</span>
                  <span>
                    {typeData?.damage_relations
                        .double_damage_from
                        .map((i) => {
                          return (
                            <NextLink key={i.name} href={`/type/${i.name}`}>
                              {titlecase(i.name)}
                            </NextLink>
                          );
                        })
                    }
                  </span>
                  <span className="name">1/2 DMG</span>
                  <span>
                    {typeData?.damage_relations
                        .half_damage_from
                        .map((i) => {
                          return (
                            <NextLink key={i.name} href={`/type/${i.name}`}>
                              {titlecase(i.name)}
                            </NextLink>
                          );
                        })
                    }
                  </span>
                  <span className="name">No DMG</span>
                  <span>
                    {typeData?.damage_relations
                        .no_damage_from
                        .map((i) => {
                          return (
                            <NextLink key={i.name} href={`/type/${i.name}`}>
                              {titlecase(i.name)}
                            </NextLink>
                          );
                        })
                    }
                  </span>
                </Box>
              )}
          </BlockCard>
          <BlockCard title="Damage To">
            {
              Boolean(typeData) &&
              Boolean(typeData?.damage_relations) && (
                <Box className={vTableClasses.root}>
                  <span className="name">2x DMG</span>
                  <span>
                    {typeData?.damage_relations
                        .double_damage_to
                        .map((i) => {
                          return (
                            <NextLink key={i.name} href={`/type/${i.name}`}>
                              {titlecase(i.name)}
                            </NextLink>
                          );
                        })
                    }
                  </span>
                  <span className="name">1/2 DMG</span>
                  <span>
                    {typeData?.damage_relations
                        .half_damage_to
                        .map((i) => {
                          return (
                            <NextLink key={i.name} href={`/type/${i.name}`}>
                              {titlecase(i.name)}
                            </NextLink>
                          );
                        })
                    }
                  </span>
                  <span className="name">No DMG</span>
                  <span>
                    {typeData?.damage_relations
                        .no_damage_to
                        .map((i) => {
                          return (
                            <NextLink key={i.name} href={`/type/${i.name}`}>
                              {titlecase(i.name)}
                            </NextLink>
                          );
                        })
                    }
                  </span>
                </Box>
              )}
          </BlockCard>
        </SimpleGrid>}
      </PageBlock>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const res = await fetch(`https://pokeapi.co/api/v2/type?offset=0&limit=50`);
  const data = await res.json();

  const paths = data.results.map((item: NamedItem) => {
    return {
      params: {type: item.name},
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
      type: context.params?.type,
    },
  };
};

export default TypePage;
