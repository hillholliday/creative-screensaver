'use strict';

import baseConfig from './base';


let config = {
  appEnv: 'dev',
  apiUrl: 'http://dribbble-screensaver-api.hhcc.dev/',
  screensaverUrl: 'https://github.com/hillholliday/creative-screensaver/blob/master/src/screensaver/HHCC Creative.saver'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
