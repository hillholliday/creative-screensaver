'use strict';

import baseConfig from './base';


let config = {
  appEnv: 'dist',  // feel free to remove the appEnv property here
  apiUrl: 'http://creative-screensaver-api.hhcc.tech/',
  screenSaverUrl: 'https://github.com/hillholliday/creative-screensaver/blob/master/src/screensaver/HHCC Creative.saver'
};

export default Object.freeze(Object.assign({}, baseConfig, config));

