import localStore from 'store';
import { DARK_MODE } from './contant';

export let saveDarkMode = (darkMode: boolean) => {
  localStore.set(DARK_MODE, darkMode);
};

export let getDarkMode = () => {
  return localStore.get(DARK_MODE);
};
