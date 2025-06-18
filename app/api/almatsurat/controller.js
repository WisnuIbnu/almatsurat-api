import pagiSugroData from './data/pagiSugro.json';
import pagiKubroData from './data/pagiKubro.json';
import soreSugroData from './data/soreSugro.json';
import soreKubroData from './data/soreKubro.json';

export function getDzikirByFilename(filename) {

  switch (filename) {
    case 'pagiSugro':
      return pagiSugroData;
    case 'pagiKubro':
      return pagiKubroData;
    case 'soreSugro':
      return soreSugroData;
    case 'soreKubro':
      return soreKubroData;
    default:
      return null;
  }
}