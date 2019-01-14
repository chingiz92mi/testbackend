const merge = require('webpack-merge');
const common = require('./webpack.common');


module.exports = merge(common, {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
      },
      module: {
        rules: [

        ]
      },
      plugins: [
          
      ]


})