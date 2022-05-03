import {
  Button, Drawer, Select,
  Container, MantineTheme,
} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {getVersionColor} from '../../lib/color';
import {cleanKabob} from '../../lib/string';
import {useGetAllVersionsQuery} from '../../services/pokemon';
import {VersionName, NamedItem, VersionsResults} from '../../services/types';

interface VersionDrawerProps {
  version: VersionName
  changeVersion: (version: VersionName) => void
}


/**
 * Version Drawer Component
 * @return {ReactElement} Verson Drawer
 */
export default function VersionDrawer(
    {version, changeVersion}: VersionDrawerProps,
) {
  const [opened, dispatch] = useDisclosure(false);
  const {data} = useGetAllVersionsQuery('');

  return (
    <>
      {!opened && <Button sx={{
        position: 'fixed',
        zIndex: 999999,
        right: '16px',
        bottom: '16px',
      }} onClick={dispatch.open}>Change Version</Button>}
      <Drawer
        styles={(t: MantineTheme) => ({
          header: {
            'color': '#222',

            '& svg': {color: '#222'},
          },
          closeButton: {
            '&:hover': {
              background: 'transparent',
            },
          },
          drawer: {
            background: t.colors[getVersionColor(version)][3],
            color: '#222',
          },
        })}
        position='bottom'
        opened={opened}
        onClose={dispatch.close}>
        <Container>
          {Boolean(data) &&
            <Select
              value={version || 'red'}
              onChange={changeVersion}
              data={
                (data as VersionsResults).results.map((item: NamedItem) => {
                  return {
                    label: cleanKabob(item.name),
                    value: item.name,
                  };
                })
              }/>
          }

        </Container>
      </Drawer>
    </>
  );
}
