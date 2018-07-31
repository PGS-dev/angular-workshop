import { configure } from '@storybook/angular';

// Automatically import all files ending in *.stories.ts
function loadStories() {
  const req = require.context('../src/stories', true, /.stories.ts$/);

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
