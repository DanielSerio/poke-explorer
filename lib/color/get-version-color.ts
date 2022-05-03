import {VersionName} from '../../services/types';

/**
 * Returns a color name based on a version name.
 * @param {VersionName} version - VersionName
 * @return {string} Color Name.
 */
export function getVersionColor(version: VersionName): string {
  switch (version) {
    case 'alpha-sapphire':
    case 'sapphire':
    case 'sword':
      return 'cyan';
    case 'black':
    case 'black-2':
    case 'xd':
      return 'dark';
    case 'blue':
    case 'x':
    case 'diamond':
      return 'blue';
    case 'colosseum':
    case 'red':
    case 'firered':
    case 'omega-ruby':
    case 'shield':
    case 'ruby':
    case 'y':
      return 'red';
    case 'crystal':
    case 'moon':
    case 'ultra-moon':
      return 'violet';
    case 'emerald':
    case 'leafgreen':
      return 'green';
    case 'gold':
    case 'heartgold':
    case 'lets-go-eevee':
    case 'sun':
    case 'ultra-sun':
      return 'orange';
    case 'lets-go-pikachu':
    case 'yellow':
      return 'yellow';
    default: return 'gray';
  }
}
