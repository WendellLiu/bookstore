const defaultConfig = require('./defaultConfig');

let toExtendConfig = {};

if (process.NODE_ENV === 'production') {
  toExtendConfig = require('./productionConfig');
} else {
  toExtendConfig = require('./devConfig');
}

module.exports = {
  ...defaultConfig,
  ...toExtendConfig,
};
