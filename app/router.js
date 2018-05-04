'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {router, controller} = app;
  const verify = app.middleware.auth();
  router.get('/', controller.home.index);
  router.get('/panel/chineseMedicineList', controller.panel.prescriptionList);
  router.get('/panel/business/prescription/chinesemed', controller.panel.chinesePrescription);
  router.get('/panel/business/prescription/chinesemedinfo', controller.panel.chinesePrescriptionInfo);
  router.get('/panel/business/huaf/getHuafOrderList', controller.panel.getHuafOrderList);


  router.get('/third/getVerifyCode', controller.thirdPanel.getVerifyCode);
  router.get('/third/logout', controller.thirdPanel.logout);
  router.post('/third/login', controller.thirdPanel.login);
  router.get('/third/getUser', verify, controller.thirdPanel.getUserInfo);
};