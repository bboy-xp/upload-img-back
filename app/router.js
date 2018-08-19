'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/saveAdmin', controller.home.saveAdmin);
  router.post('/adminLogin', controller.home.adminLogin);
  router.post('/addStaff', controller.home.addStaff);
  router.post('/deleteStaff', controller.home.deleteStaff);
  router.post('/staffLogin', controller.home.staffLogin);
  router.post('/changeImageUrl', controller.home.changeImageUrl);
  router.post('/getImageUrl', controller.home.getImageUrl);
  router.get('/getTableDataRes', controller.home.getTableDataRes);
  router.get('/getUpToken', controller.home.getUpToken);
  router.post('/updateCount', controller.home.updateCount);
  router.post('/getEditStaff', controller.home.getEditStaff);
  router.post('/updateStaff', controller.home.updateStaff);
};

