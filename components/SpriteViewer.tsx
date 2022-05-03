import {Box, Group, Image,
  MantineTheme, SegmentedControl, Text} from '@mantine/core';
import {useMemo, useState} from 'react';
import {
  Generationi, Generationii, Generationiii,
  Sprites, Versions,
} from '../services/types';

export interface SpriteViewerProps {
  sprites: Sprites
}

export type ImageOrientation = 'front'|'back'
// TODO: FIX: Images not loading when in 'back' orientation
/**
 * Sprite Viewer Component
 * @param {SpriteViewerProps} props - Props
 * @return {ReactElement} Sprite Viewer Component
 */
export default function SpriteViewer({sprites}: SpriteViewerProps) {
  const [orientation, setOrientation] = useState<ImageOrientation>('front');
  const [generation, setGeneration] = useState<string>('i');
  const allGenerations: string[] = [
    'i',
    'ii',
    'iii',
    'iv',
    'v',
    'vi',
    'vii',
    'viii',
  ];

  const currentGeneration: keyof Versions = useMemo(
      () => `generation-${generation}` as keyof Versions,
      [generation],
  );

  const exists = (key: string): boolean => {
    const keys: string[] = Object.keys(
        (sprites.versions as Versions)[currentGeneration],
    );
    return keys.includes(key);
  };

  const SpriteImage = <T=Generationi>({name}: {name: keyof T}) => {
    const versions: Versions = sprites.versions;
    const versionKey: keyof Versions = currentGeneration;
    const version: T = ((versions[versionKey] as unknown) as T);
    const src: string = (version[name] as any)[`${orientation}_default`];

    return (
      <Box pb={'sm'} px={2} sx={(t: MantineTheme) => ({
        'fontSize': 10,
        'border': '1px solid rgba(180,180,180,0.3)',
        'borderRadius': '3px',
        'boxShadow': t.shadows.xs,
        '.name': {
          display: 'block',
          padding: '4px',
          fontWeight: 700,
        },
      })}>
        <span className="name">{name.toString()}</span>
        <Image
          fit='contain'
          styles={(t: MantineTheme) => ({
            image: {
              margin: '0 auto',
              width: '100%',
              height: 'auto',
            },
          })}
          mx={'auto'}
          height={84}
          width={64}
          src={src}
        />
      </Box>
    );
  };

  const AllImages = () => (
    <Group spacing={'xs'} mx={'auto'} my={'md'} sx={{width: 'fit-content'}}>
      {exists('red-blue') && <SpriteImage<Generationi> name={'red-blue'}/>}
      {exists('yellow') && <SpriteImage<Generationi> name={'yellow'}/>}
      {exists('crystal') && <SpriteImage<Generationii> name={'crystal'}/>}
      {exists('gold') && <SpriteImage<Generationii> name={'gold'}/>}
      {exists('silver') && <SpriteImage<Generationii> name={'silver'}/>}
      {exists('emerald') && <SpriteImage<Generationiii> name={'emerald'}/>}
      {exists('firered-leafgreen') && (
        <SpriteImage<Generationiii> name={'firered-leafgreen'}/>
      )}
      {exists('ruby-sapphire') && (
        <SpriteImage<Generationiii> name={'ruby-sapphire'}/>
      )}
      {exists('platinum') && <SpriteImage name={'platinum'}/>}
      {exists('diamond-pearl') && <SpriteImage name={'diamond-pearl'}/>}
      {exists('heartgold-soulsilver') && (
        <SpriteImage name={'heartgold-soulsilver'}/>
      )}
      {exists('black-white') && <SpriteImage name={'black-white'}/>}
      {exists('black-2-white-2') && <SpriteImage name={'black-2-white-2'}/>}
      {exists('omegaruby-alphasapphire') && (
        <SpriteImage name={'omegaruby-alphasapphire'}/>
      )}
      {exists('x-y') && <SpriteImage name={'x-y'}/>}
      {exists('ultra-sun-ultra-moon') && (
        <SpriteImage name={'ultra-sun-ultra-moon'}/>
      )}
    </Group>
  );

  return (
    <Box>
      <Box mx={'auto'} sx={{width: 'fit-content'}}>
        <Text>Generation</Text>
        <SegmentedControl
          value={generation}
          onChange={(v) => setGeneration(v)}
          data={allGenerations.map((g: string) => {
            return {
              label: g,
              value: g,
            };
          })} />
      </Box>
      <Box mx={'auto'} sx={{width: 'fit-content', minWidth: 250}}>
        <Text>Orientation</Text>
        <SegmentedControl
          value={orientation}
          onChange={(v) => setOrientation(v as ImageOrientation)}
          data={[
            {
              label: 'Front',
              value: 'front',
            },
            {
              label: 'Back',
              value: 'back',
            },
          ]} />
      </Box>
      <AllImages />
    </Box>
  );
}
