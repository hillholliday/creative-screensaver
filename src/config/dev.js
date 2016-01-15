'use strict';

import baseConfig from './base';


let config = {
  appEnv: 'dev',
  apiUrl: 'http://dribbble-screensaver-api.hhcc.dev/',
  screensaverUrl: 'https://github.com/hillholliday/creative-screensaver/blob/master/src/screensaver/HHCC%20Creative.saver.zip?raw=true'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
