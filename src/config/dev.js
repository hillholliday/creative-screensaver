'use strict';

import baseConfig from './base';


let config = {
  appEnv: 'dev',
  apiUrl: 'http://dribbble-screensaver-api.hhcc.dev/',
  screensaverUrl: 'http://google.com'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
