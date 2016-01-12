'use strict';

import baseConfig from './base';


let config = {
  appEnv: 'dist',  // feel free to remove the appEnv property here
  apiUrl: 'http://creative-screensaver-api.hhcc.tech/',
  screenSaverUrl: 'http://google.com'
};

export default Object.freeze(Object.assign({}, baseConfig, config));

