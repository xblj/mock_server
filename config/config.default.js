'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1524883873028_3090';
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['http://localhost:3000']
  };
  // add your config here
  config.middleware = [];

  return config;
};