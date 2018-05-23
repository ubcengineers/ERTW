import { configure, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Centers the stories in the frame
addDecorator(centered);

configure(loadStories, module);
