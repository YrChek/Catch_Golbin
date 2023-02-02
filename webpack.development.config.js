const path = require('path');

module.exports = {
  mode: 'development',

  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    open: true,
    port: 9000
  }
};
