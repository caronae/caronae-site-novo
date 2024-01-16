const alias = require('./aliases');
[
  [
    'module-resolver',
    {
      root: ['./src'],
      alias,
      extensions: ['.jsx', 'js']
    }
  ]
];
