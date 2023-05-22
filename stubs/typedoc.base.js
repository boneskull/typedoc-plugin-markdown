module.exports = {
  entryPoints: [
    './src/modules/module-1',
    './src/modules/module-2',
    './src/categories.ts',
    './src/groups.ts',
    './src/classes.ts',
    './src/declarations.ts',
    './src/comments.ts',
    './src/generics.ts',
    './src/hierarchy.ts',
    './src/index.ts',
    './src/interfaces.ts',
    './src/properties.ts',
    './src/reflections.ts',
    './src/signatures.ts',
    './src/variables.ts',
    './src/sources.ts',
    './src/types.ts',
  ],
  tsconfig: './tsconfig.json',
  media: './media/',
  includeVersion: true,
  cleanOutputDir: true,
  githubPages: false,
  sort: ['kind', 'instance-first'],
  disableSources: false,
};
