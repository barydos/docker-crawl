const buildSettings = {
  bundle: true,
  entryPoints: ['src/index.ts' ],
  external: ['crawlee'],
  outdir: 'dist',
  sourcemap: true,
  treeShaking: true,
  target: 'node20',
}

require('esbuild')
  .build(buildSettings)
  .then(console.log('Build complete'))
  .catch(err => console.error('There was an error with esbuild', err));