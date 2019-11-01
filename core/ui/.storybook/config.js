import { configure } from '@storybook/html';

configure(require.context('../', true, /\.stories\.ts$/), module);
